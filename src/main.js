// This stores all click 
//events that need to be tracked. 
//When they are added, it adds them to local storage
document.title = "Updated Page Title";

const triggered = 'true';
const untriggred = 'false';



function trigger(name){
    this.triggered = true;
    localStorage.setItem(this.name, triggered)
}

class page{
    name = [];
    requirements = [];

    constructor (name, req){
        this.name = name;
        this.req = req
    }

    checkAvailable(){
        for (let req of this.requirements){
            if (localStorage.getItem != triggered){  return false }
        }
        return true;
    }
}


console.log("hi!");
