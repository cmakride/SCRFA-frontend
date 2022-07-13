import { NavLink } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'

const ProgramServicesMobile = ({ dropDownPS, toggleDropDownPS }) => {
  const legislativeFiscalImpacts = [
    {
      name: "precinct demographics and redistricting",
      link: "/"
    },
    {
      name: "state 911 program",
      link: "/"
    },
    {
      name: "data services and online solutions",
      link: "/"
    },
    {
      name: "geodetic survey",
      link: "/"
    },
    {
      name: "fiscal analysis",
      link: "/"
    },
    {
      name: "2020 census",
      link: "/"
    }
  ]

  return (

    <>
      <div id="dropdown-wrapper" className='' >
        <button type="button"
          onClick={() => toggleDropDownPS()} className="flex items-center w-full capitalize text-xl font-bold text-row1-3"
        >
          programs & services
          <BiDownArrow className={`w-5 h-5 -rotate-90 transition-transform ease-in-out ${dropDownPS ? "rotate-0" : "-rotate-90"}`} />
        </button>

        {dropDownPS &&

          <div id='dropdown' className='text-row4-2 bg-row4-7 capitalize p-2 flex flex-col'>
            {legislativeFiscalImpacts.map((service, idx) => (
              <p key={idx}>
                
                <NavLink
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

export default ProgramServicesMobile;