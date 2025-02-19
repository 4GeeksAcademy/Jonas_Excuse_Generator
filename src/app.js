let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function excuseGenerator () {
  let randomWho = who[Math.floor(Math.random()* who.length)];
  let randomAction = action[Math.floor(Math.random()* action.length)];
  let randomWhat = what[Math.floor(Math.random()*what.length)];
  let randomWhen = when[Math.floor(Math.random()*when.length)];

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}


function getRandomImage() {
  let randomNumber = Math.floor(Math.random() * 9) + 1;
  return `img/${randomNumber}.jpg`;
}

function updateExcuseAndImage() {
  let excuseElement = document.getElementById("excuse");
  let imageElement = document.getElementById("excuse-image");

  excuseElement.innerHTML = excuseGenerator();
  imageElement.src = getRandomImage();
}

// Ejecutar cuando la página carga
window.onload = function() {
  let button = document.querySelector(".btn-primary");

  updateExcuseAndImage(); // Hay que llamar a la función para que muestre la primera excusa e imagen

  // Evento para actualizar excusa e imagen al pulsar el botón
  button.addEventListener("click", updateExcuseAndImage);
};