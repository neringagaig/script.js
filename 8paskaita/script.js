const salaryCheckerForm = document.querySelector("form");

salaryCheckerForm.addEventListener("submit", handleSalaryCheckerForm);

function handleSalaryCheckerForm(event) {
event.preventDefault();

const field = document.querySelector("select[name=jobField]").value;
const position = document.querySelector("input[name=position]").value;
const gender = document.querySelector("input[name=gender]:checked").value;
const experience = document.querySelector("input[name='experience']").value;
console.log(field);
console.log(position);
console.log(gender);
console.log(experience);

if(field==="manegment"){
    const genderSalary = calculateGenderSalary(gender, 48000);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);
    alert(`average salary $ ${finalSalary}`)

} else if (field === "it"){
    const genderSalary = calculateGenderSalary(gender, 91000);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);
    alert(`average salary $ ${finalSalary}`)
} else if (field === "construction") {
    const genderSalary = calculateGenderSalary(gender, 66000);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);
    alert(`average salary $ ${finalSalary}`)
} else {
    const genderSalary = calculateGenderSalary(gender, 120000);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);
    alert(`average salary $ ${finalSalary}`)
}
}

function calculateGenderSalary(gender, salary){
    if(gender === "male"){
        return salary
    } else if (gender === "female") {
        return salary * 0.83;
    } else {
        return salary * 0.91;
    }
}

function calculateExperienceSalary(experience, salary) {
   const flooredExperience = Math.floor(experience);
    if (flooredExperience >= 0 && flooredExperience <= 2){
        return salary * 0.5;
    } else if (flooredExperience >= 3 && flooredExperience <=5){
        return salary;
    } else {
        return salary * 1.5;
    }
}


