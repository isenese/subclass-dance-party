var MakeHeartBeatDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this,top,left,timeBetweenSteps);
  this.$node.append('<iframe src="https://giphy.com/embed/WGkhN8KKOC4tW" width="200" height="160" frameBorder="0" ></iframe><p><a href="https://giphy.com/stickers/spider-WGkhN8KKOC4tW"></a></p>');
};

MakeHeartBeatDancer.prototype = Object.create(MakeDancer.prototype);
MakeHeartBeatDancer.prototype.constructor = MakeHeartBeatDancer;
