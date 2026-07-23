import ProductCard from "./ProductCard";
import Product from "@/app/models/Product";
import connectDB from "@/app/lib/mongodb";

const ProductCardSection = async () => {
  await connectDB();
  const products = await Product.find().lean();
  return (
    <div className="fex justify-center text-center gap-4 px-6 mt-10">
      <div>
        <h1 className="text-dark-blue text-4xl font-bold">Top Sellers</h1>
        <p>Our most loved picks by customers — trending and trusted.</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,280px))] gap-4 justify-center items-center mt-5">
        {products.map((product) => (
          <ProductCard
            key={product._id.toString()}
            image={product.image}
            alt={product.alt}
            title={product.title}
            spec={product.spec}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCardSection;
