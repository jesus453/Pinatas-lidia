const botones =
document.querySelectorAll(".comprar");

botones.forEach((boton)=>{

    boton.addEventListener("click",()=>{

        const producto =
        boton.dataset.producto;

        let carrito =
        JSON.parse(localStorage.getItem("carrito"))
        || [];

        carrito.push(producto);

        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );

        actualizarContador();

        alert(producto + " agregado al carrito");

    });

});


// ACTUALIZAR CONTADOR

function actualizarContador(){

    let carrito =
    JSON.parse(localStorage.getItem("carrito"))
    || [];

    const contador =
    document.getElementById("contador-carrito");

    if(contador){

        contador.innerHTML =
        carrito.length;

    }

}

actualizarContador();


// MOSTRAR USUARIO

const usuario =
localStorage.getItem("usuario");

if(usuario){

    const bienvenida =
    document.getElementById("bienvenida");

    if(bienvenida){

        bienvenida.innerHTML =
        "Bienvenido " + usuario;

    }

}