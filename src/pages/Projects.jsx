export default function Projects() {
    const projects = [
      {
        title: "Personal Website",
        desc: "React + Vite + Tailwind portfolio. GitHub Pages deployed.",
        link: "https://swstlz.github.io/personal_website",
        img: "https://source.unsplash.com/800x600/?laptop"
      },
      {
        title: "Gym Companion App",
        desc: "Workout tracker in SwiftUI with calendar and stats.",
        link: "#",
        img: "https://source.unsplash.com/800x600/?fitness"
      }
    ];
  
    return (
      <section className="min-h-screen">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div key={i} className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{p.desc}</p>
                <a href={p.link} className="text-[#646cff] hover:underline" target="_blank" rel="noreferrer">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  