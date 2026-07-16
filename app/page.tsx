import Footer from "../components/Footer";
import Contact from "../components/Contact";
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
      <main id="home" className="relative min-h-screen">

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

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
        Capturing
        <br />
        Timeless Memories
      </h1>

     <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-200">
        Premium Photography & Cinematic Films
        that tell your story.
      </p>

   <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">

        <a
  href="#contact"
  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition inline-block"
>
  Book Now
</a>

       <a
  href="#portfolio"
  className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition inline-block"
>
  View Portfolio
</a>

      </div>

    </div>
  </div>

</main>
<Portfolio />
<About />
<Services />
<Contact />
<Footer/>
    </>
  );
}