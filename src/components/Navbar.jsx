import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const humbargerRef = useRef();
  const [isHumbargerMenuOpened, setIsHamburgerMenuOpened] = useState(false);

  const handleHamburger = () => {
    setIsHamburgerMenuOpened((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickDocument = (e) => {
      if (
        isHumbargerMenuOpened &&
        humbargerRef.current &&
        !humbargerRef.current.contains(e.target)
      ) {
        setIsHamburgerMenuOpened(false);
      }
    };

    document.addEventListener("click", handleClickDocument);

    return () => {
      document.removeEventListener("click", handleClickDocument);
    };
  }, [isHumbargerMenuOpened]);

  return (
    <nav className="max-md:bg-white relative">
      <div className="w-full py-3 px-10 max-md:px-5 flex justify-between items-center sticky">
        <Link to="/">
          <img
            src="/images/navicon.png"
            alt="navbar-icon"
            className="h-[90px] max-md:h-[70px] z-10"
          />
        </Link>
        {/* Hamburger menu */}
        <div
          className={`humbarger-menu ${
            isHumbargerMenuOpened ? "hide-sidebar" : ""
          }`}
        >
          {navLinks.map((navLink, index) => (
            <NavItem key={index} {...navLink} />
          ))}

          {/* Get In Touch button */}
          <NavLink to="/contact-us">
            <button className="py-3 px-4 bg-gray-800 hover:bg-gray-500 transition-colors duration-150 text-white rounded-lg">
              Get In Touch
            </button>
          </NavLink>
        </div>
        {/* Hamburger button */}
        <button
          className="relative group z-50 max-md:block hidden"
          style={{ zIndex: 999 }}
          onClick={handleHamburger}
          ref={humbargerRef}
        >
          <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200">
            <div
              className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${
                isHumbargerMenuOpened ? "-rotate-[45deg]" : ""
              } origin-center`}
            >
              <div
                className={`bg-slate-700 w-1/2 rounded transform transition-all duration-300 origin-right delay-75 ${
                  isHumbargerMenuOpened
                    ? "-translate-y-[1px] -rotate-90 h-[1px]"
                    : "h-[2px]"
                }`}
              ></div>
              <div className={`bg-slate-700 h-[1px] rounded`}></div>
              <div
                className={`bg-slate-700 w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75 ${
                  isHumbargerMenuOpened
                    ? "translate-y-[1px] -rotate-90 h-[1px]"
                    : "h-[2px]"
                }`}
              ></div>
            </div>
          </div>
        </button>
        <div className="max-md:hidden flex gap-8 items-center">
          {/* Navigation links */}
          {navLinks.map((navLink, index) => (
            <NavItem key={index} {...navLink} />
          ))}
          {/* Get In Touch button */}
          <NavLink to="/contact-us">
            <button className="py-3 px-4 bg-gray-800 hover:bg-gray-500 transition-colors duration-150 text-white rounded-lg">
              Get In Touch
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const navLinks = [
  { to: "/", text: "Home" },
  {
    to: "/services",
    text: "Services",
    withArrow: true,
    subLinks: [
      { to: "/services/architecture-design", text: "Architecture Design" },
      { to: "/services/construction-work", text: "Construction Work" },
    ],
  },
  {
    to: "/about-us",
    text: "About Us",
    withArrow: true,
    subLinks: [
      { to: "/about-us/green-environment", text: "Green Environment" },
      { to: "/about-us/sustainability", text: "Sustainability Development" },
    ],
  },
  { to: "/projects", text: "Projects" },
];

// eslint-disable-next-line react/prop-types
const NavItem = ({ to, text, withArrow = false, subLinks = [] }) => {
  const [isSubLinksVisible, setSubLinksVisible] = useState(false);
  const arrowBtnRef = useRef();

  const handleArrowClick = (e) => {
    e.stopPropagation();
    setSubLinksVisible(!isSubLinksVisible);
  };

  useEffect(() => {
    const handleClickDocument = (e) => {
      if (
        isSubLinksVisible &&
        arrowBtnRef.current &&
        !arrowBtnRef.current.contains(e.target)
      ) {
        setSubLinksVisible(false);
      }
    };

    document.addEventListener("click", handleClickDocument);

    return () => {
      document.removeEventListener("click", handleClickDocument);
    };
  }, [isSubLinksVisible]);

  return (
    <div
      className={`relative max-w-fit ${
        subLinks.length > 0 ? "flex items-center" : ""
      }`}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "relative text-black font-bold nav-link"
            : "relative hover:text-black text-gray-500 nav-link"
        }
      >
        {text}
      </NavLink>
      {withArrow && (
        <button ref={arrowBtnRef} onClick={(e) => handleArrowClick(e)}>
          <ArrowIcon />
        </button>
      )}
      {isSubLinksVisible && (
        <div className="z-10 absolute top-[115%] -left-5 bg-white rounded-lg shadow w-44">
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            {subLinks.map((subLink, index) => (
              <li key={index}>
                <Link
                  to={subLink.to}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {subLink.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ArrowIcon = () => (
  <svg
    className="w-2.5 h-2.5 ms-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 4 4 4-4"
    />
  </svg>
);

export default Navbar;
