/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  const { image, title, author, date, content } = blog;

  const des = content.slice(0, 100);
  return (
    <div className="card bg-base-100 shadow-xl my-10">
      <div className="relative">
        <figure className="">
          <img src={image} alt="estate image" className="rounded-t-lg" />
        </figure>
        <div className="badge badge-primary absolute top-4 right-4">New</div>
      </div>

      <div className="card-body">
        {/* start */}
        <div className=" flex gap-2 text-2xl font-bold">{title}</div>
        <p>{des}</p>
        {/* border */}
        <div className="border-dashed border-[0.8px] border-[#13131326] my-2"></div>

        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{date}</h2>
          <h2 className="text-2xl font-bold text-[#31C292]">{author}</h2>
        </div>

        <div className="card-actions justify-end mt-6">
          <Link to={`/blogs/${blog?._id}`} className="btn btn-outline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
