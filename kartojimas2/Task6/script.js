const routes = [
  { name: "A", distance: 2200, danger: true },
  { name: "B", distance: 2404, danger: false },
  { name: "C", distance: 3100, danger: true },
  { name: "D", distance: 1700, danger: false },
  { name: "E", distance: 2500, danger: true },
  { name: "F", distance: 6300, danger: true },
  { name: "G", distance: 1600, danger: true },
  { name: "H", distance: 3000, danger: false },
  { name: "I", distance: 5100, danger: true },
];

/* ------------------------------ TASK 6 -----------------------------------
Turimas "routes" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis
1. funkcija "getDangerRoutesTotalDistance" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins pavojingų "routes" atkarpų sumą.
2. funkcija "getRoutesDistances" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "routes" atkarpas naujame masyve pvz., ['2200', '2404'..].
-------------------------------------------------------------------------- */
function getDangerRoutesTotalDistance(routeArr) {
  const dangerRoutes = routeArr.filter((route) => route.danger);
  return dangerRoutes.reduce((total, route) => (total += route.distance), 0);
}
//reduce array metodas kai reiksmes viena po kitos eina atlieka su jomis veiksmus
// kinta route, total nekinta, t.y. total 0, tada 0+2200, tada 2200+3100 ir t.t.
// o route tai a, c, e ir t.t. masyvo eilutes bus

const totalOfDangerRoutes = getDangerRoutesTotalDistance(routes);

console.log(totalOfDangerRoutes);

function getRoutesDistances(routeArr) {
  return routeArr.map((route) => route.distance);
}

const routesDistences = getRoutesDistances(routes);
console.log(routesDistences);
