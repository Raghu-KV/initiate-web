import { useState, useRef, useEffect } from "react";
import { ReactComponent as Logo } from "../asset/logo.svg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function NavBar() {
  const [nav, setNav] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!navRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const navigate = useNavigate();

  return (
    <nav className="bg-gray-200 fixed w-full z-10">
      <div className="container px-5 mx-auto flex items-center justify-between md:justify-start font-semibold min-h-20 py-5">
        <div className="cursor-pointer mr-24">
          <Logo className="w-36" />
        </div>
        <div className="hidden md:flex md:items-center w-full">
          <ul className="flex cursor-pointer gap-5">
            <li className="hover:text-[#3953A2] duration-300">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-[#3953A2] duration-300">
              <Link to={"/aboutUs"}>About Us</Link>
            </li>
            <li className="hover:text-[#3953A2] duration-300">
              <Link to={"/services"}>Services</Link>
            </li>
            <li className="hover:text-[#3953A2] duration-300">
              <Link to={"/portfolio"}>Portfolio</Link>
            </li>
          </ul>
          <div className="cursor-pointer text-[#3953A2] duration-300  py-2 px-5 rounded-lg  ml-auto">
            <Link to={"/contact"}>
              <i className="fa-solid fa-phone mr-2"></i>
              <span className=""> Contact</span>
            </Link>
          </div>
        </div>
        <div ref={navRef}>
          <div className="md:hidden">
            <div className="relative z-20" onClick={() => setNav(!nav)}>
              {nav ? (
                <i className="fa-solid fa-xmark fa-xl"></i>
              ) : (
                <i className="fa-solid fa-bars fa-xl"></i>
              )}
            </div>
          </div>
          <div
            className={`bg-gray-200 absolute w-2/3 h-screen top-0 right-0 duration-150 flex justify-center items-center drop-shadow-xl z-10 ${
              nav ? "translate-x-0" : "translate-x-full"
            } `}
          >
            <ul className="flex flex-col items-center cursor-pointer gap-5">
              <li
                className="hover:text-[#3953A2] duration-300"
                onClick={() => {
                  setNav(false);
                  navigate("/");
                }}
              >
                Home
              </li>
              <li
                className="hover:text-[#3953A2] duration-300"
                onClick={() => {
                  setNav(false);
                  navigate("/aboutUs");
                }}
              >
                About Us
              </li>
              <li
                className="hover:text-[#3953A2] duration-300"
                onClick={() => {
                  setNav(false);
                  navigate("/services");
                }}
              >
                Services
              </li>
              <li
                className="hover:text-[#3953A2] duration-300"
                onClick={() => {
                  setNav(false);
                  navigate("/portfolio");
                }}
              >
                Portfolio
              </li>
              <li
                className=" duration-300 hover:bg-sky-900 bg-[#3953A2] py-2 px-5 rounded-lg text-white"
                onClick={() => {
                  setNav(false);
                  navigate("/contact");
                }}
              >
                <i className="fa-solid fa-phone mr-2"></i>Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
