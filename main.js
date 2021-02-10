// ----- Carousel Animations ----- //

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// ----- Form Animations ----- //
function onSend() {
    var name, phone, email, message;
    name = document.getElementById('name').value;
    phone = document.getElementById('phone').value;
    email = document.getElementById('email').value;
    message = document.getElementById('message').value;


    // function validarEmail(email){

    // }

    if(name == '' || email == '' || phone == '' || message == ''){
        alert("Campo Vacío")
    } else {
        alert("El mensaje fue enviado con exito");
        console.log("Nombre: ", name);
        console.log("Phone: ", phone);
        console.log("Email: ", email);
        console.log("Mensaje: ", message);
    }
}