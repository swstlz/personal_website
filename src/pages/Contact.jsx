export default function Contact() {
    return (
      <section className="min-h-[80vh] pt-32 pb-20 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#646cff]">Get in Touch</h2>
          <p className="text-gray-400 mb-6 text-lg">
            Got a cool idea or just wanna vibe about tech, motorcycles, or Japan? Drop me a line.
          </p>
          <a
            href="mailto:youremail@example.com"
            className="inline-block bg-[#646cff] hover:bg-[#535bf2] text-white px-6 py-3 rounded-md transition shadow-md"
          >
            Email Me
          </a>
        </div>
      </section>
    );
  }
  