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
acumulador += `<div class="card d-inline-flex bg-info bg-opacity-50 shadow-lg p-3 m-2 rounded" style="width: 25rem;">
<div class="card-body w-auto">
  <h4 class="card-title mb-4 text-center">Caja: ${cardTitulo}</h4>
  <h6 class="card-subtitle mb-2 text-muted">TIPO: ${abiertaCerrada}</h6>
  <p class="card-text"><strong>Plancha </strong>Largo ${largoPlancha} x Ancho ${anchoPlancha}</p>
  <p class="card-text"><strong>Onda: </strong>${onda}</p>
  <p class="card-text"><strong>Combinación: </strong>${autocombinacion>0? ("Tu caja autocombina en: " + autocombinacion) : "NO autocombina"}</p>
  <p class="card-text"><strong>Máquinas sugeridas: </strong>${maquinas.join(" o ")}</p>
  <p class="card-text"><strong>Ubicación correspondiente: </strong>${ubicacion.join(" o ")}</p>
  <div class="row justify-content-around">
  <input class="text-center form-control" style="width: 160px" placeholder="Indicar Cartón" aria-label="With textarea" id="carton${titulo}"></input>
  <input class="text-center form-control" style="width: 160px" placeholder="U$D / Tn" aria-label="With textarea" id="USD${titulo}"></input>
  </div>
  <h5 class="card-title text-center mt-3" id="${numeradorCotizacion}">Cotización: $ 0</h5>
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
    acumulador += `<div class="card d-inline-flex bg-info bg-opacity-50 shadow-lg p-3 m-2 rounded" style="width: 25rem;">
      <div class="card-body w-auto">
      <h4 class="card-title mb-4 text-center">Caja: ${cardTitulo}</h4>
      <h6 class="card-subtitle mb-2 text-muted">TIPO: ${abiertaCerrada}</h6>
      <p class="card-text"><strong>Plancha: </strong>Largo ${largoPlancha} x Ancho ${anchoPlancha}</p>
      <p class="card-text"><strong>Onda: </strong>${onda}</p>
      <p class="card-text"><strong>Medidas CT: </strong>Largo ${cajaCerrada.largo} x Ancho ${cajaCerrada.ancho} x Alto ${cajaCerrada.alto}</p>
      <p class="card-text"><strong>Combinación: </strong>${autocombinacion>0? ("Tu caja autocombina en: " + autocombinacion) : "NO autocombina"}</p>
      <p class="card-text"><strong>Máquinas sugeridas: </strong>${maquinas.join(" o ")}</p>
      <p class="card-text"><strong>Ubicación correspondiente: </strong>${ubicacion.join(" o ")}</p>
      <div class="row justify-content-around">
      <input class="text-center form-control" style="width: 160px" placeholder="Indicar Cartón" aria-label="With textarea" id="carton${titulo}"></input>
      <input class="text-center form-control" style="width: 160px" placeholder="U$D / Tn" aria-label="With textarea" id="USD${titulo}"></input>
      </div>
      <h5 class="card-title text-center mt-3" id="${numeradorCotizacion}">Cotización: $ 0</h5>
      </div>
      <div class="card-footer text-center">
        <a class="btn btn-primary m-3" id="eliminarCard${titulo}">Eliminar</a>
      </div>
    </div>`
}
}
document.getElementById("seccion-card").innerHTML = acumulador

for (const titulo of guardarTitulos){
  document.getElementById("USD"+titulo).disabled = true
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
    Toastify({
      text: "Producto Eliminado",
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
  let carton
  let gramaje
  let resultado
  let campoCarton = document.getElementById("carton"+titulo)
  campoCarton.addEventListener("change", () => {carton = ((document.getElementById("carton"+titulo).value).toUpperCase())
  console.log(carton)
    fetch("https://fedekelly.github.io/datos/datos.json")
    .then((response) => response.json())
    .then((cartones) => resultado = cartones.find((el) => el.codigo == carton))
  setTimeout(() =>{
      if(resultado === undefined){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cartón no encontrado',
      })
    }else{
    console.log(resultado)
    gramaje = resultado.gramaje
    console.log(gramaje)
    document.getElementById("USD"+titulo).disabled = false}
  },300)
  })
  
  let USDValor
  let campoUSD = document.getElementById("USD"+titulo)
  campoUSD.addEventListener("change", () => {USDValor = parseInt(document.getElementById("USD"+titulo).value)
    let numeradorLargoPlancha = "largoPlancha"+titulo
    let largoPlancha = localStorage.getItem(numeradorLargoPlancha)
    let numeradorAnchoPlancha = "anchoPlancha"+titulo
    let anchoPlancha = localStorage.getItem(numeradorAnchoPlancha)
    let cotizacion = largoPlancha * anchoPlancha /1000000 * (gramaje/1000) * USDValor/1000 * dolar
document.getElementById("coti"+titulo).innerText = "Cotización: $ " + parseFloat(cotizacion).toFixed(2)
})
}


