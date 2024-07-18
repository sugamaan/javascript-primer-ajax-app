console.log("index.js: loaded");

function getUserInfo(userId) {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then((response) => {
      console.log(response.ok);
      return response.json().then((userInfo) => {
        console.log(userInfo);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
