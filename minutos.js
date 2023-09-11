today = new Date();
now = today.getHours();
now2 = today.getMinutes();
rand = Math.floor(Math.random() * (600 - 300)) + 300;
horafinal = Math.floor(rand / 60) + now;
minutosfinal = rand % 60 + now2;
if (minutosfinal>=60){
    horafinal+=1;
    minutosfinal-=60;
}
if (horafinal>=24){
    horafinal-=24;
}



console.log("Hora actual: ",now + ":"+ now2);
console.log("Valor aleatorio: ",rand);
console.log("Hora final: ",horafinal + ":"+ minutosfinal );