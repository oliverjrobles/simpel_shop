"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { items } = useCart();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="absolute top-0 inset-x-0 z-20">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-xs font-semibold tracking-[0.3em] uppercase text-white/80">MellerLock</div>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-white/80 hover:text-white transition">
            Home
          </Link>

          <Link href="/produkter" className="text-white/80 hover:text-white transition">
            Produkter
          </Link>

          {/* KURV IKON MED BADGE */}
          <Link href="/cart" className="relative">
            <Image src="/kurv.png" alt="Indkøbskurv" width={24} height={24} className="invert" />

            {/* RØD BADGE */}
            {itemCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">{itemCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
