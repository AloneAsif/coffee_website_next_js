import { Coffee, Truck, Heart } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Coffee className="w-8 h-8 text-orange-500" />,
      title: "Freshly Roasted Coffee",
      description:
        "Every bean is roasted to perfection in small batches to ensure rich, full-bodied flavor.",
    },
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: "Fast & Free Delivery",
      description:
        "Enjoy free shipping on all orders above $20 — delivered fresh to your doorstep.",
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: "Sustainably Sourced",
      description:
        "We work directly with small farms to support fair trade and eco-friendly practices.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
