class Proyecto {
    constructor(urlImagen,titulo,tecnologias,nivel,listo,urlWeb) {
        this.id = proyectos.length
        this.urlImagen = urlImagen
        this.titulo = titulo
        this.tecnologias = tecnologias
        this.nivel = nivel
        this.listo = listo
        this.urlWeb = urlWeb
    }
}




let proyectos = []

//CAJA SECCION QUE CONTIENE LOS PROYECTOS

let $seccion = document.querySelector(".seccion__cuerpo_uno")

function agregarAlArreglo(urlImagen,titulo,tecnologias,nivel,listo,urlWeb) {
    const proyecto = new Proyecto(urlImagen,titulo,tecnologias,nivel,listo,urlWeb)
    proyectos.push(proyecto)
    console.log(proyecto)

    

    //AQUI CREO LA CAJA QUE CONTIENE TODO
    let cajaPadre = document.createElement("div")
    cajaPadre.classList.add("seccion__cuerpo_uno__caja")

    cajaPadre.setAttribute("ID",proyecto.id)

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

     if(listo==true) {
        pieNuevoActivoSpan.style.backgroundImage = "linear-gradient(to top, #04b90d, #5bff63);";
    }
    else if(listo==false) {
        pieNuevoActivoSpan.style.backgroundImage = "linear-gradient(to top, #ff8422, #ffef5b)";
    }
    else {
        pieNuevoActivoSpan.style.backgroundImage = "linear-gradient(to top, #0493b9, #5bffed);";
    }

    pieNuevoActivo.appendChild(pieNuevoActivoSpan)
    pieNuevo.appendChild(pieNuevoActivo)

    //AQUI LO COLOCO DENTRO DE LA CAJA PADRE
    cajaPadre.appendChild(pieNuevo)

    // Agregar event listeners para mouseover y mouseout
    cajaPadre.addEventListener("mouseover", () => {
        const img = cajaPadre.querySelector(".seccion__cuerpo_uno__caja__marco__img");
        img.style.height = "120%";
    });

    cajaPadre.addEventListener("mouseout", () => {
        const img = cajaPadre.querySelector(".seccion__cuerpo_uno__caja__marco__img");
        img.style.height = "100%";
    });

    cajaPadre.addEventListener("click",(a)=>{
        console.log(a.currentTarget.id)
        window.open(proyectos[a.currentTarget.id].urlWeb)
        
    })

    //AQUI METO TODO A LA SECCION
    $seccion.appendChild(cajaPadre)


}

function crearElementoDiv(arregloProyectos) {

}



agregarAlArreglo("img/adivina-la-bandera.jpeg","Adivina La Bandera",["html","css","javascript"],"medio",true,"https://sirkrawell.github.io/adivina-la-bandera/")
agregarAlArreglo("img/adivina-la-palabra.png","Adivina la palabra",["html","css","javascript"],"medio",true,"https://sirkrawell.github.io/adivinar-palabra/")
agregarAlArreglo("img/tienda.png","Tienda",["html","css","javascript"],"medio",false,"https://sirkrawell.github.io/tienda/")



console.log(proyectos)


let $frameCaja = document.querySelector(".seccion__cuerpo_uno__caja")
let $imagenCaja = document.querySelector(".seccion__cuerpo_uno__caja__marco__img")


// $frameCaja.addEventListener("mouseover", ()=> {
//     $imagenCaja.style.height = "120%"

// })

// $frameCaja.addEventListener("mouseout", ()=> {
//     $imagenCaja.style.height = "100%"
   
// })


//AQUI VOY A LEER LOS TARGET ASIGNADOS A CADA CAJA PARA ABRIR LOS LINKS

$frameCaja.addEventListener("click", (a)=>{
    console.log(a.target)
})

//EFECTO APARECE SUAVEMENTE DESDE ABAJO

let $cajaInformacion =  document.querySelector(".seccion__cuerpo_dos__caja")

const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    entries.forEach(entry => {
        // Si el elemento es visible en el viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { 
    threshold: 0.4 // Se activa cuando el 10% del elemento es visible
});

// Seleccionamos todos los elementos que queremos que tengan el efecto
document.querySelectorAll('.flotar').forEach((el) => observer.observe(el));