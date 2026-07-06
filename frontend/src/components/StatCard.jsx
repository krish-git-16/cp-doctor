function StatCard({ title, value, icon, color = "text-blue-500" }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h2 className="text-3xl font-bold text-white mt-2">{value}</h2>
        </div>

        <div className={`text-4xl ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;