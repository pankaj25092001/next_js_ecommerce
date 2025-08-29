import Header from "@/components/layout/Header";
import HeroBanner from "@/components/layout/HeroBanner";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroBanner />
      <Footer />
    </div>
  );
}
