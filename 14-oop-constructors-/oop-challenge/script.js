function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}


Player.prototype.gainXp = function (xp) {
    this.points += xp;

    if (this.points >= 10) {
        this.lvl++;
        this.points -= 10;
    }
}

Player.prototype.describe = function () {
    return `${this.name} is level ${this.lvl} with ${this.points}
    expirience points`;
};
    
const player1 = new Player('Bob');
const player2 = new Player('Alice');

console.gainXp(4);
console.gainXp(7);
console.gainXp(5);
console.gainXp(1);
console.gainXp(7);
console.gainXp(9);
console.gainXp(5);

console.log(player1.describe());
console.log(player2.describe());