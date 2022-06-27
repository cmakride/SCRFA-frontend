import { NavLink } from 'react-router-dom'

const HamburgerDropDownMenu = ({closeDropDownMenu}) => {
  return (
    <>
      <div
        className="absolute top-0 right-0 px-8 py-8" onClick={() => closeDropDownMenu()}
      >
        <svg
          className="h-8 w-8 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>

      <ul className="flex flex-col items-center justify-between min-h-[250px]">
        <li className="border-b border-gray-400 my-8 uppercase">
          <NavLink
            onClick={() => closeDropDownMenu()}
            to="/"
            className="text-xl hover:text-orange-600 duration-300 "
          >
            Home
          </NavLink>
        </li>
        <li className="border-b border-gray-400 my-8 uppercase">
          <NavLink
            onClick={() => closeDropDownMenu()}
            to="/"
            className="text-xl hover:text-orange-600 duration-300 "
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default HamburgerDropDownMenu;