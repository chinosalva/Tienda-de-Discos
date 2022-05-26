class tiendaDeDiscos{
    constructor(id, nombre, precio, anio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.anio = anio
    }
}
let todosDiscos = []

function retornar() {
        let formulario = document.getElementById("form")
        let name = document.getElementById("name1").value
        let number = document.getElementById("precio2").value
        let anio = document.getElementById("anio3").value
        let idEstudiante = todosDiscos.length
        let estudiantes = new tiendaDeDiscos (idEstudiante, name, number, anio)
        todosDiscos.push(estudiantes)
        var tablaAlumnos = document.getElementById("registroDiscos")
        var largo = todosDiscos.length
    
        if(name != "" && number != "" && anio != ""){
            for (let i = largo-1; i < largo; i++){
                var cuerpoTabla = document.getElementById("Tabla")
                var renglon = document.createElement("tr")
                var columnaid = document.createElement("td")
                var columnanombre = document.createElement("td")
                var columnaprecio = document.createElement("td")
                var columnatiempo = document.createElement("td")
                var columnaboton = document.createElement("td")
                var boton = document.createElement("button")
                boton.type = "button"
                boton.innerText = "Borrar"
                var textoNombre = document.createTextNode(todosDiscos[i].nombre)
                columnanombre.appendChild(textoNombre)
                var textoId = document.createTextNode(todosDiscos[i].id)
                columnaid.appendChild(textoId)
                var precio = document.createTextNode(todosDiscos[i].precio)
                columnaprecio.appendChild(precio)
                var tiempo = document.createTextNode(todosDiscos[i].anio)
                columnatiempo.appendChild(tiempo)
                columnaboton.appendChild(boton)
                renglon.appendChild(columnaid)
                renglon.appendChild(columnanombre)
                renglon.appendChild(columnaprecio)
                renglon.appendChild(columnatiempo)
                renglon.appendChild(columnaboton)
                cuerpoTabla.appendChild(renglon)
                tablaAlumnos.appendChild(cuerpoTabla)
                boton.onclick = function(todosDiscos) {
                    todosDiscos.target.parentNode.parentNode.remove()
                }
            }
            largo++
            form.reset()
            console.log(renglon)
            let busqueda = document.getElementById("ent")
            let botonBusqueda = documen.getElementById("buttonEnt")
            function busquedaElementos(todosDiscos, busqueda){
                const size = todosDiscos.length
                let indexx = 0
                while (index < size){
                    let elementoPresente = todosDiscos[index]
                    if(elementoPresente === busqueda){
                        console.log(renglon)
                        indexx++
                        
                    }
                }
            }
            botonBusqueda.addEventListener(`click`, busquedaElementos)
        }else{
        alert("Completa los campos")
        }
}
let bottom = document.getElementById("registrar4")
bottom.removeEventListener('click', retornar)
bottom.addEventListener(`click`, retornar)


