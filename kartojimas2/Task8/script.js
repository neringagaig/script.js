/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Company" (naudokite ES5), kuri sukuria objektus
su property: name, startYear, founder ir avarageSalary
su metodu: getInfo() - parodo Įmonės pavadinimą, įkurta kuriais metais ir kas įkurėjas pvz. Facebook įkurta 2006, įkurėjas Zuckas
su metodu: getAvarageSalary(sign) - parodo vidutinę algą, sign paduodam ženklą ar žodį pvz. Vidutinė alga 3000$
------------------------------------------------------------------------------------ */

function Company(name, startYear, founder, averageSalary) {
  this.name = name;
  this.startYear = startYear;
  this.founder = founder;
  this.averageSalary = averageSalary;
  this.getInfo = () => {
    return `${this.name} sukūrė ${this.founder} ${this.startYear} metais`;
  };
  this.getAverageSalary = (sign) => {
    return ` vidutinis atlyginimas ${sign} ${this.averageSalary}`;
  };
}

const FB = new Company("Facebook", 2006, "Zuckas", 4500);

console.log(FB.getInfo());
console.log(FB.getAverageSalary("$"));
