"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="rounded-2xl border border-orange-500/40 bg-black/40 p-4">
      <Link href={`/produkter/${product.id}`} className="block">
        <div className="relative aspect-square w-full mb-3 overflow-hidden rounded-xl">
          <Image src={product.thumbnail} alt={product.title} fill className="object-cover" />
        </div>

        <div className="flex justify-between text-xs">
          <span className="font-medium text-orange-200">{product.title}</span>
          <span className="text-neutral-300">{product.price},-</span>
        </div>
      </Link>

      <button onClick={() => addToCart(product)} className="w-full mt-3 rounded-full border border-orange-400 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-orange-100 transition hover:bg-orange-400 hover:text-black">
        Læg i kurv
      </button>
    </div>
  );
}
