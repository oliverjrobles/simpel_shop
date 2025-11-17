import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-0 inset-x-0 z-20">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-xs font-semibold tracking-[0.3em] uppercase text-white/80">Luxury Loafers</div>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-white/80 hover:text-white transition">
            Home
          </Link>
          <Link href="/products" className="text-white/80 hover:text-white transition">
            Produkter
          </Link>
          <Link href="/cart" className="hover:opacity-80 transition">
            <Image src="/kurv.png" alt="Indkøbskurv" width={24} height={24} className="invert" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
