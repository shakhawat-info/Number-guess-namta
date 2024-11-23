let one = document.querySelector(".one");
let two = document.querySelector(".two");

let inpOne = document.querySelector(".inp1");
let inpTwo = document.querySelector(".inp2");

let btnOne = document.querySelector(".btn1");
let btnTwo = document.querySelector(".btn2");

let statusOne = document.querySelector(".status1");
let statusTwo = document.querySelector(".status2");

let numtabox = document.querySelector('.numta') 

let count  = 5

two.style.display = "none";

btnOne.addEventListener("click", () => {
  if (!inpOne || inpOne.value < 1 || inpOne.value > 10) {
    statusOne.innerHTML = "Please Input a Number Between 1-10";
    statusOne.style.color = "#ff0000";
    statusOne.style.display = "block";
  } else {
    one.style.display = "none";
    two.style.display = "block";
  }
});

btnTwo.addEventListener("click", () => {
  if (!inpTwo || inpTwo.value < 1 || inpTwo.value > 10) {
    statusTwo.innerHTML = "Please Input a Number Between 1-10";
    statusTwo.style.color = "#ff0000";
    statusTwo.style.display = "block";
} else {
    count--
    if(inpOne.value != inpTwo.value){
        statusTwo.innerHTML = `You can try ${count} times`;
    }
     if(count < 1){
        numtabox.innerHTML = 'Player 1 Winer'
        statusTwo.innerHTML = 'You have no chance';
        statusTwo.style.color = '#ff00';
    }
      if(inpOne.value == inpTwo.value){
        statusTwo.innerHTML = `Good`;
        statusTwo.style.color = 'green';
        numtabox.innerHTML = ''
        namta()
    }
  }

});

function namta(){
for(let n = 1 ; n <= 10 ; n++){
    numtabox.innerHTML += `${inpOne.value} x ${n} = ${inpOne.value * n} <br>`;
}
}