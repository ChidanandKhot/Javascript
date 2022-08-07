class Test 
{
    static a=20;
    b=35;

    static m1()
    {
        console.log("This is static m1 method");
    }

    m2()
    {
        console.log("This is Non static m2 method");
    }
}
console.log(Test.a); // static variable can call directly by class;
//console.log(Test.b);  // Non stati method cant call by class method.
console.log(Test.m1());
//console.log(Test.m2()); // Error bcz non static cant call directly, 

let obj= new Test();
console.log(obj.b);        // We can access non static methods and variable by only creating objects.
obj.m2();


