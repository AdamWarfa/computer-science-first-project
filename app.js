document.body.innerHTML += "Hello JavaScript!";
// alert("Hello Dat.js");
alert("Hello Dat.js");
console.log("Hello Dat.js");
console.log("Hi Students!");
console.log("This is your first JavaScript App 🎉");
function sayHello() {
  document.querySelector("h3").textContent =
    "Man like " + document.querySelector("#name").value + " yeye";
}
document.querySelector("button").addEventListener("click", sayHello);
