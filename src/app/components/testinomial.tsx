import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "The best coffee I've ever had! The quality and freshness are unmatched. My mornings are incomplete without your brew.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "Switched all my office coffee to your brand. My team productivity has increased and everyone loves the taste.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Barista",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "As a professional barista, I can appreciate quality beans. Your espresso blend is exceptional and versatile.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Martinez",
      role: "Health Coach",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "I recommend your coffee to all my clients. Great taste, sustainable sourcing, and zero aftertaste.",
      rating: 5,
    },
  ];

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of coffee lovers who&apos;ve discovered their perfect brew with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
            >
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  priority={testimonial.id <= 2} // Prioritize loading first 2 images
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;