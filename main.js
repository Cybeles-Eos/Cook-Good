// For smooth scroll
const lenis = new Lenis();
lenis.on('scroll', (e) => {
   console.log(e)
})
function raf(time){
   lenis.raf(time)
   requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// For navbar animation
let lastScrollTop = 0;
let navbar = document.getElementById("navbar");
window.addEventListener('scroll', ()=>{
   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   navbar.style.top = (scrollTop > lastScrollTop)? '-80px' : '0';
   lastScrollTop = scrollTop;
});


// Refresh Page
document.getElementById("logo-img").onclick = function(){
   window.location.href = "index.html";
}

document.querySelectorAll(".few_sb_box").forEach(div => {
   div.addEventListener('click', ()=> {
      window.location.href = "Recipe.html";
   });
});

document.querySelector(".serv-card").addEventListener('click', ()=> {
   window.location.href = "Recipe.html";
});


document.getElementById("foo_logo").onclick = function(){
   location.reload();
}


