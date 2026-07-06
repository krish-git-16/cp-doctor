function RecommendationCard({ recommendations }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6">
        Recommended Problems
      </h2>

      <div className="space-y-5">
        {recommendations.map((problem, index) => {
          const problemName = problem.name || problem.problem_name;

          const problemLink =
            problem.link ||
            `https://codeforces.com/problemset/problem/${problem.contest_id}/${problem.problem_index}`;

          const reason =
            problem.reason ||
            "Recommended based on your current performance.";

          return (
            <div
              key={problem.id || problem.problem_name || index}
              className="bg-slate-700 rounded-lg p-4"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold">
                  {problemName}
                </h3>

                <span className="text-blue-400">
                  {problem.rating ?? "N/A"}
                </span>
              </div>

              <p className="text-gray-400 mt-2">
                {reason}
              </p>

              <a
                href={problemLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                Solve Problem →
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecommendationCard;