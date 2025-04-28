/**
 * Displays the contact form popup.
 */
function displayContactPopup() { // Renamed function
    const form = document.getElementById("ContactFormPopup"); // Updated ID
    if (form) {
        form.style.display = "block";
    }
}

/**
 * Hides the contact form popup.
 */
function hideContactPopup() { // Renamed function
    const form = document.getElementById("ContactFormPopup"); // Updated ID
    if (form) {
        form.style.display = "none";
    }
}

// --- Slideshow Logic ---
let slidePosition = 1; // Renamed variable

// Initialize slideshow on DOM load
document.addEventListener("DOMContentLoaded", () => {
    renderSlide(slidePosition); // Renamed function call
    
});


function advanceSlides(n) { // Renamed function
    renderSlide((slidePosition += n)); // Renamed function call
}

/**
 * Changes to a specific slide index.
 * @param {number} n - The 1-based index of the slide to show.
 */
function gotoSlide(n) { // Renamed function
    renderSlide((slidePosition = n)); // Renamed function call
}

/**
 * Displays the slide at the current slidePosition.
 * @param {number} n - The target slide index (1-based), passed to handle wrapping.
 */
function renderSlide(n) { // Renamed function
    let i;
    const slides = document.getElementsByClassName("SlideContent"); // Updated class name
    const dots = document.getElementsByClassName("indicator-dot"); // Updated class name

    if (!slides.length || !dots.length) return; // Exit if elements aren't found

    // Handle index wrapping
    if (n > slides.length) {
        slidePosition = 1; // Go to first slide
    }
    if (n < 1) {
        slidePosition = slides.length; // Go to last slide
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Deactivate all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the target slide and activate its corresponding dot
    slides[slidePosition - 1].style.display = "block";
    dots[slidePosition - 1].className += " active";
}


// --- Close form on outside click (similar logic to original) ---
document.addEventListener("click", function (event) {
    const formPopup = document.getElementById("ContactFormPopup"); // Updated ID
    if (formPopup && formPopup.style.display === "block") {
         // Check if the click is on the cancel button
        const isCancel = event.target.matches(".cancel-btn"); // Updated class
        // Check if the click is outside the form container AND outside any button/link that opens the form
        const isOutsideForm = !event.target.closest(".PopupFormWrapper"); // Updated class
        const isOutsideTrigger = !event.target.closest(".OpenContactButton") && !event.target.closest(".contact-action"); // Updated classes

        if (isCancel || (isOutsideForm && isOutsideTrigger)) {
            hideContactPopup(); // Renamed function call
        }
    }
}, false); // Use bubbling phase
