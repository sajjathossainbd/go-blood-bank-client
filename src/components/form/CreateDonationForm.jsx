import useUpazila from "../../hooks/useUpazila";
import useDistric from "../../hooks/useDistric";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function CreateDonationForm() {
  const { user } = useAuth();
  const [upazila, upazilaLoading] = useUpazila();
  const [distric, districLoading] = useDistric();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "dashboard/my-donation";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (upazilaLoading && districLoading) {
    return <LoadingSpinner />;
  }

  const onSubmit = async (data) => {
    const status = "pending";
    const donor = {
      name: user.displayName,
      email: user.email,
    };
    const donationInfo = {
      status,
      donor,
      recipient_name: data.recipient_name,
      district: data.district,
      upazila: data.upazila,
      hospital_name: data.hospital_name,
      address: data.address,
      date: data.date,
      time: data.time,
    };
    try {
      const donationRes = await axiosSecure.post(
        "/blood-donation",
        donationInfo
      );
      console.log(donationRes.data);
      if (donationRes.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Donation Request Create Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/my-donation-requests");
      }
      reset();
    } catch {
      console.log(errors);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="form-control col-span-full">
            <label className="label">
              <span className="label-text">Recipient Name</span>
            </label>
            <input
              type="text"
              placeholder="Recipient Name"
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="name"
              {...register("recipient_name", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipient District</span>
            </label>
            <select
              defaultValue="default"
              className="select w-full text-gray-800 border border-rose-300 focus:outline-rose-500"
              {...register("district", { required: true })}
            >
              <option disabled value="default">
                Select A Distric
              </option>
              {distric.map((dist) => (
                <option key={dist._id}>{dist.name}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipient Upazila</span>
            </label>
            <select
              defaultValue="default"
              className="select w-full text-gray-800 border border-rose-300 focus:outline-rose-500"
              {...register("upazila", { required: true })}
            >
              <option disabled value="default">
                Select A Upazila
              </option>
              {upazila.map((upazi) => (
                <option key={upazi._id}>{upazi.name}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Hospital Name</span>
            </label>
            <input
              type="text"
              placeholder="Hospital Name"
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="name"
              {...register("hospital_name", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Address</span>
            </label>
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="name"
              {...register("address", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder=""
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="name"
              {...register("date", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Time</span>
            </label>
            <input
              type="time"
              placeholder="like: Dhaka Medical College Hospital)"
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="name"
              {...register("time", { required: true })}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
          Donation Request
        </button>
      </form>
    </div>
  );
}

export default CreateDonationForm;
