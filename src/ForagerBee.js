var ForagerBee = function() {
  //Bee.call(this);
};

// Delegate prototype chain to Bee
ForagerBee.prototype = Object.create(Bee.prototype);

// Own prototype Properties and Methods
ForagerBee.prototype.age = 10;
ForagerBee.prototype.job = 'find pollen';
ForagerBee.prototype.canFly = true;
ForagerBee.prototype.treasureChest = [];
ForagerBee.prototype.forage = function () {
  this.treasureChest.push('treasure');
}

// Create own constructor property
ForagerBee.prototype.constructor = ForagerBee;