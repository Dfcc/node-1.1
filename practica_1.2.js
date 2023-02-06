//1.1 
const sumDue =( (var1, var2)=>{
  return var1 + var2;
  })('Juan', 'Ymedio')
  console.log(sumDue);
   
//2.1
 const useMe= (a)=>{
 const result= {
  value: a + 100,
 }
 console.log(result.value);
 return result;
 }

 
useMe(10);

  //2.2 
  class Persona {
    constructor (nom) {
      this.nom = nom;
    }
    dirNom(){
      console.log(this.nom);
    }
  }
  const person1 = new Persona('Paco');
  person1.dirNom();
   
  

  //3

  function Employee()
{
this.empName="empName";
if(this.constructor === Employee){
throw new Error("You cannot create an instance of Abstract Class");
}
};
Employee.prototype.display= function(){
return "El nom del trebajador es: "+this.empName;
}
function ManagerFunc(fullName){
this.empName=fullName;
}
ManagerFunc.prototype=Object.create(Employee.prototype);
var mang=new ManagerFunc("David Flaquer");
console.log(mang.display());

class EmployeeWithEs6
{
constructor() {
if(this.constructor == EmployeeWithEs6){
throw new Error(" Object of Abstract Class cannot be created");
}
}
display(){
throw new Error("Abstract Method has no implementation");
}
}
class Manager extends EmployeeWithEs6
{
display(){
//super.display();
console.log("I am a Manager");
}
}
var emp = new EmployeeWithEs6;
var mang=new Manager();
mang.display();
  


