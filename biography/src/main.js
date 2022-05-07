//get the elements and declare variables
const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("navBtn");
let bol = false;
const offset = 90;

//add scroll event listener to the page
window.addEventListener("scroll",() => {
    //if the page is scrolled by 90px
    if (scrollY > offset && bol === false ) {
    //Add the classes to change the navbar to the light version
    //change bg to white
    navbar.classList.add("bg-light");
    //change text to black
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
    //add a shadow 
    navbar.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
    /*prevents the event from firing more than once*/
    bol = true;
    //Remove all classes when the page is scrolled back up

 } else if (scrollY <= offset && bol === true) {
    //change the background back to transparen
    navbar.classList.remove("bg-light");
    //change the text back to white
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
    //remove the shadow
    navbar.style.boxShadow = "none";
    /*Prevents the even from firing more than once*/
    bol = false;
 }
});
