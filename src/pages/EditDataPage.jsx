import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Forms } from '../common/components';
import { editPosts } from '../features/post/postAPI';
import { setLoading, updateData } from '../features/post/postSlicer';

const EditDataPage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const [postId, setPostId] = useState('');
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onEdit = async (id, title, body, userId) => {
    try {
      dispatch(setLoading(true));
      const post = await editPosts({ id, title, body, userId });
      const target = data.map((i) => {
        if (i.id === post.id) return { ...post, userId: Number(post.userId) };

        return i;
      });

      dispatch(updateData(target));
      setPostId('');
      setUserId('');
      setTitle('');
      setBody('');
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };

  return (
    <main>
      <h1 className="text-center lg:text-4xl font-bold mb-5">Edit Post</h1>
      <Forms
        action={() => onEdit(postId, title, body, userId)}
        title={title}
        body={body}
        userId={userId}
        setUserId={setUserId}
        setTitle={setTitle}
        setBody={setBody}
        postId={postId}
        setPostId={setPostId}
      />
    </main>
  );
};

export default EditDataPage;
