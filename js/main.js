//ALGORITMO PARA DETECTAR PRODUCTO EN LA LISTA
//SELECCIONAR METODO DE PAGO Y CALCULAR PRECIO FINAL SEGUN INTERES


//PROMPT QUE PIDE EL NOMBRE DEL CLIENTE
let nombre = prompt("Hola! Bienvenido a Mar Indumentaria. Por favor ingrese su nombre para continuar.").toUpperCase();


//FUNCION CALCULO DE PRECIO FINAL
function calcularPrecioFinal(){
    //DECLARANDO LA VARIABLE PRECIO
    let precio;

    //PROMPT PARA SELECCIONAR PRODUCTO
    let producto = prompt("Encantados de conocerte " + nombre + "!" + " Estos son nuestros productos! Elije aquel que quieras comprar: Pantalon $9.000. Vestido $6.500. Remera $4.300. ").toLowerCase();

    //CONDICIONAL SEGUN PRODUCTO INGRESADO EL PRECIO QUE TENDRA
    if(producto === "pantalon"){
        precio = 9000;
    } else if(producto === "vestido"){
        precio = 6500;
    } else if(producto === "remera"){
        precio === 4300;
    }else{
        //CICLO SI SE INGRESA MAL LE PRODUCTO
        while(producto !=="pantalon" && producto !=="vestido" && producto !=="remera"){
            producto = prompt("El producto ingresado no es correcto. Elije aquel que quieras comprar: Pantalon $9.000. Vestido $6.500. Remera $4.300.").toLowerCase();
        };
    }


    //PROMPT PARA SELECCIONAR METODO DE PAGO
    let metodoPago = prompt("Perfecto! Has seleccionado tu " + producto + ". Ahora selecciona el metodo de pago con el que quieres realizar tu compra. Efectivo: 15% de descuento. Debito: sin recargo. Credito: en 3 cuotas con un 10% de interes o 6 cuotas con 25% de interés.").toLowerCase();



    //CICLO SI SE INGRESA MAL EL METODO
    while(metodoPago !=="efectivo" && metodoPago !=="debito" && metodoPago !=="credito"){
        metodoPago = prompt("El método de pago no es correcto. Por favor selecciona como quieres realizar la compra. Efectivo: 15% de descuento. Debito: sin recargo. Credito: en 3 cuotas con un 10% de interes o 6 cuotas con 25% de interés.").toLowerCase();
    };

    //INTERES O DESCUENTO SEGUN METODO DE PAGO

    let interes;
        
    if (metodoPago === "efectivo") {
        interes = 0.85;
    } else if (metodoPago === "debito") {
        interes = 1.00;
    } else if (metodoPago === "credito") {
        let cuotas = parseFloat(prompt("Ingrese la cantidad de cuotas, 3 o 6:"));
        //CICLO DE VERIFICACION DE CUOTAS
        while(cuotas !==3 && cuotas !==6){
            cuotas = parseInt(prompt("La cantidad de cuotas ingresadas no es correcta volver a ingresar. Ingrese la cantidad de cuotas, 3 o 6:"));
        }
        //VALOR INTERES POR CUOTA
        if(cuotas === 3){
            interes = 1.10;
        }else if (cuotas === 6){    
            interes = 1.25;
        }
    }

    return parseInt(precio*interes);
}

//EJECUTANDO LA FUNCION
precioFinal = calcularPrecioFinal();

//ALERTA CON EL MONTO FINAL DE LA COMPRA
alert("Tu compra fue realizada, el costo de la misma es de $" + precioFinal + ". Muchas gracias por confiar en nosotros!");