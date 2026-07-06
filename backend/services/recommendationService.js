const db = require("../config/db");

const query = (sql, params) =>
  new Promise((resolve, reject) => {
    db.query(sql, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const parseTags = (tags) =>
  (tags || "")
    .split(/,\s*/)
    .map((t) => t.trim())
    .filter(Boolean);

const MIN_ATTEMPTS_FOR_WEAKNESS = 2; 
const WEAK_TOPIC_COUNT = 3;

const getRecommendations = async (userId) => {
  
  const submissions = await query(
    "SELECT contest_id, problem_name, rating, tags, verdict FROM submissions WHERE user_id = ?",
    [userId]
  );

  const solvedProblems = submissions.filter((s) => s.verdict === "OK");

  const solvedSet = new Set(
    solvedProblems.map((p) => `${p.contest_id}-${p.problem_name}`)
  );

  const attemptedByTag = {};
  const solvedByTag = {};

  submissions.forEach((s) => {
    parseTags(s.tags).forEach((tag) => {
      attemptedByTag[tag] = (attemptedByTag[tag] || 0) + 1;
      if (s.verdict === "OK") {
        solvedByTag[tag] = (solvedByTag[tag] || 0) + 1;
      }
    });
  });

  const tagSolveRates = Object.entries(attemptedByTag)
    .filter(([, attempts]) => attempts >= MIN_ATTEMPTS_FOR_WEAKNESS)
    .map(([tag, attempts]) => ({
      tag,
      attempts,
      solved: solvedByTag[tag] || 0,
      solveRate: (solvedByTag[tag] || 0) / attempts,
    }))
    .sort((a, b) => a.solveRate - b.solveRate);

  let weakTopics = tagSolveRates.slice(0, WEAK_TOPIC_COUNT).map((t) => t.tag);

  if (weakTopics.length === 0) {
    weakTopics = Object.entries(attemptedByTag)
      .sort((a, b) => a[1] - b[1])
      .slice(0, WEAK_TOPIC_COUNT)
      .map(([tag]) => tag);
  }

  const averageRating =
    solvedProblems.length > 0
      ? Math.round(
          solvedProblems.reduce((sum, p) => sum + (p.rating || 800), 0) /
            solvedProblems.length
        )
      : 800;

  const minRating = Math.max(800, averageRating - 100);
  const maxRating = averageRating + 200;

  const problems = await query(
    "SELECT * FROM problem_bank WHERE rating BETWEEN ? AND ?",
    [minRating, maxRating]
  );

  const notSolved = problems.filter(
    (p) => !solvedSet.has(`${p.contest_id}-${p.problem_name}`)
  );

  const buildRecommendation = (problem, matchedTopic) => ({
    contest_id: problem.contest_id,
    problem_index: problem.problem_index,
    problem_name: problem.problem_name,
    rating: problem.rating,
    tags: problem.tags,
    reason: matchedTopic
      ? `Recommended to strengthen your "${matchedTopic}" skills.`
      : `Recommended based on your current rating level.`,
    link: `https://codeforces.com/problemset/problem/${problem.contest_id}/${problem.problem_index}`,
  });

  // Exact tag matching (not substring) against weak topics
  const topicMatched = notSolved
    .map((problem) => {
      const problemTags = parseTags(problem.tags);
      const matchedTopic = weakTopics.find((topic) =>
        problemTags.includes(topic)
      );
      return matchedTopic ? { problem, matchedTopic } : null;
    })
    .filter(Boolean);

  let recommendations = shuffle(topicMatched)
    .slice(0, 10)
    .map(({ problem, matchedTopic }) => buildRecommendation(problem, matchedTopic));

  // Fallback: if no problems match the weak topics within the rating band,
  // don't return an empty list — recommend by rating alone.
  if (recommendations.length === 0) {
    recommendations = shuffle(notSolved)
      .slice(0, 10)
      .map((problem) => buildRecommendation(problem, null));
  }

  const cpScore = Math.min(
    100,
    Math.round(averageRating / 25 + solvedProblems.length / 5)
  );

  return {
    cpScore,
    weakTopics,
    recommendations,
  };
};

module.exports = { getRecommendations };