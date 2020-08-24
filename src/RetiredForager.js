var RetiredForagerBee = function() {
  // ForagerBee.call(this);
};

// Delegate properties to ForagerBee prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

// Create own prototype
RetiredForagerBee.prototype.age = 40;
RetiredForagerBee.prototype.job = 'gamble';
RetiredForagerBee.prototype.canFly = false;
RetiredForagerBee.prototype.color = 'grey';
RetiredForagerBee.prototype.forage = function () {
  return 'I am too old, let me play cards instead';
}
// Pretty sure this line is not supposed to go here and that we need to clear the treasure chest a different way.
RetiredForagerBee.prototype.treasureChest = [];
RetiredForagerBee.prototype.gamble = function() {
  this.treasureChest.push('treasure');
}


// Create own constructor
RetiredForagerBee.prototype.constructor = RetiredForagerBee;