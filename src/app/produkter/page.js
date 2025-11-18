"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ProductGrid from "./ProductGrid";

export default function ProdukterPage() {
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("alle");

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products/category/mens-shoes");

      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  // LOADING STATE
  if (!products) {
    return <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-gray-400">Indlæser produkter...</div>;
  }
  const filteredProducts = selectedCategory === "alle" ? products : products.filter((product) => product.brand === selectedCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="pt-32 px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl font-semibold tracking-wide text-white-200">Produkter</h1>

          <div className="mt-4 mb-6">
            <label className="block text-sm mb-2 text-gray-300">Filtrer efter kategori</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="rounded-full bg-neutral-900 border border-neutral-700 px-4 py-2 text-sm">
              <option value="alle">Alle brands</option>
              <option value="Nike">Nike</option>
              <option value="Puma">Puma</option>

              {/* Her kan du tilføje flere kategorier senere */}
            </select>
          </div>

          {/* GRID MED PRODUKTER */}
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
    </div>
  );
}
