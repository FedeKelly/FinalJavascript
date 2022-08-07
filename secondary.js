let vaciarLote = document.getElementById("vaciar")
vaciarLote.onclick = () => {localStorage.clear()}

let acum = parseInt(localStorage.getItem("acumulador"))

for (let i = 1; i <= acum; i++){
let numeradorAbiertaOCerrada = "abiertaOCerrada"+i
let abiertaCerrada = localStorage.getItem(numeradorAbiertaOCerrada)
console.log(abiertaCerrada)

let numerdorTitulo = "titulo"+i
let titulo = localStorage.getItem(numerdorTitulo)

//Card Caja Abierta
if(abiertaCerrada == "ABIERTA"){
let numeradorLargoPlancha = "largoPlancha"+i
let largoPlancha = localStorage.getItem(numeradorLargoPlancha)
console.log(largoPlancha)

let numeradorAnchoPlancha = "anchoPlancha"+i
let anchoPlancha = localStorage.getItem(numeradorAnchoPlancha)
console.log(anchoPlancha)

let numeradorAuocombinacion = "definicionAutocombinacion" +i
const autocombinacion = JSON.parse(localStorage.getItem(numeradorAuocombinacion))
console.log(autocombinacion)

let numeradorMaquinas = "maquinas"+i
const maquinas = JSON.parse(localStorage.getItem(numeradorMaquinas))
console.log(...maquinas)

let numeradorUbicacion = "ubicacion"+i
const ubicacion = JSON.parse(localStorage.getItem(numeradorUbicacion))
console.log(...ubicacion)

let numeradorOnda = "onda"+i
const onda = localStorage.getItem(numeradorOnda)


let cards = document.createElement("div")
cards.innerHTML = `<div class="card m-3" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Caja: ${titulo}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${abiertaCerrada}</h6>
  <p class="card-text">Largo ${largoPlancha} x Ancho ${anchoPlancha}</p>
  <p class="card-text">Onda: ${onda}</p>
  <p class="card-text">Tu caja combina en: ${autocombinacion}</p>
  <p class="card-text">Máquinas sugeridas: ${maquinas.join(" o ")}</p>
  <p class="card-text">Ubicación correspondiente: ${ubicacion.join(" o ")}</p>
  <a class="btn btn-primary" id="eliminarCard${i}">Eliminar</a>
  </div>
</div>`
document.body.append(cards)
let eliminarCard = document.getElementById("eliminarCard"+i)
eliminarCard.onclick = () => {localStorage.removeItem("abiertaOCerrada"+i)
localStorage.removeItem("largoPlancha"+i)
localStorage.removeItem("anchoPlancha"+i)
localStorage.removeItem("definicionAutocombinacion"+i)
localStorage.removeItem("titulo"+i)
localStorage.removeItem("cajaEvaluada"+i)
localStorage.removeItem("ubicacion"+i)
localStorage.removeItem("onda"+i)
localStorage.removeItem("maquinas"+i)
}
} else{
    let numeradorLargoPlancha = "largoPlancha"+i
    let largoPlancha = localStorage.getItem(numeradorLargoPlancha)
    console.log(largoPlancha)
    
    let numeradorAnchoPlancha = "anchoPlancha"+i
    let anchoPlancha = localStorage.getItem(numeradorAnchoPlancha)
    console.log(anchoPlancha)
    
    let numeradorAuocombinacion = "definicionAutocombinacion" +i
    const autocombinacion = JSON.parse(localStorage.getItem(numeradorAuocombinacion))
    console.log(autocombinacion)
    
    let numeradorCajaEvaluada = "cajaEvaluada" + i
    const cajaCerrada = JSON.parse(localStorage.getItem(numeradorCajaEvaluada))
    console.log(cajaCerrada)
    
    let numeradorMaquinas = "maquinas"+i
    const maquinas = JSON.parse(localStorage.getItem(numeradorMaquinas))
    
    let numeradorUbicacion = "ubicacion"+i
    const ubicacion = JSON.parse(localStorage.getItem(numeradorUbicacion))

    let numeradorOnda = "onda"+i
    const onda = localStorage.getItem(numeradorOnda)

    let cards = document.createElement("div")
    cards.innerHTML = `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">Caja: ${titulo}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${abiertaCerrada}</h6>
      <p class="card-text">Largo ${largoPlancha} x Ancho ${anchoPlancha}</p>
      <p class="card-text">Onda: ${onda}</p>
      <p class="card-text">Medidas CT: Largo ${cajaCerrada.largo} x Ancho ${cajaCerrada.ancho} x Alto ${cajaCerrada.alto}</p>
      <p class="card-text">Tu caja combina en: ${autocombinacion}</p>
      <p class="card-text">Máquinas sugeridas: ${maquinas.join(" o ")}</p>
      <p class="card-text">Ubicación correspondiente: ${ubicacion.join(" o ")}</p>
      <a class="btn btn-primary" id="eliminarCard${i}">Eliminar</a>
      </div>
    </div>`
    document.body.append(cards)
    let eliminarCard = document.getElementById("eliminarCard"+i)
    eliminarCard.onclick = () => {localStorage.removeItem("abiertaOCerrada"+i)
    localStorage.removeItem("largoPlancha"+i)
    localStorage.removeItem("anchoPlancha"+i)
    localStorage.removeItem("definicionAutocombinacion"+i)
    localStorage.removeItem("titulo"+i)
    localStorage.removeItem("cajaEvaluada"+i)
    localStorage.removeItem("ubicacion"+i)
    localStorage.removeItem("onda"+i)
    localStorage.removeItem("maquinas"+i)
  }
}
}
