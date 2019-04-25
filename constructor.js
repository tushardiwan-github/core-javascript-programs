//function constructor
function Employee(id,name,sirName,type){
    this.id = id;
    this.name = name;
    this.sirName = sirName;
    this.type = type;
}

//creating multiple object using function constructor
var emp1 = new Employee('252842','Tushar','Diwan','Permanant');
var emp2 = new Employee('252843','Rutuja','Diwan','Permanant');



//JSON stringify to return JSOn object which is more readable
console.log('The First employee Details are ' +JSON.stringify(emp1));
console.log('The Second employee Details are '+JSON.stringify(emp2));



