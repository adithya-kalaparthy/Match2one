
/*This function checks if the enter key is pressed and directs the operations appropriately*/
window.addEventListener("keypress", event => {
    if (event.keyCode == 13 && $('#sub').attr('class')=="container h-100 d-flex col-12") {
      $("#start").click();
    }
    else if( event.keyCode == 13 && $('#submit').attr('class') == 'container submit col-lg-12 q' ){
      $("#submitb").click();
    }
    else if ( event.keyCode == 13 && $('#image').attr('class') == 'text-center h-100 q') {
      location.reload();
    }
  });
/*The starting function which removes the start button from screen and displays the 1st question*/
function disappear() {
  jQuery(function($){
    var h = $('#ques1').offset().top - 250; //height to be scrolled
    $('html, body').animate({ scrollTop: h }, 600);
    $('body').css({'height': 'auto'});
  });
   document.getElementById('sub').className = "d-none";
   document.getElementById('ques1').className = "container q";
   document.getElementById('ques2').className = "container d-none"; /**/
   document.getElementById('submit').className = "container submit col-lg-12 d-none"; /**/
   };


/*it is the end function which removes the questions from the screen and displays the end result*/
function disappear2() {
   /*document.getElementById('sub').className = "d-none";*/
   if ($('input[name=animal]:checked', '#quiz').val() && $('input[name=op1]:checked', '#quiz2').val() ) {
    document.getElementById('val1').innerHTML = $('input[name=animal]:checked', '#quiz').val();
    document.getElementById('val2').innerHTML = $('input[name=op1]:checked', '#quiz2').val();
    document.getElementById('spinner').className="float-right loader" 
    setTimeout(() => { document.getElementById('ques1').className = "d-none";
      document.getElementById('ques2').className = "d-none";
      document.getElementById('submit').className = "d-none";
      document.getElementById('line').className = "d-none";
      document.getElementById('image').className = "text-center h-100 q"; },2000)
   }
   else{
    alert("Please scroll up to answer both the questions")
   }
   
   }
/*This function happens when user selects any option for the 1st question*/
$("#quiz input").on('change',function(){
  if( $('input[name=animal]:checked', '#quiz').val() == "cat"){
      $('#ch1').css({'display':'block'});
      $('#ch2').css({'display':'none'});
      $('#ch3').css({'display':'none'});
      document.getElementById("question2").innerHTML = "2.What do you wanna name your cat?";
      document.getElementById("2option1").innerHTML="oliver";
      document.getElementById("2op1").value="oliver";
      document.getElementById("2option2").innerHTML="Nancy";
      document.getElementById("2op2").value="Nancy";
      document.getElementById("2option3").innerHTML="Tom";
      document.getElementById("2op3").value="Tom";
  }
  else if( $('input[name=animal]:checked', '#quiz').val() == "dog"){
      $('#ch1').css({'display':'none'});
      $('#ch2').css({'display':'block'});
      $('#ch3').css({'display':'none'});
      document.getElementById("question2").innerHTML = "2.Which breed of dog do you want?";
      document.getElementById("2option1").innerHTML="Golden Retriver";
      document.getElementById("2op1").value="Golden Retriver";
      document.getElementById("2option2").innerHTML="Pug";
      document.getElementById("2op2").value="Pug";
      document.getElementById("2option3").innerHTML="Dalmation";
      document.getElementById("2op3").value="Dalmation";
  }
  else if( $('input[name=animal]:checked', '#quiz').val() == "panda"){
      $('#ch1').css({'display':'none'});
      $('#ch2').css({'display':'none'});
      $('#ch3').css({'display':'block'});
      document.getElementById("question2").innerHTML = "2.What color of Panda do you like?";
      document.getElementById("2option1").innerHTML="White";
      document.getElementById("2op1").value="White";
      document.getElementById("2option2").innerHTML="Black and White";
      document.getElementById("2op2").value="Black and White";
      document.getElementById("2option3").innerHTML="Chocolate";
      document.getElementById("2op3").value="Chocolate";
  }
  setTimeout(() => {
  document.getElementById('ques2').className = "container q"; /*display the 2nd question*/
  document.getElementById('ques1').className="container inactive" /*make the 1st question invisible*/
  var n = $('#ques2').offset().top; //height to be scrolled
  $('html, body').animate({ scrollTop: n }); /*animation of scroll function. Delay hass been removed so it doesnot clash with autoscroll*/
  /*these if conditions check which option has been selected and changes the 2nd question and options appropriately */
      },1000);
 });

/*auto scroll function*/
$( window).scroll(function(){
    var n = $(window).scrollTop(); /*position of scroll*/
    if ($('#image').attr('class')=="text-center h-100 q") { /*checking if the image is active on the screen*/
      document.getElementById("ques1").className = "d-none";
      document.getElementById("ques2").className = "d-none"
      document.getElementById("submit").className = "d-none";
    }
    /*the following else if works only if 1st question is answered but the 2nd question is yet to be done*/
    /* this is necessary because if the user decides to change their answer after 1st question is answered*/
    else if ( $('input[name=animal]:checked', '#quiz').val() && !$('input[name=op1]:checked', '#quiz2').val() ) {
      if (n < $('#ques1').offset().top-200){
        document.getElementById('ques1').className="container q";
        document.getElementById('ques2').className='container inactive';
      }
      else if (n > $('#ques1').offset().top-200 && n < $('#ques2').offset().top +50 ) {
        document.getElementById('ques1').className="container inactive";
        document.getElementById('ques2').className='container q';
      }
    }
    /*the following else if works if both the questions are answered and if user decides to change any of their answers*/
    else if ( $('input[name=animal]:checked', '#quiz').val() && $('input[name=op1]:checked', '#quiz2').val()) {
      if (n < $('#ques1').offset().top-50) {
        document.getElementById('ques1').className="container q"
        document.getElementById('ques2').className='container inactive'
        document.getElementById('submit').className='container submit col-lg-12 invisible'
      }
      else if (n > $('#ques1').offset().top-50 && n < $('#ques2').offset().top +100 ) {
        document.getElementById('ques1').className="container inactive"
        document.getElementById('ques2').className='container q'
        document.getElementById('submit').className='container submit col-lg-12 inactive'
      }
      else if (n > $('#ques2').offset().top+100) {
        document.getElementById('ques1').className="container invisible"
        document.getElementById('ques2').className='container inactive'
        document.getElementById('submit').className='container submit col-lg-12 q'
      }
    }
});


/*this function is activated by answering the second question*/
$(".crazy").click(function(event){
  if(this.id=='sop1'){
    $('#ch4').css({'display':'block'});
    $('#ch5').css({'display':'none'});
    $('#ch6').css({'display':'none'});
  }
  else if(this.id=='sop2'){
    $('#ch4').css({'display':'none'});
    $('#ch5').css({'display':'block'});
    $('#ch6').css({'display':'none'});
  }
  else if(this.id=='sop3'){
    $('#ch4').css({'display':'none'});
    $('#ch5').css({'display':'none'});
    $('#ch6').css({'display':'block'});
  }
  setTimeout(() => {
  document.getElementById('submit').className="container submit col-lg-12 q"; /*display the submit button*/
  document.getElementById('ques2').className="container inactive";/*make the second question invisible*/
  var n = $('#submit').offset().top; //height to be scrolled
  $('html, body').animate({ scrollTop: n }); },1000)
});
