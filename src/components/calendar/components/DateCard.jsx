import { FaMapMarkerAlt, FaRegClock, FaRegAddressBook } from 'react-icons/fa'

const DateCard = ({ date }) => {
  return (
    <div className='flex items-start gap-6 border-b-2'>

      <div className='bg-row3-1 text-row3-4 h-22 w-22 flex flex-col text-center p-4'>
        <p>{date.month}</p>
        <p className='font-bold text-3xl'>{date.day}</p>
      </div>

      <div className="flex flex-col gap-1">
        {date.tag ?
          <>
            {date.tag === "Updated" &&
              <div className="bg-row3-2 w-20 text-center font-semibold rounded text-row4-1 tracking-wide">
                <p className="text-xs py-2">
                  Updated
                </p>
              </div>
            }
            {date.tag === "Cancelled" &&
              <div className="bg-row3-5 w-20 text-center font-semibold rounded text-row3-4 tracking-wide">
                <p className="text-xs py-2">
                  Cancelled
                </p>
              </div>
            }
          </>
          :
          <>
          </>
        }

        <p
          className="font-bold text-row4-2/75"
        >
          {date.title}
        </p>
        <p className='text-row4-2 font-regular'>
          {date.description}
        </p>

        <div className="flex gap-3 text-row4-2/75 items-center">
          <FaMapMarkerAlt className='text-row3-1' />
          <p className='text-row4-2 font-regular'>
            {date.location}
          </p>
        </div>
        <div className="flex gap-3 text-row4-2/75 items-center">
          <FaRegClock className='text-row3-1' />
          <p className='text-row4-2 font-regular'>
            {date.time}
          </p>
        </div>
        <div className="flex gap-3 text-row4-2/75 items-center">
          <FaRegAddressBook className='text-row3-1' />
          <p className='text-row4-2 font-regular tracking-wider'>
            {date.phone}
          </p>
        </div>
      </div>

    </div>
  );
}

export default DateCard;