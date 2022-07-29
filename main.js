const anchoMinimoPlanchaCorrugar = 450
const largoMaximoPlanchaCorrugar = 4000
const anchoFormato1900 = 1900
const anchoFormato2100 = 2100
const anchoFormato2250 = 2250
const anchoFormato2400 = 2400
const refileMinimoCorrugadora = 35
const refileMaximoCorrugadora = 70  
let anchoPlancha = null
let largoPlachan = null


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

largoPlancha = cajaNormalizada.largo*2 + cajaNormalizada.ancho*2 + 35
anchoPlancha = cajaNormalizada.ancho + cajaNormalizada.alto 

// FIN Camino con medidas INT onda C

// INICIO Camino medidas CT onda C

} else{
    const cajaNormalizada = new definicionCaja(cajaEvaluada.tipoMedida, cajaEvaluada.onda, cajaEvaluada.largo, cajaEvaluada.ancho, cajaEvaluada.alto, cajaEvaluada.superposicionSup, cajaEvaluada.SuperposicionInf, cajaEvaluada.gap)
console.log(cajaNormalizada)

largoPlancha = cajaNormalizada.largo*2 + cajaNormalizada.ancho*2 + 35
anchoPlancha = cajaNormalizada.ancho + cajaNormalizada.alto 
}

// FIN Camino con medidas CT onda C

// Fin de ciclo Cajas Cerradas

}

//Inicio ciclo cajas abiertas

else{
largoPlancha = parseInt(prompt("Decime el Largo de Plancha en mm"))
while(largoPlancha > largoMaximoPlanchaCorrugar){
    alert("Largo de plancha es mayor al máximo")
    largoPlancha = parseInt(prompt("Decime El Largo de plancha en mm"))
}
anchoPlancha = parseInt(prompt("Decime El Ancho de plancha en mm"))
while(anchoPlancha < anchoMinimoPlanchaCorrugar){
    alert("Ancho de plancha menor al mínimo")
    anchoPlancha = parseInt(prompt("Decime El Ancho de plancha en mm"))
}  
}
let superficiePlancha = largoPlancha * anchoPlancha / 1000000
console.log("La Plancha definida es " + largoPlancha + " de largo x " + anchoPlancha + " de ancho de tipo  " + abiertaOCerrada)
console.log ("La superficie de la plancha es " + superficiePlancha)

// Inicio evaluación de combinación

const multiplicacionAncho = []
for(let i = 1; (anchoPlancha * i) <= anchoFormato2400 ; i++){
    multiplicacionAncho.push(anchoPlancha * i)
    console.log(multiplicacionAncho);
}

const definicionAutocombinacion = []

for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato1900 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato1900 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        definicionAutocombinacion.push(anchoFormato1900)
    }
    }
for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato2100 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato2100 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        definicionAutocombinacion.push(anchoFormato2100)
    }
    }
for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato2250 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato2250 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        definicionAutocombinacion.push(anchoFormato2250)
    }
    }
for(let i = 0; i < multiplicacionAncho.length; i++){
    if((anchoFormato2400 - multiplicacionAncho[i] <= refileMaximoCorrugadora && anchoFormato2400 - multiplicacionAncho[i] >= refileMinimoCorrugadora)){
        definicionAutocombinacion.push(anchoFormato2400)
    }
    }

console.log(definicionAutocombinacion)
for (defAutocombinacion of definicionAutocombinacion){
    let mensajeCombinacion = document.getElementById("comb")
    mensajeCombinacion.innerHTML = `Tu caja autocombina en formato <strong>${definicionAutocombinacion}</strong>`
}

if(definicionAutocombinacion.length == 0){
    let mensajeCombinacion = document.getElementById("comb")
    mensajeCombinacion.innerText = "Tu caja NO autocombina"
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
    let mensaje = document.createElement("div")
    mensaje.innerHTML = "<h3>No existe flujo productivo posible</h3>"
    document.body.append(mensaje)
} else {
    for (listaMaquinas of filtroLargoMin){
        let mensaje = document.createElement("div")
        mensaje.innerHTML = `<h2>Maquina posible ${listaMaquinas.nombreMaquina}</h2>
                             <p>Ubicación: ${listaMaquinas.ubicacion}</p>`
        document.body.append(mensaje)
    }
}
let roundedPill = document.getElementsByClassName("badge bg-primary rounded-pill")
console.log(roundedPill[0].innerHTML)
console.log(roundedPill[1].innerHTML)
roundedPill[0].innerText = largoPlancha + " X " + anchoPlancha
roundedPill[1].innerText = superficiePlancha


// Fin de ciclo cajas abiertas
