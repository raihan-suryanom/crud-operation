import { useSelector } from 'react-redux';
import { Input } from '.';

const Forms = ({
  postId,
  setPostId,
  userId,
  setUserId,
  title,
  setTitle,
  body,
  setBody,
  action,
}) => {
  const { isLoading } = useSelector((state) => state.data);

  const submitHanlder = (event) => {
    event.preventDefault();
    action();
  };

  return (
    <form onSubmit={submitHanlder} className="flex flex-col items-center gap-5">
      {postId !== undefined && (
        <Input
          value={postId}
          onChange={setPostId}
          type="number"
          placeholder="Post Id"
          id="postId"
          min="1"
          name="postId"
          required
        />
      )}
      <Input
        value={userId}
        onChange={setUserId}
        type="number"
        placeholder="User ID"
        id="userId"
        min="1"
        name="userId"
        required
      />
      <Input
        value={title}
        onChange={setTitle}
        type="text"
        placeholder="Post Title"
        id="title"
        name="title"
        required
      />
      <Input
        value={body}
        onChange={setBody}
        type="textarea"
        placeholder="Write your post"
        id="body"
        name="body"
        required
      />
      <Input
        type="submit"
        id="submit_form"
        name="submit_form"
        value="Create"
        disabled={isLoading}
      />
    </form>
  );
};

export default Forms;
