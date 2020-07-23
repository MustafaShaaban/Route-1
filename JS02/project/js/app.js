/**
 *
 */


var productNameInput = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDesc = document.getElementById("productDesc");

var productTable = document.getElementById("ourProducs");
var tableBody = document.getElementById("productdata");

var row = "";

function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPrice.value,
        category: productCat.value,
        description: productDesc.value
    }
    var row = "";
    row += '<tr><td>' + product.name + '</td><td>' + product.price + '</td><td>' + product.category + '</td><td>' + product.description + '</td><td> <i class="icon-edit"></i> </td><td> <button onclick="deleteProduct()"><i class="icon-trash"></i></button> </td></tr>';
    tableBody.innerHTML += row;
}

function deleteProduct(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}
