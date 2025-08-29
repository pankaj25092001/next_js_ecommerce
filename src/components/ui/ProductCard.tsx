import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    price: number;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer flex flex-col transform hover:scale-105 hover:rotate-3">
        {/* Image container */}
        <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-all duration-500"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow bg-white bg-opacity-80 backdrop-blur-lg">
          <h3 className="text-2xl font-bold text-white mb-2 text-shadow-lg">
            {product.name}
          </h3>
          <p className="text-3xl font-extrabold text-indigo-600 mb-4 text-shadow-lg">
            ${product.price}
          </p>

          <Button
            variant="default"
            className="mt-auto w-full py-3 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-colors duration-200 text-green-500 font-semibold rounded-lg shadow-lg"
            aria-label={`View details for ${product.name}`}
          >
            View Details
          </Button>
        </div>
      </div>
    </Link>
  );
}
