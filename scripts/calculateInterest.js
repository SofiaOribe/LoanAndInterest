const formInterest = document.getElementById('form-interest');
const containerShowII = document.getElementById('showInterest');
const STORAGEII = 'showInterest';
const recoverInterest = localStorage.getItem(STORAGEII);

//Clases
class Interest {
    constructor(capitalII, interestII, time, unitOfTime) {
        this.capitalII = capitalII;
        this.interestII = interestII;
        this.time = time;
        this.unitOfTime = unitOfTime;
    }
};

//Funciones

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
    <div class="container">
        <div class="row">Interest: $${calculateInterest.toLocaleString('es')}</div>
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

    //guardo los datos en el localstorage, convierto newInterest a string
    localStorage.setItem(STORAGEII, JSON.stringify(newInterest));

    //Muestro los datos
    showInterest(newInterest);
};

formInterest.onsubmit = handleSubmitII;

console.log(formInterest);

