import SingleServices from "../components/SingleServices";
import { FaPenNib } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoAppsOutline } from "react-icons/io";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineVideoChat } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { BiCode } from "react-icons/bi";
function Services() {
  const service = [
    {
      name: "Graphic Design",
      icon: <FaPenNib size={"2.5rem"} />,
      nav: "/services/graphicDesign",
    },
    {
      name: "Digital Marketing",
      icon: <BsGraphUpArrow size={"2.5rem"} />,
      nav: "/services/digitalMarketing",
    },
    {
      name: "Development",
      icon: <BiCode size={"2.5rem"} />,
      nav: "/services/development",
    },

    {
      name: "Software",
      icon: <TfiMicrosoftAlt size={"2.5rem"} />,
      nav: "/services/software",
    },
    {
      name: "Visuals",
      icon: <MdOutlineVideoChat size={"2.5rem"} />,
      nav: "/services/visual",
    },
    {
      name: "Training",
      icon: <BsBook size={"2.5rem"} />,
      nav: "/services/intern",
    },
  ];

  return (
    <div className="container mx-auto px-5">
      <div className=" flex flex-col items-center justify-center mt-6">
        <p className="text-[#3953A2] font-bold">We are</p>
        <p className="text-black text-2xl font-bold">Good @</p>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 mb-5">
        {service.map((item) => (
          <SingleServices item={item} />
        ))}
      </div>
    </div>
  );
}

export default Services;
