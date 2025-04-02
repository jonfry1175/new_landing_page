import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

type ItemNavLinksProps = {
  isMobile?: boolean;
};
const ItemNavLinks: React.FC<ItemNavLinksProps> = ({ isMobile }) => (
  <ul
    className={`${
      isMobile ? "flex flex-col items-start" : "sm:flex hidden items-center"
    } list-none justify-end flex-1`}
  >
    {navLinks.map((nav, index) => (
      <li
        key={nav.id}
        className={`font-poppins font-normal cursor-pointer text-[16px] ${
          index === navLinks.length - 1
            ? "mr-0"
            : `${isMobile ? "mb-4" : "mr-10"}`
        } text-white`}
      >
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ItemNavLinks />

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ItemNavLinks isMobile={true} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
