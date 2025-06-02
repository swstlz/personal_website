export default function Projects() {
    return (
      <section className="min-h-screen pt-28 pb-20 px-6 bg-[#121212] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-[#646cff]">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Project Card Example */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Gym Companion App</h3>
              <p className="text-gray-400 mb-3">
                A mobile app to track workouts and progress. Built with SwiftUI and Core Data for offline functionality.
              </p>
              <a
                href="#"
                className="text-[#646cff] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
  
            {/* Add more cards below as needed */}
          </div>
        </div>
      </section>
    );
  }
  