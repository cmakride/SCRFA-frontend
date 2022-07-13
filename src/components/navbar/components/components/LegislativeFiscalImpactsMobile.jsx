import { NavLink } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'

const LegislativeFiscalImpactsMobile = ({ dropDownLFI, toggleDropDownLFI }) => {
  const legislativeFiscalImpacts = [
    {
      name: "current general assembly session",
      link: "/"
    },
    {
      name: "previous general assembly session",
      link: "/"
    },
    {
      name: "forms",
      link: "/"
    }
  ]

  return (

    <>
      <div id="dropdown-wrapper" className='' >
        <button type="button"
          onClick={() => toggleDropDownLFI()} className="flex items-center w-full capitalize text-xl font-bold text-row1-3"
        >
          legislative & fiscal impacts
          <BiDownArrow className={`w-5 h-5 -rotate-90 transition-transform ease-in-out ${dropDownLFI ? "rotate-0" : "-rotate-90"}`} />
        </button>

        {dropDownLFI &&

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

export default LegislativeFiscalImpactsMobile;