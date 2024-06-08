import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
            avatar: data.photoURL,
            bloodGroup: data.bloodGroup,
            distric: data.distric,
            upazila: data.upazila,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                icon: "success",
                title: "Account Create Successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>GoBlood Bank - Register</title>
      </Helmet>
      <div className="lg:w-1/2 max-sm:mx-6 mx-auto mt-4 card shrink-0  shadow-2xl bg-base-100 pt-10 mb-10">
        <h2 className="text-4xl font-bold mb-6 text-center font-playfair">
          Register your account
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
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                className="input input-bordered"
                name="name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="link..."
                className="input input-bordered"
                {...register("photURL", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blood Group</span>
              </label>
              <select
                {...register("bloodGroup", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Select Blood Group
                </option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Distric</span>
              </label>
              <select
                {...register("distric", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Select A Distric
                </option>
                <option>Dhaka</option>
                <option>Cumilla</option>
                <option>Sunamganj</option>
                <option>Sylhet</option>
                <option>Tangail</option>
                <option>Narail</option>
                <option>Kushtia</option>
                <option>Jessore</option>
                <option>Bandarban</option>
                <option>Bagerhat</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upazila</span>
              </label>
              <select
                {...register("upazila", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Select A Upazila
                </option>
                <option>Mohalchari</option>
                <option>Fatikchhari</option>
                <option>Mirsharai</option>
                <option>Sonaimori</option>
                <option>Sonaimori</option>
                <option>Kabirhat</option>
                <option>Bijoynagar</option>
                <option>Nabinagar</option>
                <option>Daudkandi</option>
                <option>Debidwar</option>
              </select>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn  bg-[#FF5364] hover:bg-[#eb3e4f] text-xl text-white">
                Register
              </button>
            </div>
          </form>
        </div>

        {/* OR CONTINUE WITH */}
        <div className="card-body pt-0">
          <SocialLogin />

          {/* Already Accout */}
          <div className="form-control mt-6 ">
            <p>
              Already Account?
              <Link to={"/login"} className="btn btn-link font-playfair">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
