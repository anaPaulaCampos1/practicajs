    angulo = Math.floor(Math.random() * (360 - 0)) + 0;
    vueltas = Math.floor(Math.random() * (11 - 5)) + 5;
    angu2 = Math.floor(Math.random() * (360 - 0)) + 0;
    num = angu2 * vueltas + angulo;
    suma = num % 360
   

    
    console.log("Angulo Inicial: ",Math.floor(angulo));
    console.log("Valor Aleatorio en Grados: ",Math.floor(num));
    console.log("Angulo final: ",Math.floor(suma));
    console.log("--------------------------------------------");