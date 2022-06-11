
const buttonBuy = document.querySelectorAll('.productItem__button__buy');
buttonBuy.forEach(buttonCard => {
    buttonCard.addEventListener('click', () => addProduct(buttonCard.value));
});

const buttonDelete = document.querySelectorAll('.productItem__delete');
buttonDelete.forEach(del => {
    del.addEventListener('click', () => deleteProduct(del.value));
});

const buttonFactu = document.querySelector('.buttonFactu');
buttonFactu.addEventListener('click', () => buttonReceipt());

const prices = {
    Pasta: 450,
    Miel: 670,
    Oliva: 360,
};
const factu = {};
const cuponsDiscount = ['descuento1', 'descuento2', 'descuento3', 'descuento4'];

let cantidad = 0;
let totalElementos = [];
let totalProducto = 0;
let totalGeneral = 0;
let isDiscount = false;
let deleteBoolean = true;


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
    if (deleteBoolean) {
        descuentos();
    };
    alert('Para ver la factura abra la consola');
    let i = 0;
    Object.keys(factu).map(key => {
        const value = factu[key];
        console.log(`Producto: ${key} - Cantidad: ${totalElementos[i]} - Total: ${value}`);
        i++;

    })
    if (isDiscount) {
        const totalDiscount = totalGeneral - totalGeneral * 10 / 100;
        console.log(`Total General: ${totalGeneral}`);
        console.log('Descuento: 10%');
        console.log(`Total con descuento: ${totalDiscount}`);
    } else {
        console.log(`Total General: ${totalGeneral}`)
    }
    deleteBoolean = true;
}


function descuentos() {
    const codeDiscount = prompt('Ingrese código de descuento si tiene');
    isDiscount = cuponsDiscount.some((el) => el == codeDiscount);
    if (isDiscount) {
        console.log('Codigo correcto');
        const indexCode = cuponsDiscount.indexOf(codeDiscount);
        cuponsDiscount.splice(indexCode, 1);
    } else {
        console.log('El código no es válido');
    }
}


function deleteProduct(value) {
    deleteBoolean = false;
    Object.entries(factu).forEach(val => {
        if (value === val[0]) {
            delete factu[val[0]];
            totalGeneral = totalGeneral - val[1];
        }
    })
};
