let users = [];
function ifUserExist(userInput) {
  let checkUser = users.filter((user) => {
    return user.email == userInput.email;
  })

  if (checkUser.length == 0) {
    users.push(userInput);
  } 
  else {
    alert('user already exist');
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
    userDisplayContainer.appendChild(userDiv);
    userDiv.appendChild(username);
    userDiv.appendChild(useremail);
  });
}

function adduser() {
  let name = document.getElementById("name-field");
  let email = document.getElementById("email-field");

  let user = {
    name: name.value,
    email: email.value,
  };
  ifUserExist(user);
  UserDisplay();
}
// console.log(users);
