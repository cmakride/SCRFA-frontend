import HeaderStyle2 from "../headers/HeaderStyle2";
import BlueButton from "../buttons/BlueButton";
import DateCard from "./components/DateCard";

const Calendar = () => {
  const events = [
    {
      title: "Board of Economic Advisors Meeting",
      location: "Room 417, Bowers Conference Room, Rembert Dennis Building",
      time: "1:30 pm",
      phone: "(803)734-2265",
      tag: "Updated",
      month: "Nov",
      day:"22"
    },
    {
      title: "Board of Economic Advisors Meeting",
      location: "Room 417, Bowers Conference Room, Rembert Dennis Building",
      time: "1:30 pm",
      phone: "(803)734-2265",
      tag: "Cancelled",
      month: "Nov",
      day:"23"
    },
    {
      title: "Board of Economic Advisors Meeting",
      location: "Room 417, Bowers Conference Room, Rembert Dennis Building",
      time: "1:30 pm",
      phone: "(803)734-2265",
      month: "Nov",
      day:"25"
    },
    {
      title: "Board of Economic Advisors Meeting",
      location: "Room 417, Bowers Conference Room, Rembert Dennis Building",
      time: "1:30 pm",
      phone: "(803)734-2265",
      month: "Nov",
      day:"28"
    },
  ]
  return (

    <div className="text-row1-5 text-md md:text-lg flex flex-col justify-start items-start gap-6">
      <HeaderStyle2 text="Calendar of Events" />
      {events.map((date) => (
        <DateCard date={date} />
      ))}
      <BlueButton text="VIEW ALL EVENTS" />
    </div>

  );
}

export default Calendar;