const productos = [
    { id: 1, nombre: "computadora hp LT350", precio: 300, stock: true, cantidad: 11 },
    { id: 2, nombre: "mouse xiaomi bluetooth", precio: 20, stock: true, cantidad: 34 },
    { id: 3, nombre: "computadora gamer asus ROG Z800", precio: 890, stock: true, cantidad: 4 },
    { id: 4, nombre: "teclado inalambrico samsung", precio: 35, stock: true, cantidad: 15 },
    { id: 5, nombre: "combo teclado y mouse lenovo", precio: 30, stock: false, cantidad: 0 }
];

function ingresarProductosAlCarro() {
    let carrito = [];
    let continuar = true;

    while (continuar === true) {
        
        let productosTexto = `Lista de productos: \n`;
        productos.forEach(producto => {
            productosTexto += `ID: ${producto.id}, ${producto.nombre}, Precio: U$S ${producto.precio}\n`
        });

        let unProducto = parseInt(prompt(`Bienvenido a mi tienda BY Consola!! seleccione los elementos a agregar a su carrito:
        ${productosTexto}`));

        if (isNaN(unProducto)) {
            alert("debes ingresar un ID de algun producto de la lista");
        } else {
            let nuevoProducto = productos.find(producto => producto.id === unProducto);
            carrito.push(nuevoProducto);
            alert(`Se agrego al carrito: ${nuevoProducto.nombre}`);
        }

        let precioTotal = carrito.reduce((total, producto) => { return total + producto.precio }, 0);

        let productosCarrito = `\n`;
        carrito.forEach(producto => {
            productosCarrito += `${producto.nombre}, Precio: U$S ${producto.precio}\n`
        });


        const respuesta = confirm("quieres agregar otro producto al carrito?");
        if (respuesta === true) {
            continuar = true;
        } else {
            continuar = false;
            alert(`A continuacion te mostramos el detalle de tu pedido:
                ${productosCarrito}
                precio total: U$S ${precioTotal}
                `);
        }
    }
}

ingresarProductosAlCarro();

