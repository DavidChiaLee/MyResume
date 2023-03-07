
let nav = document.querySelector("nav");

//  Scroll 往下時，nav才會出現 box-shadow
window.addEventListener("scroll", ()=>{
    if (window.scrollY == 0){
        nav.style.boxShadow = "";
    } else{
        nav.style.boxShadow = "0 10px 6px -6px #777";
    }
});