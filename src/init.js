$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    if(dancerMakerFunctionName === 'MakeLisaDancer'){
      var max = 0.8;
      var min = 0.6;
    } else{
      var max = 1;
      var min = 0.8;
    }

    var dancer = new dancerMakerFunction(
      $("body").height() * (Math.random() * (max - min) + min),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineupButton').on('click', function(event) {
    $('.dancer').each(function(index){
      this.style = ("top: 80%");
    });
  });

});







