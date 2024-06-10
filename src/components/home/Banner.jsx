import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
      <div className="carousel w-full mt-5">
        <div id="slide1" className="carousel-item relative w-full h-[500px]">
          <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl">
            <div className="text-white ml-20">
              <h2 className="text-5xl mb-2 font-bold">Donate Blood Today</h2>
              <p className="">
                Join the Cause: Your Blood Donation Can Bring Hope and Healing.
                <br />
                Hope in Times of Uncertainty and Crisis.
              </p>
              <Link
                to="/register"
                className="btn bg-[#FA5D3F] hover:bg-[#d35036] text-white mr-4 px-5 border-none mt-6"
              >
                Join as a donor
              </Link>
            </div>
          </div>
          <img
            src="https://i.ibb.co/VvgQD23/nguy-n-hi-p-ufw-C2cmbaa-I-unsplash.jpg
"
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[500px]">
          <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl">
            <div className="text-white ml-20">
              <h2 className="text-5xl mb-2 font-bold">
                Donate Blood, Change Lives
              </h2>
              <p className="">
                Join the Movement, Donate Blood Today, and Make a Meaningful{" "}
                <br /> Impact in Your Community.
              </p>
              <Link to="/search" className="btn bg-[#FA5D3F] hover:bg-[#d35036] text-white mr-4 px-5 border-none mt-6">
                Search Donors
              </Link>
            </div>
          </div>
          <img
            src="https://i.ibb.co/gJNhjp4/national-cancer-institute-Xknu-Bmnjb-Kg-unsplash.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
