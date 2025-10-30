import { coffeeCards } from "@/data/coffee_cards_data";
import Link from "next/link";
import Image from "next/image";

type CoffeeDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CoffeeDetailPage({ params }: CoffeeDetailPageProps) {
  const { slug } = await params;
  const coffee = coffeeCards.find((item) => item.slug === slug);

  if (!coffee) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        Coffee not found ☕
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Image
        src={coffee.image}
        alt={coffee.imageAlt}
        width={1200}
        height={500}
        className="w-full h-72 object-cover rounded-2xl mb-8"
        priority
      />
      <h1 className="text-5xl font-bold mb-4">{coffee.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {coffee.description}
      </p>

      <div className="mt-8">
        <Link
          href="/coffee"
          className="text-orange-600 font-semibold hover:underline"
        >
          ← Back to Coffee List
        </Link>
      </div>
    </div>
  );
}
