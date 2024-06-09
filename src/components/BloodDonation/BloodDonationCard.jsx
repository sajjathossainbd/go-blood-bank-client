import { IoMdTimer } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function BloodDonationCard({ donor }) {
  const { recipient_name, location, date, time } = donor;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="">
          <h2 className="text-2xl font-bold">{recipient_name}</h2>
          <h2 className="text-xl flex gap-2 items-center">
            <IoLocation />
            {location}
          </h2>
        </div>
        <div className="flex justify-between mt-3">
          <p className="flex gap-2 items-center">
            <span className="font-bold">
              <MdOutlineDateRange />
            </span>
            {date}
          </p>
          <p className="flex gap-2 items-center">
            <span className="font-bold">
              <IoMdTimer />
            </span>
            {time}
          </p>
        </div>

        {/* border */}
        <div className="border-dashed border-[0.8px] border-[#13131326] my-2"></div>

        {/* ending */}
        <div className="card-actions justify-end">
          <Link
            to={`/blood-donation-details/${donor?._id}`}
            className="btn btn-outline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BloodDonationCard;
