"use client";

import Navbar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { items, total } = useCart();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-28">
        <h1 className="text-3xl font-semibold tracking-tight">Din kurv</h1>

        {items.length === 0 ? (
          <p className="text-slate-200">Du har endnu ingen varer i kurven.</p>
        ) : (
          <>
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-4 border-b border-slate-700 pb-4">
                  {/* Thumbnail */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-neutral-900 border border-neutral-700">
                      <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
                    </div>

                    {/* Title + Quantity */}
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-slate-300 text-xs">
                        {item.quantity} stk × {item.price},-
                      </p>
                    </div>
                  </div>

                  {/* Price on right */}
                  <p className="font-semibold">{(item.price * item.quantity).toFixed(2)},-</p>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-700 text-sm font-semibold flex flex-col gap-4">
              <div className="flex justify-between">
                <span>Total</span>
                <span>{total.toFixed(2)},-</span>
              </div>

              {/* BETAL NU KNAP */}
              <button className="w-full rounded-full border border-blue-400 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-orange-100 transition hover:bg-blue-400 hover:text-black">Betal nu</button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
