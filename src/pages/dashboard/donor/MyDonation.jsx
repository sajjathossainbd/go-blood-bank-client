import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";

function MyDonation() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: bloodDonation = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bloodDonation", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/blood-donation/${user.email}`);
      return res.data;
    },
  });
  refetch();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  console.log(bloodDonation);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>District</th>
              <th>Upazila</th>
              <th>Hospital Name</th>
              <th>Address</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bloodDonation.map((donor, index) => (
              <tr key={donor._id}>
                <th>{index + 1}</th>
                <td>{donor.recipient_name}</td>
                <td>{donor.district}</td>
                <td>{donor.upazila}</td>
                <td>{donor.hospital_name}</td>
                <td>{donor.address}</td>
                <td className="">
                  <button className="btn">Update</button>
                </td>
                <td className="">
                  <button className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyDonation;
