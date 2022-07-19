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
let abiertaOCerrada = prompt("Caja Abierta o Cerrada?").toUpperCase()
while(abiertaOCerrada != "ABIERTA" && abiertaOCerrada != "CERRADA"){
    alert("Tipo de caja no definido")
    abiertaOCerrada = prompt("Caja Abierta o Cerrada?").toUpperCase()
}  

console.log("La Plancha definida es " + largoPlancha + " de largo x " + anchoPlancha + " de ancho" + "de tipo " + abiertaOCerrada)
// Info solicitada al usuario

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
}