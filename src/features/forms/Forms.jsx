import { useState } from 'react';
import { Input } from '../../common/components';

const Forms = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitHanlder = () => {};

  return (
    <form onSubmit={submitHanlder} className="flex flex-col items-center gap-5">
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
      <Input type="submit" id="submit_form" name="submit_form" value="Create" />
    </form>
  );
};

export default Forms;
