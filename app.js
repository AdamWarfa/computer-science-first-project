document.body.innerHTML += "Hello JavaScript!";
// alert("Hello Dat.js");
alert("Hello Dat.js");
console.log("Hello Dat.js");
console.log("Hi Students!");
console.log("This is your first JavaScript App 🎉");
function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " + document.querySelector("#name").value;
}
document.querySelector("button").addEventListener("click", sayHello);
