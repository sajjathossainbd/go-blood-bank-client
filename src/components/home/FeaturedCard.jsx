/* eslint-disable react/prop-types */

function FeaturedCard({ icon, title, subtitle }) {
  return (
    <div className="bg-gray-50 shadow-lg rounded-xl p-10 flex flex-col items-center justify-center gap-2">
      <p className="text-6xl">{icon}</p>
      <h2 className="text-5xl font-bold text-[#FF5364]">{title}</h2>
      <p className="text-3xl mt-2">{subtitle}</p>
    </div>
  );
}

export default FeaturedCard;
