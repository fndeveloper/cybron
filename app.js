// Add an event listener for the scroll event
window.addEventListener("scroll", function() {
    // Get the navbar element by its ID
    var navbar = document.getElementById("navbar");
    
    // Check if the navbar element exists
    if (navbar) {
        // If the scroll position is greater than 500 pixels
        if (window.scrollY > 500) {
            // Add the "fixtop" class to the navbar
            navbar.classList.add("fixtop");
        } else {
            // Remove the "fixtop" class from the navbar
            navbar.classList.remove("fixtop");
        }
    }
});

let count = 0;
const counterElement = document.getElementById('counter');

function updateCounter() {
    counterElement.textContent = count;
    count++;

    if (count > 25) {
        count = 0; // Reset to 0 after reaching 25
    }
}

setInterval(updateCounter, 800);

var form=document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
   var arr=[];
   for (let index = 0; index < e.target.length; index++) {
    const element = e.target[index].value;
    // console.log(element);
    arr.push(element)
    
   }
  
   console.log(arr);
   
    
})