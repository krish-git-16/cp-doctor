import { useEffect, useState } from "react";
import { getDashboard } from "../services/api";

import DashboardLayout from "../components/DashboardLayout";
import PracticeCard from "../components/PracticeCard";

function Practice() {
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [allProblems, setAllProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProblems() {
      try {
        const response = await getDashboard();

        setAllProblems(response.data.recommendations);

        setLoading(false);
      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    }

    fetchProblems();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <h1 className="text-white text-xl">Loading...</h1>
      </DashboardLayout>
    );
  }

  const topics = [
    "All",
    ...new Set(
      allProblems.flatMap((problem) =>
        problem.tags.split(", ").map((tag) => tag.trim())
      )
    )
  ];

  const filteredProblems =
    selectedTopic === "All"
      ? allProblems
      : allProblems.filter((problem) =>
          problem.tags.split(", ").includes(selectedTopic)
        );

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Practice Problems
          </h1>

          <p className="text-gray-400 mt-2">
            Personalized recommendations based on your performance.
          </p>
        </div>

        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-3 outline-none"
        >
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {filteredProblems.map((problem, index) => (
          <PracticeCard
            key={index}
            problem={problem}
          />
        ))}
      </div>

      {filteredProblems.length === 0 && (
        <div className="bg-slate-800 rounded-xl p-10 text-center mt-6">
          <h2 className="text-2xl font-semibold text-white">
            No Problems Found
          </h2>

          <p className="text-gray-400 mt-3">
            Try selecting another topic.
          </p>
        </div>
      )}
    </DashboardLayout>
  );
}

export default Practice;