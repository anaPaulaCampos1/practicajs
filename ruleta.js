for (k=0;k<11;k++){
    rondas = Math.floor(Math.random() * 5) + 5;
    ran = Math.floor(Math.random() * 37);
    num = rondas * ran;
    resto= num % 36;

    console.log("Ronda numero: ",k);
    console.log("Valor Generado: ",Math.floor(num));
    console.log("La bola cayo en el numero: ",Math.floor(resto));
    console.log("--------------------------------------------");
}