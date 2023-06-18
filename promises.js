let posts = [];
let lastActive;

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

function lastActiveTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActive = new Date();
      resolve();
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 10000);
  });
}

promise1 = createPost("POST 1");
promise2 = lastActiveTime();
promise3 = createPost("POST 2");
promise4 = lastActiveTime();

Promise.all([promise1, promise2, promise3, promise4])
  .then(() => console.log(posts, lastActive))
  .then(deletePost)
  .then(() => lastActiveTime())
  .then(() => console.log(posts, lastActive));
