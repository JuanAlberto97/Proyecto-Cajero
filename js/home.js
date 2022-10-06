window.onload = checkLogged;
  function checkLogged(){
    if(sessionStorage.getItem("logged") != 'true') {
        window.location.assign('index.html')
    } }
   
let usuario = sessionStorage.getItem("usuario")
document.getElementById("bienvenida").innerHTML = 'Bienvenido a su cajero automatico ' + usuario
let id = sessionStorage.getItem("id")
let cuenta = cuentas[id]
let saldo = cuenta.saldo
let sald0 = document.getElementById("sald0")
let consulta2 = document.getElementById("consultaSaldo")
let deposito = document.getElementById("deposito")
let retirar = document.getElementById("retirar")
let alerta = document.getElementById("alerta")
let success = document.getElementById("success")
let alerta2 = document.getElementById("alerta2")
let success2 = document.getElementById("success2")


let salir = document.getElementById("salir")
salir.addEventListener("click", function(){
sessionStorage.clear()
window.location.assign('index.html')
})

let consulta = document.getElementById("consulta")
let ingreso = document.getElementById("deposito")
let retiro = document.getElementById("retiro")

consulta.addEventListener("click", (e) =>{
    sald0.innerText = "Su saldo actual es de $"+saldo
    retirar.style.display= 'none'
    depositar.style.display = 'none'
    success.style.display = 'none'
    alerta.style.display = 'none'
    alerta2.style.display = 'none'
    success2.style.display = 'none'
    consulta2.style.display = 'block'
})

ingreso.addEventListener('click', (e) =>{
    consulta2.style.display = 'none'
    retirar.style.display= 'none'
    success2.style.display = 'none'
    alerta2.style.display = 'none'
    depositar.style.display = 'block'
})

retirar.addEventListener('click', (e) =>{
    consulta2.style.display = 'none'
    depositar.style.display = 'none'
    success.style.display = 'none'
    alerta.style.display = 'none'
    retirar.style.display= 'block'
})

let bt_depositar = document.getElementById("bt-depositar")
let bt_retirar = document.getElementById("bt-retirar")

bt_depositar.addEventListener('click', (e) =>{
    let monto = parseInt(document.getElementById("monto1").value) 
    let newSaldo
    document.getElementById("monto1").value = ""
if(monto>0){
    newSaldo= saldo+monto
 if(newSaldo>0){
        saldo = newSaldo
        alerta.style.display = 'none'
        success.style.display = 'block'
        success.innerText = "Deposito realizado con exito"
     }
}
else{
    alerta.style.display = 'block'
    alerta.innerText = "Por favor ingrese un numero valido"
    success.style.display = 'none'
}
})


bt_retirar.addEventListener('click', (e) =>{
    let monto = parseInt(document.getElementById("monto2").value) 
    let newSaldo
    document.getElementById("monto2").value = ""
if(monto>0){
    newSaldo= saldo-monto
 if(newSaldo>=10){
    saldo = newSaldo
    alerta2.style.display = 'none'
    success2.style.display = 'block'
    success2.innerText = "Retiro realizado con exito"
 }
 else{
    alerta2.style.display = 'block'
    alerta2.innerText = "No puede tener un saldo menor a 10"
    success2.style.display = 'none'
 }
}
else{
    alerta2.style.display = 'block'
    alerta2.innerText = "Por favor, ingrese un numero valido"
    success2.style.display = 'none'
}  
})