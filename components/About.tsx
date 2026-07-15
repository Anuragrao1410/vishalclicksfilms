import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="bg-[#0d0d0d] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <p className="text-yellow-400 uppercase tracking-[6px] mb-3">
            About Us
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Capturing
            <br />
            Every Emotion
          </h2>

          <p className="mt-8 text-gray-300 leading-8 text-lg">
            At <span className="text-yellow-400 font-semibold">Vishal Clicks Films</span>,
            we believe every smile, every emotion and every celebration deserves
            to be remembered forever.
          </p>

          <p className="mt-6 text-gray-400 leading-8">
            We specialize in Wedding Photography, Cinematic Films,
            Pre-Wedding Shoots, Events and Portrait Photography with
            a creative storytelling approach.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition">
            Learn More
          </button>
        </div>

        {/* Right Side */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden border border-gray-700">
  <Image
    src="/images/about.jpg"
    alt="Vishal Clicks Films Photography"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover hover:scale-105 transition duration-700"
  />
</div>

      </div>
    </section>
  );
}