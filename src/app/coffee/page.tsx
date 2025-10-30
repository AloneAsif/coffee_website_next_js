
import { coffeeCards } from "@/data/coffee_cards_data";
import Card from "../components/card";
export default function Cards_section() {
  
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Coffee</h2>
        <div className="mx-auto w-36 mt-2 mb-8 h-[3px] bg-orange-500 rounded"></div>
      </div>
      <div className="justify-center mx-auto flex flex-wrap gap-4">
        {coffeeCards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              imageAlt={card.imageAlt}
              href={`/coffee/${card.slug}`}
              buttonText={card.buttonText}
            />
          ))}
      </div>
    </>
  );
}
