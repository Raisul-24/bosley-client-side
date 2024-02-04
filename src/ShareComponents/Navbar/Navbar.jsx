
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      idx: 0,
      path: "/",
      name: "Home",
    },
    {
      idx: 1,
      path: "/about",
      name: "About",
    },
    {
      idx: 2,
      path: "/services",
      name: "Services",
    },
    {
      idx: 3,
      path: "/why-bosley",
      name: "Why Bosley",
    },
    {
      idx: 4,
      path: "/non-surgical",
      name: "Non surgical",
    },
    {
      idx: 5,
      path: "/shop",
      name: "Shop",
    },
    {
      idx: 6,
      path: "/blog",
      name: "Blog",
    },
    {
      idx: 7,
      path: "/contact",
      name: "Contact",
    },
  ];

  const subPagesLinks = {
    name: "Pages",
    children: [
      {
        idx: 0,
        path: "/cosmetic",
        name: "Cosmetic",
      },
      {
        idx: 1,
        path: "/testimonials",
        name: "Testimonicals",
      },
      {
        idx: 2,
        path: "/before-&-after",
        name: "Before & After",
      },
      {
        idx: 3,
        path: "/gallery-&-videos",
        name: "Gallery & Videos",
      },
      {
        idx: 4,
        path: "/pckages",
        name: "Packages",
      },
    ],
  };

  return (
    <div className="navbar bg-[#112341] px-5 lg:px-8 2xl:px-16 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white p-0 pr-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72"
          >
            {navLinks.map((navLink) => (
              <li className="bg-inherit" key={navLink.idx}>
                <NavLink className="text-base" to={navLink.path}>
                  {navLink.name}
                </NavLink>
              </li>
            ))}
            <li>
              <Link className="text-base">{subPagesLinks.name}:</Link>
              <ul className="p-2">
                {subPagesLinks.children.map((pageLink) => (
                  <li key={pageLink.idx}>
                    <NavLink className="text-base" to={pageLink.path}>
                      {pageLink.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <img
          className="w-36"
          src="https://www.bosley.com/wp-content/uploads/2024/01/bosley50-desktop-nav.svg"
          alt=""
        />
      </div>
      <div className="navbar-center hidden xl:flex">
        <ul className="menu menu-horizontal px-1 text-white bg-inherit">
          {navLinks.map((navLink) => (
            <li className="bg-inherit text-base" key={navLink.idx}>
              <NavLink to={navLink.path}>{navLink.name}</NavLink>
            </li>
          ))}
          <li className="relative z-[5000] text-base">
            <details>
              <summary>{subPagesLinks.name}</summary>
              <ul className="p-2 w-60 absolute right-0">
                {subPagesLinks.children.map((pageLink) => (
                  <li className="bg-inherit text-black" key={pageLink.idx}>
                    <NavLink to={pageLink.path}>{pageLink.name}</NavLink>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn  bg-[#DFEFFC] rounded-sm hidden md:flex">
          Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Navbar;
