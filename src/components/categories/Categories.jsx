import geoSvg from '../../assets/Geography-Icon.svg'
import dataSvg from '../../assets/Data-Research-Icon.svg'
import legislativeSvg from '../../assets/Legislative-Icon.svg'
import programSvg from '../../assets/Programs-Icon.svg'


const Categories = () => {

  return (
    <>
      <div className='bg-row4-7 w-full flex justify-center items-center font-OpenSans font-bold tracking-wider text-row1-2 text-center'>

        <div className="my-6 flex flex-col gap-6 max-w-screen-2xl">

          <div className="bg-white h-64 w-64 shadow flex justify-center items-center">
            <div className="w-1/2 flex flex-col justify-center items-center gap-4">
              <img src={dataSvg} alt="" />
              <p>DATA &<br />RESEARCH</p>
            </div>
          </div>

          <div className="bg-white h-64 w-64 shadow flex justify-center items-center">
            <div className="w-1/2 flex flex-col justify-center items-center gap-4">
              <img src={geoSvg} alt="" />
              <p>GEOGRAPHY &<br />MAPPING</p>
            </div>
          </div>

          <div className="bg-white h-64 w-64 shadow flex justify-center items-center">
            <div className="w-1/2 flex flex-col justify-center items-center gap-4">
              <img src={programSvg} alt="" />
              <p>PROGRAMS &<br />SERVICES</p>
            </div>
          </div>

          <div className="bg-white h-64 w-64 shadow flex justify-center items-center">
            <div className="w-3/5 flex flex-col justify-center items-center gap-4">
              <img src={legislativeSvg} alt="" />
              <p>LEGISLATIVE &<br />FISCAL IMPACTS</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Categories;