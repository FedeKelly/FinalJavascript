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
let tipoMedida = null
let cajaEvaluada
let titulo

// Fin de variables
let nombreCaja = document.getElementById("nombreCaja")
nombreCaja.addEventListener("change", () => {titulo = document.getElementById("nombreCaja").value})
console.log(titulo)

let checkCerrada = document.getElementById("inlineRadio1")
checkCerrada.onclick = () => {
abiertaOCerrada = document.getElementById("inlineRadio1").value

let inputCerrada = document.getElementById("tablas")
inputCerrada.innerHTML = `<table class="table">
<thead>
  <tr>
    <th scope="col">Medidas</th>
    <th scope="col">Internas</th>
    <th scope="col">Centro de Traza</th>
    <th scope="col">Externas</th>
  </tr>
</thead>
<tbody id="tabla">
  <tr>
    <th scope="row">Largo</th>
    <td><textarea class="form-control" aria-label="With textarea" id="largoInt" disabled></textarea></td>
    <td><textarea class="form-control" aria-label="With textarea" id="largoCt"></textarea></td>
    <td><textarea class="form-control" aria-label="With textarea" id="largoExt" disabled></textarea></td>
  </tr>
  <tr>
    <th scope="row">Ancho</th>
    <td><textarea class="form-control" aria-label="With textarea" id="anchoInt" disabled></textarea></td>
    <td><textarea class="form-control" aria-label="With textarea" id="anchoCt"></textarea></td>
    <td><textarea class="form-control" aria-label="With textarea" id="anchoExt" disabled></textarea></td>
  </tr>
  <tr>
    <th scope="row">Alto</th>
    <td><textarea class="form-control" aria-label="With textarea" id="altoInt" disabled></textarea></td>
    <td><textarea class="form-control" aria-label="With textarea" id="altoCt"></textarea></td>
    <td><textarea class="form-control" aria-label="With textarea" id="altoExt" disabled></textarea></td>
  </tr>
</tbody>
</table>`

let seleccionOndas = document.getElementById("onda")
seleccionOndas.addEventListener("click", function(event){onda=(event.target.value)})
seleccionOndas.onclick = () => {
console.log(onda)
}

let tipoMedidas = document.getElementById("tipoMedidas")
tipoMedidas.addEventListener("click", function(event){tipoMedida = (event.target.value)})

tipoMedidas.onclick = () => {
    console.log(tipoMedida)

if(tipoMedida === "INT"){
    let ondaDisable = document.getElementById("tabla")
    ondaDisable.innerHTML = `<tbody id="tabla">
    <tr>
      <th scope="row">Largo</th>
      <td><textarea class="form-control" aria-label="With textarea" id="largoInt"></textarea></td>
      <td><textarea class="form-control" aria-label="With textarea" id="largoCt" disabled></textarea></td>
      <td><textarea class="form-control" aria-label="With textarea" id="largoExt" disabled></textarea></td>
    </tr>
    <tr>
      <th scope="row">Ancho</th>
      <td><textarea class="form-control" aria-label="With textarea" id="anchoInt"></textarea></td>
      <td><textarea class="form-control" aria-label="With textarea" id="anchoCt" disabled></textarea></td>
      <td><textarea class="form-control" aria-label="With textarea" id="anchoExt" disabled></textarea></td>
    </tr>
    <tr>
      <th scope="row">Alto</th>
      <td><textarea class="form-control" aria-label="With textarea" id="altoInt"></textarea></td>
      <td><textarea class="form-control" aria-label="With textarea" id="altoCt" disabled></textarea></td>
      <td><textarea class="form-control" aria-label="With textarea" id="altoExt" disabled></textarea></td>
    </tr>
  </tbody>`
}
  if(tipoMedida === "EXT"){
    let ondaDisable = document.getElementById("tabla")
    ondaDisable.innerHTML = `<tbody id="tabla">
    <tr>
      <th scope="row">Largo</th>
      <td><textarea class="form-control" aria-label="With textarea" id="largoInt" disabled></textarea></td>
      <td><textarea class="form-control" aria-label="With textarea" id="largoCt" disabled></textarea></td>
      <td><textarea class="form-control" aria-label="With textarea" id="largoExt"></textarea></td>
    </tr>
    <tr>
      <th scope="row">Ancho</th>
      <td><textarea class="form-control" aria-label="With textarea" id="anchoInt" disabled></textarea></td>
      <td><textarea class="form-control" aria-label="With textarea" id="anchoCt" disabled></textarea></td>
      <td><textarea class="form-control" aria-label="With textarea" id="anchoExt"></textarea></td>
    </tr>
    <tr>
      <th scope="row">Alto</th>
      <td><textarea class="form-control" aria-label="With textarea" id="altoInt" disabled></textarea></td>
      <td><textarea class="form-control" aria-label="With textarea" id="altoCt" disabled></textarea></td>
      <td><textarea class="form-control" aria-label="With textarea" id="altoExt"></textarea></td>
    </tr>
  </tbody>`
}
if(tipoMedida === "CT"){
        let ondaDisable = document.getElementById("tabla")
        ondaDisable.innerHTML = `<tbody id="tabla">
        <tr>
          <th scope="row">Largo</th>
          <td><textarea class="form-control" aria-label="With textarea" id="largoInt" disabled></textarea></td>
          <td><textarea class="form-control" aria-label="With textarea" id="largoCt"></textarea></td>
          <td><textarea class="form-control" aria-label="With textarea" id="largoExt" disabled></textarea></td>
        </tr>
        <tr>
          <th scope="row">Ancho</th>
          <td><textarea class="form-control" aria-label="With textarea" id="anchoInt" disabled></textarea></td>
          <td><textarea class="form-control" aria-label="With textarea" id="anchoCt"></textarea></td>
          <td><textarea class="form-control" aria-label="With textarea" id="anchoExt" disabled></textarea></td>
        </tr>
        <tr>
          <th scope="row">Alto</th>
          <td><textarea class="form-control" aria-label="With textarea" id="altoInt" disabled></textarea></td>
          <td><textarea class="form-control" aria-label="With textarea" id="altoCt"></textarea></td>
          <td><textarea class="form-control" aria-label="With textarea" id="altoExt" disabled></textarea></td>
        </tr>
      </tbody>`
    }

let largoCt = document.getElementById("largoCt")
largoCt.addEventListener("change", () => {largo = parseInt(document.getElementById("largoCt").value)})

let anchoCt = document.getElementById("anchoCt")
anchoCt.addEventListener("change", () => {ancho = parseInt(document.getElementById("anchoCt").value)})

let altoCt = document.getElementById("altoCt")
altoCt.addEventListener("change", () => {alto = parseInt(document.getElementById("altoCt").value)})
}
}
// Fin de ciclo Cajas Cerradas

//Enable tabla cajas abiertas
let checkAbierta = document.getElementById("inlineRadio2")
checkAbierta.onclick = () => {
abiertaOCerrada = document.getElementById("inlineRadio2").value

let seleccionOndas = document.getElementById("onda")
seleccionOndas.addEventListener("click", function(event){onda=(event.target.value)})
seleccionOndas.onclick = () => {
console.log(onda)
}

let inputAbierta = document.getElementById("tablas")
inputAbierta.innerHTML = `<div class="input-group mb-2" id="inputAbierta">
<span class="input-group-text">Largo total en mm</span>
<textarea class="form-control" aria-label="With textarea" id="largoAbierta"></textarea>
<span class="input-group-text">Ancho Total en mm</span>
<textarea class="form-control" aria-label="With textarea" id="anchoAbierta"></textarea>
</div>`

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
  ejecutar.className = "btn btn-primary btn-sm disabled"
  // Boton Guardar
  let botonGuardar = document.getElementById("guardar")
    botonGuardar.className = "btn btn-secondary btn-sm"

if(abiertaOCerrada === "CERRADA"){
    function definicionCaja(largo, ancho, alto){
        this.largo = largo
        this.ancho = ancho
        this.alto = alto
    }
    cajaEvaluada = new definicionCaja(largo, ancho, alto)

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
const maquinaNT = new maquina("Quilmes", "Martin NT", "CERRADA", 1500, 450, 2500, 600)
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

const filtroUbicacion = filtroLargoMin.map((el) => el.ubicacion)
console.log(filtroUbicacion)

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



let guardar = document.getElementById("guardar")
guardar.onclick = () => {
let acumulador = (parseInt(localStorage.getItem("acumulador")) || 0) + 1
console.log(acumulador)
localStorage.setItem("titulo" + acumulador, titulo)
localStorage.setItem("cajaEvaluada" + acumulador, JSON.stringify(cajaEvaluada || ""))
localStorage.setItem("largoPlancha" + acumulador, largoPlancha)
localStorage.setItem("anchoPlancha" + acumulador, anchoPlancha)
localStorage.setItem("abiertaOCerrada" + acumulador, abiertaOCerrada)
localStorage.setItem("definicionAutocombinacion" + acumulador, JSON.stringify(definicionAutocombinacion))
localStorage.setItem("maquinas" + acumulador, JSON.stringify(filtroNombres))
localStorage.setItem("ubicacion" + acumulador, JSON.stringify(filtroUbicacion))
localStorage.setItem("onda" + acumulador, onda)
botonGuardar.className = "btn btn-secondary btn-sm disabled"
localStorage.setItem("acumulador", acumulador)
}
}