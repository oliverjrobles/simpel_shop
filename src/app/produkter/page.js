"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ProductGrid from "./ProductGrid";

export default function ProdukterPage() {
  const [products, setProducts] = useState(null);

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

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="pt-32 px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl font-semibold tracking-wide text-white-200">Produkter</h1>

          {/* GRID MED PRODUKTER */}
          <ProductGrid products={products} />
        </div>
      </main>
    </div>
  );
}
