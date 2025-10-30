// src/data/aboutData.ts

import { Globe, Lightbulb, Handshake } from "lucide-react";

export const aboutData = [
  {
    id: 1,
    icon: <Globe className="w-8 h-8 text-orange-500"/>,
    heading: "Our Mission",
    description:
      "To connect people through the shared love of coffee, while supporting sustainable farming worldwide. We work closely with small-scale farmers to ensure every bean is grown responsibly and roasted to perfection.",
  },
  {
    id: 2,
    icon: <Lightbulb className="w-8 h-8 text-orange-500"/>,
    heading: "Our Vision",
    description:
      "To bring a moment of calm, creativity, and connection into every coffee break. We aim to become a global community that celebrates craftsmanship, sustainability, and great taste.",
  },
  {
    id: 3,
    icon: <Handshake className="w-8 h-8 text-orange-500"/>,
    heading: "Our Promise",
    description:
      "Freshly roasted. Expertly brewed. Responsibly sourced. Every sip tells a story of passion, purpose, and perfection.",
  },
];
