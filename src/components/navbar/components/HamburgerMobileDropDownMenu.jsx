import { NavLink } from 'react-router-dom'
import DataResearchMobile from './components/DataResearchMobile';

const HamburgerMobileDropDownMenu = ({ closeDropDownMenu,isNavOpen }) => {
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
      className={`top-[127px] left-0 w-full bg-row4-7 text-black absolute z-10 border-t-8 border-b-8 border-row1-3 transition-all ease-in-out duration-1000 ${isNavOpen ? "h-96": "h-0"}
      `}>
        
      </div>

      {/* <ul className=''>
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
      </ul> */}




    </>
  );
}

export default HamburgerMobileDropDownMenu;