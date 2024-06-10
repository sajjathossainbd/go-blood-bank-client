import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import { FaPencil } from "react-icons/fa6";
import { LuClock10 } from "react-icons/lu";

function BlogDetails() {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: blog = {}, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogs/${id}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <LoadingSpinner />;
  }

  const { image, title, author, date, content } = blog;
  return (
    <>
      <Helmet>
        <title>GoBlood Bank - Details</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 max-sm:px-6 gap-10 my-10 items-center justify-center">
        <div className=" rounded-lg flex items-center justify-center py-16">
          <img className="rounded-lg h-full" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <FaPencil />
              <p>{author}</p>
            </div>
            <div className="flex items-center gap-2">
              <LuClock10 />
              <p>{date}</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold my-2">{title}</h2>
          <p>{content}</p>

          <div className="border-b-[0.2px] border-solid my-2"></div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
