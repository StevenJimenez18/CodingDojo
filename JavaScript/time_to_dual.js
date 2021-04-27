class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power
        console.log(this.name, "attacked" )
        console.log(target.name, "resilience fell to", target.res)
        if(target.res < 1){
            console.log(target.name,"has died")
        }
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,mag){
        super(name,cost);
        this.text = text
        this.stat = stat;
        this.mag = mag
    }
    playHardAlgo(target){
    if (target instanceof Unit){
            console.log(target.name, "used", this.name )
            target.res += this.mag
            console.log(target.name +"'s resilience increased to",target.res)
        }
    else {
        throw new Error( "Target must be a unit!" );
        }
    }

    playUnhandledPromiseRejection(target){
        if (target instanceof Unit){
                console.log(target.name, "was hit with", this.name )
                target.res -= this.mag
                console.log(target.name +"'s resilience decreased to",target.res)
            }
        else {
            throw new Error( "Target must be a unit!" );
            }
        }
    playPairProgramming(target){
        if (target instanceof Unit){
                console.log(target.name, "used", this.name )
                console.log(target.name+"s power current is", target.power )
                target.power += this.mag
                console.log(target.name +"'s power increased to",target.res)
            }
        else {
            throw new Error( "Target must be a unit!" );
            }
        }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

const hardAlgo = new Effect("Hard Algo", 2, "increase target's resilience by 3", "resilience", 3)

hardAlgo.playHardAlgo(redBeltNinja);

const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", 2)

unhandledPromiseRejection.playUnhandledPromiseRejection(redBeltNinja)

const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2	", "power", 2)

pairProgramming.playPairProgramming(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)