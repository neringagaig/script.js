// objekto savybe (property) [melyna spalva] yra reikšmės (string, number, array, object ir t.t.)
//objekto metodai (method) yra funkcija, reikia iskviesti ir paduoti parametrus pvz getelementbyid (geltona spalva)

//index.html yra document

const nameInput = document.getElementById("name");

// console.log(nameInput.textContent);
// console.log(nameInput.innerText);
// console.log(nameInput.innerHTML);
// taip galima istraukti elemento vidu

// nameInput.addEventListener("click", handleClickOnName);

// function handleClickOnName(event) {
//     nameInput.style.color = "red" ;
//     nameInput.style.background = "blue";
//     nameInput.style.textAlign = "right";
//     nameInput.style.fontSize = "72px";
// }

// const jumpButton = document.getElementById("jump");

// jumpButton.addEventListener("click", handleJump);

// jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px";


// let inTop = true;

// function handleJump () {
//     if(inTop){
//         jumpButton.style.cssText = "position: absolute; bottom: 30px; left: 30px;"
//        jumpButton.textContent = "Jump to top";
//         inTop = false;
//     }else {
//         jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px";
//         jumpButton.textContent = "Jump to bottom";
//         inTop = true;
//     }

//     // inTop = !inTop;
// }

const backwards = document.getElementById("backwards");
backwards.addEventListener("click", handleGoBackwards);
let position = 0;
const topLeft = "position: absolute; top: 10px; left: 10px;";
const topRight = "position: absolute; top: 10px; right: 10px;";
const bottomRight = "position: absolute; bottom: 10px; right: 10px;";
const bottomLeft = "position: absolute; bottom: 10px; left: 10px;";

function handleGoBackwards () {
    if(position === 0){
        backwards.style.cssText = topLeft;
    }else if (position === 1) {
        backwards.style.cssText = topRight;
    }else if (position === 2) {
        backwards.style.cssText = bottomRight;
    }else{
        backwards.style.cssText = bottomLeft;
        position = -1;
    }
    position++;
}
