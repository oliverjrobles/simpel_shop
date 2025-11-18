"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../components/Navbar";

export default function ProductDetailsPage() {
  const { id } = useParams(); // fanger [id] fra URL'en
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    if (id) fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-gray-400">Indlæser produkt...</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main className="pt-32 px-6 pb-16">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[2fr,1fr]">
          {/* VENSTRE SIDE: billede + info */}
          <section>
            <Link href="/produkter" className="text-sm text-blue-200 hover:text-blue-200">
              &lt; Tilbage
            </Link>

            <div className="mt-6 flex flex-col gap-6 md:flex-row">
              {/* stort billede */}
              <div className="relative w-full md:w-[320px] aspect-square rounded-3xl border border-white-500/50 bg-black/50 overflow-hidden">
                <Image src={product.thumbnail} alt={product.title} fill className="object-cover" />
              </div>

              {/* tekst */}
              <div className="flex-1 space-y-4">
                <h1 className="text-2xl font-semibold text-blue-200">{product.title}</h1>
                <p className="text-sm text-neutral-300">{product.description}</p>

                <p className="text-lg font-medium text-white-300">{product.price},- kr</p>

                <p className="text-xs text-neutral-400">
                  Brand: {product.brand || "Ukendt"} • Kategori: {product.category}
                </p>
              </div>
            </div>

            {/* Simple “reviews”-sektion */}
            <section className="mt-10 border-t border-neutral-800 pt-6">
              <h2 className="mb-3 text-lg font-semibold text-white-200">Reviews</h2>
              <p className="text-sm text-neutral-300 mb-2">Rating: {product.rating} ★</p>
              <div className="flex flex-wrap gap-4 text-sm text-blue-200">
                <div>
                  <p>"Very satisfied!"</p>
                  <p className="text-xs text-blue-300">Scarlett Wright</p>
                </div>
                <div>
                  <p>"Great quality!"</p>
                  <p className="text-xs text-blue-300">John Doe</p>
                </div>
              </div>
            </section>
          </section>

          {/* HØJRE SIDE: “kurv”-boks */}
          <aside className="h-fit rounded-3xl border border-white-400/40 bg-black/40 p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white-200">Din kurv</h2>

            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex justify-between">
                <span>{product.title}</span>
                <span>{product.price},-</span>
              </li>
            </ul>

            <div className="mb-6 flex justify-between border-t border-neutral-700 pt-3 text-sm font-medium">
              <span>Total</span>
              <span>{product.price},-</span>
            </div>

            <Link href="/cart" className="block w-full rounded-full border border-white-400 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-orange-100 transition hover:bg-white-400 hover:text-black">
              Gå til betaling
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
