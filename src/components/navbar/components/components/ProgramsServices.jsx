import { NavLink } from 'react-router-dom'

const ProgramsServices = () => {
  const programsServices = [
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
    
     <ul className='my-5 mx-5'>
        <li>
          <NavLink
            to="/"
            className="uppercase font-OpenSans font-bold text-xl text-row1-3 hover:text-row3-1 duration-300 mb-4">
            programs & services
          </NavLink>
        </li>
        <span className="block h-1 w-16 mt-1.5 mb-4 bg-row3-1"></span>
        {programsServices.map((service, idx) => (
          <li key={idx}>
            <NavLink
              to="/"
              className="capitalize font-OpenSans font-regular text-xl text-row4-4 hover:text-row3-1 duration-300">
              {service.name}
            </NavLink>
          </li>
        ))}
      </ul>
   );
}
 
export default ProgramsServices;