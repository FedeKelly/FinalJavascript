const anchoMinimoPlanchaCorrugar = 450
const largoMaximoPlanchaCorrugar = 4000
const anchoFormato1900 = 1900
const anchoFormato2100 = 2100
const anchoFormato2250 = 2250
const anchoFormato2400 = 2400
const refileMinimoCorrugadora = 35
const refileMaximoCorrugadora = 70

// Fin de variables

let largoPlancha = parseInt(prompt("Decime el Largo de Plancha en mm"))
while(largoPlancha > largoMaximoPlanchaCorrugar){
    alert("Largo de plancha es mayor al máximo")
    largoPlancha = parseInt(prompt("Decime El Largo de plancha en mm"))
}
let anchoPlancha = parseInt(prompt("Decime El Ancho de plancha en mm"))
while(anchoPlancha < anchoMinimoPlanchaCorrugar){
    alert("Ancho de plancha menor al mínimo")
    anchoPlancha = parseInt(prompt("Decime El Ancho de plancha en mm"))
} 
 
console.log("La Plancha definida es " + largoPlancha + " de largo x " + anchoPlancha + " de ancho")
// Info solicitada al usuario

for(let i = 1; i <= 7 ; i++){
    let resultado = i * anchoPlancha;
    console.log(resultado);
    if((anchoFormato1900 - resultado <= refileMaximoCorrugadora && anchoFormato1900 - resultado>= refileMinimoCorrugadora) || (anchoFormato2100 - resultado <= refileMaximoCorrugadora && anchoFormato2100 - resultado >= refileMinimoCorrugadora) || (anchoFormato2250 - resultado <= refileMaximoCorrugadora && anchoFormato2250 - resultado >= refileMinimoCorrugadora) || (anchoFormato2400 - resultado <= refileMaximoCorrugadora && anchoFormato2400 - resultado >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina")
    }else{
        alert("Tu caja NO autocombina")
    }
}

// Fin desafío entregable

// Inicio práctica OBJETOS

function maquina(abiertaCerrada, anchoMaximo, anchoMinimo, largoMaximo, LargoMinimo) {
    this.abiertaCerrada = abiertaCerrada;
    this.anchoMaximo = anchoMaximo; 
    this.anchoMinimo = anchoMinimo;
    this.largoMaximo = largoMaximo;
    this.LargoMinimo = LargoMinimo;
}

const maquinaWard1 = new maquina("abierta", 1600, 600, 2450, 1200);
const maquinaNT = new maquina("Cerrada", 1500, 450, 2500, 600)
const maquinaDRO = new maquina ("abierta", 1400, 400, 2200, 800)
const maquinaWard3 = new maquina ("Cerrada", 1600, 500, 2650, 700)

console.log(maquinaWard1)
console.log(maquinaNT)
console.log(maquinaDRO)
console.log(maquinaWard3)