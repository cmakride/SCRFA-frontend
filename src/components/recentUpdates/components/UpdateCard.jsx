import { NavLink } from "react-router-dom";
const UpdateCard = ({ update }) => {
  return (
    <div className="flex flex-col gap-1">
      <NavLink
        to="/"
        className="font-semibold underline underline-offset-1"
      >
        {update.title}
      </NavLink>
      <p className='text-row4-2 font-regular'>
        {update.description}
      </p>
      <div className="flex gap-1 text-row4-2/75">
        <p className="font-bold">
          Published:
        </p>
        <p>
          {update.date}
        </p>
        <div className="bg-row4-2/75 font-bold rounded text-row3-4">
          <p className="text-xs p-2">
          {update.tag}
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default UpdateCard;