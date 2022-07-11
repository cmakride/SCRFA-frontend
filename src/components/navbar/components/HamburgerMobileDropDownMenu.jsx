import { NavLink } from 'react-router-dom'
import DataResearchMobile from './components/DataResearchMobile';

const HamburgerMobileDropDownMenu = ({ closeDropDownMenu, isNavOpen }) => {
  const options = [
    {
      link: "/",
      name: "home"
    },
    {
      link: "/",
      name: "news & events"
    },
    {
      link: "/",
      name: "about us"
    },
    {
      link: "/",
      name: "contact us"
    },
    {
      link: "/",
      name: "boards & committees"
    },

  ]



  return (
    <>
      <div className='flex flex-col'>

        <h1>Hello</h1>
        <h1>Yess</h1>

      </div>






    </>
  );
}

export default HamburgerMobileDropDownMenu;