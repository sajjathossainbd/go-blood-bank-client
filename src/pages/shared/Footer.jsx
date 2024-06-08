import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content rounded-xl mb-7">
      <aside>
        <Link
          to={"/"}
          className="flex flex-col items-center gap-3 justify-center"
        >
          <img className="w-12" src={Logo} alt="" />
          <p className=" text-3xl font-extrabold ">
            Go<span className="text-[#FF5364]">Blood</span> Bank
          </p>
        </Link>
        <p>
          GoBlood Bank Industries Ltd.
          <br />
          Providing reliable tech since 1980
        </p>
        <p>© GoBlood Bank 2024</p>
      </aside>
      <nav>
        <h6 className="footer-title">Quick Link</h6>
        <a className="link link-hover">Privacy Policy </a>
        <a className="link link-hover">Terms & Conditions</a>
        <a className="link link-hover">Guest Feedback</a>
        <a className="link link-hover">FAQ</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact Information</h6>
        <a className="link link-hover">1 N Taylor, St Louis, 63108 - USA.</a>
        <a className="link link-hover">+18143008652</a>
        <a className="link link-hover">help@gobloodbank.com</a>
      </nav>
      <nav>
        <h6 className="footer-title">Connect with Us</h6>
        <div className="flex gap-3 text-2xl">
          <a className="link link-hover">
            <FaSquareInstagram />
          </a>
          <a className="link link-hover">
            <IoLogoWhatsapp />
          </a>
          <a className="link link-hover">
            <FaFacebook />
          </a>
          <a className="link link-hover">
            <FaYoutube />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
