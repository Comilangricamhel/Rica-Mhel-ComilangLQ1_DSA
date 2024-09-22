//persona 1
var persona1Name = "Maria Delos Santos Las Marias";
var persona1Age/ = 25;
var persona1Address = "Upper Session Road, Baguio City, Benguet";

// Persona 2
var persona2Name = "Juan Gamoso Dela Cruz";
var persona2Age = 28;
var persona2Address = "San Nicolas, Candon City, Ilocos Sur";

//Rearranging name sequence with split()
var persona1NameRearrange = persona1Name.split(' ').slice(3).join(' ') + ', ' + persona1Name.split(' ').slice(0, 3).join(' ');

var persona2NameRearrange = persona2Name.split(' ').slice(2).join(' ') + ', ' + persona2Name.split(' ').slice(0, 2).join(' ');

//Variable Manipulation
var lenPersona1Name = persona1Name.length;
var lenPersona1Address = persona1Address.length;

var lenPersona2Name = persona2Name.length;
var lenPersona2Address = persona2Address.length;


//print out persona 1
console.log("PERSONA 1");
console.log("\tName:", persona1NameRearrange);
console.log("\tAge:", persona1Age)
console.log("\tAddress:", persona1Address, "\n")

//print out persona 2
console.log('PERSONA 2');
console.log("\tName:", persona2NameRearrange);
console.log("\tAge:", persona2Age);
console.log("\tAddress:", persona2Address, '\n');


//Operations
console.log('Operations');
console.log(lenPersona1Name+lenPersona1Address+lenPersona2Address+lenPersona2Name+persona1Age+persona2Age); //Sum of all numeric values
console.log(persona1Age+persona2Age); //Persona 1 and 2 Age, added together
console.log((persona1Age+persona2Age)-lenPersona1Name); //then subtract from length of persona 1's name
console.log(((persona1Age+persona2Age)-lenPersona1Name)*lenPersona2Name) //add, subtract, multiply
console.log(lenPersona1Address**lenPersona2Address); //length Person 1 raise by the power of Person 2 address length
