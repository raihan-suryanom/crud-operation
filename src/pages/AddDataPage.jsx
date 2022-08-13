import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Forms } from '../common/components';
import { addPosts } from '../features/post/postAPI';
import { incrementId, setLoading, addData } from '../features/post/postSlicer';

const AddDataPage = () => {
  const dispatch = useDispatch();
  const { latestId } = useSelector((state) => state.data);
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onAdd = async (title, body, userId) => {
    try {
      dispatch(setLoading(true));
      const data = await addPosts({ title, body, userId });

      dispatch(addData({ ...data, userId: Number(data.userId), id: latestId }));
      dispatch(incrementId());
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
      <h1 className="text-center lg:text-4xl font-bold mb-5">Add Post</h1>
      <Forms
        action={() => onAdd(title, body, userId)}
        title={title}
        body={body}
        userId={userId}
        setUserId={setUserId}
        setTitle={setTitle}
        setBody={setBody}
      />
    </main>
  );
};

export default AddDataPage;
