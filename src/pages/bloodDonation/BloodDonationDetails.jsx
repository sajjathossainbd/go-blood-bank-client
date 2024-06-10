import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

function BloodDonationDetails() {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: donor = {}, isLoading } = useQuery({
    queryKey: ["donor", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blood-donation/${id}`);
      return res.data;
    },
  });

  console.log(donor);

  const { recipient_name, location, date, time, status } = donor;
  console.log(donor);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleDonate = () => {
    console.log("donate");
  };

  return (
    <>
      <Helmet>
        <title>GoBlood Bank - Blood Donor Details</title>
      </Helmet>
      <h2 className="text-4xl mt-10 font-bold text-center font-playfair mb-10">
        Blood Donor Details
      </h2>
      <div className=" mb-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold my-2">{recipient_name}</h2>
          <p className="text-lg flex gap-2 items-center">
            Status: <span className="font-bold">{status}</span>
          </p>

          <div className="border-b-[0.2px] border-solid my-2"></div>

          <p className="text-lg flex gap-2 items-center">
            <IoLocation /> <span className="font-bold">{location}</span>
          </p>

          <div className="flex gap-10 mt-3">
            <p className="flex gap-2 items-center">
              <span className="font-bold">
                <MdOutlineDateRange />{" "}
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
          <div className="border-b-[0.2px] border-solid my-2"></div>
          <Link to={``}>
            <button
              onClick={handleDonate}
              className="btn bg-[#31C292] hover:bg-[#48a586] text-white mr-4 px-5 w-36 mt-6 border-none"
            >
              Donate
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BloodDonationDetails;
