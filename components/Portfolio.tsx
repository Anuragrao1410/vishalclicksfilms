import Image from "next/image";

export default function Portfolio() {
  const portfolioItems = [
    { title: "Wedding", image: "/images/wedding.jpg" },
    { title: "Pre-Wedding", image: "/images/prewedding-new.jpg" },
    { title: "Events", image: "/images/events.jpg" },
    { title: "Portrait", image: "/images/portrait.jpg" },
    { title: "Baby Shoot", image: "/images/baby.jpg" },
    { title: "Corporate", image: "/images/corporate.jpg" },
  ];

  return (
    <section id="portfolio" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Our Portfolio
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Every frame tells a beautiful story.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-xl"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition duration-500"></div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <h3 className="text-3xl font-bold text-white group-hover:text-yellow-400 transition">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
