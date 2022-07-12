import { NavLink } from 'react-router-dom'
import DataResearchMobile from './components/DataResearchMobile';
import GeographicMappingMobile from './components/GeographyMappingMobile';
import { useState } from 'react';

const HamburgerMobileDropDownMenu = ({ closeDropDownMenu, isNavOpen }) => {
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

  const [dropDownDR, setDropDownDR] = useState(false);
  const [dropDownGM, setDropDownGM] = useState(false);

  const toggleDropDownDR = ()=>{
    setDropDownGM(false)
    setDropDownDR(!dropDownDR)
  }


  const toggleDropDownGM = ()=>{
    setDropDownDR(false)
    setDropDownGM(!dropDownGM)
  }



  return (
    <>
      <div className='text-row4-2 text-lg pl-5 pt-5 w-full flex flex-col justify-start items-start capitalize font-bold gap-1'>
        {options.map((option, idx) => (
          <p
            key={idx}
            className="w-60 border-b-2 border-gray-400 hover:text-row3-1 duration-300">
            <NavLink
              onClick={() => closeDropDownMenu()}
              to={option.link}
            >
              {option.name}
            </NavLink>
          </p>
        ))}
        <DataResearchMobile dropDownDR={dropDownDR} toggleDropDownDR={toggleDropDownDR}/>
        <GeographicMappingMobile dropDownGM={dropDownGM}
        toggleDropDownGM={toggleDropDownGM}/>

      </div>






    </>
  );
}

export default HamburgerMobileDropDownMenu;