import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/data";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </main>
      <Footer />
    </>
  );
}
