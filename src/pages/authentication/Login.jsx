import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import SocialLogin from "../../components/SocialLogin";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      reset(), console.log(user);
      Swal.fire({
        icon: "success",
        title: "Account Login Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <Helmet>
        <title>GoBlood Bank - Login</title>
      </Helmet>

      <div className="lg:w-1/2 max-sm:mx-6 mx-auto mt-4 card shrink-0  shadow-2xl bg-base-100 pt-10 mb-10">
        <h2 className="text-4xl font-bold mb-6 text-center font-playfair">
          Login your account
        </h2>
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  name="password"
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute top-4 right-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn  bg-[#FF5364] hover:bg-[#d33646] text-xl text-white">
                Login
              </button>
            </div>
          </form>
        </div>

        {/* OR CONTINUE WITH */}
        <div className="card-body pt-0">
          {/* Have An Accout */}
          <div className="form-control mt-6 ">
            <SocialLogin />
            <p>
              Dont’t Have An Account ?
              <Link to={"/register"} className="btn btn-link font-playfair">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
