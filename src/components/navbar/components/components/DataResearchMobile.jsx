import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { BiDownArrow } from 'react-icons/bi'

const DataResearch = () => {
  const dataResearch = [
    {
      name: "economy",
      link: "/"
    },
    {
      name: "state finances",
      link: "/"
    },
    {
      name: "education",
      link: "/"
    },
    {
      name: "healthcare",
      link: "/"
    },
    {
      name: "local government",
      link: "/"
    },
    {
      name: "population and demographics",
      link: "/"
    },
    {
      name: "state register calculations",
      link: "/"
    },
    {
      name: "presentations",
      link: "/"
    },
  ]

  const [showDropDown, setShowDropDown] = useState(false);

  return (

    <>
      <div id="dropdown-wrapper" className='' >
        <button type="button"
          onClick={() => setShowDropDown(!showDropDown)} className="flex items-center w-full capitalize font-OpenSans text-xl font-bold text-row1-3 hover:text-row3-1 duration-300"
        >
          data & research
          <BiDownArrow id={showDropDown ? "open-arrow-down":"closed-arrow-side"}className={`w-5 h-5 -rotate-90 transition-transform ease-in-out ${showDropDown ?"rotate-0":"-rotate-90"}`} />
        </button>

        {showDropDown &&

          <div id='dropdown'>
            HEY IM THE DROPDOWN
          </div>
          /* <span className="block h-1 w-16 mt-1.5 mb-4 bg-row3-1"></span>
          {dataResearch.map((service, idx) => (
            <p >
              <NavLink
                key={idx}
                to="/"
                className="capitalize font-OpenSans font-regular text-xl text-row4-4 hover:text-row3-1 duration-300">
                {service.name}
              </NavLink>
            </p>
          ))} */



        }
      </div>


    </>
  );
}

export default DataResearch;