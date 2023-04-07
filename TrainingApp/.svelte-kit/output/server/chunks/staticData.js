const serverUrl = "http://localhost:5000";
let person;
try {
  if (localStorage) {
    person = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  } else {
    person = null;
  }
} catch {
  person = null;
}
if (person)
  delete person.password;
let user = person;
export {
  serverUrl as s,
  user as u
};
