gold=()=>{
    location.href="gold-knwmre.html";
}
account=()=>{
  location.href="signup.html";
}
forget=()=>{
  location.href="forget.html";
}
// *************************************************

    signin=()=>{
            var username = document.getElementById('logemail').value;
            var password = document.getElementById('logpass').value;

            if (username === 'mazin' && password === 'mazinmazin') {      
                   location.href='project.html';
            } else {
                alert('Invalid username or password. Please try again.');
            }
    }


// *****************************************************

var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


  myBtn=()=>{
  modal.style.display = "block";


      selectElement = document.querySelector('#pure');
      output = selectElement.options[selectElement.selectedIndex].value;
      switch(output) {
          case "14":
            pure = 3689;
            break;
          case "18":
            pure = 4747;
            break;
          case "22":
            pure = 5803;
            break;
          case "24":
            pure = 6328;
            break;
      }

     document.getElementById("modalpure").innerHTML = pure;
     gram = document.getElementById("gram").value;
     document.getElementById("modalgram").innerHTML = gram;

     totalgram=pure*gram;
     document.getElementById("total").innerHTML=totalgram;
              
  }
  
// x- close modal
    span.onclick = function() {
      modal.style.display = "none";
      location.reload();
    }
    //clck outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
         location.reload();
      }
    }

// *****************************************************

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


// *****************************************************
