import SingleServices from "../components/SingleServices";
import { FaPenNib } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoAppsOutline } from "react-icons/io";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineVideoChat } from "react-icons/md";
function Contact() {
  const service = [
    {
      name: "Mobile",
      detail: "+91 97919 31490",
      icon: <FaPenNib size={"2.5rem"} />,
    },
    {
      name: "E-Mail",
      detail: "initiate.mindturrn@gmail.com",
      icon: <BsGraphUpArrow size={"2.5rem"} />,
    },
    {
      name: "Working Hours",
      detail: "9:30am - 6:00pm",
      icon: <AiOutlineGlobal size={"2.5rem"} />,
    },
    {
      name: "Address Location",
      detail:
        "18/13 2nd floor, APS complex, Nalli Hospital Road, Bustand(opp) Erode-638004",
      icon: <AiOutlineGlobal size={"2.5rem"} />,
    },
  ];

  return (
    <div className="container mx-auto px-5 md:h-screen flex flex-col justify-center">
      <div className=" flex flex-col items-center justify-center pt-28">
        <p className="text-sky-800 font-bold">We are</p>
        <p className="text-black text-2xl font-bold">Good @</p>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-5 mt-16 mb-16">
        {service.map((item) => (
          <SingleServices item={item} />
        ))}
      </div>
    </div>
  );
}

export default Contact;
