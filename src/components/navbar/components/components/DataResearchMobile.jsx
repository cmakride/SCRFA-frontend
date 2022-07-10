import { NavLink } from 'react-router-dom'
import { useState } from 'react';

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
      <div className='' >
        <button type="button"
          onClick={() => setShowDropDown(!showDropDown)} className="flex items-center w-full uppercase font-OpenSans text-xl font-bold text-row1-3 hover:text-row3-1 duration-300"
        >
          data & research
          <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>

        {showDropDown ?
          <>

            <span className="block h-1 w-16 mt-1.5 mb-4 bg-row3-1"></span>
            {dataResearch.map((service, idx) => (
              <p >
                <NavLink
                  key={idx}
                  to="/"
                  className="capitalize font-OpenSans font-regular text-xl text-row4-4 hover:text-row3-1 duration-300">
                  {service.name}
                </NavLink>
              </p>
            ))}
          </>
          :
          <>
          </>

        }
      </div>


    </>
  );
}

export default DataResearch;