export default function Home() {
    return (
      <section className="min-h-screen w-full flex items-center justify-center px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-[#646cff] drop-shadow-md">
            Moe builds clean web apps.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-10">
            CS grad • React enthusiast • SwiftUI builder<br className="hidden sm:block" />
            Focused on building things that are fast, simple, and actually useful.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/projects"
              className="bg-[#646cff] hover:bg-[#535bf2] text-white px-8 py-3 rounded-md text-lg font-medium transition shadow-lg"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="border border-[#646cff] text-[#646cff] hover:bg-[#646cff] hover:text-white px-8 py-3 rounded-md text-lg font-medium transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    );
  }
  