import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import HamburgerDropDownMenu from './components/HamburgerDropDownMenu';
import SearchDropDownMenu from './components/SearchDropDownMenu';
import logo from '../../assets/rfa-logo.png'
import { FaSearch } from 'react-icons/fa'

const Nav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const closeDropDownMenu = () => {
    setIsNavOpen(false)
  }



  return (
    <>
      <nav id="navbar" className="flex items-center bg-white shadow w-full justify-between" >

        {/* Hamburger Drop Down Menu */}
        <div className='flex'>
          <div className="HAMBURGER-ICON flex flex-col gap-1.5 justify-center items-center bg-row1-4 w-24 h-32 hover:bg-row1-3" onClick={() => setIsNavOpen((prev) => !prev)}>
            {isNavOpen ?
              <>
                <svg
                  className="h-16 w-16 text-white"
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
                <p className='text-white font-normal font-RobotoCondensed tracking-widest'>CLOSE</p>
              </>
              :
              <>
                <span className="block h-1 w-11 rounded bg-white"></span>
                <span className="block h-1 w-11 rounded bg-white"></span>
                <span className="block h-1 w-11 rounded bg-white"></span>
                <p className='text-white font-normal font-RobotoCondensed tracking-widest'>MENU</p>
              </>}
          </div>

          <div id={isNavOpen ? "showMenuNav" : "hideMenuNav"} className="border-b-8 border-row1-3">
            <HamburgerDropDownMenu closeDropDownMenu={closeDropDownMenu} />
          </div>
          {/* End Hambuger Div */}

          <div id="Logo-with-title" className="flex gap-4 items-center justify-between">

            <NavLink to="/">
              <img src={logo} className="ml-2 w-14 lg:w-28 lg:ml-8 hover:opacity-40 duration-100" alt="" />
            </NavLink>

            <div className="flex flex-col font-RobotoSlab font-normal text-xs md:text-base xl:text-xl  tracking-wide text-row1-2">
              <p className=''>SOUTH CAROLINA</p>
              <p className=''>REVENUE AND FISCAL AFFAIRS OFFICE</p>
              <p className='hidden lg:block italic font-RobotoCondensed text-sm xl:text-base text-row1-6'>Transforming data into solutions for South Carolina</p>
            </div>
          </div>
        </div>



        <div id='nav-links' className='font-normal text-row1-4 text-sm lg:text-base xl:text-xl font-RobotoCondensed tracking-widest flex items-center gap-4 mr-4 uppercase my-8'>
          <p className="hidden md:flex text-center hover:text-row3-1 duration-300">
            <NavLink
              to="/"
            >
              ABOUT US
            </NavLink>
          </p>
          <p className="hidden md:flex text-center hover:text-row3-1 duration-300">
            <NavLink
              to="/"
            >
              EVENTS
            </NavLink>
          </p>
          <p className="hidden md:flex text-center hover:text-row3-1 duration-300">
            <NavLink
              to="/"
            >
              BOARDS & COMMITTEES
            </NavLink>
          </p>
          <button onClick={() => setIsSearchOpen((prev) => !prev)} className='text-row1-5 flex items-center text-blue justify-center h-10 w-10 border border-row1-5 rounded hover:bg-row1-5 hover:text-white duration-300'>
            <FaSearch className='text-xl' />
          </button>
          {/* Search Bar Dropdown */}
          <div id={isSearchOpen ? "showSearchNav" : "hideSearchNav"}>
            <SearchDropDownMenu />
          </div>
        </div>

        <style>{`
    #showSearchNav{
      display: block;
      position: absolute;
      z-index: 15;
      width: 33%;
      top: 85px;
      right: 10px;

    }
    #hideSearchNav {
      display: none;
    }

    #hideMenuNav {
      display: none;
    }
    #showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      top: 130px;
      left: 0;
      background: white;
      z-index: 10;
      display: grid; 
      grid-template-columns: 0.4fr 1.1fr; 
      grid-template-rows: 1fr; 
      gap: 0px 0px; 
      grid-template-areas: 
      "options services"; 
    }
    @media screen and (max-width:1024px){
      #showSearchNav{
        width: 420px;
      }
    }
    @media screen and (max-width:640px){
      #showMenuNav{
        display: grid; 
        grid-template-columns: 1fr; 
        grid-template-rows: 0.7fr 1.3fr; 
        gap: 0px 0px; 
        grid-template-areas: 
        "options"
        "services";
        
      }
      #showSearchNav{
        right: 0px;
        width: 320px;
      }
    }
  `}</style>
      </nav >


    </>
  );
}


export default Nav;