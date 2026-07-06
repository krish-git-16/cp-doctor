const db = require("../config/db");
const { getUserInfo, getContestHistory, getSubmissions } = require("../services/codeforcesService");

const syncCodeforces = async (req, res) => {
  try {
    const { handle } = req.body;
    const userId = req.user.id;

    if (!handle) return res.status(400).json({ success: false, message: "Codeforces handle is required." });

    const userInfo = await getUserInfo(handle);
    const contests = await getContestHistory(handle);
    const submissions = await getSubmissions(handle);

    db.query("UPDATE users SET codeforces_handle = ? WHERE id = ?", [handle, userId]);

    db.query("DELETE FROM contests WHERE user_id = ?", [userId]);
    db.query("DELETE FROM submissions WHERE user_id = ?", [userId]);

    contests.forEach((contest) => {
      const query = "INSERT INTO contests (user_id, contest_id, contest_name, contest_rank, old_rating, new_rating, rating_change, contest_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

      db.query(query, [
        userId,
        contest.contestId,
        contest.contestName,
        contest.rank,
        contest.oldRating,
        contest.newRating,
        contest.newRating - contest.oldRating,
        new Date(contest.ratingUpdateTimeSeconds * 1000)
      ]);
    });

    submissions.forEach((submission) => {
      const query = "INSERT INTO submissions (user_id, contest_id, problem_name, rating, verdict, tags, submission_time) VALUES (?, ?, ?, ?, ?, ?, ?)";

      db.query(query, [
        userId,
        submission.problem.contestId,
        submission.problem.name,
        submission.problem.rating || null,
        submission.verdict,
        submission.problem.tags.join(", "),
        new Date(submission.creationTimeSeconds * 1000)
      ]);
    });

    return res.status(200).json({
      success: true,
      message: "Codeforces data synchronized successfully.",
      profile: userInfo
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Synchronization failed."
    });
  }
};

module.exports = { syncCodeforces };