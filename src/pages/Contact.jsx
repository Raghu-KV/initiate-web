import SingleContact from "../components/SingleContact";
import { FaPenNib } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbClockHour9 } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
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
      icon: <FaPhoneAlt size={"2.5rem"} />,
    },
    {
      name: "E-Mail",
      detail: "initiate.mindturrn@gmail.com",
      icon: <HiOutlineMailOpen size={"2.5rem"} />,
    },
    {
      name: "Working Hours",
      detail: "9:30am - 6:00pm",
      icon: <TbClockHour9 size={"2.5rem"} />,
    },
    {
      name: "Address Location",
      detail:
        "18/13 2nd floor, APS complex, Nalli Hospital Road, Bustand(opp) Erode-638004",
      icon: <FaLocationDot size={"2.5rem"} />,
    },
  ];

  return (
    <div className="container mx-auto px-5 md:h-screen flex flex-col justify-center">
      <div className=" flex flex-col items-center justify-center pt-28">
        <p className="text-[#3953A2] font-bold">For</p>
        <p className="text-black text-2xl font-bold">More Info</p>
      </div>
      <div className=" flex flex-wrap justify-between gap-5 mt-16 mb-16">
        {service.map((item) => (
          <SingleContact item={item} />
        ))}
      </div>
    </div>
  );
}

export default Contact;
