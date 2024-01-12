var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];



var img = document.getElementById("1");
img.onclick = function() {
var modalImg = document.getElementById("img_model");
    modal.style.display = "block";
    modalImg.src = this.src;

    price=document.getElementById("t1").innerHTML;
    document.getElementById("price_in").innerHTML=price;

    old=document.getElementById("s1").innerHTML;
    document.getElementById("old_price").innerHTML=old;
   
    names=document.getElementById("n1").innerHTML;
    document.getElementById("ring_name").innerHTML=names;
};

var img = document.getElementById("2");
img.onclick = function() {
var modalImg = document.getElementById("img_model");
    modal.style.display = "block";
    modalImg.src = this.src;

    price=document.getElementById("t2").innerHTML;
    document.getElementById("price_in").innerHTML=price;

    old=document.getElementById("s2").innerHTML;
    document.getElementById("old_price").innerHTML=old;
   
    names=document.getElementById("n2").innerHTML;
    document.getElementById("ring_name").innerHTML=names;
};

var img = document.getElementById("3");
img.onclick = function() {
var modalImg = document.getElementById("img_model");
    modal.style.display = "block";
    modalImg.src = this.src;

    price=document.getElementById("t3").innerHTML;
    document.getElementById("price_in").innerHTML=price;

    old=document.getElementById("s3").innerHTML;
    document.getElementById("old_price").innerHTML=old;
   
    names=document.getElementById("n3").innerHTML;
    document.getElementById("ring_name").innerHTML=names;
};

var img = document.getElementById("4");
img.onclick = function() {
var modalImg = document.getElementById("img_model");
    modal.style.display = "block";
    modalImg.src = this.src;

    price=document.getElementById("t4").innerHTML;
    document.getElementById("price_in").innerHTML=price;

    old=document.getElementById("s4").innerHTML;
    document.getElementById("old_price").innerHTML=old;
   
    names=document.getElementById("n4").innerHTML;
    document.getElementById("ring_name").innerHTML=names;
};

var img = document.getElementById("5");
img.onclick = function() {
var modalImg = document.getElementById("img_model");
    modal.style.display = "block";
    modalImg.src = this.src;

    price=document.getElementById("t5").innerHTML;
    document.getElementById("price_in").innerHTML=price;

    old=document.getElementById("s5").innerHTML;
    document.getElementById("old_price").innerHTML=old;
   
    names=document.getElementById("n5").innerHTML;
    document.getElementById("ring_name").innerHTML=names;
};

var img = document.getElementById("6");
img.onclick = function() {
var modalImg = document.getElementById("img_model");
    modal.style.display = "block";
    modalImg.src = this.src;

    price=document.getElementById("t6").innerHTML;
    document.getElementById("price_in").innerHTML=price;

    old=document.getElementById("s6").innerHTML;
    document.getElementById("old_price").innerHTML=old;
   
    names=document.getElementById("n6").innerHTML;
    document.getElementById("ring_name").innerHTML=names;
};

var img = document.getElementById("7");
img.onclick = function() {
var modalImg = document.getElementById("img_model");
    modal.style.display = "block";
    modalImg.src = this.src;

    price=document.getElementById("t7").innerHTML;
    document.getElementById("price_in").innerHTML=price;

    old=document.getElementById("s7").innerHTML;
    document.getElementById("old_price").innerHTML=old;
   
    names=document.getElementById("n7").innerHTML;
    document.getElementById("ring_name").innerHTML=names;
};

var img = document.getElementById("8");
img.onclick = function() {
var modalImg = document.getElementById("img_model");
    modal.style.display = "block";
    modalImg.src = this.src;

    price=document.getElementById("t8").innerHTML;
    document.getElementById("price_in").innerHTML=price;

    old=document.getElementById("s8").innerHTML;
    document.getElementById("old_price").innerHTML=old;
   
    names=document.getElementById("n8").innerHTML;
    document.getElementById("ring_name").innerHTML=names;
};

var img = document.getElementById("9");
img.onclick = function() {
var modalImg = document.getElementById("img_model");
    modal.style.display = "block";
    modalImg.src = this.src;

    price=document.getElementById("t9").innerHTML;
    document.getElementById("price_in").innerHTML=price;

    old=document.getElementById("s9").innerHTML;
    document.getElementById("old_price").innerHTML=old;
   
    names=document.getElementById("n9").innerHTML;
    document.getElementById("ring_name").innerHTML=names;
};

var img = document.getElementById("10");
img.onclick = function() {
var modalImg = document.getElementById("img_model");
    modal.style.display = "block";
    modalImg.src = this.src;

    price=document.getElementById("t10").innerHTML;
    document.getElementById("price_in").innerHTML=price;

    old=document.getElementById("s10").innerHTML;
    document.getElementById("old_price").innerHTML=old;
   
    names=document.getElementById("n10").innerHTML;
    document.getElementById("ring_name").innerHTML=names;
};

var img = document.getElementById("11");
img.onclick = function() {
var modalImg = document.getElementById("img_model");
    modal.style.display = "block";
    modalImg.src = this.src;

    price=document.getElementById("t11").innerHTML;
    document.getElementById("price_in").innerHTML=price;

    old=document.getElementById("s11").innerHTML;
    document.getElementById("old_price").innerHTML=old;
   
    names=document.getElementById("n11").innerHTML;
    document.getElementById("ring_name").innerHTML=names;
};

var img = document.getElementById("12");
img.onclick = function() {
var modalImg = document.getElementById("img_model");
    modal.style.display = "block";
    modalImg.src = this.src;

    price=document.getElementById("t12").innerHTML;
    document.getElementById("price_in").innerHTML=price;

    old=document.getElementById("s12").innerHTML;
    document.getElementById("old_price").innerHTML=old;
   
    names=document.getElementById("n1").innerHTML;
    document.getElementById("ring_name").innerHTML=names;
};


span.onclick = function() {
modal.style.display = "none";
    location.reload();

}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    location.reload();
}
}

const purchaseButton = document.getElementById('purchase-button');
const notificationMessage = document.getElementById('notification-message');
const notificationArea = document.querySelector('.notification');

// Function to show the notification
function showNotification(message) {
    notificationMessage.textContent = message;
    notificationArea.style.display = 'block';

    setTimeout(() => {
        notificationArea.style.display = 'none';
    }, 5000);
}

// Event listener for the purchase button click
purchaseButton.addEventListener('click', () => {
    // Replace 'Your purchase was successful!' with your own success message
    showNotification('Added in Cart Succesfully');
});
