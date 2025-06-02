export default function Home() {
    return (
        
      <section className="min-h-screen bg-[#1a1a1a] text-white px-6 pt-32 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-[#646cff]">
            Moe builds clean web apps.
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
            CS grad. Junior dev. React and SwiftUI fan. Focused on simplicity and building stuff that doesn’t suck.
          </p>
          
          
          <div className="flex justify-center flex-wrap gap-4 mt-8">
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
  