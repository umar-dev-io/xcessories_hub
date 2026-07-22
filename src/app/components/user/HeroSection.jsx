import { BsBoxSeam } from "react-icons/bs";
import { TbMessageUser } from "react-icons/tb";
import { GiReturnArrow,GiTakeMyMoney } from "react-icons/gi";
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
      icon: <TbMessageUser />,
      title: "Positive Feedback",
      subTitle: "99% Customer Satisfaction Rate",
    },
    {
      id: 3,
      icon: <GiReturnArrow />,
      title: "Easy Return & Refunds",
      subTitle: "T&Cs Apply",
    },
    {
      id: 4,
      icon: <GiTakeMyMoney />,
      title: "Cost Saving",
      subTitle: "Excellent Price & Sales",
    },
  ];

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,280px))] justify-center gap-6 px-6 mt-10">
      {HeroSectionList.map(({ id, icon, title, subTitle }) => (
        <div
          key={id}
          className=" shadow flex flex-col gap-2 justify-center items-center text-center px-4 py-8 rounded-2xl transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
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
