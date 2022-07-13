import { NavLink } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'

const GeographicMappingMobile = ({ dropDownGM, toggleDropDownGM }) => {
  const geographyMapping = [
    {
      name: "transportation carrier network (uber)",
      link: "/"
    },
    {
      name: "SC real time network",
      link: "/"
    },
    {
      name: "SC state GIS",
      link: "/"
    },
    {
      name: "maps",
      link: "/"
    },
    {
      name: "interactive mapping",
      link: "/"
    },
    {
      name: "statewide aerial imagery",
      link: "/"
    }
  ]



  return (

    <>
      <div id="dropdown-wrapper" className='' >
        <button type="button"
          onClick={() => toggleDropDownGM()} className="flex items-center w-full capitalize text-xl font-bold text-row1-3"
        >
          geography & mapping
          <BiDownArrow className={`w-5 h-5 -rotate-90 transition-transform ease-in-out ${dropDownGM ? "rotate-0" : "-rotate-90"}`} />
        </button>

        {dropDownGM &&

          <div id='dropdown' className='text-row4-2 bg-row4-7 capitalize p-2 flex flex-col'>
            {geographyMapping.map((service, idx) => (
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

export default GeographicMappingMobile;