var MakeWobblyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this,top,left,timeBetweenSteps);
  this.$node.append('<iframe src="https://giphy.com/embed/xUOwGbVaQ7QN361yCc" width="200" height="160" frameBorder="0"></iframe><p><a href="https://giphy.com/stickers/dance-party-xUOwGbVaQ7QN361yCc"></a></p>');
};

MakeWobblyDancer.prototype = Object.create(MakeDancer.prototype);
MakeWobblyDancer.prototype.constructor = MakeWobblyDancer;