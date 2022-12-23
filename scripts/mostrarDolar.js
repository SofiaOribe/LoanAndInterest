const dollarPriceText = document.getElementById('dollar-price');
//Realizo promesa con fetch
const dollarPrice = fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');

//Funcion para cambiar a formato json
const JSONResponse = async (data) => {
    const response = await data;
    return await response.json(); 
}

//Función para mostrar dolar
const showDollar = async () => {
    //Llamo a la funcion jsonresponse para realizar el cambio
    const response = await JSONResponse(dollarPrice);
    const oficial = response.find(dolar => dolar.casa.agencia === '349')
    dollarPriceText.innerHTML = `
    <div class="card dollar" style="width: 12rem; ">
        <div class="card-header dollarLi">
            Official Dollar
        </div>
        <ul class="list-group list-group-flush ">
            <li class="list-group-item dollarLi">Buying: $${oficial?.casa.compra}</li>
            <li class="list-group-item dollarLi">Selling: $${oficial?.casa.venta}</li>
        </ul>
    </div>
    `;
}

showDollar();