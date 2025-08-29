import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="w-full border-b shadow-sm bg-white">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          STOREX
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link href="/">
            <Button variant="ghost" className="text-base px-5 py-2">
              Home
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="ghost" className="text-base px-5 py-2">
              Products
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className="text-base px-5 py-2">
              About
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className="text-base px-5 py-2">
              Contact
            </Button>
          </Link>
          <Link href="/cart">
            <Button className="text-base px-6 py-2">Cart</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
