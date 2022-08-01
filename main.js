const anchoMinimoPlanchaCorrugar = 450
const largoMaximoPlanchaCorrugar = 4000
const anchoFormato1900 = 1900
const anchoFormato2100 = 2100
const anchoFormato2250 = 2250
const anchoFormato2400 = 2400
const refileMinimoCorrugadora = 35
const refileMaximoCorrugadora = 70  
let anchoPlancha = 500
let largoPlancha = null
let abiertaOCerrada = null

// Fin de variables

let checkCerrada = document.getElementById("inlineRadio1")
checkCerrada.onclick = () => {
abiertaOCerrada = document.getElementById("inlineRadio1").value

let seleccionOndas = document.getElementById("onda")
seleccionOndas.addEventListener("click", function(event){onda=(event.target.value)})

let tipoMedidas = document.getElementById("tipoMedidas")
tipoMedidas.addEventListener("click", function(event){tipoMedida=(event.target.value)})

let largoCt = document.getElementById("largoCt")
largoCt.addEventListener("change", () => {largo = parseInt(document.getElementById("largoCt").value)})

let anchoCt = document.getElementById("anchoCt")
anchoCt.addEventListener("change", () => {ancho = parseInt(document.getElementById("anchoCt").value)})

let altoCt = document.getElementById("altoCt")
altoCt.addEventListener("change", () => {alto = parseInt(document.getElementById("altoCt").value)})

}
// Fin de ciclo Cajas Cerradas

//Inicio ciclo cajas abiertas
let checkAbierta = document.getElementById("inlineRadio2")
checkAbierta.onclick = () => {
abiertaOCerrada = document.getElementById("inlineRadio2").value

let largoAbierta = document.getElementById("largoAbierta")
largoAbierta.addEventListener("change", () => {largoPlancha = parseInt(document.getElementById("largoAbierta").value)})
if(largoPlancha > largoMaximoPlanchaCorrugar){
    alert("Largo de plancha es mayor al máximo")
}
let anchoAbierta = document.getElementById("anchoAbierta")
anchoAbierta.addEventListener("change", () => {anchoPlancha = parseInt(document.getElementById("anchoAbierta").value)})
if(anchoPlancha < anchoMinimoPlanchaCorrugar){
    alert("Ancho de plancha menor al mínimo")
}  
}

//Funciones botones
let ejecutar = document.getElementById("ejecutar")
ejecutar.onclick = () => {
if(abiertaOCerrada === "CERRADA"){
    function definicionCaja(onda, largo, ancho, alto){
        this.onda = onda
        this.largo = largo
        this.ancho = ancho
        this.alto = alto
    }
    const cajaEvaluada = new definicionCaja(onda, largo, ancho, alto)

    console.log(cajaEvaluada)
    
    largoPlancha = cajaEvaluada.largo*2 + cajaEvaluada.ancho*2 + 35
    anchoPlancha = cajaEvaluada.ancho + cajaEvaluada.alto 
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
}

// Fin de ciclo cajas abiertas
