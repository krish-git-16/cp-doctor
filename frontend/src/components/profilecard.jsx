import { FaUserCircle } from "react-icons/fa";

function ProfileCard({ profile }) {
  return (
    <div className="bg-slate-800 rounded-xl p-8 shadow-md">
      <div className="flex flex-col items-center">
        <FaUserCircle className="text-8xl text-blue-500" />

        <h2 className="text-3xl font-bold text-white mt-4">
          {profile.username}
        </h2>

        <p className="text-gray-400 mt-1">
          @{profile.handle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="bg-slate-700 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Current Rating</p>
          <h3 className="text-2xl font-bold text-blue-400 mt-2">
            {profile.currentRating}
          </h3>
        </div>

        <div className="bg-slate-700 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Max Rating</p>
          <h3 className="text-2xl font-bold text-yellow-400 mt-2">
            {profile.maxRating}
          </h3>
        </div>

        <div className="bg-slate-700 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Rank</p>
          <h3 className="text-xl font-bold text-white mt-2">
            {profile.rank}
          </h3>
        </div>

        <div className="bg-slate-700 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Organization</p>
          <h3 className="text-xl font-bold text-white mt-2">
            {profile.organization}
          </h3>
        </div>

        <div className="bg-slate-700 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Contribution</p>
          <h3 className="text-xl font-bold text-green-400 mt-2">
            {profile.contribution}
          </h3>
        </div>

        <div className="bg-slate-700 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Problems Solved</p>
          <h3 className="text-xl font-bold text-purple-400 mt-2">
            {profile.solved}
          </h3>
        </div>

        <div className="bg-slate-700 rounded-lg p-4 md:col-span-2">
          <p className="text-gray-400 text-sm">CP Score</p>
          <h3 className="text-3xl font-bold text-orange-400 mt-2">
            {profile.cpScore}/100
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;