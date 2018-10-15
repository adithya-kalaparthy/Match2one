/*document.getElementById('start').addEventListener("keypress",disappear());*/
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

function disappear() {
  jQuery(function($){
    var h = $('#ques1').offset().top - 150; //height to be scrolled
    $('html, body').animate({ scrollTop: h }, 600);
    $('body').css({'height': 'auto'});
  });
   document.getElementById('sub').className = "d-none";
   document.getElementById('ques1').className = "container q";
   document.getElementById('ques2').className = "container d-none"; /**/
   document.getElementById('submit').className = "container submit col-lg-12 d-none"; /**/
   };



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

$("#quiz input").on('change',function(){
  
  document.getElementById('ques2').className = "container q";
  document.getElementById('ques1').className="container invisible"
  var n = $('#ques2').offset().top; //height to be scrolled
  $('html, body').animate({ scrollTop: n });
  if( $('input[name=animal]:checked', '#quiz').val() == "cat"){
      document.getElementById("question2").innerHTML = "2.What do you wanna name your cat?";
      document.getElementById("2option1").innerHTML="oliver";
      document.getElementById("2op1").value="oliver";
      document.getElementById("2option2").innerHTML="Nancy";
      document.getElementById("2op2").value="Nancy";
      document.getElementById("2option3").innerHTML="Tom";
      document.getElementById("2op3").value="Tom";
  }
  else if( $('input[name=animal]:checked', '#quiz').val() == "dog"){
      document.getElementById("question2").innerHTML = "2.Which breed of dog do you want?";
      document.getElementById("2option1").innerHTML="Golden Retriver";
      document.getElementById("2op1").value="Golden Retriver";
      document.getElementById("2option2").innerHTML="Pug";
      document.getElementById("2op2").value="Pug";
      document.getElementById("2option3").innerHTML="Dalmation";
      document.getElementById("2op3").value="Dalmation";
  }
  else if( $('input[name=animal]:checked', '#quiz').val() == "panda"){
      document.getElementById("question2").innerHTML = "2.What color of Panda do you like?";
      document.getElementById("2option1").innerHTML="White";
      document.getElementById("2op1").value="White";
      document.getElementById("2option2").innerHTML="Black and White";
      document.getElementById("2op2").value="Black and White";
      document.getElementById("2option3").innerHTML="Chocolate";
      document.getElementById("2op3").value="Chocolate";
  }

 });

$( window).scroll(function(){
    var n = $(window).scrollTop();
    if ($('#image').attr('class')=="text-center h-100 q") {
      document.getElementById("ques1").className = "d-none";
      document.getElementById("ques2").className = "d-none"
      document.getElementById("submit").className = "d-none";
    }
    else if ( $('input[name=animal]:checked', '#quiz').val() && !$('input[name=op1]:checked', '#quiz2').val() ) {
      if (n < $('#ques1').offset().top-200){
        document.getElementById('ques1').className="container q";
        document.getElementById('ques2').className='container invisible';
        console.log(n);
      }
      else if (n > $('#ques1').offset().top-200 && n < $('#ques2').offset().top +50 ) {
        document.getElementById('ques1').className="container invisible";
        document.getElementById('ques2').className='container q';
        console.log(n);
      }
    }
    else if ( $('input[name=animal]:checked', '#quiz').val() && $('input[name=op1]:checked', '#quiz2').val()) {
      if (n < $('#ques1').offset().top-50) {
        document.getElementById('ques1').className="container q"
        document.getElementById('ques2').className='container invisible'
        document.getElementById('submit').className='container submit col-lg-12 invisible'
      }
      else if (n > $('#ques1').offset().top-50 && n < $('#ques2').offset().top +100 ) {
        document.getElementById('ques1').className="container invisible"
        document.getElementById('ques2').className='container q'
        document.getElementById('submit').className='container submit col-lg-12 invisible'
      }
      else if (n > $('#ques2').offset().top+100) {
        document.getElementById('ques1').className="container invisible"
        document.getElementById('ques2').className='container invisible'
        document.getElementById('submit').className='container submit col-lg-12 q'
      }
    }
});



$(".crazy").click(function(event){
  document.getElementById('submit').className="container submit col-lg-12 q";
  document.getElementById('ques2').className="container invisible";
  var n = $('#submit').offset().top; //height to be scrolled
  $('html, body').animate({ scrollTop: n });
  /*invisible*/
});
