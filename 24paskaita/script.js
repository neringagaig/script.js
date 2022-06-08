// const fetchRandomUser = async () => {
//     try {
//     const response = await fetch('https://randomuser.me/api/');
//     if (response.ok) {
//     const data = await response.json();
//     renderUserCard(data.results[0]);
//     }
//     } catch(error) {
//     console.error(error);
//     }
// };
    
// fetchRandomUser();
// //asinkchronine f-ja galima rasyti await, t.y. laukti
// const getRandomUser = async () => {
//     try {
//       const resp = await fetch('https://randomuser.me/api/');
//       const response = await resp.json();
//       console.log(response);
//     } catch (error) {
//         console.error(error);
//     };
// };
// getRandomUser()

// fetch('https://randomuser.me/api/')
//     .then(resp => resp.json())
//     .then(response => {
//         console.log(response);
//     }).catch(error) => {
//         console.error(error);
//     };


