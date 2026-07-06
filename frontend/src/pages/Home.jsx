import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

function Home() {
  const features = [
    {
      title: "Rating Analytics",
      description: "Track your Codeforces rating growth with clean and interactive graphs."
    },
    {
      title: "Weak Topic Detection",
      description: "Identify topics where you need more practice."
    },
    {
      title: "Personalized Practice",
      description: "Get problem recommendations based on your performance."
    },
    {
      title: "Contest Analysis",
      description: "Review contest history and understand your improvement."
    }
  ];

  const steps = [
    "Connect Handle",
    "Sync Data",
    "Analyze Performance",
    "Get Recommendations",
    "Improve Rating"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Analyze Your
          <span className="block text-blue-500 mt-2">Competitive Programming Journey</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-400">
          Track your Codeforces performance, discover weak topics, and receive personalized
          problem recommendations to improve your rating faster.
        </p>

        <div className="flex justify-center gap-5 mt-10">
          <Link to="/register"><Button text="Get Started" /></Link>
          <Link to="/login"><Button text="Login" className="bg-slate-700 hover:bg-slate-600" /></Link>
        </div>
      </section>

      {/* Why CP Doctor */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center">Why CP Doctor?</h2>

        <p className="max-w-4xl mx-auto mt-8 text-center text-gray-400 leading-8">
          Most competitive programmers know their rating but don't know why it is stuck,
          which topic they should practice next, or which problems suit their current skill level.
          CP Doctor analyzes your complete competitive programming journey and provides
          meaningful insights instead of just statistics.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-bold text-blue-500">{feature.title}</h3>

              <p className="text-gray-400 mt-4 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-14">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 text-center font-semibold"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-slate-800 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold">Ready to Improve?</h2>

          <p className="mt-6 text-lg text-gray-400">
            Join CP Doctor today and start improving your competitive programming
            with personalized recommendations.
          </p>

          <Link to="/register">
            <Button text="Create Account" className="mt-10" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <p className="text-center text-gray-500">
          © 2026 CP Doctor • Competitive Programming Analytics Platform
        </p>
      </footer>
    </div>
  );
}

export default Home;