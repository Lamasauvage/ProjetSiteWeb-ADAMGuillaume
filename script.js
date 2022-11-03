/* NAVBAR */

/* const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
})
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