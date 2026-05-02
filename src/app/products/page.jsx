import ProductCard from "@/components/ProductCard";

export default async function Products() {
  const res = await fetch("https://assignment-08-tan.vercel.app/db.json");
  const data = await res.json();

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-4xl font-bold mb-5">All Products</h1>
      <div className="grid grid-cols-3 gap-10">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
