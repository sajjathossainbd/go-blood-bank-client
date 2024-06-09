import BloodDonationCard from "../../components/BloodDonation/BloodDonationCard";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useBloodDonation from "../../hooks/useBloodDonation";

function BloodDonation() {
  const [bloodDonation] = useBloodDonation();
  const { loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4">
        {bloodDonation.map((donor) => (
          <BloodDonationCard key={donor._id} donor={donor} />
        ))}
      </div>
    </div>
  );
}

export default BloodDonation;
