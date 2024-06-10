import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import BlogCard from "../../components/BlogCard";
import { Helmet } from "react-helmet-async";

function Blogs() {
  const axiosPublic = useAxiosPublic();
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      return res.data;
    },
  });
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Helmet>
        <title>GoBlood Bank - Blogs</title>
      </Helmet>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
