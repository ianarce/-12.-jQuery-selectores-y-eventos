//DECLARACION DE UNA CLASE
class Moneda{
    constructor(Denominacion,ValorDolares){
        this.Denominacion=Denominacion
        this.ValorDolares=ValorDolares
    }
}

//FUNCION PARA CONVERTIR EL VALOR INGRESADO A DOLARES
function Convertir(ValorIngresado,ValorRetorno){
    return ValorIngresado*ValorRetorno
}

let monedasALL = []
//MONEDAS DISPONIBLES USANDO EL VALOR DE DOLAR COMO MONEDA UNIVERSAL PARA HACER LAS OPERACIONES
const moneda1= new Moneda("Pesos Mexicanos",20)
const moneda2= new Moneda("Pesos Argentinos",103)
const moneda3= new Moneda("Yenes",115)
const moneda4= new Moneda("Pesos Uruguayos",44)
const moneda5= new Moneda("Euro",0.88)



monedasALL.push(moneda1)
monedasALL.push(moneda2)
monedasALL.push(moneda3)
monedasALL.push(moneda4)
monedasALL.push(moneda5)


//AGREGAR OPCIONES ITERANDO EL ARRAY DE MONEDAS
const opcionesInput1 = document.getElementById("input1")
const opcionesInput2 = document.getElementById("input2")

for (let moneda of monedasALL){

    //AGREGAR OPCIONES EN EL INPUT1 
    
    opcionesInput1.innerHTML+=`<option value="${moneda.ValorDolares}">${moneda.Denominacion}</option>`
    

    //AGREGAR OPCIONES EN EL INPUT2
    
    opcionesInput2.innerHTML+=`<option value="${moneda.ValorDolares}">${moneda.Denominacion}</option>`

}

//VALIDAR LOS VALORES A CONVERTIR 
function optenerValor() {
   let opcion1 = $("#input1").val()
   let opcion2 = $("#input2").val()
   let valor = $("#valorIn").val()
   let denominacion = document.getElementById("input2")
   let denominacionTexto = denominacion.options[denominacion.selectedIndex].text;


    if(opcion1==opcion2){
        $("#resultado").html( `ERROR POR FAVOR INGRESE DOS MONEDAS DISTINTAS `)
    }
    else {
        let valorResultante = Convertir(valor,opcion2/opcion1)
        $("#resultado").html(`${valorResultante.toFixed(2)} ${denominacionTexto} `)
    }
}

//AGREGAR FUNCION PARA GUARDAR MONEDA AL LOCAL STORAGE  
function guardarFavorito() {
    let monedaFavoritaInput = document.getElementById("input2")
    let monedaFavoritaValor = document.getElementById("input2").value
    let monedaFavoritaSelec = monedaFavoritaInput.options[monedaFavoritaInput.selectedIndex].text;
    let monedaFavorita = new Moneda (monedaFavoritaSelec,monedaFavoritaValor)
    localStorage.setItem("moneda",JSON.stringify(monedaFavorita))
}

//AGREGAR FUNCION PARA CARGAR LA MONEDA DEL LOCAL STORAGE
function cargarFavorito(){
    let monedaFavorita = JSON.parse(localStorage.getItem("moneda"))
    $("#input2").val(monedaFavorita.ValorDolares)  
}


//AGREGAR EVENTOS AL BOTON
$(document).ready(function(){
    $("#enviar").click(optenerValor);
    $("#añadir").click(guardarFavorito);
    $("#cargar").click(cargarFavorito);
})



