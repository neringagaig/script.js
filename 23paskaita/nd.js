// const renderComment = (comment) => {
//     const p = document.createElement("p");
//     p.textContent = `${comment.email}, ${comment.name}, ${comment.body}`;
//     document.body.prepend(p);
// };

// fetch("https://jsonplaceholder.typicode.com/comments")
// .then((resp) => resp.json())
// .then((response) => {
// // atvaizduoti pirmo elemento duomenis
// const firstItem = response[0];
// //parodyti hmtl'e emaila varda ir teksta
// // const p = document.createElement("p");
// // p.textContent = `${firstItem.email}, ${firstItem.name}, ${firstItem.body}`;
// renderComment(firstItem);
// }).catch((error) => {
// console.error(error, ": Failed to load comments");
// });

// const renderUser = (user) => {
//     const p = document.createElement("p");
//     p.textContent = `${user.address}, ${user.name}, ${user.company}`;
//     document.body.prepend(p);
// };

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((resp) => resp.json())
// .then((response) => {
// // atvaizduoti pirmo objekto adress, company ir name. Juos sudeti i atskirus kintamuosius
// const firstUser = response[0];
// const address = firstUser.address;
// const company = firstUser.company;
// const name = firstUser.name;
// console.log(address, company, name);
// renderUser(firstUser);
// })
// .catch((error) => {
// console.error(error, ": Failed to load users");
// });

fetch("https://jsonplaceholder.typicode.com/users")
.then((resp) => resp.json())
.then((response) => {
// atvaizduoti userio name, username, email ir city ekrane
renderUser = (user) => {
    const addressCity = user.address.city;
    const companyName = user.company.name;
    const email = user.email;
    const tableDataAddressCity = document.createElement("td");
    const tableDataCompanyName = document.createElement("td");
    const tableDataEmail = document.createElement("td");
    tableDataAddressCity.textContent = addressCity;
    tableDataCompanyName.textContent = companyName;
    tableDataEmail.textContent = email;

    const tableRowUser = document.createElement("tr");
    tableRowUser.append(tableDataAddressCity, tableDataCompanyName, tableDataEmail);

    const tbody = document.getElementById("users").append(tableRowUser);
};
// const firstItem = response [0];
renderUser(response[0]);

response.forEach(user => renderUser(user));
//masyvo ciklas foreach viska parodo

})
.catch((error) => {
console.error(error, ": Failed to load user");
});

// fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(e => console.log(e.message))

const renderUserCard = (user) => {
    const photo = document.createElement("img");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const street = document.createElement("p");
    photo.src = "https://g4.dcdn.lt/images/pix/vyras-81892715.jpg";
    photo.alt = `${user.username} photo`;
    userName.textContent = user.username;
    email.textContent = user.email;
    street.textContent = user.address.street;
    street.style.color = "green";
    email.style.color = "grey";

    const card = document.createElement("div");
    card.className = "card";
    card.append(photo, userName, email, street);

    document.querySelector(".cards").append(card);

}

fetch("https://jsonplaceholder.typicode.com/users/1")
.then((resp) => resp.json())
.then((response) => {
//atvaizduoti name username email amziu html
//ideti random nuotrauka ir padaryti carda
renderUserCard(response);

// response.forEach(user => renderUser(user));
//masyvo ciklas foreach viska parodo

})
.catch((error) => {
console.error(error, ": Failed to load user");
});

const checkIfPersonVIP = (guests, guestName) => {
    const guest = guests.find(guest => guest.name === guestName);
    document.body.textContent = guest ? `${guestName} ${guest.vip ? 'is' : 'isn\'t'} a VIP` : `${guestName} isn't found in the guest list`;
}
  
fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party')
.then(resp => resp.json())
.then(response => {
checkIfPersonVIP(response);
response.forEach(guest => checkIfPersonVIP(guests, guestName));

}).catch ((error) => {
      console.error(error);
});

  

const displayGuests = (guests) => {
    const tbody = document.querySelector('tbody');
    guests.forEach(guest => {
      const name = document.createElement('td');
      name.textContent = guest.name;
  
      const attending = document.createElement('td');
      attending.textContent = guest.attending ? '+' : '-';
  
      const plusOne = document.createElement('td');
      plusOne.textContent = guest.plusOne ? '+' : '-';
  
      const tr = document.createElement('tr');
      tr.append(name, attending, plusOne);
      tbody.append(tr);
    })
}
  
fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding')
.then(resp => resp.json())
.then(response => {
    displayGuests(response);
}).catch((error) => {
    console.error(error);
});
  
