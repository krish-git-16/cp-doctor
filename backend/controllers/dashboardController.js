const { getRecommendations } = require("../services/recommendationService");
const db = require("../config/db");

const getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    db.query(
      `SELECT
      username,
      email,
      codeforces_handle,
      cf_rank,
      cf_max_rank,
      contribution,
      organization
      FROM users
      WHERE id = ?`,
      [userId],
      (err, userResult) => {
        if (err)
          return res.status(500).json({
            success: false,
            message: "Database Error",
          });

        if (userResult.length === 0)
          return res.status(404).json({
            success: false,
            message: "User not found.",
          });

        db.query(
          "SELECT * FROM contests WHERE user_id = ? ORDER BY contest_date ASC",
          [userId],
          (err, contestResult) => {
            if (err)
              return res.status(500).json({
                success: false,
                message: "Database Error",
              });

            db.query(
              "SELECT * FROM submissions WHERE user_id = ?",
              [userId],
              async (err, submissionResult) => {
                if (err)
                  return res.status(500).json({
                    success: false,
                    message: "Database Error",
                  });

                const currentRating = contestResult.length
                  ? contestResult[contestResult.length - 1].new_rating
                  : 0;

                const maxRating = contestResult.length
                  ? Math.max(
                      ...contestResult.map((contest) => contest.new_rating)
                    )
                  : 0;

                const contestCount = contestResult.length;

                const solvedProblems = new Set(
                  submissionResult
                    .filter((submission) => submission.verdict === "OK")
                    .map((submission) => submission.problem_name)
                ).size;

                const ratingHistory = contestResult.map((contest) => ({
                  contest: contest.contest_name,
                  rating: contest.new_rating,
                }));

                try {
                  const recommendationData = await getRecommendations(userId);

                  return res.status(200).json({
                    success: true,
                    profile: userResult[0],
                    statistics: {
                      currentRating,
                      maxRating,
                      solvedProblems,
                      contestCount,
                    },
                    ratingHistory,
                    contests: contestResult,
                    cpScore: recommendationData.cpScore,
                    weakTopics: recommendationData.weakTopics,
                    recommendations: recommendationData.recommendations,
                  });
                } catch (error) {
                  console.log(error);

                  return res.status(500).json({
                    success: false,
                    message: error.message,
                  });
                }
              }
            );
          }
        );
      }
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = { getDashboard };