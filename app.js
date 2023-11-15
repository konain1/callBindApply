
let p1 ={ 
    name:"leo",
    age:0.4
}

let p2 = {
    name:'doora',
    age:3
}

let details = function(color,breed){

    console.log(` name is ${this.name} and he/she is ${this.age}  old  color : ${color} he/she is ${breed} breed`)
}

details.call(p2,'orange', 'persian')