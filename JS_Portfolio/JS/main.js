//These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//This functionchanges the slide whenthe dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // This takes all the elements with the class named "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; //If n (the nunber passed into the function) is greater than the lenght of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; //If n (the number passed into the function) is less than 1, the slideIndex is set to the lenght of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none" //This for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; //This displays the slideshow
    dots[slideIndex -1].className += " active"; //This adds the active styling to the dot associated with the image
}

// This code will create close the  contact form when the user clicks off of if
// The first step is to add an event listner for any clicks on the website
document.addEventListener("click", function(event){
    //Here we statethat if the click happens on the cancel button OR anywhere outside of the contact form AND the click does not happen on the contact button or any of the contact links then call the closeForm function 
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )

