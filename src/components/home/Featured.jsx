import { BiSolidDonateBlood } from "react-icons/bi";
import FeaturedCard from "./FeaturedCard";
import { MdBloodtype } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { FaAward } from "react-icons/fa";

function Featured() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 my-20 max-sm:px-6">
      <FeaturedCard
        icon={<BiSolidDonateBlood />}
        title="45234"
        subtitle="Success Smile"
      />
      <FeaturedCard
        icon={<MdBloodtype />}
        title="4189"
        subtitle="Happy Donors"
      />
      <FeaturedCard
        icon={<HiUserGroup />}
        title="3265"
        subtitle="Happy Recipient"
      />
      <FeaturedCard icon={<FaAward />} title="1230" subtitle="Total Awards" />
    </div>
  );
}

export default Featured;
