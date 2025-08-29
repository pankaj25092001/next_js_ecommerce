import Link from "next/link";

export default function HeroBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32 px-6 text-white"
      style={{
        backgroundImage: "url('/images/4.avif')",
      }}
    >
      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Discover Your Style, Shop With Ease
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-200">
          Browse our handpicked collection of fashion, accessories, and more — curated just for you.
        </p>
        <Link
          href="/products"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Explore Products
        </Link>
      </div>
    </section>
  );
}
