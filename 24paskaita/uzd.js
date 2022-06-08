// const createUserRow = (user) => {
//     const tdId = document.createElement("td");
//     const tdName = document.createElement("td");
//     const tdCity = document.createElement("td");
//     const tdFavColor = document.createElement("td");
//     tdId.textContent = user.id;
//     tdName.textContent = user.name;
//     tdCity.textContent = user.city;
//     tdFavColor.textContent = user.fav_color;

//     const trUser = document.createElement("tr");
//     trUser.append(tdId, tdName, tdCity, tdFavColor);

//     return trUser;
// };
// const renderUser = (user) => {
//     const table = document.createElement("table");
//     const thId = document.createElement("th");
//     const thName = document.createElement("th");
//     const thCity = document.createElement("th");
//     const thFavColor = document.createElement("th");
//     thId.textContent = "ID";
//     thName.textContent = "Name";
//     thCity.textContent = "City";
//     thFavColor.textContent = "Favourite color";
//     table.append(thId, thName, thCity, thFavColor);
//     const trHead = document.createElement("tr");
//     trHead.append(thId, thName, thCity, thFavColor);
//     const tbody = document.createElement("tbody");
//     const thead = document.createElement("thead");
//     thead.append(trHead);
//     table.append(thead,tbody);
//     document.body.append(table); 
//     user.forEach(user => tbody.append(createUserRow(user)));
// }

// fetch("https://magnetic-melon-yam.glitch.me")
// .then((resp) => resp.json())
// .then((response) => {
//     renderUser(response);
// }).catch((error) => {
//     console.error(error, ": Failed to load user");
// })

