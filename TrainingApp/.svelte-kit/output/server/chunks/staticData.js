const serverUrl = "http://localhost:5000";
let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
if (user)
  delete user.password;
export {
  serverUrl as s,
  user as u
};
