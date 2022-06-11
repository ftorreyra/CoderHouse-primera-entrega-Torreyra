
const buttonBuy = document.querySelectorAll('.productItem__button__buy');
buttonBuy.forEach(buttonCard => {
    buttonCard.addEventListener('click', () => addProduct(buttonCard.value));
});

const buttonDelete = document.querySelectorAll('.productItem__delete');
buttonDelete.forEach(del => {
    del.addEventListener('click', () => deleteProduct(del.value));
})

const buttonFactu = document.querySelector('.buttonFactu');
buttonFactu.addEventListener('click', () => buttonReceipt());


let cantidad = 0;
let totalElementos = [];
const prices = {
    Pasta: 450,
    Miel: 670,
    Oliva: 360,
}

const factu = {};

let totalProducto = 0;
let totalGeneral = 0;

function addProduct(value) {
    cantidad = parseInt(prompt('Ingrese cuantos quiere comprar'));
    Object.entries(prices).forEach(val => {
        if (value === val[0]) {
            totalProducto = cantidad * val[1];
            totalGeneral = totalGeneral + totalProducto;
            factu[val[0]] = totalProducto;
            totalElementos.push(cantidad);
        }
    })
}

function buttonReceipt() {
    alert('Para ver la factura abra la consola');
    let i = 0;
    Object.keys(factu).map(key => {
        const value = factu[key];
        console.log(`Producto: ${key} - Cantidad: ${totalElementos[i]} - Total: ${value}`)
        i++;

    })
    console.log(`Total General: ${totalGeneral} `)
}


function deleteProduct(value) {
    Object.entries(factu).forEach(val => {
        if (value === val[0]) {
            delete factu[val[0]];
            totalGeneral = totalGeneral - val[1];
        }
    })
};
