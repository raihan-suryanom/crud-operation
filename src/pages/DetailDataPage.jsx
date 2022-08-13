import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailPost } from '../features/post/postAPI';
const DetailDataPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const data = await fetchDetailPost(id);
      setPost(data);
      setIsLoading(false);
    }
    fetch();
  }, [id]);

  return (
    <main className="text-center flex flex-col items-center px-10">
      <h1 className="lg:text-4xl font-bold mb-5">Detail Post</h1>
      {isLoading && (
        <>
          <span className="animate-pulse w-1/4 mx-auto bg-slate-500 h-5" />
          <span className="animate-pulse w-1/2 mx-auto bg-slate-500 h-5" />
        </>
      )}
      <h2 className="capitalize font-medium text-2xl text-primary">
        {post?.title}
      </h2>
      <p className="first-letter:capitalize text-lg">{post?.body}</p>
    </main>
  );
};

export default DetailDataPage;
