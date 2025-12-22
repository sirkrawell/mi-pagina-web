class Proyecto {
    constructor(urlImagen,titulo,tecnologias,nivel,listo) {
        this.urlImagen = urlImagen
        this.titulo = titulo
        this.tecnologias = tecnologias
        this.nivel = nivel
        this.listo = listo
    }
}




let proyectos = []

function agregarAlArreglo(urlImagen,titulo,tecnologias,nivel,listo) {
    const proyecto = new Proyecto(urlImagen,titulo,tecnologias,nivel,listo)
    proyectos.push(proyecto)
}

agregarAlArreglo("imagen.png","titulo prueba",["html","css"],"medio",true)


console.log(proyectos)


let $frameCaja = document.querySelector(".seccion__cuerpo_uno__caja")
let $imagenCaja = document.querySelector(".seccion__cuerpo_uno__caja__marco__img")


$frameCaja.addEventListener("mouseover", ()=> {
    $imagenCaja.style.height = "120%"

})

$frameCaja.addEventListener("mouseout", ()=> {
    $imagenCaja.style.height = "100%"
   
})