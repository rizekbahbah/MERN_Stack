class Ninja {
    constructor(name,health=90,speed=3,strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength
    }

    sayName(){
        console.log('Ninja Name: ${ this.name }');
    }

    showStats(){
         console.log(`Ninja Name: ${ this.name }\n Ninja Health: ${this.health}\n Ninja Speed: ${this.speed} \n Ninja Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health+=10;
    }
}
class Sensei extends Ninja  {
    constructor(name,health=200,speed=10,strength=10,wisdom=10) {
        super(name,health,speed,strength)
        this.wisdom=wisdom
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"