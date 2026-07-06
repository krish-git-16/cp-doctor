import {
  FaChartLine,
  FaTrophy,
  FaCheckCircle,
  FaCalendarAlt
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { getDashboard } from "../services/api";
import DashboardLayout from "../components/DashboardLayout";
import StatCard from "../components/StatCard";
import RatingChart from "../components/RatingChart";
import ContestTable from "../components/ContestTable";
import RecommendationCard from "../components/RecommendationCard";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  async function fetchDashboard() {
    try {
      const response = await getDashboard();

      setDashboardData(response.data);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  }

  fetchDashboard();
}, []);
  if (loading) {
  return (
    <DashboardLayout>
      <h1 className="text-white text-xl">Loading...</h1>
    </DashboardLayout>
  );
}
  return (
    <DashboardLayout>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Current Rating"
          value={dashboardData.statistics.currentRating}
          icon={<FaChartLine />}
          color="text-blue-500"
        />

        <StatCard
          title="Max Rating"
          value={dashboardData.statistics.maxRating}
          icon={<FaTrophy />}
          color="text-yellow-400"
        />

        <StatCard
          title="Solved Problems"
          value={dashboardData.statistics.solvedProblems}
          icon={<FaCheckCircle />}
          color="text-green-400"
        />

        <StatCard
          title="Contests"
          value={dashboardData.statistics.contestCount}
          icon={<FaCalendarAlt />}
          color="text-red-400"
        />

      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        <div className="lg:col-span-2">
          <RatingChart data={dashboardData.ratingHistory} />
        </div>

       <RecommendationCard recommendations={dashboardData.recommendations} />

      </div>

      <div className="mt-8">
        <ContestTable contests={dashboardData.contests} />
      </div>

    </DashboardLayout>
  );
}

export default Dashboard;