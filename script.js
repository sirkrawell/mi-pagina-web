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