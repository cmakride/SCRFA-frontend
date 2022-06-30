import logoTransparent from '../../assets/rfa-logo-transparent.png'

import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-row1-2 flex justify-center'>
      <div className="h-96 bg-row1-2 grid grid-rows-1 grid-cols-2 xl:grid-cols-3 max-w-screen-2xl">

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
          <div className='flex flex-col gap-3'>
            <NavLink
              to="/"
              className="font-OpenSans font-light text-row3-4 hover:text-row3-1 duration-300 "
            >
              Privacy Statement
            </NavLink>
            <NavLink
              to="/"
              className="font-OpenSans font-light text-row3-4 hover:text-row3-1 duration-300 "
            >
              FOIA
            </NavLink>
            <NavLink
              to="/"
              className="font-OpenSans font-light text-row3-4 hover:text-row3-1 duration-300 "
            >
              Disclosures and Reporting
            </NavLink>
            <NavLink
              to="/"
              className="font-OpenSans font-light text-row3-4 hover:text-row3-1 duration-300 "
            >
              Report Fraud
            </NavLink>
            <NavLink
              to="/"
              className="font-OpenSans font-light text-row3-4 hover:text-row3-1 duration-300 "
            >
              Accessibility
            </NavLink>
            <NavLink
              to="/"
              className="font-OpenSans font-light text-row3-4 hover:text-row3-1 duration-300"
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="hidden text-md xl:flex flex-col justify-start items-center font-OpenSans  mt-10">
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-row4-5/75 tracking-wide'>
                MAIN OFFICE
              </p>
              <p className='font-light text-row3-4'>
                1000 Assembly St, Rembert Dennis Building, Suite 421<br/>
                Columbia, SC 29201
              </p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-row4-5/75 tracking-wide'>
                GEODETIC SURVEY SECTION
              </p>
              <p className='font-light text-row3-4'>
                5 Geology Rd<br/>
                Columbia, SC 29212
              </p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-row4-5/75 tracking-wide'>
                HEALTH AND DEMOGRAPHICS DIVISION
              </p>
              <p className='font-light text-row3-4'>
                1000 Assembly St, Rembert Dennis Building, Suite 240<br/>
                Columbia, SC 29201
              </p>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Footer;