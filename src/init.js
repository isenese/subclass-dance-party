$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    if(window.dancers.length === 30){
      alert('The Fire Code doesn\'t allow more than 30 dancers on the dancefloor');
    } else {
      var max = 0.80;
      var min = 0.60;

      var dancer = new dancerMakerFunction(
        $("body").height() * (Math.random() * (max - min) + min),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      dancer.$node.hover(function(){
        dancer.$node.addClass("animated bounce");
      });
      $('.dancers_container').append(dancer.$node);
      window.dancers.push(dancer);
    }
  });
  $('.lineupButton').on('click', function(event) {
    $('.dancer').each(function(index){
      this.style = ("top:0", "position: relative");
    });


  });

});









