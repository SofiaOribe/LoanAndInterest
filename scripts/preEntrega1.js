//Calcular el interes de un prestamo

alert("Bienvenido al simulador de préstamos");

class Prestamo{
    constructor (cuota, saldo, capital, intereses, sinIva, costoTotal){
        this.cuota = parseFloat(cuota);
        this.saldo = parseFloat(saldo);
        this.capital = parseFloat(capital);
        this.intereses = parseFloat(intereses);
        this.sinIva = parseFloat(sinIva);
        this.costoTotal = parseFloat(costoTotal);
    }
}

//Función calcular intereses del prestamo
const calcularInteres = (monto, intAnual, timePago, uniTime) => {
        //Realizo el calculo de interes
        //Math.round redondea
        let intereses = Math.round((monto*intAnual*timePago)/(100*uniTime));
        return alert(`El monto a pagar por el adelanto de los fondos es:\n $${intereses}`);

}

const pedirPrestamo = () => {
    //Se envia un mensaje al usuario para preguntar si desea continuar la operaciom
    let contPrestamo = prompt("Estás a punto de pedir un préstamo personal.\n ¿Deseas continuar?, S = si, N = no.");

    //Si el usuario desea continuar se pide que se ingrese valores positivos mayores que 0
    if(contPrestamo == "S" || contPrestamo == "s"){
            alert("Debe ingresar valores positivos y mayores que 0");

            //Pide que se inserte el valor que desea pedir = capital
            let saldo = parseFloat(prompt("Monto solicitado.")); 

            //Se pide informacion sobre el plazo estimado a pagar
            let plazo = parseFloat(prompt("Plazo en meses.\n CUOTAS: \n - 12 \n - 6 \n - 3 \n - 2")); 

            if(saldo > 0 && plazo > 0){
                for(let i = 1; i <= plazo; i++){
                    //Capital mensual
                    let capital = (saldo/plazo);
        
                    //Calcula el interes
                    let intereses = Math.round((saldo*65*(plazo*30))/(100*365));
                
                    //Suma los intereses y la cuota a pagar por mes CUOTA SIN IVA
                    let sinIva = Math.round((intereses)+(capital));
        
                    //Calculo IVA
                    let iva = Math.round(0.21*intereses);
        
                    //Se calcula el costo total
                    let costoTotal = Math.round(capital+intereses+iva);
                    
                    //Se guardan los datos en un array de objetos
                    const cantidad = [];
                    cantidad.push(new Prestamo(i, saldo, capital, intereses, sinIva, costoTotal));
                    //Muestro los datos a partir de un for of 
                    for(const cant of cantidad){
                        alert(`
                        CUOTA:${i}
                        SALDO: $ ${cant.saldo}
                        CAPITAL: $ ${cant.capital}
                        INTERES: $ ${cant.intereses}
                        CUOTA SIN IVA: $ ${cant.sinIva}
                        IVA 21,00%: $ ${iva}
                        COSTO TOTAL MENSUAL: $ ${cant.costoTotal}`);

                    }
                }
            }

            return menuOpciones();

    } else {
        //Vuelve al menu de opciones
        menuOpciones();
    }
}

//Función menú de opciones

const continuar = (opcion) => {
    if(opcion == "s" || opcion == "S"){//Si la opcion es Si
        menuOpciones();//vuelve al menu de opciones
     } else {
        opcion = "ESC";//Sino termina el ciclo
     }
}

const menuOpciones = () => {
    let menuOp = prompt("Seleccione una opción:\n1-Calcular interés.\n2-Pedir préstamo personal.\n3-Salir");//Se pide que seleccione una opcion y se guarda en una variable
    let conti;//Creo variable para acceder a la funcion continuar
    switch(menuOp){//Se abre la opcion indicada en la primer variable
        case "1": //Opcion 1: calcula prestamos
            //Pido al usuario que inserte los valores y los guardo en variables
            alert("Debe ingresar valores positivos y mayores que 0");
            let monto = prompt("¿Cuál es el monto del préstamo?");
            let intAnual = prompt("¿Cuál es el interés que se le aplica a su capital? TNA/TEA, entre otros.");
            let timePago = prompt("¿Cuánto tiempo demorará en pagar la operación?");
            let uniTime = prompt("Elegir la unidad de tiempo en formato numérico:\n-Anual: 365 días.\n-Semestral: 180 días.\n-Trimestral: 90 días.\n-Bimestral: 60 días.");
            //paso las variables a la funcion para calcular interes
            calcularInteres(monto, intAnual, timePago, uniTime);

            //consulto al usuario si desea continuar
            conti = prompt("¿Desea continuar?\n S = si, N = no.");
            continuar(conti);
        break;
        case "2": //Opción 2: se abre el simulador de prestamos
            pedirPrestamo();
            conti = prompt("¿Desea continuar?\n S = si, N = no.");
            continuar(conti);
        break;
        default:
            //En el caso de que seleccione la opcion 3 o cualquier otra, se cierra el programa
            menuOp = "ESC";
        break;
    }
}

//Llamo a la funcion principal
menuOpciones();