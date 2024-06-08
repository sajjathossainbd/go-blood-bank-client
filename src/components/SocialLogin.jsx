
import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();

  const handleGoogle = () => {
    googleSignIn()
    .then((result) => {
      console.log(result.user);
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center font-playfair">
        Or Continue With
      </h2>
      <div className="flex items-center justify-center gap-6 text-5xl">
        <button onClick={handleGoogle}>
          <FcGoogle className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
