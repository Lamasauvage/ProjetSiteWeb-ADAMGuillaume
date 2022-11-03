/* NAVBAR */

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})



/* Fonction " VOIR PLUS "  */

$(document).ready(function(){
  $(".read").click(function(){
     $(this).prev().toggle();
     $(this).siblings('.dots').toggle();
     if($(this).text()=='Afficher plus'){
 $(this).text('Afficher moins');
     }
     else{
 $(this).text('Afficher plus');
     }
  });
});