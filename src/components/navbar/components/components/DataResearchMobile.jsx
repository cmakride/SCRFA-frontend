import { NavLink } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'

const DataResearchMobile = ({ dropDownDR, toggleDropDownDR }) => {
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



  return (

    <>
      <div id="dropdown-wrapper" className='' >
        <button type="button"
          onClick={() => toggleDropDownDR()} className="flex items-center w-full capitalize text-xl font-bold text-row1-3"
        >
          data & research
          <BiDownArrow className={`w-5 h-5 -rotate-90 transition-transform ease-in-out ${dropDownDR ? "rotate-0" : "-rotate-90"}`} />
        </button>

        {dropDownDR &&

          <div id='dropdown' className='text-row4-2 bg-row4-7 capitalize p-2 flex flex-col'>
            {dataResearch.map((service, idx) => (
              <p >
                <NavLink
                  key={idx}
                  to="/"
                  className="hover:text-row3-1 duration-300">
                  {service.name}
                </NavLink>
              </p>
            ))}
          </div>
        }
      </div>
      <style>
        {`
        #dropdown-wrapper {
          position: relative;
          width: 100%;
          overflow: visible;
        }
        #dropdown-wrapper #dropdown {
          width: 100%;
          position: absolute;
          top: 27px;
          left: 0;
          z-index: 20;
        }
        `}
      </style>


    </>
  );
}

export default DataResearchMobile;