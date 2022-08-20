function myHappyness(){

    this.name="John";
    this.age = 20 ;

}
myHappyness.prototype.place="Bengalore";
myHappyness.prototype.gendor="Male";

obj = new myHappyness();
// obj.gendor="Male";
console.log(obj.name, obj.age, obj.gendor);
//console.log();
// console.log(obj.male);

obj2= new myHappyness();
console.log(obj2.name, obj2.age, obj2.gendor, obj2.place);




