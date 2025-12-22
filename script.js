class Proyecto {
    constructor(urlImagen,titulo,tecnologias,nivel,listo) {
        this.id = proyectos.length
        this.urlImagen = urlImagen
        this.titulo = titulo
        this.tecnologias = tecnologias
        this.nivel = nivel
        this.listo = listo
    }
}




let proyectos = []

//CAJA SECCION QUE CONTIENE LOS PROYECTOS

let $seccion = document.querySelector(".seccion__cuerpo_uno")

function agregarAlArreglo(urlImagen,titulo,tecnologias,nivel,listo) {
    const proyecto = new Proyecto(urlImagen,titulo,tecnologias,nivel,listo)
    proyectos.push(proyecto)

    //AQUI CREO LA CAJA QUE CONTIENE TODO
    let cajaPadre = document.createElement("div")
    cajaPadre.classList.add("seccion__cuerpo_uno__caja")

    //AQUI COLOCO LA IMAGEN
    let urlImagenNueva = document.createElement("img")
    urlImagenNueva.classList.add("seccion__cuerpo_uno__caja__marco__img")
    urlImagenNueva.src = urlImagen
    let frameUrlImagenNueva = document.createElement("div")
    frameUrlImagenNueva.classList.add("seccion__cuerpo_uno__caja__marco")
    frameUrlImagenNueva.appendChild(urlImagenNueva)
    
    cajaPadre.appendChild(frameUrlImagenNueva)

    //AQUI CREO EL TITULO
    let tituloNuevo = document.createElement("h2")
    tituloNuevo.classList.add("seccion__cuerpo_uno__caja__titulo")
    tituloNuevo.innerHTML = titulo

    cajaPadre.appendChild(tituloNuevo)


    //AQUI CREARE LAS ETIQUETAS DE LAS TECNOLOGIAS

    let cajaEtiquetas = document.createElement("div")
    cajaEtiquetas.classList.add("seccion__cuerpo_uno__caja__etiquetas")

    proyecto.tecnologias.forEach(elemento => {
        let cajaTecnologia = document.createElement("div")
        cajaTecnologia.classList.add("seccion__cuerpo_uno__caja__etiquetas__etiqueta")

        if(elemento.toLowerCase()=="html") {
            cajaTecnologia.classList.add("borde-anaranjado")
        }
        else if(elemento.toLowerCase()=="css") {
            cajaTecnologia.classList.add("borde-azul")
        }
        else if(elemento.toLowerCase()=="javascript") {
            cajaTecnologia.classList.add("borde-amarillo")
        }

        cajaTecnologia.innerHTML =elemento
        cajaEtiquetas.appendChild(cajaTecnologia)

        
    });
    //AQUI LO COLOCO DENTRO DE LA CAJA PADRE
    cajaPadre.appendChild(cajaEtiquetas)


    //CAJA PIE



    let pieNuevo = document.createElement("div")
    pieNuevo.classList.add("seccion__cuerpo_uno__caja__pie")

    let pieNuevoNivel = document.createElement("div")
    pieNuevoNivel.classList.add("seccion__cuerpo_uno__caja__pie__nivel")
    pieNuevoNivel.textContent = "NIVEL: "

    let pieNuevoSpan = document.createElement("span")
    pieNuevoSpan.classList.add("seccion__cuerpo_uno__caja__pie__nivel__span")
    pieNuevoSpan.innerHTML = nivel

    pieNuevoNivel.appendChild(pieNuevoSpan)

    pieNuevo.appendChild(pieNuevoNivel)

    let pieNuevoActivo = document.createElement("div")
    pieNuevoActivo.classList.add("seccion__cuerpo_uno__caja__pie__activo")

    let pieNuevoActivoSpan = document.createElement("span")
    pieNuevoActivoSpan.innerHTML = "."

    pieNuevoActivo.appendChild(pieNuevoActivoSpan)
    pieNuevo.appendChild(pieNuevoActivo)

    //AQUI LO COLOCO DENTRO DE LA CAJA PADRE
    cajaPadre.appendChild(pieNuevo)


    //AQUI METO TODO A LA SECCION
    $seccion.appendChild(cajaPadre)


}

function crearElementoDiv(arregloProyectos) {

}



agregarAlArreglo("img/imagen-loro.png","Adivina.io",["html","css","javascript"],"medio",true)



console.log(proyectos)


let $frameCaja = document.querySelector(".seccion__cuerpo_uno__caja")
let $imagenCaja = document.querySelector(".seccion__cuerpo_uno__caja__marco__img")


$frameCaja.addEventListener("mouseover", ()=> {
    $imagenCaja.style.height = "120%"

})

$frameCaja.addEventListener("mouseout", ()=> {
    $imagenCaja.style.height = "100%"
   
})

