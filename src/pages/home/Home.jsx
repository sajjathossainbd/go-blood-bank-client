import Banner from "../../components/home/Banner";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";

function Home() {
  const { loading } = useAuth();
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Banner />
    </div>
  );
}

export default Home;
