class Student
{
    constructor()
    {
        let name, marks ;
    }
getName() {
    return(this.name);
}
setName(name){
this.name=name;
}
getMarks(){
    return(this.marks);
}
setMarks(marks){
    this.marks=marks;
}
}
let obj = new Student();
obj.setName("Mohan");
obj.setMarks(345);

console.log(obj.getName(), obj.getMarks());

