import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import logo from '../../assets/rfa-logo.png'

const Nav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <div id="navbar" className="flex items-center justify-start border-gray-400 bg-white shadow w-full" >


        <div className="HAMBURGER-ICON flex flex-col gap-1.5 justify-center items-center bg-row1-4 w-24 h-32" onClick={() => setIsNavOpen((prev) => !prev)}>

          <span className="block h-1 w-11 rounded bg-white"></span>
          <span className="block h-1 w-11 rounded bg-white"></span>
          <span className="block h-1 w-11 rounded bg-white"></span>
          <p className='text-white font-normal font-RobotoCondensed tracking-widest'>MENU</p>
        </div>
        {/* Hamburger Click What will show */}
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                onClick={() => setIsNavOpen(false)}
                to="/"
                className="text-xl hover:text-orange-600 duration-300 "
              >
                Home
              </NavLink>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <NavLink
                onClick={() => setIsNavOpen(false)}
                to="/"
                className="text-xl hover:text-orange-600 duration-300 "
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        {/* End Hambuger Div */}


        <div id="Logo-with-links" className="DESKTOP-MENU hidden space-x-8 lg:flex items-center justify-center">
          <NavLink to="/">
            <img src={logo} className="h-28 ml-8 hover:opacity-40 duration-100" alt="" />
          </NavLink>

          <div className="flex flex-col">
            <p className='font-RobotoSlab font-regular text-xl tracking-wide text-row1-2'>SOUTH CAROLINA</p>
            <p className='font-RobotoSlab font-regular text-xl tracking-wide text-row1-2'>REVENUE AND FISCAL AFFAIRS OFFICE</p>
            <p className='font-normal italic font-RobotoCondensed tracking-wide text-row1-6'>Transforming data into solutions for South Carolina</p>
          </div>

          <p className="my-8 uppercase">
            <NavLink
              to="/"
              className="text-xl hover:text-orange-600 duration-300"
            >
              Home
            </NavLink>
          </p>
        </div>

        <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
      </div >


    </>
  );
}


export default Nav;