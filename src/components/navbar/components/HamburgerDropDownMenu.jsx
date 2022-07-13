import { NavLink } from 'react-router-dom'
import DataResearch from './components/DataResearch';
import GeographyMapping from './components/GeographyMapping';
import ProgramsServices from './components/ProgramsServices';
import LegislativeFiscalImpacts from './components/LegislativeFiscalImpacts';

const HamburgerDropDownMenu = ({ closeDropDownMenu }) => {

  const options = [
    {
      link: "/",
      name: "home"
    },
    {
      link: "/",
      name: "news & events"
    },
    {
      link: "/",
      name: "about us"
    },
    {
      link: "/",
      name: "contact us"
    },
    {
      link: "/",
      name: "boards & committees"
    },

  ]



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

      <div id="options" className="w-full grid bg-row4-7 font-OpenSans font-bold text-xl xl:text-2xl text-row4-2 text-center">
        <ul className='justify-self-center'>
          {options.map((option, idx) => (
            <li 
            key={idx}
            className="capitalize mt-4 w-60 pb-3 border-b border-gray-400 hover:text-row3-1 duration-300">
              <NavLink
                onClick={() => closeDropDownMenu()}
                to={option.link}
              >
                {option.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <style>{`
          #options {
          grid-area: options;
          }
          `}
        </style>
      </div>

      <div className='grid place-content-center'>
        <div id='services' className='grid md:grid-rows-2 place-items-start md:grid-cols-2 lg:grid-cols-3'>

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