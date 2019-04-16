$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var max = 0.75;
    var min = 0.55;

    var dancer = new dancerMakerFunction(
      $("body").height() * (Math.random() * (max - min) + min),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('.dancers_container').append(dancer.$node);
    window.dancers.push(dancer);
  });

  // $('.lineupButton').on('click', function(event) {
  //   // $('.dancer').each(function(index){
  //   //   this.style = (" top: 70vh");
  //   // });

  //   window.dancers.forEach(function(dancer){
  //     dancer.$node.addClass('lineup');
  //   });
  // });

  $('.lineupButton').on('click', function(event) {
    $('.dancer').each(function(index){
      this.style = ("top:0", "position: relative");
    });
  });

});









