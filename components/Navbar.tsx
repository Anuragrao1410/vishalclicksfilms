export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold text-yellow-400">
          Vishal Clicks Films
        </h1>

        <ul className="flex gap-8 text-white font-medium">
          <li className="hover:text-yellow-400 cursor-pointer transition">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer transition">Portfolio</li>
          <li className="hover:text-yellow-400 cursor-pointer transition">Services</li>
          <li className="hover:text-yellow-400 cursor-pointer transition">Contact</li>
        </ul>
      </div>
    </nav>
  );
}