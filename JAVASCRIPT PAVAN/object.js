

let person=
{
personName:"test",
personLastName:"ObjectPractice",
age:35,
village:"vscode",

};
// console.log(person.age);
console.log(person.personName);
// console.log(person.personLastName );   

person["height"]=175,
 console.log(person.height)

person["age"]=45,
delete person["personLastName"],
console.log(person.age);
console.log(person.personLastName);

console.log("******Loop prints*******");
// for / in loop 

for(let x in person)
{
    console.log(x);   //prints only keys
    console.log(person[x]);   //prints only values;
    console.log(x + " "+ person[x]);

};




