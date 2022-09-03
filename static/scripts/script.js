

function add() {



    var id = event.target.id.replace('add', '');
    console.log(id);

    var request = new XMLHttpRequest();
    request.open("post", "/user/addToCart");
    request.setRequestHeader("Content-type", "application/json")
    var body = { productId: id };
    request.send(JSON.stringify(body));


    request.addEventListener("load", function () {
        var data = JSON.parse(request.responseText);
        console.log(data);

        var quant = document.getElementById("quant" + id);
        quant.innerHTML = parseInt(quant.innerHTML) + 1;

        var totalPrice = document.getElementById("tot" + id);
        totalPrice.innerHTML = `Total Price:- £${data.productPrice * data.productQuantity}`;

    })

}

function reduce() {
    var id = event.target.id.replace('reduce', '');
    console.log(id);


    var quant = document.getElementById("quant" + id);

    if (parseInt(quant.innerHTML) > 1) {
        var request = new XMLHttpRequest();
        request.open("post", "/user/reduceCart");
        request.setRequestHeader("Content-type", "application/json")
        var body = { productId: id };
        request.send(JSON.stringify(body));


        request.addEventListener("load", function () {
            var data = JSON.parse(request.responseText);
            console.log(data);


            quant.innerHTML = parseInt(quant.innerHTML) - 1;

            var totalPrice = document.getElementById("tot" + id);
            totalPrice.innerHTML = `Total Price:- £${data.productPrice * data.productQuantity}`;

        })

    }
}

function viewDesc() {

    var id = event.target.id.replace('view', '');
    console.log(id);

    var request = new XMLHttpRequest();

    request.open("post", "/product");
    request.setRequestHeader("Content-type", "application/json")
    var body = { "productId" : id };
    console.log(body);
    request.send(JSON.stringify(body));


    request.addEventListener("load", function () {
        
        console.log(JSON.parse(request.responseText));
        var product = JSON.parse(request.responseText);


        var modal = document.getElementById('modal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    var writtenContent = document.getElementById("written-content");


    writtenContent.innerHTML = `<img src= ${product.images_list[0]} alt=Product>`;
    writtenContent.innerHTML += `<p>PRICE:-${product.price} </p>`;
    writtenContent.innerHTML += `<p>Details:-${product.product_details} </p>`;
  


    modal.style.display = "block";

    span.onclick = function () {
      console.log("close")
      modal.style.display = "none";
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    })





   
}


