const anchoMinimoPlanchaCorrugar = 450
const largoMaximoPlanchaCorrugar = 4000
const anchoFormato1900 = 1900
const anchoFormato2100 = 2100
const anchoFormato2250 = 2250
const anchoFormato2400 = 2400
const refileMinimoCorrugadora = 35
const refileMaximoCorrugadora = 70  
let anchoPlancha
let largoPlancha = null
let abiertaOCerrada = null
let tipoMedida = null
let cajaEvaluada
let titulo
let deltaLInt = 0
let deltaLExt = 0
let deltaAInt = 0
let deltaAext = 0
document.getElementById("ejecutar").disabled = true
// Fin de variables
let nombreCaja = document.getElementById("nombreCaja")
nombreCaja.addEventListener("change", updateValue)

function updateValue () {
  titulo = document.getElementById("nombreCaja").value
  document.getElementById("ejecutar").disabled = false
  }

let checkCerrada = document.getElementById("inlineRadio1")
checkCerrada.onclick = () => {
abiertaOCerrada = document.getElementById("inlineRadio1").value

let inputCerrada = document.getElementById("tablas")
inputCerrada.innerHTML = `<table class="table">
<thead>
  <tr class="text-center">
    <th scope="col">Medidas</th>
    <th scope="col">Internas</th>
    <th scope="col">Centro de Traza</th>
    <th scope="col">Externas</th>
  </tr>
</thead>
<tbody id="tabla">
  <tr>
    <th scope="row">Largo</th>
    <td><input type = text class="form-control" aria-label="With textarea" id="largoInt" disabled></input></td>
    <td><input type = text class="form-control" aria-label="With textarea" id="largoCt" disabled></input></td>
    <td><input type = text class="form-control" aria-label="With textarea" id="largoExt" disabled></input></td>
  </tr>
  <tr>
    <th scope="row">Ancho</th>
    <td><input type = text class="form-control" aria-label="With textarea" id="anchoInt" disabled></input></td>
    <td><input type = text class="form-control" aria-label="With textarea" id="anchoCt" disabled></input></td>
    <td><input type = text class="form-control" aria-label="With textarea" id="anchoExt" disabled></input></td>
  </tr>
  <tr>
    <th scope="row">Alto</th>
    <td><input type = text class="form-control" aria-label="With textarea" id="altoInt" disabled></input></td>
    <td><input type = text class="form-control" aria-label="With textarea" id="altoCt" disabled></input></td>
    <td><input type = text class="form-control" aria-label="With textarea" id="altoExt" disabled></input></td>
  </tr>
</tbody>
</table>`

//Función Onda
let seleccionOndas = document.getElementById("onda")
seleccionOndas.addEventListener("click", function(event){onda=(event.target.value)})
seleccionOndas.onclick = () => {
  if ((onda.length == 1) || (onda.length == 2)){
    let habilitarMedidas = document.getElementById("tipoMedidas")
    habilitarMedidas.innerHTML = `
    <option selected>Tipo de Medidas</option>
    <option value="CT">Centro de Traza</option>
    <option value="INT">Internas</option>
    <option value="EXT">Externas</option>`
  }
  if(onda === "C"){
    deltaLInt = 6
    deltaLExt = 2
    deltaAInt = 8
    deltaAext = 2
  }
  if(onda === "B"){
    deltaLInt = 4
    deltaLExt = 2
    deltaAInt = 6
    deltaAext = 2
  }
  if(onda === "E"){
    deltaLInt = 2
    deltaLExt = 1
    deltaAInt = 4
    deltaAext = 1
  }
  if(onda === "BC"){
    deltaLInt = 10
    deltaLExt = 4
    deltaAInt = 14
    deltaAext = 4
  }
  if(onda === "EC"){
    deltaLInt = 9
    deltaLExt = 3
    deltaAInt = 12
    deltaAext = 3
  }
  if(onda === "EB"){
    deltaLInt = 7
    deltaLExt = 3
    deltaAInt = 9
    deltaAext = 3
  }
  }

let tipoMedidas = document.getElementById("tipoMedidas")
tipoMedidas.addEventListener("click", function(event){tipoMedida = (event.target.value)})

tipoMedidas.onclick = () => {
if(tipoMedida === "INT"){
    let ondaDisable = document.getElementById("tabla")
    ondaDisable.innerHTML = `<tbody id="tabla">
    <tr>
      <th scope="row">Largo</th>
      <td id="datoLargoInt"><input type = text class="form-control" aria-label="With textarea" id="largoInt"></input></td>
      <td id="datoLargoCt"><input type = text class="form-control" aria-label="With textarea" id="largoCt" disabled></input></td>
      <td id="datoLargoExt"><input type = text class="form-control" aria-label="With textarea" id="largoExt" disabled></input></td>
    </tr>
    <tr>
      <th scope="row">Ancho</th>
      <td id="datoAnchoInt"><input type = text class="form-control" aria-label="With textarea" id="anchoInt"></input></td>
      <td id="datoAnchoCt"><input type = text class="form-control" aria-label="With textarea" id="anchoCt" disabled></input></td>
      <td id="datoAnchoExt"><input type = text class="form-control" aria-label="With textarea" id="anchoExt" disabled></input></td>
    </tr>
    <tr>
      <th scope="row">Alto</th>
      <td id="datoAltoInt"><input type = text class="form-control" aria-label="With textarea" id="altoInt"></input></td>
      <td id="datoAltoCt"><input type = text class="form-control" aria-label="With textarea" id="altoCt" disabled></input></td>
      <td id="datoAltoExt"><input type = text class="form-control" aria-label="With textarea" id="altoExt" disabled></input></td>
    </tr>
  </tbody>`
}
  if(tipoMedida === "EXT"){
    let ondaDisable = document.getElementById("tabla")
    ondaDisable.innerHTML = `<tbody id="tabla">
    <tr>
      <th scope="row">Largo</th>
      <td id="datoLargoInt"><input type = text class="form-control" aria-label="With textarea" id="largoInt" disabled></input></td>
      <td id="datoLargoCt"><input type = text class="form-control" aria-label="With textarea" id="largoCt" disabled></input></td>
      <td id="datoLargoExt"><input type = text class="form-control" aria-label="With textarea" id="largoExt"></input></td>
    </tr>
    <tr>
      <th scope="row">Ancho</th>
      <td id="datoAnchoInt"><input type = text class="form-control" aria-label="With textarea" id="anchoInt" disabled></input></td>
      <td id="datoAnchoCt"><input type = text class="form-control" aria-label="With textarea" id="anchoCt" disabled></input></td>
      <td id="datoAnchoExt"><input type = text class="form-control" aria-label="With textarea" id="anchoExt"></input></td>
    </tr>
    <tr>
      <th scope="row">Alto</th>
      <td id="datoAltoInt"><input type = text class="form-control" aria-label="With textarea" id="altoInt" disabled></input></td>
      <td id="datoAltoCt"><input type = text class="form-control" aria-label="With textarea" id="altoCt" disabled></input></td>
      <td id="datoAltoExt"><input type = text class="form-control" aria-label="With textarea" id="altoExt"></input></td>
    </tr>
  </tbody>`
}
if(tipoMedida === "CT"){
        let ondaDisable = document.getElementById("tabla")
        ondaDisable.innerHTML = `<tbody id="tabla">
        <tr>
          <th scope="row">Largo</th>
          <td id="datoLargoInt"><input type = text class="form-control" aria-label="With textarea" id="largoInt" disabled></input></td>
          <td id="datoLargoCt"><input type = text class="form-control" aria-label="With textarea" id="largoCt"></input></td>
          <td id="datoLargoExt"><input type = text class="form-control" aria-label="With textarea" id="largoExt" disabled></input></td>
        </tr>
        <tr>
          <th scope="row">Ancho</th>
          <td id="datoAnchoInt"><input type = text class="form-control" aria-label="With textarea" id="anchoInt" disabled></input></td>
          <td id="datoAnchoCt"><input type = text class="form-control" aria-label="With textarea" id="anchoCt"></input></td>
          <td id="datoAnchoExt"><input type = text class="form-control" aria-label="With textarea" id="anchoExt" disabled></input></td>
        </tr>
        <tr>
          <th scope="row">Alto</th>
          <td id="datoAltoInt"><input type = text class="form-control" aria-label="With textarea" id="altoInt" disabled></input></td>
          <td id="datoAltoCt"><input type = text class="form-control" aria-label="With textarea" id="altoCt"></input></td>
          <td id="datoAltoExt"><input type = text class="form-control" aria-label="With textarea" id="altoExt" disabled></input></td>
        </tr>
      </tbody>`
    }

//Declaración de variables para modificar Formulario Medidas
let largoCt = document.getElementById("largoCt")
let largoInt = document.getElementById("largoInt")
let largoExt = document.getElementById("largoExt")
let anchoCt = document.getElementById("anchoCt")
let anchoInt = document.getElementById("anchoInt")
let anchoExt = document.getElementById("anchoExt")
let altoCt = document.getElementById("altoCt")
let altoInt = document.getElementById("altoInt")
let altoExt = document.getElementById("altoExt")
let datoLargoInt = document.getElementById("datoLargoInt")
let datoLargoCt = document.getElementById("datoLargoCt")
let datoLargoExt = document.getElementById("datoLargoExt")
let datoAnchoInt = document.getElementById("datoAnchoInt")
let datoAnchoCt = document.getElementById("datoAnchoCt")
let datoAnchoExt = document.getElementById("datoAnchoExt")
let datoAltoCt = document.getElementById("datoAltoCt")
let datoAltoInt = document.getElementById("datoAltoInt")
let datoAltoExt = document.getElementById("datoAltoExt")

// Ingreso de Datos CT
largoCt.addEventListener("change", () => {largo = parseInt(document.getElementById("largoCt").value)
datoLargoInt.innerHTML=`<input type = text class="form-control" aria-label="With textarea" placeholder="${largo-deltaLInt}" id="largoInt" disabled></input>`
datoLargoExt.innerHTML = `<input type = text class="form-control" aria-label="With textarea" placeholder="${largo+deltaLExt}" id="largoExt" disabled></input>`})

anchoCt.addEventListener("change", () => {ancho = parseInt(document.getElementById("anchoCt").value)
datoAnchoInt.innerHTML = `<input type = text class="form-control" aria-label="With textarea" placeholder="${ancho-deltaLInt}" id="anchoInt" disabled></input>`
datoAnchoExt.innerHTML = `<input type = text class="form-control" aria-label="With textarea" placeholder="${ancho+deltaLExt}" id="anchoExt" disabled></input>`})

altoCt.addEventListener("change", () => {alto = parseInt(document.getElementById("altoCt").value)
datoAltoInt.innerHTML =`<input type = text class="form-control" aria-label="With textarea" placeholder="${alto-deltaAInt}" id="altoInt" disabled></input>` 
datoAltoExt.innerHTML =`<input type = text class="form-control" aria-label="With textarea" placeholder="${alto+deltaAext}" id="altoExt" disabled></input>`})

//Ingreso de datos Int
largoInt.addEventListener("change", () => {largo = parseInt(document.getElementById("largoInt").value)
datoLargoCt.innerHTML=`<input type = text class="form-control" aria-label="With textarea" placeholder="${largo+deltaLInt}" id="largoCt" disabled></input>`
datoLargoExt.innerHTML = `<input type = text class="form-control" aria-label="With textarea" placeholder="${largo+deltaLExt+deltaLInt}" id="largoExt" disabled></input>`})

anchoInt.addEventListener("change", () => {ancho = parseInt(document.getElementById("anchoInt").value)
datoAnchoCt.innerHTML = `<input type = text class="form-control" aria-label="With textarea" placeholder="${ancho+deltaLInt}" id="anchoCt" disabled></input>`
datoAnchoExt.innerHTML = `<input type = text class="form-control" aria-label="With textarea" placeholder="${ancho+deltaLInt+deltaLExt}" id="anchoExt" disabled></input>`})

altoInt.addEventListener("change", () => {alto = parseInt(document.getElementById("altoInt").value)
datoAltoCt.innerHTML =`<input type = text class="form-control" aria-label="With textarea" placeholder="${alto+deltaAInt}" id="altoCt" disabled></input>` 
datoAltoExt.innerHTML =`<input type = text class="form-control" aria-label="With textarea" placeholder="${alto+deltaAInt+deltaAext}" id="altoExt" disabled></input>`})

//Ingreso de datos Ext
largoExt.addEventListener("change", () => {largo = parseInt(document.getElementById("largoExt").value)
datoLargoCt.innerHTML=`<input type = text class="form-control" aria-label="With textarea" placeholder="${largo-deltaLExt}" id="largoCt" disabled></input>`
datoLargoInt.innerHTML = `<input type = text class="form-control" aria-label="With textarea" placeholder="${largo-deltaLExt-deltaLInt}" id="largoInt" disabled></input>`})

anchoExt.addEventListener("change", () => {ancho = parseInt(document.getElementById("anchoExt").value)
datoAnchoCt.innerHTML = `<input type = text class="form-control" aria-label="With textarea" placeholder="${ancho-deltaLExt}" id="anchoCt" disabled></input>`
datoAnchoInt.innerHTML = `<input type = text class="form-control" aria-label="With textarea" placeholder="${ancho-deltaLExt-deltaLInt}" id="anchoInt" disabled></input>`})

altoExt.addEventListener("change", () => {alto = parseInt(document.getElementById("altoExt").value)
datoAltoCt.innerHTML =`<input type = text class="form-control" aria-label="With textarea" placeholder="${alto-deltaAext}" id="altoCt" disabled></input>` 
datoAltoInt.innerHTML =`<input type = text class="form-control" aria-label="With textarea" placeholder="${alto-deltaAext-deltaAInt}" id="altoInt" disabled></input>`})

}
}
// Fin de ciclo Cajas Cerradas

//Enable tabla cajas abiertas
let checkAbierta = document.getElementById("inlineRadio2")
checkAbierta.onclick = () => {
abiertaOCerrada = document.getElementById("inlineRadio2").value

let seleccionOndas = document.getElementById("onda")
seleccionOndas.addEventListener("click", function(event){onda=(event.target.value)})

let inputAbierta = document.getElementById("tablas")
inputAbierta.innerHTML = `<div class="input-group mb-2 w-50" id="inputAbierta">
<span class="input-group-text">Largo total en mm</span>
<input class="form-control" aria-label="With textarea" id="largoAbierta"></input>
</div>  
<div class="input-group mb-2 w-50" id="inputAbierta">
<span class="input-group-text">Ancho Total en mm</span>
<input class="form-control" aria-label="With textarea" id="anchoAbierta"></input>
</div>`

let largoAbierta = document.getElementById("largoAbierta")
largoAbierta.addEventListener("change", () => {largoPlancha = parseInt(document.getElementById("largoAbierta").value)})

let anchoAbierta = document.getElementById("anchoAbierta")
anchoAbierta.addEventListener("change", () => {anchoPlancha = parseInt(document.getElementById("anchoAbierta").value)}) 
}

//Declaración Botones y función EJECUTAR
let botonGuardar = document.getElementById("guardar")
let ejecutar = document.getElementById("ejecutar")
ejecutar.onclick = () => {

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

// Inicio evaluación de combinación

const multiplicacionAncho = []
for(let i = 1; (anchoPlancha * i) <= anchoFormato2400 ; i++){
    multiplicacionAncho.push(anchoPlancha * i)
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
const maquinaWard1 = new maquina("Parana", "Ward1","ABIERTA", 1600, 300, 2450, 1200);
maquinas.push (maquinaWard1)
const maquinaNT = new maquina("Quilmes", "Martin NT", "CERRADA", 1500, 250, 2500, 600)
maquinas.push(maquinaNT)
const maquinaDRO = new maquina ("Parana", "DRO", "ABIERTA", 1400, 400, 2200, 800)
maquinas.push(maquinaDRO)
const maquinaWard3 = new maquina ("Parana", "Ward3","CERRADA", 1600, 500, 2650, 700)
maquinas.push(maquinaWard3)

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
  Swal.fire({
    icon: 'error',
    title: 'No Existe Flujo Productivo Posible',
    text: 'Contactar a Desarrollo',
  })
} else {
    ejecutar.className = "btn btn-primary btn-sm disabled"
    
    // Habilita Boton Guardar
    botonGuardar.className = "btn btn-secondary btn-sm"
    for (listaMaquinas of filtroLargoMin){
        let mensaje = document.createElement("section")
        mensaje.innerHTML = `<div class="card d-inline-flex bg-info bg-opacity-25 shadow-lg p-1 mt-2 ms-5 mb-3 rounded" style="width: 25rem;">
                              <div class="card-body">
                                <h5 class="card-title"><strong>Caja: </strong>${titulo}</h5>
                                <h6 class="card-subtitle mb-2 text-muted"><strong>Flujo Productivo: </strong>${listaMaquinas.nombreMaquina}</h6>
                                <p class="card-text"><strong>Combinación: </strong>${(definicionAutocombinacion == ""? "Tu caja NO autocombina" : "Tu caja combina en: " + definicionAutocombinacion)}</p>
                                <p class="card-text"><strong>Ubicación: </strong>${listaMaquinas.ubicacion}</p>
                              </div>
                            </div>`
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
const guardarTitulos =  (JSON.parse(localStorage.getItem("titulos"))) || []
guardarTitulos.push(titulo)
localStorage.setItem("titulos", JSON.stringify(guardarTitulos))

localStorage.setItem("cajaEvaluada" + titulo, JSON.stringify(cajaEvaluada || ""))
localStorage.setItem("largoPlancha" + titulo, largoPlancha)
localStorage.setItem("anchoPlancha" + titulo, anchoPlancha)
localStorage.setItem("abiertaOCerrada" + titulo, abiertaOCerrada)
localStorage.setItem("definicionAutocombinacion" + titulo, JSON.stringify(definicionAutocombinacion))
localStorage.setItem("maquinas" + titulo, JSON.stringify(filtroNombres))
localStorage.setItem("ubicacion" + titulo, JSON.stringify(filtroUbicacion))
localStorage.setItem("onda" + titulo, onda)
botonGuardar.className = "btn btn-secondary btn-sm disabled"
Toastify({
  text: "Producto Guardado",
  duration: 1500,
  newWindow: true,
  close: true,
  gravity: "top",
  position: "right",
  stopOnFocus: true,
  style: {
    background: "linear-gradient(to right, rgba(11,138,15,1) 0%, rgba(145,232,66,1) 100%);",
  }}).showToast()
}
}

let limpiarFormulario = document.getElementById("limpiar")
limpiarFormulario.onclick = () => {location.reload()}