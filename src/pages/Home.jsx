export default function Home() {
    return (
      <section className="min-h-screen pt-28 pb-20 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-[#646cff]">
            Moe builds clean web apps.
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed">
            CS grad. Junior developer. React and SwiftUI fan. Focused on performance, simplicity, and building stuff that doesn’t suck.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/projects"
              className="bg-[#646cff] hover:bg-[#535bf2] text-white px-6 py-3 rounded-md transition shadow-md"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="border border-[#646cff] text-[#646cff] hover:bg-[#646cff] hover:text-white px-6 py-3 rounded-md transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    );
  }
  