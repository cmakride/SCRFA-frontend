import { FaSearch } from 'react-icons/fa'

const BannerSearchBar = () => {
  return (
    <form className="w-full flex justify-center max-w-screen-2xl">
      <div id="search-container" className="w-11/12 md:w-1/2">

        <input type="search" id="default-search" className="p-2 pl-3 text-md text-gray-900 bg-white placeholder:text-row4-3 placeholder:font-OpenSans placeholder:italic" placeholder="Search rfa.sc.gov" required />
        <button type="submit" className="text-white text-sm font-OpenSans bg-row1-5 hover:bg-row1-3 hover:border font-regular tracking-widest flex justify-center items-center gap-1">
          SEARCH <FaSearch className='text-md md:text-xl'/>
        </button>

        <style>{`
    #search-container{
      display: grid; 
      grid-template-columns: 1.4fr 0.6fr;; 
      grid-template-rows: 1fr; 
      gap: 6px; 
      }
      @media screen and (max-width:640px){
        #search-container{
          gap: 0px; 
        }
      }
      `}
        </style>
      </div>
    </form>
  );
}

export default BannerSearchBar;