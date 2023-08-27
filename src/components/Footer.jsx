import { ReactComponent as Logo } from "../asset/logo.svg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";

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
  ];
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-300 px-12">
      <Logo className="w-56" />
      <div className="flex">
        {socials.map((item) => (
          <div key={item.name} className="mt-3">
            <a href={item.link} className="w-20 text-sky-800">
              {item.icon}
            </a>
          </div>
        ))}
      </div>
      <div className="mt-2 border-b-2 border-sky-800 md:w-1/2 w-full pb-3 text-center">
        <span className="pr-3">Portfolio</span>
        <span className="pl-3 border-l border-l-sky-800">Contact</span>
      </div>
      <div className="mt-2">
        <span className="pr-3">
          CopyRight @ 2023 <span className="text-sky-800">initate</span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
