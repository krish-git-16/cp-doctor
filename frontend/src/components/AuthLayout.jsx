function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-500">CP Doctor</h1>
          <p className="text-gray-400 mt-2">Analyze • Improve • Compete</p>
        </div>

        <div className="bg-slate-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-white">{title}</h2>
          <p className="text-center text-gray-400 mt-2">{subtitle}</p>

          <div className="mt-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;