//Remove "Tap to begin" and start the test
function functionStarts() {
    document.querySelector(".begin-text").innerHTML="";
    document.querySelector(".container").style.cursor="default"
    startTest(); 
}


//Generate Random HEX Color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


//Generate Random Position
function getRandomPosition() {
  return {
    x: Math.random() * 850 + "px",
    y: Math.random() * 290 + "px"
  };
}

//appears the box and start the timer
function startTest(){
    const pos = getRandomPosition();
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.backgroundColor = getRandomColor();
    box.style.marginLeft = pos.x;
    box.style.marginTop = pos.y;
    start= Date.now();
}


//end timer and caculate in seconds and displays in alert
function boxClicked(){
    const end = Date.now();
    const reactionTime = (end-start)/1000;
    alert("Your reaction time is "+ reactionTime +" seconds!");
}



let box = document.querySelector("#box");