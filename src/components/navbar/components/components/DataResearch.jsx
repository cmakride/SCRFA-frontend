import { NavLink } from 'react-router-dom'

const DataResearch = () => {
  const dataResearch = [
    {
      name: "Economy",
      link: "/"
    },
    {
      name: "State Finances",
      link: "/"
    },
    {
      name: "Education",
      link: "/"
    },
    {
      name: "Healthcare",
      link: "/"
    },
    {
      name: "Local Government",
      link: "/"
    },
    {
      name: "Population and Demographics",
      link: "/"
    },
    {
      name: "State Register Calculations",
      link: "/"
    },
    {
      name: "Presentations",
      link: "/"
    },
  ]

  return (

    <ul className='ml-14 mt-7' >
      <li>
        <NavLink
          to="/"
          className="font-OpenSans font-bold text-xl text-row1-3 hover:text-row3-1 duration-300 mb-4">
          DATA & RESEARCH
        </NavLink>
      </li>
      <span className="block h-1 w-16 mt-1.5 mb-4 bg-row3-1"></span>
      {dataResearch.map((service, idx) => (
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

export default DataResearch;