const BASE_API = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
  const response = await fetch(BASE_API, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  const result = await response.json();

  return result;
};

export const fetchDetailPost = async (id) => {
  const response = await fetch(`${BASE_API}/${id}`, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  const result = await response.json();

  return result;
};

export const addPosts = async (body) => {
  const response = await fetch(BASE_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();

  return result;
};

export const editPosts = async (body) => {
  const response = await fetch(`${BASE_API}/${body.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();

  return result;
};

export const deletePost = async (id) => {
  const response = await fetch(`${BASE_API}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  const result = await response.json();

  return result;
};
