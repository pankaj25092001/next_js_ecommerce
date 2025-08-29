import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Params {
  params: {
    slug: string;
  };
}
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: Params) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <Link href="/products" className="text-blue-600 underline mt-4 block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-md">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-fill"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-blue-700 font-semibold mb-6">${product.price}</p>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-10">
            <Button size="lg" className="w-full">
              Add to Cart
            </Button>
            <Link
              href="/products"
              className="block mt-4 text-center text-blue-600 hover:underline"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
