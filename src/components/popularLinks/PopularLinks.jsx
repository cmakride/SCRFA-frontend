import { NavLink } from 'react-router-dom'

const PopularLinks = () => {
  return (
    <>
      <div className='w-full mt-10 flex flex-col justify-center items-center font-OpenSans font-bold tracking-wider text-row1-2 gap-3 max-w-screen-2xl'>
        <h1 className="text-3xl self-start">POPULAR SERVICES AND LINKS</h1>
        <span className="block h-2 w-full bg-row1-2"></span>

        <div className="my-7 grid w-full grid-rows-1 grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 text-row1-5 font-semibold text-lg underline underline-offset-1">

          <div className="bg-white flex flex-col justify-start items-start gap-6">
            <NavLink
              to="/"
              className=""
            >
              Overview and History of the South<br />
              Carolina State Budget
            </NavLink>
            <NavLink
              to="/"
              className=""
            >
              Employer Contribution Trends
            </NavLink>
            <NavLink
              to="/"
              className=""
            >
              Appropriation Bills and Acts
            </NavLink>

          </div>
          <div className="bg-white flex flex-col justify-start items-start gap-6">
            <NavLink
              to="/"
              className=""
            >
              Overview and History of the South<br />
              Carolina State Budget
            </NavLink>
            <NavLink
              to="/"
              className=""
            >
              Employer Contribution Trends - June 4,<br/>
              2019
            </NavLink>
            <NavLink
              to="/"
              className=""
            >
              Executive Budget Office<br/>
              State Agency Budget Plans(Requests)
            </NavLink>

          </div>
          <div className="bg-white flex flex-col justify-start items-start gap-6">
            <NavLink
              to="/"
              className=""
            >
              Overview and History of the South<br />
              Carolina State Budget
            </NavLink>
            <NavLink
              to="/"
              className=""
            >
              Employer Contribution Trends - June 4,<br/>
              2019
            </NavLink>
            <NavLink
              to="/"
              className=""
            >
             Executive Budget Office<br/>
              State Agency Budget Plans(Requests)
            </NavLink>

          </div>
        </div>
      </div>
    </>
  );
}

export default PopularLinks;