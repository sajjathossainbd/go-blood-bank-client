import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

function useBloodDonation() {
  const axiosPublic = useAxiosPublic();
  const {
    data: bloodDonation = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["bloodDonation"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blood-donation");
      return res.data;
    },
  });
  return [bloodDonation, isPending, refetch];
}

export default useBloodDonation;
