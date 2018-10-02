/*document.getElementById('start').addEventListener("keypress",disappear());*/
window.addEventListener("keypress", event => {
    if (event.keyCode == 13 && $('#sub').attr('class')=="container h-100 d-flex justify-content-center align-items-center") {
      $("#start").click();
    }
    else if(event.keyCode==13 && $('#ques1').attr('class')=="container invisible" && $('#ques2').attr('class')=="container invisible"){
      $("#submitb").click();
    }
    else{
      alert("Please answer 2 questions");
    }
  });

function disappear() {
  jQuery(function($){
    var n = $('#ques1').offset().top - 100; //height to be scrolled
    $('html, body').animate({ scrollTop: n }, 600);
  });
   document.getElementById('sub').className = "d-none";
   document.getElementById('ques1').className = "container";
   document.getElementById('ques2').className = "container invisible";
   document.getElementById('submit').className = "container submit col-lg-12 invisible";
   };



function disappear2() {
   document.getElementById('sub').className = "d-none";
   document.getElementById('ques1').className = "container d-none";
   document.getElementById('ques2').className = "container d-none";
   document.getElementById('submit').className = "container submit col-lg-12 d-none";
   document.getElementById('image').className = "text-center h-100";
   }

$("#cat").click(function(event){

  var n = $('#ques2').offset().top - 100; //height to be scrolled
  $('html, body').animate({ scrollTop: n }, 600);
  document.getElementById('ques1').className = "container invisible"
  document.getElementById('ques2').className = "container";
  document.getElementById('question2').innerHTML = "2. What do you wanna name your cat?";
  document.getElementById('2option1').innerHTML = "oliver";
  document.getElementById('2option2').innerHTML = "willie";
  document.getElementById('2option3').innerHTML = "Tom";
    });

$("#dog").click(function(event){

  var n = $('#ques2').offset().top - 100; //height to be scrolled
  $('html, body').animate({ scrollTop: n }, 600);
  document.getElementById('ques1').className = "container invisible"
  document.getElementById('ques2').className = "container";
  document.getElementById('question2').innerHTML = "2. Which breed of dog do you want?";
  document.getElementById('2option1').innerHTML = "Golden-Retriever";
  document.getElementById('2option2').innerHTML = "Pug";
  document.getElementById('2option3').innerHTML = "Labrador";
    });

$("#panda").click(function(event){

  var n = $('#ques2').offset().top - 100; //height to be scrolled
  $('html, body').animate({ scrollTop: n }, 600);
  document.getElementById('ques1').className = "container invisible"
  document.getElementById('ques2').className = "container";
  document.getElementById('question2').innerHTML = "2. What color of panda do you like?";
  document.getElementById('2option1').innerHTML = "White";
  document.getElementById('2option2').innerHTML = "Black and White";
  document.getElementById('2option3').innerHTML = "Chocolate";
    });


$(".crazy").click(function(event){
  var n = $('#submit').offset().top - 100; //height to be scrolled
  $('html, body').animate({ scrollTop: n }, 700);
  document.getElementById('ques2').className = "container invisible"
  document.getElementById('submit').className = "container submit col-lg-12"
});

$(".changes").click(function(event){
  var n = $('#ques1').offset().top - 100; //height to be scrolled
  $('html, body').animate({ scrollTop: n }, 600);
  document.getElementById('ques1').className = "container"
  document.getElementById('ques2').className = "container invisible";
  document.getElementById('submit').className = "container submit col-lg-12 invisible"
});
