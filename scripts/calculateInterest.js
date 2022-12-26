const formInterest = document.getElementById('form-interest');
const containerShowII = document.getElementById('showInterest');
const STORAGEII = 'showInterest';
const recoverInterest = localStorage.getItem(STORAGEII);
const formError = document.getElementById('formError');


//Clases
class Interest {
    constructor(capitalII, interestII, time, unitOfTime) {
        this.capitalII = parseInt(capitalII);
        this.interestII = parseInt(interestII);
        this.time = parseInt(time);
        this.unitOfTime = parseInt(unitOfTime);
    }
};

//Funciones

//Función para crear alerta cuando el usuario no ingresa los datos
const errorSwalII = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must fill in all the boxes, try again.'
    });
}

const errorCalculateII = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must enter positive numbers, greater than zero. Try again.'
    });
}


//Funcion para limpiar intereses
const cleanInterest = () => {
    localStorage.removeItem(STORAGEII);
    containerShowII.innerHTML = '';
};

//Creo una función para mostrar los datos de intereses
const showInterest = (showII) => {

    let calculateInterest = Math.round((showII.capitalII*showII.interestII*showII.time)/(100*showII.unitOfTime));


    //Coloco los datos con innerhtml
    containerShowII.innerHTML = `
    <div class="container text-primary">
        <div class="row">Interest: $${calculateInterest.toLocaleString()}</div>
        <div class="p-2"></div>
        <button class="btn btn-secondary" onclick="cleanInterest()">Limpiar</button>
    </div>
    `;
};

//Creo una función para optimizar los datos a calcular
const addValueII = (values, events) => {
    //detecto con target y devuelvo los valores correspondientes
    return events.target[values].value;
};

//Recuperar valores guardados
const recoverValueSavedII = () => {
    if(recoverInterest) {
        const oldInterest = JSON.parse(recoverInterest);
        showInterest(oldInterest);
    }
};

recoverValueSavedII();


//Crear intereses ingesando datos
const handleSubmitII = (event) => {
    event.preventDefault();

    //Creo nuevos datos con la clase Interest
    //llamo a la función addValue para adquirir los datos de intereses de manera dinamica
    const newInterest = new Interest(addValueII('capitalII', event), addValueII('interestII', event), addValueII('time', event), addValueII('unitOfTime', event));
    if(addValueII('capitalII', event) === "" || addValueII('interestII', event) === "" || addValueII('time', event) === "" || addValueII('unitOfTime', event) === ""){
        errorSwalII();
        return;
    } else if(addValueII('capitalII', event) <= 0 || addValueII('time', event) <= 0 || addValueII('unitOfTime', event) <= 0) {
        errorCalculateII();
        return;
    }

    
    //guardo los datos en el localstorage, convierto newInterest a string
    localStorage.setItem(STORAGEII, JSON.stringify(newInterest));

    //Muestro los datos
    showInterest(newInterest);
};

formInterest.onsubmit = handleSubmitII;

console.log(formInterest);

