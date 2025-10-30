import { aboutData } from "@/data/about_data";
// import { Globe, Lightbulb, Handshake } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen bg-[#f5f0eb] flex flex-col items-center justify-center px-6 py-16 space-y-10">
      {/* TOP IMAGE */}
      <div className="relative w-full max-w-5xl h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"
          alt="Coffee cup and beans"
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* HEADING */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3c2a21]">
          Every <span className="text-orange-500 underline">Bean</span> Tells a Story
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          From the farms where our beans are grown to the cup in your hands, every step of our process
          celebrates craftsmanship, sustainability, and the love for coffee.
        </p>
      </div>

      {/* ABOUT CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-5xl w-full">
        {aboutData.map((data) => (
          <div
            key={data.id}
            className="flex items-start gap-4 bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border border-gray-100"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-[#f5f0eb] text-[#3c2a21] rounded-full text-xl">
              {data.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-[#3c2a21]">{data.heading}</h3>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">{data.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER TEXT */}
      <p className="text-center text-[#3c2a21] font-medium mt-8">
        <strong>BeanCraft Coffee Co.</strong> <em>Brewed with love, served with care.</em>
      </p>
    </section>
  );
}
