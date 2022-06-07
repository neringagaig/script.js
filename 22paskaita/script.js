// const networkRequest = () => {
//     setTimeout(() => {
//         console.log("Async code");
//     }, 2000);
// };

// console.log("hello world");
// networkRequest();
// console.log("the end");
// //set timeout galima nustatyti po kiek laiko pasirodys nurodyta komanda
// // 2000 tai yra 2 sek, is pradziu rodys hello world, tada the end ir
// // po 2 sek pasirodys async code

// const resolvePromise = new Promise((resolve, reject) => {
//     resolve("17 celsius, Vilnius");
// });

// resolvePromise.then(response => {
//     console.log(`dabar yra ${response}`);
// });

// const rejectedPromise = new Promise((resolve, reject) => {
//     reject ("tinklas yra perkrautas pabandykite veliau");
// });

// rejectedPromise.then(response => {
//     console.log(`dabar yra ${response}`);
// }).catch(error => {
//     console.error(error);
// }).finally(() => {
//     console.log("kreipimasis i oro tarnyba");
// });


const Promise = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve("17 celsius, Vilnius");
    // reject ("tinklas yra perkrautas pabandykite veliau");   
   }, 40000);
   // tam kad po 4 sek parodytu zinute
});

const renderWeather = (response) => {
    const weather = document.getElementById("weather");
    weather.textContent = `dabar yra ${response}`;
}
const showError = (err) => {
    const error = document.getElementById("error");
    error.textContent = err;
    error.style.color = "red";
}
const showPriceMessage = () => {
    const header = document.getElementById("header");
    header.textContent = "jus pasinaudojote oru paslauga, jums tai kainavo 5ct."
}

// Promise.then(response => {
//     //apsirasyti atvaizdavima
//     renderWeather(response);
// }).catch(error => {
//     showError(error);
// }).finally(() => {
//     showPriceMessage();
// });

const getWeather = async() => {
    
    try {
        const response = await Promise;
         renderWeather(response);
    } catch (error) {
        showError(error);
    } finally {
        showPriceMessage();
    }
}

getWeather();

// async function getWeatherFunc() {}
