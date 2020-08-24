var Grub = function(value) {
  this.value = value;
};

// Grub prototype properties and methods
Grub.prototype = {
  age: 0,
  color: 'pink',
  food: 'jelly',
  eat: function(){}
}

// Why is this line necessary for a super class?!
Grub.prototype.constructor = Grub;