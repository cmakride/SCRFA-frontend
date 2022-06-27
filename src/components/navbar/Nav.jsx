import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import HamburgerDropDownMenu from './components/HamburgerDropDownMenu';
import logo from '../../assets/rfa-logo.png'
import { FaSearch } from 'react-icons/fa'

const Nav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)

  const closeDropDownMenu = () =>{
    setIsNavOpen(false)
  }



  return (
    <>
      <nav id="navbar" className="flex items-center border-gray-400 bg-white shadow w-full justify-between" >

        <div className='flex'>
          <div className="HAMBURGER-ICON flex flex-col gap-1.5 justify-center items-center bg-row1-4 w-24 h-32" onClick={() => setIsNavOpen((prev) => !prev)}>

            <span className="block h-1 w-11 rounded bg-white"></span>
            <span className="block h-1 w-11 rounded bg-white"></span>
            <span className="block h-1 w-11 rounded bg-white"></span>
            <p className='text-white font-normal font-RobotoCondensed tracking-widest'>MENU</p>
          </div>

          {/* Hamburger Drop Down Menu */}
          <div id={isNavOpen ? "showMenuNav" : "hideMenuNav"} className="border-b-8 border-row1-3">
            <HamburgerDropDownMenu closeDropDownMenu={closeDropDownMenu}/>
          </div>
          {/* End Hambuger Div */}

          <div id="Logo-with-title" className="DESKTOP-MENU hidden space-x-8 lg:flex items-center justify-center">

            <NavLink to="/">
              <img src={logo} className="h-28 ml-8 hover:opacity-40 duration-100" alt="" />
            </NavLink>

            <div className="flex flex-col">
              <p className='font-RobotoSlab font-regular text-xl tracking-wide text-row1-2'>SOUTH CAROLINA</p>
              <p className='font-RobotoSlab font-regular text-xl tracking-wide text-row1-2'>REVENUE AND FISCAL AFFAIRS OFFICE</p>
              <p className='font-normal italic font-RobotoCondensed tracking-wide text-row1-6'>Transforming data into solutions for South Carolina</p>
            </div>
          </div>
        </div>



        <div id='nav-links' className='flex items-center gap-4 mr-4'>
          <p className="my-8 uppercase ">
            <NavLink
              to="/"
              className="font-normal text-row1-4 text-xl font-RobotoCondensed tracking-widest hover:text-row3-1 duration-300"
            >
              ABOUT US
            </NavLink>
          </p>
          <p className="my-8 uppercase ">
            <NavLink
              to="/"
              className="font-normal text-row1-4 text-xl font-RobotoCondensed tracking-widest hover:text-row3-1 duration-300"
            >
              EVENTS
            </NavLink>
          </p>
          <p className="my-8 uppercase ">
            <NavLink
              to="/"
              className="font-normal text-row1-4 text-xl font-RobotoCondensed tracking-widest hover:text-row3-1 duration-300"
            >
              BOARDS & COMMITTEES
            </NavLink>
          </p>
          <button className='text-row1-5 flex items-center text-blue justify-center h-10 w-10 border border-row1-5 rounded hover:bg-row1-5 hover:text-white duration-300'>
            <FaSearch className='text-xl' />
          </button>
        </div>

        <style>{`
    #hideMenuNav {
      display: none;
    }
    #showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 25rem;
      top: 130px;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
      </nav >


    </>
  );
}


export default Nav;