function PracticeCard({ problem }) {
  const tags = Array.isArray(problem.tags)
    ? problem.tags
    : (problem.tags || "").split(",").map((tag) => tag.trim()).filter(Boolean);

  const problemName = problem.name || problem.problem_name;

  const problemLink =
    problem.link ||
    `https://codeforces.com/problemset/problem/${problem.contest_id}/${problem.problem_index}`;

  const reason =
    problem.reason ||
    `Recommended based on your current performance.`;

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-white">
            {problemName}
          </h2>

          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-slate-700 text-blue-400 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <span className="bg-blue-600 text-white px-3 py-1 rounded-lg font-semibold">
          {problem.rating ?? "N/A"}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-gray-400">
          <span className="font-semibold text-white">
            Why Recommended?
          </span>
        </p>

        <p className="text-gray-400 mt-2 leading-7">
          {reason}
        </p>
      </div>

      <div className="mt-6 flex justify-end">
        <a
          href={problemLink}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          Solve Problem
        </a>
      </div>
    </div>
  );
}

export default PracticeCard;