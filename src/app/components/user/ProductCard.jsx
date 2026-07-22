import Image from "next/image";
const ProductCard = ({ image, alt, title, spec, price }) => {
  return (
    <div className="group flex flex-col justify-center items-center border border-gray-200 px-3 py-4 rounded hover:shadow hover:scale-105 transition duration-400 ease-in-out hover:border-black ">
      <Image className=" object-cover"  src={image} width={200} height={200} alt={alt} />
      <h1 className="mt-4 font-bold text-xl group-hover:text-olive-yellow transition duration-400 ease-in-out">
        {title}
      </h1>
      <p className="font-bold text-lg group-hover:text-olive-yellow transition duration-400 ease-in-out">
        {spec}
      </p>
      <p className="text-deep-foret-blue my-2 group-hover:text-red-700">
        Rs. {price}
      </p>
      <button className="bg-deep-foret-blue text-white font-bold px-6 py-2 rounded-4xl mt-4 hover:bg-blue-950 transition duration-400 ease-in-out">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
