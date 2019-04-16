var MakeLisaDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this,top,left,timeBetweenSteps);
  this.$node.append('<iframe src="https://giphy.com/embed/uglH7hBsJrTRm" width="200" height="160" frameBorder="0"  ></iframe><p><a href="https://giphy.com/stickers/the-simpsons-funny-uglH7hBsJrTRm"></a></p>');
};

MakeLisaDancer.prototype = Object.create(MakeDancer.prototype);
MakeLisaDancer.prototype.constructor = MakeLisaDancer;
