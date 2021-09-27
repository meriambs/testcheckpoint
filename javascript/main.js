// Image switcher code , ici avec un evenement qui est le click avec la souris on va pouvoir switcher entre deux images 

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Bubble-Confetti-Effect-For-Button.png') {
    myImage.setAttribute ('src','images/gif-good-job-80.gif');
  } else {
    myImage.setAttribute ('src','images/Bubble-Confetti-Effect-For-Button.png');
  }
}

// Personalized welcome message code , changement du nom de bienvenue grace au button change user qui se trouve en bas de la page 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome, ' + storedName;
}
// clic sur le button pour afficher el prompt et changer le nom 
myButton.onclick = function() {
  setUserName();
}