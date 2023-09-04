const divElement = document.createElement("div");
divElement.style.padding = "5px";
divElement.style.backgroundColor = "green";
divElement.style.height = "50px";
divElement.textContent = "Click aqui";


document.body.appendChild(divElement);

divElement.addEventListener("click", function() {
    alert("Hola! Soy el div");
});
