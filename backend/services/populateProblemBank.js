const axios = require("axios");
const db = require("../config/db");

const populateProblemBank = async () => {
  try {
    const response = await axios.get("https://codeforces.com/api/problemset.problems");

    const problems = response.data.result.problems;

    console.log(`Found ${problems.length} problems`);

    let inserted = 0;

    for (const problem of problems) {
      if (!problem.rating) continue;

      const contestId = problem.contestId;
      const index = problem.index;
      const name = problem.name;
      const rating = problem.rating;
      const tags = problem.tags.join(", ");

      const query = `
        INSERT IGNORE INTO problem_bank
        (contest_id, problem_index, problem_name, rating, tags)
        VALUES (?, ?, ?, ?, ?)
      `;

      db.query(query, [contestId, index, name, rating, tags]);

      inserted++;
    }

    console.log(`${inserted} problems inserted successfully.`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = populateProblemBank;