function disappear() {
   document.getElementById('sub').className = "d-none";
   document.getElementById('ques1').className = "container";
   document.getElementById('ques2').className = "container";
   document.getElementById('submit').className = "container submit col-lg-12";
   }
function disappear2() {
   document.getElementById('sub').className = "d-none";
   document.getElementById('ques1').className = "container d-none";
   document.getElementById('ques2').className = "container d-none";
   document.getElementById('submit').className = "container submit col-lg-12 d-none";
   document.getElementById('image').className = "text-center h-100";
   }
  
$(function() {            
   var documentEl = $(document),
   fadeElem = $('#ques2'); 
   fadeElem2 = $('#ques1'); 
   fadeElem3 = $('#submit');
   var lastScrollTop = 0;
   $(window).scroll(function(event){
      var st = $(this).scrollTop();
      if (st > lastScrollTop){
          fadeElem.each(function() {
            var $this = $(this),
            elemOffsetTop = $this.offset().top;
            $this.css('opacity', 1);
            }); 
          fadeElem2.each(function() {
             var $this = $(this),
             elemOffsetTop = $this.offset().top;
             $this.css('opacity', 0.4);
             }); 
          fadeElem3.each(function() {
             var $this = $(this),
             elemOffsetTop = $this.offset().top;
             $this.css('opacity', 1);
             });   
       }  
      
      else {
           fadeElem.each(function() {
              var $this = $(this),
              elemOffsetTop = $this.offset().top;
              $this.css('opacity', 0.4);
              }); 

           fadeElem2.each(function() {
              var $this = $(this),
              elemOffsetTop = $this.offset().top;
              $this.css('opacity', 1);
              }); 
           fadeElem3.each(function() {
              var $this = $(this),
              elemOffsetTop = $this.offset().top;
              $this.css('opacity', 0.4);
              });
           }
      lastScrollTop = st;
      }); 
 });

$(".gap").click(function(event){

  var n = '+250px'; //height to be scrolled
  $('html, body').animate({ scrollTop: n }, 600);
});

$(".crazy").click(function(event){
  var n = '+750px'; //height to be scrolled
  $('html, body').animate({ scrollTop: n }, 700);
});
