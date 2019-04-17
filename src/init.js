$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    if(window.dancers.length === 30){
      alert('The Fire Code doesn\'t allow more than 30 dancers on the dancefloor');
      window.dancers.forEach(function(dancer){
        dancer.$node.addClass("animated shake");
      });
    } else {
      var max = 0.80;
      var min = 0.60;

      var dancer = new dancerMakerFunction(
        $("body").height() * (Math.random() * (max - min) + min),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      // dancer.$node.hover(function(){
      //   dancer.$node.addClass("animated bounce");
      // });
      dancer.$node.mouseenter(function(){
        dancer.$node.addClass("animated bounce");
      });
      dancer.$node.mouseleave(function(){
        dancer.$node.removeClass("animated bounce");
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

  $('.circleButton').on('click',function(event){
    type = 1;
    radius = '12em';
    start = -90;

    numberOfElements = (type === 1) ?  window.dancers.length : window.dancers.length - 1,

    slice = 360 * type / numberOfElements;

    window.dancers.forEach(function(dancer,index) {
      var $self = dancer.$node,
        rotate = slice * index + start,
        rotateReverse = rotate * -1;

      $self.css({
        'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
      });
    });
  });
});









