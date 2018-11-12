var Bee = function() {
    Grub.call(this, arguments);
    this.job = 'keep on growing';
    this.age = 5;
    this.color = 'yellow';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
