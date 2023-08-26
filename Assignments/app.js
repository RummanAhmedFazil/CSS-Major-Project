let users = [];
let randomCenter = Math.floor(Math.random()*4)
let center = ['Delhi','Mumbai', 'Pune', 'Bangalore', 'Hyderabad']

function notifyUserExist() {
  let alert = document.getElementById("alert-danger");
  alert.classList.remove("alert");
  alert.classList.add("alert-danger");
  setTimeout(() => {
    alert.classList.remove("alert-danger");
    alert.classList.add("alert");
  }, 2000);
}
function notifyUserAdded() {
  let alert = document.getElementById("alert-success");
  alert.classList.remove("alert");
  alert.classList.add("alert-success");
  setTimeout(() => {
    alert.classList.remove("alert-success");
    alert.classList.add("alert");
  }, 2000);
}

function ifUserExist(userInput) {
  let checkUser = users.filter((user) => {
    return user.email == userInput.email;
  });

  if (checkUser.length == 0) {
    users.push(userInput);
    notifyUserAdded();
  } else {
    notifyUserExist();
    // alert('user already exist');
    // console.log("Hello");
  }
}

function UserDisplay() {
  let userDisplayContainer = document.getElementById("user-display");
  userDisplayContainer.innerHTML = "";
  users.map((user) => {
    let userDiv = document.createElement("div");
    userDiv.classList.add("user");
    let username = document.createElement("p");
    username.innerText = user.name;
    let useremail = document.createElement("p");
    useremail.innerText = user.email;
    let usercenter = document.createElement("p");
    usercenter.innerText = center[randomCenter];
    userDisplayContainer.appendChild(userDiv);
    userDiv.appendChild(username);
    userDiv.appendChild(useremail);
    userDiv.appendChild(usercenter);
  });
}

function adduser() {
  let name = document.getElementById("name-field");
  let email = document.getElementById("email-field");

  let user = {
    name: name.value,
    email: email.value,
  };
  // console.log(center[randomCenter]);
  ifUserExist(user);
  UserDisplay();
}
// console.log(users);
