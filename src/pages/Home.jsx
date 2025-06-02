export default function Home() {
    return (
      <section className="flex items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 text-[#646cff]">
            Moe builds clean web apps.
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
            CS grad. Junior developer. React and SwiftUI fan. Focused on performance, simplicity, and building stuff that doesn't suck.
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
  