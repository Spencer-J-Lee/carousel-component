const posts = [];

for (let i = 0; i < 25; i++) {
  const newPost = {};
  newPost['id'] = i;
  newPost['title'] = `Title${i}`;
  newPost['username'] = `Username${i}`;
  posts.push(newPost);
};

export default posts;
