import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/blood-donation/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

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
                  <button
                    onClick={() => handleDelete(donor._id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
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
