import SingleServices from "./SingleServices";
import { FaPenNib } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoAppsOutline } from "react-icons/io";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
function Services() {
  const service = [
    {
      name: "Graphic Design",
      icon: <FaPenNib size={"2.5rem"} />,
    },
    {
      name: "Digital Marketing",
      icon: <BsGraphUpArrow size={"2.5rem"} />,
    },
    {
      name: "Web Development",
      icon: <AiOutlineGlobal size={"2.5rem"} />,
    },
    {
      name: "App Development",
      icon: <AiOutlineAppstore size={"2.5rem"} />,
    },
    {
      name: "Software",
      icon: <TfiMicrosoftAlt size={"2.5rem"} />,
    },
    {
      name: "Training",
      icon: <MdWorkOutline size={"2.5rem"} />,
    },
  ];

  return (
    <div className="container mx-auto px-5">
      <div className=" flex flex-col items-center justify-center mt-6">
        <p className="text-sky-800 font-bold">We are</p>
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
