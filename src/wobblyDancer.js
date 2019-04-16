var MakeWobblyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this,top,left,timeBetweenSteps);
};

MakeWobblyDancer.prototype = Object.create(MakeDancer.prototype);
MakeWobblyDancer.prototype.constructor = MakeWobblyDancer;
MakeWobblyDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  this.$node.addClass('animated wobble');
};