import { IoIosArrowUp } from 'react-icons/io'


const TopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  // ? way to make the button visible at a certain amount down the page
  // const [isVisible, setIsVisible] = useState(false)
  // const toggleVisibility = () => {
  //   if (window.pageYOffset > 300) {
  //     setIsVisible(true)
  //   } else {
  //     setIsVisible(false)
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', toggleVisibility)

  //   return () => {
  //     window.removeEventListener('scroll', toggleVisibility)
  //   }
  // }, [])

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