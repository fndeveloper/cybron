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
                
            });
        } else {
            navbar.classList.remove("fixtop");
            navlink.forEach((e) => {
                e.classList.remove("colb"); // Remove the same class added earlier
             
            });
        }
    }
});

let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

const counterElement = document.getElementById('counter');
const counterElement1 = document.getElementById('counter1');
const counterElement2 = document.getElementById('counter2');
const counterElement3 = document.getElementById('counter3');
const counterElement4 = document.getElementById('counter4');



function updateCounter() {
    counterElement.textContent = count;
   
    count++;

    if (count > 25) {
        count = 0; // Reset to 0 after reaching 25
    }
  
}
function updateCounter1(){
    counterElement1.textContent = count1  ;
    counterElement2.textContent = count2 ;
    counterElement3.textContent = count3;
    counterElement4.textContent = count4 ;
    count1+=7;
    count2+=3;
    count3+=9;  
      count4+=17;

 
    if (count1 > 999) {
        count1 = 0; // Reset to 0 after reaching 25
    }
    if (count2 > 151) {
        count2 = 0; // Reset to 0 after reaching 25
    }  if (count3 > 245) {
        count3 = 0; // Reset to 0 after reaching 25
    }  if (count4 > 1090) {
        count4 = 0; // Reset to 0 after reaching 25
    }
} 
setInterval(updateCounter, 800);
setInterval(updateCounter1, 100);


// var form=document.getElementById("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//    var arr=[];
//    for (let index = 0; index < e.target.length; index++) {
//     const element = e.target[index].value;
//     // console.log(element);
//     arr.push(element)
    
//    }
  
//    console.log(arr);
   
    
// })

// slider

  
// slider