import BannerSearchBar from "./components/BannerSearchBar";

const Banner = () => {
  return (
    <>
      <div className="w-full h-96 bg-banner bg-no-repeat bg-center bg-cover">
        <div className="flex flex-col justify-center items-center gap-8 h-full">
          <p className='text-center font-RobotoSlab font-light tracking-wide text-row3-4 text-xs md:text-2xl lg:text-3xl'>
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