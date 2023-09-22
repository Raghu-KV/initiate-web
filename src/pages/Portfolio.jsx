import SinglePortfolio from "../components/SinglePortfolio";
import PortfolioImage1 from "../portfolio/1(1).jpg";
import PortfolioImage2 from "../portfolio/1(2).jpg";
import PortfolioImage3 from "../portfolio/1(3).jpg";
import PortfolioImage4 from "../portfolio/1(4).jpg";
import PortfolioImage5 from "../portfolio/1(5).jpg";
import PortfolioImage6 from "../portfolio/1(6).jpg";
import PortfolioImage7 from "../portfolio/1(7).jpg";
import PortfolioImage8 from "../portfolio/1(8).jpg";
import PortfolioImage9 from "../portfolio/1(9).jpg";
import PortfolioImage10 from "../portfolio/1(10).jpg";
import PortfolioImage11 from "../portfolio/1(11).jpg";
import PortfolioImage12 from "../portfolio/1(12).jpg";
import PortfolioImage13 from "../portfolio/1(13).jpg";
import PortfolioImage14 from "../portfolio/1(14).jpg";
import PortfolioImage15 from "../portfolio/Kothai-Ghee.jpg";

function Portfolio() {
  const service = [
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage1} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage2} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage3} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage4} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage5} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage6} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage7} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage8} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage9} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage10} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage11} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage12} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage13} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage14} className="rounded-xl" />,
    },
    {
      name: "Graphic Design",
      icon: <img src={PortfolioImage15} className="rounded-xl" />,
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
        <p className="text-[#3953A2] font-bold">We are</p>
        <p className="text-black text-2xl font-bold">Good @</p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 mt-5 mb-5">
        {service.map((item) => (
          <SinglePortfolio item={item} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
