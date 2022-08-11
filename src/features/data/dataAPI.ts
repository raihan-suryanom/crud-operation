const BASE_API = 'https://jsonplaceholder.typicode.com/posts';

export const fetchData = async (): Promise<{ data: number }> => {
  const response = await fetch(BASE_API, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  const result = await response.json();

  return result;
};
