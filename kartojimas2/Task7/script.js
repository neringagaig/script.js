/* ------------------------------ TASK 7 -----------------------------------
Turimas "computer" objektas.

1. Parašykite funkciją showObjectValues, kuri kaip argumentą priims objectą 
ir grąžins visus jo "values" masyve.

2. Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "keys" masyve.
-------------------------------------------------------------------------- */
const computer = {
  cpu: "Intel Mobile Celeron N3350",
  ram: "4gb",
  resolution: "1366x768",
  battery: "4800 mAh, 7.4 V",
  os: "Windows 10",
};

console.log(Object.keys(computer)); //grazina raktus pvz cpu, ram ir t.t.
console.log(Object.values(computer)); // grazina reiksmes intel mobile, 4 gb ir t..t.
console.log(Object.entries(computer)); //grazina [raktas,reiksme] masyva

Object.keys(computer).forEach((key) => {
  if (key === "ram") {
    console.log("random access memory");
  } else if (key === "os") {
    console.log("operating system");
  } else {
    console.log(key);
  }
});

function showObjectValues(object) {
  return Object.values(object);
}
console.log(showObjectValues(computer));

function showObjectKeys(object) {
  return Object.keys(object);
}
console.log(showObjectKeys(computer));

Object.entries(computer).forEach((entry) => {
  const key = entry[0];
  const value = entry[1];
  console.log(`${key} turi ${value}`);
});
