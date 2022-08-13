export const getUniquePosts = (data) => {
  let idPost = [];

  data.forEach(({ userId }) => {
    if (idPost?.[userId - 1] === undefined) {
      idPost = [...idPost, { userId, totalPosts: 1 }];
    } else {
      idPost[userId - 1].totalPosts = idPost[userId - 1].totalPosts + 1;
    }
  });

  return idPost;
};

export const sortData = (data) => {
  return data.sort((a, b) => a.userId - b.userId);
};
