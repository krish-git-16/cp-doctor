import { useEffect, useState } from "react";
import { getDashboard } from "../services/api";

import DashboardLayout from "../components/DashboardLayout";
import ProfileCard from "../components/ProfileCard";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await getDashboard();

        setProfile({
          username: response.data.profile.username,
          email: response.data.profile.email,
          handle: response.data.profile.codeforces_handle,
          currentRating: response.data.statistics.currentRating,
          maxRating: response.data.statistics.maxRating,
          solved: response.data.statistics.solvedProblems,
          contests: response.data.statistics.contestCount,
          cpScore: response.data.cpScore
        });

        setLoading(false);
      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    }

    fetchProfile();
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Profile
        </h1>

        <p className="text-gray-400 mt-2">
          View your Codeforces profile and overall competitive programming statistics.
        </p>
      </div>

      <ProfileCard profile={profile} />
    </DashboardLayout>
  );
}

export default Profile;