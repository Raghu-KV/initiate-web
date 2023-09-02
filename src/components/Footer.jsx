import { ReactComponent as Logo } from "../asset/logo.svg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  const socials = [
    {
      name: "facebook",
      icon: <BiLogoFacebookCircle size={"2rem"} />,
      link: "#",
    },
    {
      name: "instagram",
      icon: <BiLogoInstagramAlt size={"2rem"} />,
      link: "#",
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
    <div className="flex flex-col items-center justify-center  py-7 bg-gray-300 px-12">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <Logo className="w-56" />

        <div className="mt-2 border-sky-800 md:w-1/2 w-full md:pb-3 text-center flex items-center justify-center">
          <span className="pr-3 block">Portfolio</span>
          <span className="pl-3 border-l border-l-sky-800 block pr-3 ">
            Contact
          </span>
          <span className="border-l pl-3 border-l-sky-800 block">Services</span>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex gap-3 md:justify-between">
            {socials.map((item) => (
              <div key={item.name} className="mt-3">
                <a href={item.link} className="w-20 text-sky-800">
                  {item.icon}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center md:text-left">Copyright @ initiate</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
