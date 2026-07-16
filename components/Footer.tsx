export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              Vishal Clicks Films
            </h2>

            <p className="text-gray-400 mt-2">
              Capturing moments. Creating memories.
            </p>
          </div>

          <div className="flex gap-6 text-gray-400">

            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>

            <a href="#portfolio" className="hover:text-yellow-400 transition">
              Portfolio
            </a>

            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>

            <a
              href="https://instagram.com/vishal.clicks.films"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/919555789221"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              WhatsApp
            </a>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2026 Vishal Clicks Films. All rights reserved.
        </div>

      </div>
    </footer>
  );
}