const SearchDropDownMenu = () => {
  return (
    <form>
      <div id="search-container" className="bg-row1-5 p-3 md:p-4">

        <input type="search" id="default-search" className="p-2 pl-1 md:p-4 md:pl-5 text-md text-gray-900 bg-white border border-white" placeholder="Enter search term" required />
        <button type="submit" className="text-white border font-OpenSans bg-row1-5 hover:bg-row1-3  font-light tracking-widest">SEARCH</button>
        <style>{`
    #search-container{
      display: grid; 
      grid-template-columns: 1.4fr 0.6fr;; 
      grid-template-rows: 1fr; 
      gap: 6px; 
      }
      `}
        </style>
      </div>
    </form>
  );
}

export default SearchDropDownMenu;