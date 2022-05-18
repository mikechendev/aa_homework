const titleize = (arr,printCallback) => {
    let result = arr.map(name => `Mx. ${name} Jingleheimer Schmidt`);
    printCallback(result);
}

const printCallback = (arr) => {
    arr.forEach(ele => {
        console.log(ele);
    })
}

//console.log(titleize(["Mary", "Brian", "Leo"], printCallback));

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = () => {
    `${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`;
}

Elephant.prototype.grow = () => {
    this.height += 12;
}

Elephant.prototype.addTrick = (trick) => {
    this.tricks.push(trick);
}

Elephant.prototype.play = () => {
    let randomTrickIndex = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name} is ${this.tricks[randomTrickIndex]}!`);
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = (elephant) => {
    console.log(`${elephant.name} is trotting by!`)
}

herd.forEach(el => Elephant.paradeHelper(el));

const dinerBreakfast = () => {
    let order = "I'd like cheesy scrambled eggs please.";
    console.log(order);

    return (food) => {
        order = `${order.slice(0, order.length - 8)} and ${food} please.`;
        console.log(order);
    };
};