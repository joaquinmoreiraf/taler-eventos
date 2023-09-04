const divElement = document.createElement("div");
divElement.style.padding = "5px";
divElement.style.backgroundColor = "green";
divElement.textContent = "Haz clic en mí";

document.body.appendChild(divElement);

divElement.addEventListener("click", function() {
    alert("Hola! Soy el div");
});
