import { IoIosArrowUp } from 'react-icons/io'


const TopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }


  return (
    <>
      <div className='flex justify-end items-center gap-3'>
        <p className='font-regular font-OpenSans tracking-widest text-row4-2/75'>Back to Top</p>
        <button type="button"
          onClick={scrollToTop} className='text-row1-5 text-2xl rounded-3xl bg-row1-6/75 hover:bg-row1-3  p-3'>

          <IoIosArrowUp />
        </button>
      </div>
    </>
  );
}

export default TopButton;