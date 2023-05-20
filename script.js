// Sample data
var users = [
  { id: 1, name: "John", age: "18", profession: "developer" },
  { id: 2, name: "Jack", age: "20", profession: "developer" },
  { id: 3, name: "Karen", age: "19", profession: "admin" },
];

// Function to display users
function displayUsers(users) {
  var userList = document.getElementById("user-list");
  userList.innerHTML = ""; // Clear previous list

  users.forEach(function (user) {
    var card = document.createElement("div");
    card.classList.add("user-card");

    var name = document.createElement("p");
    name.textContent = "Name: " + user.name;

    var age = document.createElement("p");
    age.textContent = "Age: " + user.age;

    var profession = document.createElement("p");
    profession.textContent = "Profession: " + user.profession;

    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(profession);

    userList.appendChild(card);
  });
}

// Function to filter users by profession
function filterUsers() {
  var professionSelect = document.getElementById("profession");
  var selectedProfession = professionSelect.value;

  if (selectedProfession === "") {
    alert("Please select a profession before clicking the filter button.");
    return;
  }

  var filteredUsers = users.filter(function (user) {
    return user.profession === selectedProfession;
  });

  displayUsers(filteredUsers);
}

displayUsers(users);
// Function to add a user

let i = 4;

function addUser() {
  var nameInput = document.getElementById("name").value;
  var ageInput = document.getElementById("age").value;
  var selectedProfession = document.getElementById("newProfession").value;
  users.push({
    id: i,
    name: nameInput,
    age: ageInput,
    profession: selectedProfession,
  });
  displayUsers(users);
  i++;
}
