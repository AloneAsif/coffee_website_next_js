import Image from "next/image";
import Link from "next/link";
interface CardProps {
  image: string;
  title: string;
  description: string;
  imageAlt: string;
  href: string;
  buttonText?: string; // Made optional with default value
}

export default function Card({
  image,
  title,
  description,
  imageAlt,
  href,
  buttonText = "Read more" // Default value
}: CardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link href={href}>
        <Image
          src={image}
          alt={imageAlt}
          width={300}
          height={200}
          className="object-cover w-full h-52 rounded-t-lg"
        />
      </Link>
      <div className="p-5">
        <Link href={href}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
        <Link
          href={href}
          className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-orange rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 transition-colors"
        >
          {buttonText}
          {/* arrow icon */}
      
        </Link>
      </div>
    </div>
  );
}