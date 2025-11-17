import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
