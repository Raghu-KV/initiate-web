import { ReactComponent as Logo } from "../asset/logo.svg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  const socials = [
    {
      name: "facebook",
      icon: <BiLogoFacebookCircle size={"2rem"} />,
      link: "https://www.facebook.com/initiatejayanth?mibextid=9R9pXO",
    },
    {
      name: "instagram",
      icon: <BiLogoInstagramAlt size={"2rem"} />,
      link: "https://www.instagram.com/initiateindia2020/",
    },
    {
      name: "linkedIn",
      icon: <BiLogoLinkedinSquare size={"2rem"} />,
      link: "#",
    },
    {
      name: "linkedIn",
      icon: <IoLogoWhatsapp size={"2rem"} />,
      link: "#",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  py-7 bg-gray-200 px-12">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <Link to={"/"}>
          <Logo className="w-56 cursor-pointer" />{" "}
        </Link>

        <div className="mt-2 border-[#3953A2] md:w-1/2 w-full md:pb-3 text-center flex items-center justify-center font-semibold">
          <Link to={"/portfolio"}>
            <span className="pr-3 block">Portfolio</span>
          </Link>
          <Link to={"/contact"}>
            <span className="pl-3 border-l border-l-[#3953A2] block pr-3 ">
              Contact
            </span>
          </Link>
          <Link to={"/services"}>
            <span className="border-l pl-3 border-l-[#3953A2] block">
              Services
            </span>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex gap-3 md:justify-between">
            {socials.map((item) => (
              <div key={item.name} className="mt-3">
                <a
                  href={item.link}
                  className="w-20 text-[#3953A2]"
                  target="_blank"
                >
                  {item.icon}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center md:text-left cursor-pointer">
            Copyright @{" "}
            <Link to={"/"} className="text-[#3953A2] font-bold">
              initiate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
