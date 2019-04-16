var MakeHeartBeatDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this,top,left,timeBetweenSteps);
};

MakeHeartBeatDancer.prototype = Object.create(MakeDancer.prototype);
MakeHeartBeatDancer.prototype.constructor = MakeHeartBeatDancer;
MakeHeartBeatDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  this.$node.addClass('animated heartBeat');
};