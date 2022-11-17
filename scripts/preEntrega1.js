//Calcular el interes de un prestamo

alert("Bienvenido al simulador de préstamos");

//Función calcular intereses del prestamo
const calcularInteres = (monto, intAnual, timePago, uniTime) => {

        let resultado = Math.round((monto*intAnual*timePago)/(100*uniTime));
        return alert(`El monto a pagar por el adelanto de los fondos es:\n $${resultado}`);

}

const pedirPrestamo = () => {
    let contPrestamo = prompt("Estás a punto de pedir un préstamo personal.\n ¿Deseas continuar?, S = si, N = no.");

    if(contPrestamo == "S" || contPrestamo == "s"){
            alert("Debe ingresar valores positivos y mayores que 0");
            let cantidad = parseFloat(prompt("Monto solicitado."));
            let plazo = parseFloat(prompt("Plazo en meses.\n CUOTAS: \n - 12 \n - 6 \n - 3 \n - 2"));

            let cuotaCapInt = Math.round((cantidad*70.8*(plazo*30))/(100*365));
            let res = Math.round((cuotaCapInt/plazo) + (cantidad/plazo));

            return alert(`El préstamo será devuelto en ${plazo} cuotas.\n\nLa cuota mensual es de $${Math.round(cantidad/plazo)} y el interes de $${Math.round(cuotaCapInt)} \nLa cuota + los intereses por mes son: $${res}.\n Cuota + IVA (costo final de la primer cuota a pagar): $${res+483}\n\n COSTO TOTAL = $${res+483+904}\nEl costo total incluye servicios adicionales.`);

    } else {
        menuOpciones();
    }
}

//Función menú de opciones

const continuar = (opcion) => {
    if(opcion == "s" || opcion == "S"){
        menuOpciones();
     } else {
        opcion = "ESC";
     }
}

const menuOpciones = () => {
    let menuOp = prompt("Seleccione una opción:\n1-Calcular interés.\n2-Pedir préstamo personal.\n3-Salir");
    let conti;
    switch(menuOp){
        case "1":
            alert("Debe ingresar valores positivos y mayores que 0");
            let monto = prompt("¿Cuál es el monto del préstamo?");
            let intAnual = prompt("¿Cuál es el interés que se le aplica a su capital? TNA/TEA, entre otros.");
            let timePago = prompt("¿Cuánto tiempo demorará en pagar la operación?");
            let uniTime = prompt("Elegir la unidad de tiempo en formato numérico:\n-Anual: 365 días.\n-Semestral: 180 días.\n-Trimestral: 90 días.\n-Bimestral: 60 días.");
            calcularInteres(monto, intAnual, timePago, uniTime);

            conti = prompt("¿Desea continuar?\n S = si, N = no.");
            continuar(conti);
        break;
        case "2":
            pedirPrestamo();
            conti = prompt("¿Desea continuar?\n S = si, N = no.");
            continuar(conti);
        break;
        default:
            menuOp = "ESC";
        break;
    }
}

menuOpciones();