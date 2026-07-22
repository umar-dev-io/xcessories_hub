import ProductCard from "./ProductCard";
import ProductListData from "../../data/user/ProductList.json";
const ProductCardSection = () => {
  return (
    <div className="fex justify-center text-center gap-4 px-6 mt-10">
      <div>
        <h1 className="text-dark-blue text-4xl font-bold">Top Sellers</h1>
        <p>Our most loved picks by customers — trending and trusted.</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,280px))] gap-4 justify-center items-center mt-5">
        {ProductListData.map(({ id, image, alt, title, spec, price }) => (
          <ProductCard
            key={id}
            image={image}
            alt={alt}
            title={title}
            spec={spec}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCardSection;
