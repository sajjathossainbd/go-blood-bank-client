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
import { ImSpinner9 } from "react-icons/im";
import axios from "axios";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, loading, setLoading } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = data.photURL[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
      setLoading(true);
      // Upload Image URL to Server
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGEBB_API_KEY
        }`,
        formData
      );
      console.log(data.data.display_url);
      console.log(formData);

      // User Register
      await createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.data.display_url)
          .then(() => {
            // create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
              avatar: data.data.display_url,
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
    } catch {
      console.log(errors);
      setLoading(false);
    }
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
                <span className="label-text">Upload Image</span>
              </label>
              <input
                {...register("photURL", { required: true })}
                type="file"
                className="file-input file-input-bordered file-input-error w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blood Group</span>
              </label>
              <select
                defaultValue="default"
                {...register("bloodGroup", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
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
                defaultValue="default"
                {...register("distric", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
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
                defaultValue="default"
                {...register("upazila", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
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
              <button
                disabled={loading}
                type="submit"
                className="btn  bg-[#FF5364] hover:bg-[#eb3e4f] text-xl text-white"
              >
                {loading ? (
                  <ImSpinner9 className="animate-spin m-auto" />
                ) : (
                  "Register"
                )}
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
