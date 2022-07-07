import logoTransparent from '../../assets/rfa-logo-transparent.png'

import { NavLink } from 'react-router-dom'

const Footer = () => {
  const links = [
    {
      link: "/",
      text: "privacy statement"
    },
    {
      link: "/",
      text: "FOIA"
    },
    {
      link: "/",
      text: "disclosures and reporting"
    },
    {
      link: "/",
      text: "report fraud"
    },
    {
      link: "/",
      text: "accessibility"
    },
    {
      link: "/",
      text: "contact us"
    }
  ]
  const addresses = [
    {
      title: "main office",
      address: "1000 assembly st, rembert dennis building, suite 421 columbia, SC 29201"
    },
    {
      title: "geodetic survey section",
      address: "5 geology rd columbia, SC 29212"
    },
    {
      title: "health and demographics division",
      address: "1000 assembly st, rembert dennis building, suite 240 columbia, SC 29201"
    },
  ]
  return (
    <div className='bg-row1-2 flex justify-center'>
      <div className="h-96 mx-4 grid grid-rows-1 grid-cols-2 xl:grid-cols-3 max-w-screen-2xl">

        <div className="flex flex-col justify-start items-center mt-10 ml-4 xl:ml-0">
          <div className='flex flex-col gap-5'>
            <p className="font-OpenSans font-bold tracking-wider text-sm xl:text-lg text-row3-4/75">
              South Carolina<br />
              Revenue and Fiscal Affairs Office
            </p>
            <img src={logoTransparent} className="w-28 hover:opacity-40 duration-100" alt="" />
          </div>
        </div>

        <div className="text-sm xl:text-lg flex flex-col justify-start items-center mt-10 ml-4 xl:ml-0">
          <div className='flex flex-col gap-3 font-OpenSans font-light text-row3-4'>
            {links.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.link}
                className="capitalize hover:text-row3-1 duration-300 "
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="hidden text-md xl:flex flex-col justify-start items-center font-OpenSans  mt-10">
          <div className='flex flex-col gap-4'>
            {addresses.map((address, idx) => (
              <div key={idx} className='flex flex-col gap-1'>
                <p className='uppercase font-semibold text-row4-5/75 tracking-wide'>
                  {address.title}
                </p>
                <p className='capitalize font-light text-row3-4'>
                  {address.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;