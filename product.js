// Side Navbar functionality
var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon?.addEventListener("click", function () {
    sidenav.style.right = "0";
});

closenav?.addEventListener("click", function () {
    sidenav.style.right = "-50%";
});

// Product search functionality
var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();
    var productList = productContainer.querySelectorAll("div.text-center");

    productList.forEach(function (product) {
        var productName = product.querySelector("h1").textContent.toUpperCase();
        if (productName.indexOf(enteredValue) < 0) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        }
    });
});
