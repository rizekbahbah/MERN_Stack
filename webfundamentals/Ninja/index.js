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