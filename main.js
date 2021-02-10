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


// ----- Skills Animations ----- //
let data = [
    { name: "Python", level: "90%" },
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "80%" },
    { name: "Javascript", level: "50%" }
]

window.addEventListener("load", function (e) {
    let python = document.getElementById("python");
    // console.log(python.style.width)
    python.style.width = data[0].level;

    let html = document.getElementById("html");
    html.style.width = data[1].level;

    let css = document.getElementById("css");
    css.style.width = data[2].level;

    let js = document.getElementById("js");
    js.style.width = data[3].level;
});

// function onHover() {
//     let bar1 = document.getElementById("bar1");
    
//     bar1.style.width = json[0].level;
//     console.log(bar1.style.width)
//     bar1.style.height = json[0].height;
//     bar1.style.borderRadius = json[0].radius;
//     bar1.style.backgroundColor = json[0].color;
// }


