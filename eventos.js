const divElement = document.createElement("div");
divElement.style.padding = "5px";
divElement.style.backgroundColor = "green";


document.body.appendChild(divElement);

divElement.addEventListener("click", function() {
    alert("Hola! Soy el div");
});
