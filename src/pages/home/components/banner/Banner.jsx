import BannerSearchBar from "./components/BannerSearchBar";

const Banner = () => {
  return (
    <>
      <div className="w-full h-96 bg-banner bg-no-repeat bg-center bg-cover border-t-8 border-row1-2">
        <div className="flex flex-col justify-center items-center h-full">
          <p className='text-center font-RobotoSlab font-light tracking-wide text-row4-7 text-3xl'>
            Providing independent research, analysis, and<br />
            resources to facilitate informed policy decisions<br />
            and administration of services
          </p>
          <BannerSearchBar/>
        </div>

      </div>
    </>
  );
}

export default Banner;