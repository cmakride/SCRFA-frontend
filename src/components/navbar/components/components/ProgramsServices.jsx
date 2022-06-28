import { NavLink } from 'react-router-dom'

const ProgramsServices = () => {
  const programsServices = [
    {
      name: "Precinct Demographics and Redistricting",
      link: "/"
    },
    {
      name: "State 911 Program",
      link: "/"
    },
    {
      name: "Data Services and Online Solutions",
      link: "/"
    },
    {
      name: "Geodetic Survey",
      link: "/"
    },
    {
      name: "Fiscal Analysis",
      link: "/"
    },
    {
      name: "2020 Census",
      link: "/"
    }
  ]

  return ( 
    
     <ul className='my-5 mx-5'>
        <li>
          <NavLink
            to="/"
            className="font-OpenSans font-bold text-xl text-row1-3 hover:text-row3-1 duration-300 mb-4">
            Programs & Services
          </NavLink>
        </li>
        <span className="block h-1 w-16 mt-1.5 mb-4 bg-row3-1"></span>
        {programsServices.map((service, idx) => (
          <li key={idx}>
            <NavLink
              to="/"
              className="font-OpenSans font-regular text-xl text-row4-4 hover:text-row3-1 duration-300">
              {service.name}
            </NavLink>
          </li>
        ))}
      </ul>
   );
}
 
export default ProgramsServices;