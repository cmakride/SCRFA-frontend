import { NavLink } from 'react-router-dom'

const LegislativeFiscalImpacts = () => {
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
     <ul className='my-5 mx-5'>
        <li>
          <NavLink
            to="/"
            className="uppercase font-OpenSans font-bold text-xl text-row1-3 hover:text-row3-1 duration-300 mb-4">
            legislative fiscal impacts
          </NavLink>
        </li>
        <span className="block h-1 w-16 mt-1.5 mb-4 bg-row3-1"></span>
        {legislativeFiscalImpacts.map((service, idx) => (
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
 
export default LegislativeFiscalImpacts;