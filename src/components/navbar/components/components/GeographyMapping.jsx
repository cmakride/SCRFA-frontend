import { NavLink } from 'react-router-dom'

const GeographyMapping = () => {
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
     <ul className='my-5 mx-5'>
        <li>
          <NavLink
            to="/"
            className="uppercase font-OpenSans font-bold text-xl text-row1-3 hover:text-row3-1 duration-300 mb-4">
            geography & mapping
          </NavLink>
        </li>
        <span className="block h-1 w-16 mt-1.5 mb-4 bg-row3-1"></span>
        {geographyMapping.map((service, idx) => (
          <li key={idx}>
            <NavLink
              to="/"
              className="capitalize font-OpenSans font-regular text-xl text-row4-4 hover:text-row3-1 duration-300">
              {service.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
   );
}
 
export default GeographyMapping;