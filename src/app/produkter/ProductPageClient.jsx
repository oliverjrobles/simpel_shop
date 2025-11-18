"use client";

import { useMemo, useState } from "react";
import ProductGrid from "./ProductGrid";

export default function ProductsPageClient({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("alle");

  // Find kategorier
  const categories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category));
    return ["alle", ...unique];
  }, [products]);

  // Filtrér produkter efter kategori
  const filteredProducts = products.filter((product) => {
    return selectedCategory === "alle" || product.category === selectedCategory;
  });

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold mb-6">Produkter</h1>

        {/* FILTER-OMRÅDE */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wide text-gray-300">Filtrer efter kategori</label>

            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="rounded-full bg-gray-900 border border-gray-700 px-4 py-2 text-sm text-white">
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "alle" ? "Alle kategorier" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* PRODUKT-GRID */}
        <ProductGrid products={filteredProducts} />
      </div>
    </main>
  );
}
