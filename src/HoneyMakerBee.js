var HoneyMakerBee = function() {
  //Bee.call(this);
};

// Delegate prototype chain to Bee
HoneyMakerBee.prototype = Object.create(Bee.prototype);

// Own prototype properties
HoneyMakerBee.prototype.age = 10;
HoneyMakerBee.prototype.job = 'make honey';
HoneyMakerBee.prototype.honeyPot = 0;
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
}


// Create own constructor property
HoneyMakerBee.prototype.constructor = HoneyMakerBee;