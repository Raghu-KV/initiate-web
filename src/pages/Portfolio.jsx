import SinglePortfolio from "../components/SinglePortfolio";
import PortfolioImage from "../portfolio/1.jpg";

function Portfolio() {
  const service = [
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage} className="rounded-xl" />,
    },
    {
      name: "Digital Marketing",
    },
    {
      name: "Web Development",
    },
    {
      name: "App Development",
    },
    {
      name: "Software",
    },
    // {
    //   name: "Training",
    //   icon: <MdWorkOutline size={"2.5rem"} />,
    // },
  ];

  return (
    <div className="container mx-auto px-5">
      <div className=" flex flex-col items-center justify-center pt-28">
        <p className="text-sky-800 font-bold">We are</p>
        <p className="text-black text-2xl font-bold">Good @</p>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 mb-5">
        {service.map((item) => (
          <SinglePortfolio item={item} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
