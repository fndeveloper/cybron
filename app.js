window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var navlink = document.querySelectorAll(".nav-item>.nav-link");
    var selc=document.querySelector(".selc")
    var dr=document.querySelector(".dr")
    if (navbar) {
        if (window.scrollY > 600) {
            navbar.classList.add("fixtop");
            selc.classList.add("selc1e")
            dr.classList.add("ddd")
            navlink.forEach((e) => {
                e.classList.add("colb"); // Ensure you're adding the correct class
                console.log(e);
            });
        } else {
            navbar.classList.remove("fixtop");
            navlink.forEach((e) => {
                e.classList.remove("colb"); // Remove the same class added earlier
                console.log(e);
            });
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