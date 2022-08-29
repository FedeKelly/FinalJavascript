let dolar 
let acumulador = ""
let campoDolar= document.getElementById("dolar")
fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
.then((response) => response.json())
.then((data) => dolar = Number.parseFloat(data[0].casa.venta).toFixed(2))
setTimeout(() =>{
campoDolar.innerText = dolar
},1500)

let vaciarLote = document.getElementById("vaciar")
vaciarLote.onclick = () => {
Swal.fire({
  title: '¿Estas seguro?',
  text: "Vas a perder la información cargada hasta ahora",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Confirmar'
}).then((result) => {
  if (result.isConfirmed) {
    localStorage.clear()
    Swal.fire(
      'Borrada!',
      'La información fue borrada',
      'success'
    )
  }
})
}

let enviarInfo = document.getElementById("enviarInfo")
enviarInfo.onclick = () => {localStorage.clear()
  Swal.fire({
    title: 'Enviando INFO a Desarrollo',
    width: 400,
    padding: '2 em',
    color: '#080808',
    background: '#b7edc9 url(/images/loguito.jfif)',
    backdrop: `
      rgba(38,198,206,0.2)
      url("/images/mail.gif")
      left top
      no-repeat
    `
  })}

const guardarTitulos = (JSON.parse(localStorage.getItem("titulos")) || [])

for (const titulo of guardarTitulos){
let numeradorAbiertaOCerrada = "abiertaOCerrada"+ titulo
let abiertaCerrada = localStorage.getItem(numeradorAbiertaOCerrada)
console.log(abiertaCerrada)

let cardTitulo = titulo

if(abiertaCerrada == "ABIERTA"){
let numeradorLargoPlancha = "largoPlancha"+titulo
let largoPlancha = localStorage.getItem(numeradorLargoPlancha)
console.log(largoPlancha)

let numeradorAnchoPlancha = "anchoPlancha"+titulo
let anchoPlancha = localStorage.getItem(numeradorAnchoPlancha)
console.log(anchoPlancha)

let numeradorAuocombinacion = "definicionAutocombinacion" +titulo
const autocombinacion = JSON.parse(localStorage.getItem(numeradorAuocombinacion))
console.log(autocombinacion)

let numeradorMaquinas = "maquinas"+titulo
const maquinas = JSON.parse(localStorage.getItem(numeradorMaquinas))
console.log(...maquinas)

let numeradorUbicacion = "ubicacion"+titulo
const ubicacion = JSON.parse(localStorage.getItem(numeradorUbicacion))
console.log(...ubicacion)

let numeradorOnda = "onda"+titulo
const onda = localStorage.getItem(numeradorOnda)

let numeradorCotizacion = "coti"+cardTitulo

//let cards = document.createElement("div")
//cards.innerHTML
acumulador += `<div class="card d-inline-flex bg-info bg-opacity-50 shadow-lg p-3 m-5 rounded" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Caja: ${cardTitulo}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${abiertaCerrada}</h6>
  <p class="card-text">Largo ${largoPlancha} x Ancho ${anchoPlancha}</p>
  <p class="card-text">Onda: ${onda}</p>
  <p class="card-text">Tu caja combina en: ${autocombinacion>0? ("Tu caja autocombina en: " + autocombinacion) : "NO autocombina"}</p>
  <p class="card-text">Máquinas sugeridas: ${maquinas.join(" o ")}</p>
  <p class="card-text">Ubicación correspondiente: ${ubicacion.join(" o ")}</p>
  <input class="form-control mb-2 w-50" placeholder="U$D / Tn" aria-label="With textarea" id="USD${titulo}"></input>
  <h5 class="card-title" id="${numeradorCotizacion}">Cotización: 0</h5>
  </div>
  <div class="card-footer text-center">
    <a class="btn btn-primary m-3" id="eliminarCard${titulo}">Eliminar</a>
  </div>
</div>`
} else{
    let numeradorLargoPlancha = "largoPlancha"+titulo
    let largoPlancha = localStorage.getItem(numeradorLargoPlancha)
    console.log(largoPlancha)
    
    let numeradorAnchoPlancha = "anchoPlancha"+titulo
    let anchoPlancha = localStorage.getItem(numeradorAnchoPlancha)
    console.log(anchoPlancha)
    
    let numeradorAuocombinacion = "definicionAutocombinacion" +titulo
    const autocombinacion = JSON.parse(localStorage.getItem(numeradorAuocombinacion))
    console.log(autocombinacion)
    
    let numeradorCajaEvaluada = "cajaEvaluada" + titulo
    const cajaCerrada = JSON.parse(localStorage.getItem(numeradorCajaEvaluada))
    console.log(cajaCerrada)
    
    let numeradorMaquinas = "maquinas"+titulo
    const maquinas = JSON.parse(localStorage.getItem(numeradorMaquinas))
    
    let numeradorUbicacion = "ubicacion"+titulo
    const ubicacion = JSON.parse(localStorage.getItem(numeradorUbicacion))

    let numeradorOnda = "onda"+titulo
    const onda = localStorage.getItem(numeradorOnda)

    let numeradorCotizacion = "coti"+cardTitulo

    //let cards = document.createElement("div")
    //cards.innerHTML 
    acumulador += `<div class="card d-inline-flex bg-info bg-opacity-50 shadow-lg p-3 m-5 rounded" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">Caja: ${cardTitulo}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${abiertaCerrada}</h6>
      <p class="card-text">Largo ${largoPlancha} x Ancho ${anchoPlancha}</p>
      <p class="card-text">Onda: ${onda}</p>
      <p class="card-text">Medidas CT: Largo ${cajaCerrada.largo} x Ancho ${cajaCerrada.ancho} x Alto ${cajaCerrada.alto}</p>
      <p class="card-text">${autocombinacion>0? ("Tu caja autocombina en: " + autocombinacion) : "NO autocombina"}</p>
      <p class="card-text">Máquinas sugeridas: ${maquinas.join(" o ")}</p>
      <p class="card-text">Ubicación correspondiente: ${ubicacion.join(" o ")}</p>
      <input class="form-control mb-2 w-50" placeholder="U$D / Tn" aria-label="With textarea" id="USD${titulo}"></input>
      <h5 class="card-title" id="${numeradorCotizacion}">Cotización: 0</h5>
      </div>
      <div class="card-footer text-center">
        <a class="btn btn-primary m-3" id="eliminarCard${titulo}">Eliminar</a>
      </div>
    </div>`
}
}
document.getElementById("seccion-card").innerHTML = acumulador

for (const titulo of guardarTitulos){
  let eliminarCard = document.getElementById("eliminarCard"+titulo)
  eliminarCard.onclick = () => {localStorage.removeItem("abiertaOCerrada"+titulo)
    localStorage.removeItem("largoPlancha"+titulo)
    localStorage.removeItem("anchoPlancha"+titulo)
    localStorage.removeItem("definicionAutocombinacion"+titulo)
    localStorage.removeItem("cajaEvaluada"+titulo)
    localStorage.removeItem("ubicacion"+titulo)
    localStorage.removeItem("onda"+titulo)
    localStorage.removeItem("maquinas"+titulo)
    let tituloABorrar = guardarTitulos.indexOf(titulo)
    guardarTitulos.splice(tituloABorrar, 1)
    localStorage.setItem("titulos", JSON.stringify(guardarTitulos))
  }
  let USDValor
  let campoUSD = document.getElementById("USD"+titulo)
  campoUSD.addEventListener("change", () => {USDValor = parseInt(document.getElementById("USD"+titulo).value)
    let numeradorLargoPlancha = "largoPlancha"+titulo
    let largoPlancha = localStorage.getItem(numeradorLargoPlancha)
    let numeradorAnchoPlancha = "anchoPlancha"+titulo
    let anchoPlancha = localStorage.getItem(numeradorAnchoPlancha)
    let cotizacion = largoPlancha * anchoPlancha /1000000 * 0.6 * USDValor/1000 * dolar
document.getElementById("coti"+titulo).innerText = "Cotización: $ " + parseFloat(cotizacion).toFixed(2)
})
}


