// Open and Close Hambuger Menu
$(document).ready(function(){
    $('.btn').click(function(){
      $('.items').toggleClass("show");
      $('ul li').toggleClass("hide");
    });
});

//Description Drop down
$('.btn').click(function(){
    $('.dropdown-menu').toggle();
});
 
$('#choice').change(function () {
     if($(this).val() == "") {
        $(this).addClass("empty");
        
      }
     else {
        $(this).removeClass("empty")}
       
});
 
$('form > div input, form > div select').change(function() {
         var empty = false;
       
        $('.req').each(function(){
           if ($(this).val()==""){
           $(this).removeClass('ui-full')
        }
        else {
           $(this).addClass('ui-full');
        }
        });
        
          if ($('#choice').val()==""){
                   empty = true;
                }
         $('form > div input').each(function() {
             if ($(this).val() == '' ){
                 empty = true;
              
             }
          
         });
       
       
         if (empty) {
             $('#btn').attr('disabled', 'disabled'); 
         } 
         else {
            
             $('#btn').removeAttr('disabled'); 
         }
      
});
 
$('.referral').submit(function(e) {
    if (this.checkValidity()){
       e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
    
       $('#refer_name').html($('#name').val());
         $('#refer_pos').html($('#position').val());
         $('.modal').slideDown().addClass('show').removeClass('shrink');
       e.preventDefault();
    }
    else {}
 });
 
 $('.close-modal').click(function(){
    $('.modal').removeClass('show').addClass('shrink').slideUp();
 })
 
 $('.reset').click(function(){
    $('.modal').removeClass('show').addClass('shrink').slideUp();
   $('.req').val("").removeClass('ui-full');
   $('#choice').val("").addClass('empty');
      $('#btn').attr('disabled', 'disabled'); 
 });
 
 $('select').focus(function(){
    $('.dropdown-wrapper').addClass('outline');
 });
 
 $('select').on('focusout',function(){
    $('.dropdown-wrapper').removeClass('outline');
 });
 
 $('.pos-card').click(function(){
    $('.desc').removeClass('reveal');
   $(this).find('.desc').toggleClass('reveal');
 
});


//Js for the blur Effect and the Apply button
document.addEventListener("DOMContentLoaded", function () {
   const applyButtons = document.querySelectorAll(".show-form");
   const formContainer = document.getElementById("application-form");
   const closeButton = document.getElementById("close-button");
   const modalBackground = document.querySelector(".modal-background");
   const blurContainer = document.querySelector(".blur-container"); // Get the blur container

   applyButtons.forEach((applyButton) => {
       applyButton.addEventListener("click", function () {
           formContainer.classList.add("active");
           blurContainer.classList.add("blurred"); // Add a class for the blur effect
       });
   });

   closeButton.addEventListener("click", function () {
       formContainer.classList.remove("active");
       blurContainer.classList.remove("blurred"); // Remove the blur effect class
   });

   modalBackground.addEventListener("click", function () {
       formContainer.classList.remove("active");
       blurContainer.classList.remove("blurred"); // Remove the blur effect class
   });
});


