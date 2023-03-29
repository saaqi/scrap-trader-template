


var onepress_js_settings = { 
  "onepress_disable_animation": "", 
  "onepress_disable_sticky_header": "", 
  "onepress_vertical_align_menu": "0", 
  "hero_animation": "zoomInRight", 
  "hero_speed": "5000", 
  "hero_fade": "750", 
  "submenu_width": "0", 
  "hero_duration": "5000", 
  "hero_disable_preload": "", 
  "disabled_google_font": "1", 
  "is_home": "1", 
  "gallery_enable": "1", 
  "is_rtl": "", 
  "parallax_speed": "0.5" 
};



// JavaScript form validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", function(event) {
    const nameInput = document.getElementById("name");
    // const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    let isValid = true;

    // Validate name input
    if (nameInput.value === "") {
      isValid = false;
      nameInput.setCustomValidity("Please enter your name.");
    } else {
      nameInput.setCustomValidity("");
    }

    // Validate email input
    if (emailInput.value === "") {
      isValid = false;
      emailInput.setCustomValidity("Please enter your email address.");
    } else if (!emailInput.checkValidity()) {
      isValid = false;
      emailInput.setCustomValidity("Please enter a valid email address.");
    } else {
      emailInput.setCustomValidity("");
    }

    // Validate message input
    if (messageInput.value === "") {
      isValid = false;
      messageInput.setCustomValidity("Please enter a message.");
    } else {
      messageInput.setCustomValidity("");
    }

    // Submit form if all inputs are valid
    if (!isValid) {
      event.preventDefault();
    }
});

// JavaScript form submission
form.addEventListener("submit", function(event) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const subjectInput = document.getElementById("subject");
    const receiveEmail = "info@tluckystar.com"
    const emailButton = document.querySelector('button.main-btn');

    // Compose email message
    const subject = `[Contact-Form] ${subjectInput.value}`;
    const body = `${messageInput.value}\n\n${nameInput.value}\n${emailInput.value}`;

    // Open default email app and fill in appropriate fields
    const mailtoUrl = `mailto:${encodeURIComponent(receiveEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Open Email client on click
    window.open(mailtoUrl);

    // Prevent default form submission
    event.preventDefault();
});





// Show current year
document.getElementById("year").innerHTML = new Date().getFullYear();





// HIDE PRELOADER
document.getElementById("atf-preloader").classList.add('preloader-hide');

window.onload = setTimeout( function() {
  document.querySelector('.preloader-hide').style.display = 'none';
}, 1000);
