import { NavLink } from 'react-router-dom'
import UpdateCard from './components/UpdateCard';

const RecentUpdates = () => {
  const recentUpdates = [
    {
      title: "Local Government Finance",
      description: "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales",
      date: "Jan 2,2020",
      tag: "Updated"
    },
    {
      title: "Transportation Network Carrier Maps",
      description: "",
      date: "Jan 2,2020",
      tag: "New"
    },
    {
      title: "BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23",
      description: "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales",
      date: "Dec 16,2019",
      tag: "Updated"
    },
    {
      title: "Budget Development",
      description: "",
      date: "Dec 16,2019",
      tag: "New"
    },
    {
      title: "November 2019 General Fund Revenue Digest",
      description: "",
      date: "Dec 13,2019",
      tag: "New"
    }
  ]
  return (

    <div className="text-row1-5 text-md md:text-lg flex flex-col justify-start items-start gap-6">
      {recentUpdates.map((update) => (
        <UpdateCard update={update} />
      ))}
    </div>

  );
}

export default RecentUpdates;