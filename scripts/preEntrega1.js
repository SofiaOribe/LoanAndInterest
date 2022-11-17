//Calcular el interes de un prestamo

alert("Bienvenido al simulador de préstamos");

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
            let capital = parseFloat(prompt("Monto solicitado.")); 

            //Se pide informacion sobre el plazo estimado a pagar
            let plazo = parseFloat(prompt("Plazo en meses.\n CUOTAS: \n - 12 \n - 6 \n - 3 \n - 2")); 

            //Calcula el interes
            let intereses = Math.round((capital*65*(plazo*30))/(100*365));

            //Suma los intereses y la cuota a pagar por mes
            let res = Math.round((intereses/plazo)+(capital/plazo));

            //Calculo IVA
            let iva = Math.round(0.21*intereses);

            //Muestra los resultados
            return alert(`El préstamo será devuelto en ${plazo} cuotas.\n\nLa cuota mensual es de $${(capital/plazo)} y el interes de $${(intereses)} \nLa cuota + los intereses por mes son: $${res}.\n Cuota + IVA (costo final de la primer cuota a pagar): $${(res+iva)}\n\n COSTO TOTAL = $${(res+iva)}\nEl costo total incluye servicios adicionales.`);

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