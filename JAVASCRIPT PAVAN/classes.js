class Student
{
   constructor(name,id,sal)  
    {
        this.name=name;
        this.id=id;
        this.sal=sal;         
    }
    // setDetails(name,id,sal)  -->Methods in js
    // {
    //     this.name=name;
    //     this.id=id;
    //     this.sal=sal;         
    // }
    display()
    {
        console.log(this.name, this.id, this.sal);
    };

};

let obj2 = new Student("Varun", 102, 25600);
obj2.display()
let obj3 = new Student("Kalaji", 103, 35000); 
obj3.display()




//let obj = new Student();
// obj.setDetails("Kiran", 101, 52000);  --> calling the method 
// obj.display();

