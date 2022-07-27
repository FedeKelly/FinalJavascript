const anchoMinimoPlanchaCorrugar = 450
const largoMaximoPlanchaCorrugar = 4000
const anchoFormato1900 = 1900
const anchoFormato2100 = 2100
const anchoFormato2250 = 2250
const anchoFormato2400 = 2400
const refileMinimoCorrugadora = 35
const refileMaximoCorrugadora = 70  
let anchoPlancha = 0
let largoPlachan = 0

// Fin de variables


let abiertaOCerrada = prompt("Caja Abierta o Cerrada?").toUpperCase()
while(abiertaOCerrada != "ABIERTA" && abiertaOCerrada != "CERRADA"){
    alert("Tipo de caja no definido")
    abiertaOCerrada = prompt("Caja Abierta o Cerrada?").toUpperCase()
}  

// Ciclo cajas Cerradas

if(abiertaOCerrada ==="CERRADA"){
function definicionCaja(tipoMedida, onda, largo, ancho, alto, superposicionSup, SuperposicionInf, gap){
    this.tipoMedida = tipoMedida
    this.onda = onda
    this.largo = largo
    this.ancho = ancho
    this.alto = alto
    this.superposicionSup = superposicionSup
    this.SuperposicionInf = SuperposicionInf
    this.gap = gap
}

const cajaEvaluada = new definicionCaja(prompt("Decime Tipo de medida (INT, CT, EXT").toUpperCase(), prompt("Decime la onda (C o B)").toUpperCase(), parseInt(prompt("Decime el Largo en mm")), parseInt(prompt("Decime el ancho en mm")), parseInt(prompt("Decime el alto en mm")), parseInt(prompt("Decime los mm de superposición de aleta Superior")), parseInt(prompt("Decime los mm de superposición de aleta Inferior")), parseInt(prompt("Decime los mm de GAP")))

console.log(cajaEvaluada)

// INICIO Camino con medidas INT onda C
if(cajaEvaluada.tipoMedida == "INT" && cajaEvaluada.onda === "C"){
    const cajaNormalizada = new definicionCaja("CT", cajaEvaluada.onda, cajaEvaluada.largo+3, cajaEvaluada.ancho+3, cajaEvaluada.alto+6, cajaEvaluada.superposicionSup, cajaEvaluada.SuperposicionInf, cajaEvaluada.gap)
console.log(cajaNormalizada)

let largoPlancha = cajaNormalizada.largo*2 + cajaNormalizada.ancho*2 + 35
let anchoPlancha = cajaNormalizada.ancho + cajaNormalizada.alto
let superficiePlancha = largoPlancha * anchoPlancha /1000000
console.log("La Plancha definida es " + largoPlancha + " de largo x " + anchoPlancha + " de ancho de tipo  " + abiertaOCerrada)
console.log ("La superficie de la plancha es " + superficiePlancha)

/*const multiplicacionAncho = []
for(let i = 1; (anchoPlancha * i) <= anchoFormato2400 ; i++){
    multiplicacionAncho.push(anchoPlancha * i)
    console.log(multiplicacionAncho);
}

const definicionAutocombinacion = []

for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato1900 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato1900 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina en 1900")
        definicionAutocombinacion.push(anchoFormato1900)
    }
    }
for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato2100 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato2100 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina en 2100")
        definicionAutocombinacion.push(anchoFormato2100)
    }
    }
for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato2250 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato2250 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina en 2250")
        definicionAutocombinacion.push(anchoFormato2250)
    }
    }
for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato2400 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato2400 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina en 2400")
        definicionAutocombinacion.push(anchoFormato2400)
    }
    }
console.log(definicionAutocombinacion)
if(definicionAutocombinacion.length == 0){
    alert("Tu caja NO autocombina")
}

// Definición de Objetos Máquinas

function maquina(ubicacion, nombreMaquina, abiertaCerrada, anchoMaximo, anchoMinimo, largoMaximo, largoMinimo) {
    this.ubicacion = ubicacion
    this.nombreMaquina = nombreMaquina;
    this.abiertaCerrada = abiertaCerrada;
    this.anchoMaximo = anchoMaximo; 
    this.anchoMinimo = anchoMinimo;
    this.largoMaximo = largoMaximo;
    this.largoMinimo = largoMinimo;
}

const maquinas = []
const maquinaWard1 = new maquina("Parana", "Ward1","ABIERTA", 1600, 600, 2450, 1200);
maquinas.push (maquinaWard1)
const maquinaNT = new maquina("Parana", "Martin NT", "CERRADA", 1500, 450, 2500, 600)
maquinas.push(maquinaNT)
const maquinaDRO = new maquina ("Parana", "DRO", "ABIERTA", 1400, 400, 2200, 800)
maquinas.push(maquinaDRO)
const maquinaWard3 = new maquina ("Parana", "Ward3","CERRADA", 1600, 500, 2650, 700)
maquinas.push(maquinaWard3)


console.log(maquinaWard1)
console.log(maquinaNT)
console.log(maquinaDRO)
console.log(maquinaWard3)
console.log(maquinas)

const filtroAbiertaCerrada = maquinas.filter((el) => el.abiertaCerrada === abiertaOCerrada)
console.log(filtroAbiertaCerrada)

const filtroAnchoMax = filtroAbiertaCerrada.filter((el) => el.anchoMaximo > anchoPlancha)
console.log(filtroAnchoMax)

const filtroAnchoMin = filtroAnchoMax.filter((el) => el.anchoMinimo < anchoPlancha)
console.log(filtroAnchoMin)

const filtroLargoMax = filtroAnchoMin.filter((el) => el.largoMaximo > largoPlancha)
console.log(filtroLargoMax)

const filtroLargoMin = filtroLargoMax.filter((el) => el.largoMinimo < largoPlancha)
console.log(filtroLargoMin)

const filtroNombres = filtroLargoMin.map((el) => el.nombreMaquina)
console.log(filtroNombres)

if(filtroNombres.length === 0){
    alert ("Tu caja no se puede fabricar")
} else {
    alert ("El flujo productivo probable es " + filtroNombres.join())
}
*/
// FIN Camino con medidas INT onda C
// INICIO Camino medidas CT onda C

} else{
    const cajaNormalizada = new definicionCaja(cajaEvaluada.tipoMedida, cajaEvaluada.onda, cajaEvaluada.largo, cajaEvaluada.ancho, cajaEvaluada.alto, cajaEvaluada.superposicionSup, cajaEvaluada.SuperposicionInf, cajaEvaluada.gap)
console.log(cajaNormalizada)

let largoPlancha = cajaNormalizada.largo*2 + cajaNormalizada.ancho*2 + 35
let anchoPlancha = cajaNormalizada.ancho + cajaNormalizada.alto 
let superficiePlancha = largoPlancha * anchoPlancha / 1000000
console.log("La Plancha definida es " + largoPlancha + " de largo x " + anchoPlancha + " de ancho de tipo  " + abiertaOCerrada)
console.log ("La superficie de la plancha es " + superficiePlancha)

/*const multiplicacionAncho = []
for(let i = 1; (anchoPlancha * i) <= anchoFormato2400 ; i++){
    multiplicacionAncho.push(anchoPlancha * i)
    console.log(multiplicacionAncho);
}

const definicionAutocombinacion = []

for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato1900 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato1900 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina en 1900")
        definicionAutocombinacion.push(anchoFormato1900)
    }
    }
for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato2100 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato2100 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina en 2100")
        definicionAutocombinacion.push(anchoFormato2100)
    }
    }
for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato2250 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato2250 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina en 2250")
        definicionAutocombinacion.push(anchoFormato2250)
    }
    }
for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato2400 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato2400 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina en 2400")
        definicionAutocombinacion.push(anchoFormato2400)
    }
    }
console.log(definicionAutocombinacion)
if(definicionAutocombinacion.length == 0){
    alert("Tu caja NO autocombina")
}

// Definición de Objetos Máquinas

function maquina(ubicacion, nombreMaquina, abiertaCerrada, anchoMaximo, anchoMinimo, largoMaximo, largoMinimo) {
    this.ubicacion = ubicacion
    this.nombreMaquina = nombreMaquina;
    this.abiertaCerrada = abiertaCerrada;
    this.anchoMaximo = anchoMaximo; 
    this.anchoMinimo = anchoMinimo;
    this.largoMaximo = largoMaximo;
    this.largoMinimo = largoMinimo;
}

const maquinas = []
const maquinaWard1 = new maquina("Parana", "Ward1","ABIERTA", 1600, 600, 2450, 1200);
maquinas.push (maquinaWard1)
const maquinaNT = new maquina("Parana", "Martin NT", "CERRADA", 1500, 450, 2500, 600)
maquinas.push(maquinaNT)
const maquinaDRO = new maquina ("Parana", "DRO", "ABIERTA", 1400, 400, 2200, 800)
maquinas.push(maquinaDRO)
const maquinaWard3 = new maquina ("Parana", "Ward3","CERRADA", 1600, 500, 2650, 700)
maquinas.push(maquinaWard3)


console.log(maquinaWard1)
console.log(maquinaNT)
console.log(maquinaDRO)
console.log(maquinaWard3)
console.log(maquinas)

const filtroAbiertaCerrada = maquinas.filter((el) => el.abiertaCerrada === abiertaOCerrada)
console.log(filtroAbiertaCerrada)

const filtroAnchoMax = filtroAbiertaCerrada.filter((el) => el.anchoMaximo > anchoPlancha)
console.log(filtroAnchoMax)

const filtroAnchoMin = filtroAnchoMax.filter((el) => el.anchoMinimo < anchoPlancha)
console.log(filtroAnchoMin)

const filtroLargoMax = filtroAnchoMin.filter((el) => el.largoMaximo > largoPlancha)
console.log(filtroLargoMax)

const filtroLargoMin = filtroLargoMax.filter((el) => el.largoMinimo < largoPlancha)
console.log(filtroLargoMin)

const filtroNombres = filtroLargoMin.map((el) => el.nombreMaquina)
console.log(filtroNombres)

if(filtroNombres.length === 0){
    alert ("Tu caja no se puede fabricar")
} else {
    alert ("El flujo productivo probable es " + filtroNombres.join())
}*/
}

// FIN Camino con medidas CT onda C

// Fin de ciclo Cajas Cerradas

/*const arrayCajaEvaluada = []
arrayCajaEvaluada.push(cajaEvaluada)

const aperturaCaja = arrayCajaEvaluada.map((el) => {
    return {
        onda: el.onda,
        largo: el.largo + 3,
        ancho: el.ancho + 3,
        alto: el.alto + 6,
        largoPlancha: (el.largo + 3)*2 + (el.ancho + 3)*2 + 35,
        altoPlancha: el.ancho + 3 + el.alto + 6 - el.gap *2,

}
}
)*/

console.log(aperturaCaja)

}

//Inicio ciclo cajas abiertas

else{
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

let superficiePlancha = largoPlancha * anchoPlancha / 1000000
console.log("La Plancha definida es " + largoPlancha + " de largo x " + anchoPlancha + " de ancho de tipo  " + abiertaOCerrada)
console.log ("La superficie de la plancha es " + superficiePlancha)
// Info solicitada al usuario
}

const multiplicacionAncho = []
for(let i = 1; (anchoPlancha * i) <= anchoFormato2400 ; i++){
    multiplicacionAncho.push(anchoPlancha * i)
    console.log(multiplicacionAncho);
}

const definicionAutocombinacion = []

for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato1900 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato1900 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina en 1900")
        definicionAutocombinacion.push(anchoFormato1900)
    }
    }
for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato2100 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato2100 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina en 2100")
        definicionAutocombinacion.push(anchoFormato2100)
    }
    }
for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato2250 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato2250 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina en 2250")
        definicionAutocombinacion.push(anchoFormato2250)
    }
    }
for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato2400 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato2400 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        alert("Tu caja autocombina en 2400")
        definicionAutocombinacion.push(anchoFormato2400)
    }
    }
console.log(definicionAutocombinacion)
if(definicionAutocombinacion.length == 0){
    alert("Tu caja NO autocombina")
}

// Definición de Objetos Máquinas

function maquina(ubicacion, nombreMaquina, abiertaCerrada, anchoMaximo, anchoMinimo, largoMaximo, largoMinimo) {
    this.ubicacion = ubicacion
    this.nombreMaquina = nombreMaquina;
    this.abiertaCerrada = abiertaCerrada;
    this.anchoMaximo = anchoMaximo; 
    this.anchoMinimo = anchoMinimo;
    this.largoMaximo = largoMaximo;
    this.largoMinimo = largoMinimo;
}

const maquinas = []
const maquinaWard1 = new maquina("Parana", "Ward1","ABIERTA", 1600, 600, 2450, 1200);
maquinas.push (maquinaWard1)
const maquinaNT = new maquina("Parana", "Martin NT", "CERRADA", 1500, 450, 2500, 600)
maquinas.push(maquinaNT)
const maquinaDRO = new maquina ("Parana", "DRO", "ABIERTA", 1400, 400, 2200, 800)
maquinas.push(maquinaDRO)
const maquinaWard3 = new maquina ("Parana", "Ward3","CERRADA", 1600, 500, 2650, 700)
maquinas.push(maquinaWard3)


console.log(maquinaWard1)
console.log(maquinaNT)
console.log(maquinaDRO)
console.log(maquinaWard3)
console.log(maquinas)

const filtroAbiertaCerrada = maquinas.filter((el) => el.abiertaCerrada === abiertaOCerrada)
console.log(filtroAbiertaCerrada)

const filtroAnchoMax = filtroAbiertaCerrada.filter((el) => el.anchoMaximo > anchoPlancha)
console.log(filtroAnchoMax)

const filtroAnchoMin = filtroAnchoMax.filter((el) => el.anchoMinimo < anchoPlancha)
console.log(filtroAnchoMin)

const filtroLargoMax = filtroAnchoMin.filter((el) => el.largoMaximo > largoPlancha)
console.log(filtroLargoMax)

const filtroLargoMin = filtroLargoMax.filter((el) => el.largoMinimo < largoPlancha)
console.log(filtroLargoMin)

const filtroNombres = filtroLargoMin.map((el) => el.nombreMaquina)
console.log(filtroNombres)

if(filtroNombres.length === 0){
    alert ("Tu caja no se puede fabricar")
} else {
    alert ("El flujo productivo probable es " + filtroNombres.join())

    //let flujoProductivo = document.getElementsByTagName("ul")
//console.log(flujoProductivo)

    //for (const filtroNombre of filtroNombres){
   // //    let listaMaquinas = document.createElement("li")
   //     listaMaquinas.innerText = `${filtroNombres}`
   //     document.body.append(listaMaquinas)
   // }
}
let roundedPill = document.getElementsByClassName("badge bg-primary rounded-pill")
console.log(roundedPill[0].innerHTML)
console.log(roundedPill[1].innerHTML)
roundedPill[0].innerText = largoPlancha + " X " + anchoPlancha
roundedPill[1].innerText = superficiePlancha


// Fin de ciclo cajas abiertas
