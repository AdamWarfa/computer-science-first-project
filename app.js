document.body.innerHTML += "Hello JavaScript!";
// alert("Hello Dat.js");
// alert("Hello Dat.js");
// console.log("Hello Dat.js");
// console.log("Hi Students!");
// console.log("This is your first JavaScript App 🎉");

function sayHello() {
  const greeting = document.querySelector("h3");
  let firstName = document.querySelector("#name").value;
  let age = document.querySelector("#age").value;
  let shoutOut = `Man like ${firstName} yeye, ${age} years old n dat`;

  greeting.textContent = shoutOut;
}
document.querySelector("button").addEventListener("click", sayHello);
