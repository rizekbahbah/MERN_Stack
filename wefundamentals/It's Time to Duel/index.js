class Card{
    constructor(name,cost){
        this.name = name;
        this.cost= cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,rest){
        super (name,cost);
        this.power  = power ;
        this.res=res;
    }
    attack(target){
        if(target instanceof Unit){
            target.res+=3;
                            } 
    else{
    throw new Error( "target must be a unit!")
        }
    }
}

class Effect extends Card{
    constructor(name,cost,magnitude,target){
        super(name,cost)
        this.magnitude=magnitude;
        attack(target,magnitude)
    }
    attack(target,magnitude){
        if( target instanceof Unit){
            target.res += magnitude;
            }
            else {
                throw new Error("Target Must Be A Unit");
        }
    }
}


const d1= new Unit("Rizek",11,22,33);
const d2= new Unit("Enzo",11,22,33);
d2.attack(d1);
console.log(d1.res);