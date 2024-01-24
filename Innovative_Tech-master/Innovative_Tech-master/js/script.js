
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function showSlide(slideIndex) {
    if (slideIndex < 0) {
      currentSlide = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
      currentSlide = 0;
    }

    slides.forEach((slide) => {
      slide.style.opacity = 0;
    });

    slides[currentSlide].style.opacity = 1;
  }

  function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
  }

  // Auto play the slideshow
  setInterval(nextSlide, 3000); // Change slides every 3 seconds (adjust as needed)





/*back to top */
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    /*let progressValue = document.getElementById("progress-value");*/
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#f44336 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

/*modals*/
document.addEventListener('DOMContentLoaded', () => {
  const openModalButton = document.getElementById('myButton');
  const myModal = new bootstrap.Modal(document.getElementById('myModal'), {
      rootElement: document.body // Specify the root element as document.body
  });

  openModalButton.addEventListener('click', () => {
      myModal.show();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const openModalButton1 = document.getElementById('myButton1');
  const myModal1 = new bootstrap.Modal(document.getElementById('myModal1'), {
      rootElement: document.body // Specify the root element as document.body
  });

  openModalButton1.addEventListener('click', () => {
      myModal1.show();
  });

});


document.addEventListener('DOMContentLoaded', () => {
  const openModalButton2= document.getElementById('myButton2');
  const myModal2 = new bootstrap.Modal(document.getElementById('myModal2'), {
      rootElement: document.body // Specify the root element as document.body
  });

  openModalButton2.addEventListener('click', () => {
      myModal2.show();
  });
});

/*FAQ*/
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq)=>{
  faq.addEventListener("click",() => {
    faq.classList.toggle("active");
  });
});
/*
// Toggle the navigation menu when the menu button is clicked
document.querySelector(".menu-btn").addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("active");
});
*/

// Get references to the hamburger menu button, close button, and the navigation links
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelector('.nav-links');

// Add an event listener to toggle the menu and close button
menuBtn.addEventListener('click', function() {
    navLinks.classList.add('active');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    navLinks.classList.remove('active');
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
});

//chatbot
(function(w, d) { w.CollectId = "650a8fb88a3fde15c3eced2b";
var h = d.head || d.getElementsByTagName("head")[0]; 
var s = d.createElement("script"); 
s.setAttribute("type", "text/javascript");
s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js");
h.appendChild(s);})(window, document);

(function(w, d) { w.CollectId = "650a8fb88a3fde15c3eced2b"; 
var h = d.head || d.getElementsByTagName("head")[0]; 
var s = d.createElement("script"); 
s.setAttribute("type", "text/javascript");
s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js");
h.appendChild(s);})(window, document);
 
//validate contact form
function validateForm() {
  var firstName = document.getElementById("fname").value.trim();
  var lastName = document.getElementById("lname").value.trim();
  var email = document.getElementById("mail").value.trim();
  var message = document.getElementById("msg").value.trim();
  var valid = true;
  var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  var nameRegex = /^[A-Za-z]+$/; // Only alphabetic characters allowed

  if (firstName === "") {
      document.getElementById("firstNameError").textContent = "First name is required.";
      valid = false;
  } else if (!nameRegex.test(firstName)) {
      document.getElementById("firstNameError").textContent = "First name must contain only letters.";
      valid = false;
  } else {
      document.getElementById("firstNameError").textContent = "";
  }

  if (lastName === "") {
      document.getElementById("lastNameError").textContent = "Last name is required.";
      valid = false;
  } else if (!nameRegex.test(lastName)) {
      document.getElementById("lastNameError").textContent = "Last name must contain only letters.";
      valid = false;
  } else {
      document.getElementById("lastNameError").textContent = "";
  }

  if (!email.match(emailRegex)) {
      document.getElementById("emailError").textContent = "Enter a valid email address.";
      valid = false;
  } else {
      document.getElementById("emailError").textContent = "";
  }

  if (message === "") {
      document.getElementById("messageError").textContent = "Message is required.";
      valid = false;
  } else {
      document.getElementById("messageError").textContent = "";
  }

  return valid;
}

//driving school game
document.addEventListener("keydown", moveCar);

function moveCar(e) {
    const car = document.getElementById("player-car");
    const roadWidth = document.querySelector(".road").clientWidth;
    const carWidth = car.clientWidth;
    const carPosition = parseFloat(getComputedStyle(car).getPropertyValue("left"));

    if (e.key === "ArrowLeft" || e.key === "a") {
        if (carPosition > 0) {
            car.style.left = carPosition - roadWidth / 3 + "px";
        }
    }

    if (e.key === "ArrowRight" || e.key === "d") {
        if (carPosition + carWidth < (2 * roadWidth) / 3) {
            car.style.left = carPosition + roadWidth / 3 + "px";
        }
    }

    if (e.key === "ArrowUp" || e.key === "w") {
        // Add code for car acceleration or other actions
    }

    if (e.key === "ArrowDown" || e.key === "s") {
        // Add code for car braking or other actions
    }
}






