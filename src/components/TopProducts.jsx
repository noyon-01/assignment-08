import ProductCard from "./ProductCard";

export default async function TopProducts() {
  const res = await fetch("https://assignment-08-tan.vercel.app/db.json");
  const data = await res.json();

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold mb-5">Popular Products</h1>
      <div className="grid grid-cols-3">
        {data.products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
