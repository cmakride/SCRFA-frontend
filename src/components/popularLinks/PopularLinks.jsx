import { NavLink } from 'react-router-dom'

const PopularLinks = () => {
  return (
    <>
      <div className='w-full mt-10 flex flex-col justify-center items-center font-OpenSans font-bold tracking-wider text-row1-2 gap-3'>
        <h1 className="text-xl lg:text-2xl xl:text-3xl self-start">POPULAR SERVICES AND LINKS</h1>
        <span className="block h-2 w-full bg-row1-2"></span>

        <div className="my-7 grid w-full grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 text-row1-5 font-semibold text-md md:text-lg underline underline-offset-1">

          <div className="bg-white flex flex-col justify-start items-start gap-6">
            <NavLink
              to="/"
            >
              Overview and History of the South<br />
              Carolina State Budget
            </NavLink>
            <NavLink
              to="/"
            >
              Employer Contribution Trends
            </NavLink>
            <NavLink
              to="/"
            >
              Appropriation Bills and Acts
            </NavLink>

          </div>
          <div className="bg-white flex flex-col justify-start items-start gap-6">
            <NavLink
              to="/"
            >
              Overview and History of the South<br />
              Carolina State Budget
            </NavLink>
            <NavLink
              to="/"
            >
              Employer Contribution Trends - June 4,
              2019
            </NavLink>
            <NavLink
              to="/"
            >
              Executive Budget Office<br />
              State Agency Budget Plans(Requests)
            </NavLink>

          </div>
          <div className="bg-white flex flex-col justify-start items-start gap-6">
            <NavLink
              to="/"
            >
              Overview and History of the South<br />
              Carolina State Budget
            </NavLink>
            <NavLink
              to="/"
            >
              Employer Contribution Trends - June 4,
              2019
            </NavLink>
            <NavLink
              to="/"
            >
              Executive Budget Office<br />
              State Agency Budget Plans(Requests)
            </NavLink>

          </div>
        </div>
      </div>
    </>
  );
}

export default PopularLinks;