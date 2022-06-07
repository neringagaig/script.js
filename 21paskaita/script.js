const cookie = {
    timeSpent: "2h",
    looggedIn: "2022/06/01T18:00:00",
    theme: "dark",
}

document.cookie = "timeSpent=2h";
document.cookie = "loggedIn=2022/06/01T18:00:00";
document.cookie = "theme=dark";

localStorage.setItem("name", "Neringa");
localStorage.setItem("surname", "Gaigalaitė");

const button = document.getElementById("save");

button.addEventListener("click", () => {
  const name = document.querySelector("input[name='name']");
    const surname = document.querySelector("input[name='surname']");

    const fullName = `${name.value} ${surname.value}`;
    const result = document.getElementById("full-name");
    result.textContent = fullName;

    localStorage.setItem("fullName", fullName);
});

//set su to local storage stringified value

const stringified = JSON.stringify(profileInfo);
localStorage.getItem("profile");

// parse stringified value from local storage

const parsed =JSON.parse(stringified);
//tai yra naudojama tam, kad ikelti info i local storage ir istraukti ja