// Nav toggle
function toggleNav() {
    var nav = document.getElementById("side-nav");
    if (nav.style.left === "-250px") {
        nav.style.left = "0";
    } else {
        nav.style.left = "-250px";
    }
}

// Hero image change
let currentImageIndex = 0;
const images = [
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg'
];

function changeHeroImage() {
    const heroElement = document.querySelector('.hero');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

setInterval(changeHeroImage, 15000);

// EmailJS
const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_e10bs9s';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Sent';
      setTimeout(() => {
        btn.value = 'Send Email';
      }, 2000);
      this.reset();
    }, (err) => {
      btn.value = 'Send Email';
      console.log(JSON.stringify(err));
    });
});