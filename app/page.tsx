import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <main className="relative min-h-screen">

  {/* Background Image */}
  <Image
    src="/images/hero.jpg"
    alt="Wedding Photography"
    fill
    priority
      sizes="100vw"
    className="object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
    <div className="text-center text-white max-w-4xl">

      <p className="uppercase tracking-[8px] text-yellow-400 mb-4">
        Wedding • Pre-Wedding • Events
      </p>

      <h1 className="text-6xl md:text-7xl font-extrabold">
        Capturing
        <br />
        Timeless Memories
      </h1>

      <p className="mt-8 text-xl text-gray-200">
        Premium Photography & Cinematic Films
        that tell your story.
      </p>

      <div className="mt-10 flex justify-center gap-6">

        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition">
          Book Now
        </button>

        <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
          View Portfolio
        </button>

      </div>

    </div>
  </div>

</main>
<Portfolio />
<About />
<Services />
    </>
  );
}