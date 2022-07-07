import { NavLink } from 'react-router-dom'
import DataResearch from './components/DataResearch';
import GeographyMapping from './components/GeographyMapping';
import ProgramsServices from './components/ProgramsServices';
import LegislativeFiscalImpacts from './components/LegislativeFiscalImpacts';

const HamburgerDropDownMenu = ({ closeDropDownMenu }) => {



  return (
    <>
      <div
        className="absolute bottom-0 right-0 px-8 py-5 xl:top-0" onClick={() => closeDropDownMenu()}
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

      <ul id="options" className="bg-row4-7 flex flex-col items-center justify-start gap-5 xl:gap-10 font-OpenSans font-bold text-xl xl:text-2xl text-row4-2 text-center">
        <li className="mt-4 w-60 pb-3 border-b border-gray-400 hover:text-row3-1 duration-300">
          <NavLink
            onClick={() => closeDropDownMenu()}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className=" w-60 pb-3 border-b border-gray-400 hover:text-row3-1 duration-300">
          <NavLink
            onClick={() => closeDropDownMenu()}
            to="/"
          >
            News & Events
          </NavLink>
        </li>
        <li className=" w-60 pb-3 border-b border-gray-400 hover:text-row3-1 duration-300">
          <NavLink
            onClick={() => closeDropDownMenu()}
            to="/"
          >
            About Us
          </NavLink>
        </li>
        <li className=" w-60 pb-3 text-center border-b border-gray-400 hover:text-row3-1 duration-300">
          <NavLink
            onClick={() => closeDropDownMenu()}
            to="/"
          >
            Contact Us
          </NavLink>
        </li>
        <li className=" w-60 pb-3 text-center hover:text-row3-1 duration-300">
          <NavLink
            onClick={() => closeDropDownMenu()}
            to="/"
          >
            Boards & Committees
          </NavLink>
        </li>
        <style>{`
          #options {
          grid-area: options;
          }
          `}
        </style>
      </ul>

      <div className='grid place-content-center'>
        <div id='services' className='grid md:grid md:grid-rows-2 place-items-start md:grid-cols-2 lg:grid-cols-3'>

          <DataResearch />
          <GeographyMapping />
          <ProgramsServices />
          <LegislativeFiscalImpacts />

          <style>{`
          #services {
          grid-area: services;
          }
          `}
          </style>
        </div>
      </div>
    </>
  );
}

export default HamburgerDropDownMenu;