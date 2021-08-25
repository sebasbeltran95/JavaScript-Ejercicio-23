let TotalAPagar = Number(prompt("Cuanto deben pagar?"));
let Personas = Number(prompt("Cuantas personas van a pagar?"));
let Propina = Number(prompt("Cuanta propina van a pagar?"));
let impuesto = 5;

function CalcularPago(pago, personas, propina, impuesto) {
    let porcentaje = (impuesto / 100) * pago;
    let calculo = (pago + porcentaje + propina) / personas;
    console.log(`El total a pagar por persona es: $${calculo}`);
}

CalcularPago(TotalAPagar, Personas, Propina, impuesto);