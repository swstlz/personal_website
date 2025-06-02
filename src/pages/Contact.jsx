export default function Contact() {
    return (
      <section className="text-center max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Something Cool</h2>
        <p className="text-gray-700 mb-6">
          Reach out if you want to work together, have a project idea, or just want to vibe about code and life.
        </p>
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Email Me
        </a>
      </section>
    );
  }
  