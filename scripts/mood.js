const btnSwitch = document.querySelector("#switchId");

btnSwitch.addEventListener("click", () => {
    //Se agrega una clase al body
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
});

