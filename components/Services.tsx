export default function Services() {
  const services = [
    {
      title: "Wedding Photography",
      description:
        "Beautifully capturing every emotion, ritual and unforgettable moment of your special day.",
      icon: "📸",
    },
    {
      title: "Cinematic Films",
      description:
        "Cinematic wedding films that turn your precious memories into timeless stories.",
      icon: "🎬",
    },
    {
      title: "Pre-Wedding Shoots",
      description:
        "Creative and romantic pre-wedding photography designed around your unique story.",
      icon: "💍",
    },
    {
      title: "Events & Portraits",
      description:
        "Professional photography for events, portraits and every important celebration.",
      icon: "✨",
    },
  ];

  return (
    <section id="services" className="bg-[#0d0d0d] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-center text-yellow-400 uppercase tracking-[6px]">
          What We Do
        </p>

        <h2 className="text-5xl font-bold text-center mt-3">
          Our Services
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          We capture moments that become memories for a lifetime.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-yellow-400 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition duration-500">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}