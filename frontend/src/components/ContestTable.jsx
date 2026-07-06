function ContestTable({ contests }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Contests
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-gray-400 border-b border-slate-700">
            <tr>
              <th className="py-3">Contest</th>
              <th className="py-3">Rank</th>
              <th className="py-3">Old</th>
              <th className="py-3">New</th>
              <th className="py-3">Change</th>
            </tr>
          </thead>

          <tbody>
            {contests.map((contest) => (
              <tr
                key={contest.id}
                className="border-b border-slate-700 hover:bg-slate-700"
              >
                <td className="py-4">{contest.contest_name}</td>

                <td>{contest.contest_rank}</td>

                <td>{contest.old_rating}</td>

                <td>{contest.new_rating}</td>

                <td
                  className={
                    contest.rating_change >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  {contest.rating_change > 0 ? "+" : ""}
                  {contest.rating_change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContestTable;