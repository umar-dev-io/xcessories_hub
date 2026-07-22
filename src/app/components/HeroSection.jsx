import { BsBoxSeam } from "react-icons/bs";

const HeroSection = () => {
  const HeroSectionList = [
    {
      id: 1,
      icon: <BsBoxSeam />,
      title: "Express Delivery",
      subTitle: "All Over Pakistan",
    },
    {
      id: 2,
      icon: <BsBoxSeam />,
      title: "Positive Feedback",
      subTitle: "99% Customer Satisfaction Rate",
    },
    {
      id: 3,
      icon: <BsBoxSeam />,
      title: "Easy Return & Refunds",
      subTitle: "T&Cs Apply",
    },
    {
      id: 4,
      icon: <BsBoxSeam />,
      title: "Cost Saving",
      subTitle: "Excellent Price & Sales",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center text-center px-6 mt-10">
      {HeroSectionList.map(({ id, icon, title, subTitle }) => (
        <div
          key={id}
          className="w-[300] shadow flex flex-col gap-2 justify-center items-center text-center px-4 py-8 rounded-2xl transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
        >
          <p className="text-deep-foret-blue text-4xl">{icon}</p>
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-gray-400">{subTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
