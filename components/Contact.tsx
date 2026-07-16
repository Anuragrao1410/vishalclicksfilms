"use client";
export default function Contact() {
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const event = (form.elements.namedItem("event") as HTMLInputElement).value;
  const message = (
    form.elements.namedItem("message") as HTMLTextAreaElement
  ).value;

  const whatsappMessage = `Hello Vishal Clicks Films!

Name: ${name}
Email: ${email}
Event Type: ${event}

Message:
${message}`;

  const whatsappNumber = "919555789221";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank");
};
    return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-center text-yellow-400 uppercase tracking-[6px]">
          Get In Touch
        </p>

        <h2 className="text-5xl font-bold text-center mt-3">
          Let&apos;s Create Something Beautiful
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          Have a project in mind? Let&apos;s capture your special moments
          together.
        </p>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

          {/* Contact Information */}
          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                Contact Us
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                We would love to hear about your photography or filmmaking
                project.
              </p>
            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400">
                    +919555789221 
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">
                    raovishal844@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400">
                     DDU UNIVERSITY GORAKHPUR UTTAR PRADESH, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8">

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 transition"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 transition"
              />

              <input
                name="event"
                type="text"
                placeholder="Event Type"
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 transition"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-yellow-400 transition"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition"
              >
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}