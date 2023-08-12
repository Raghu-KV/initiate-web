import { useState, useRef, useEffect } from "react";

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

  return (
    <nav className="bg-gray-300 fixed w-full">
      <div className="container px-5 mx-auto flex items-center justify-between md:justify-start font-semibold h-20">
        <div className="cursor-pointer mr-24">LOGO</div>
        <div className="hidden md:flex md:items-center w-full">
          <ul className="flex cursor-pointer gap-5">
            <li className="hover:text-sky-800 duration-300">Home</li>
            <li className="hover:text-sky-800 duration-300">About Us</li>
            <li className="hover:text-sky-800 duration-300">Services</li>
          </ul>
          <div className="cursor-pointer hover:bg-sky-900 duration-300 bg-sky-800 py-2 px-5 rounded-lg text-white ml-auto">
            <i className="fa-solid fa-phone mr-2"></i>
            <span className="">Contact</span>
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
            className={`bg-gray-300 absolute w-2/3 h-screen top-0 right-0 duration-150 flex justify-center items-center drop-shadow-xl z-10 ${
              nav ? "translate-x-0" : "translate-x-full"
            } `}
          >
            <ul className="flex flex-col items-center cursor-pointer gap-5">
              <li
                className="hover:text-sky-800 duration-300"
                onClick={() => setNav(false)}
              >
                Home
              </li>
              <li
                className="hover:text-sky-800 duration-300"
                onClick={() => setNav(false)}
              >
                About Us
              </li>
              <li
                className="hover:text-sky-800 duration-300"
                onClick={() => setNav(false)}
              >
                Services
              </li>
              <li
                className="hover:text-sky-800 duration-300"
                onClick={() => setNav(false)}
              >
                Portfolio
              </li>
              <li
                className=" duration-300 hover:bg-sky-900 bg-sky-800 py-2 px-5 rounded-lg text-white"
                onClick={() => setNav(false)}
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
