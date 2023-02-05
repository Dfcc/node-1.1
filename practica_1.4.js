let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmployee =  (id)=>{
    var employee = employees.find(em=> em.id === id);
      if (employee) {
      console.log(employee.name)
      return employee
      } else {
      console.log('no tenemos employe con ese id')
      }
  
}

const getSalary= (id) =>{
  var salOne = salaries.find(sal => sal.id === id);
     if (salOne) {
     console.log(salOne.salary)
     return salOne
    } else {
    console.log('no tenemos em')
    }
}
const asy =  async (id) =>{
 await getEmployee(id);
 await getSalary(id);
}

asy(3);


//- Exercici 2 Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
const getEmp = (id)=>{
    return new Promise( (resolve, reject) => {
      var employee = employees.find(em=> em.id === id);
      if (employee) {
        resolve('Todo ha ido bien');
        console.log(employee.name)
      } else {
        reject('Algo ha fallado')
        console.log('no tenemos employe con ese id')
      }
   })
}
const asyDos = async (id)=>{
    setTimeout(async () => {
        console.log('Async Code: Wait till feeds completes');
        await getEmp(id)
      }, 2000)
    };
  
    
asyDos(2)

//2 Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons. Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

const doubleDeTres= (a,b,c)=>{
  const total = a*2+b*2+c*2;
  console.log(total);
  return total;
}
doubleDeTres(2,2,2);
const asyncDouble = async(id)=>{
   const dos= setTimeout(async () => {
        console.log('Async X  2 ');
        await double(id)
      }, 2000)
}
const asyncDoubleDeTres = ()=>{
        const dosDTres= (a,b,c) => {
             console.log('Async X  3 ');
             doubleDeTres(a,b,c)
           }
    
};
function calculate(operation, initialValue, numbers) {
  let total = initialValue;
  for (const number of numbers) {
    total = operation(total, number);
  }
  console.log(total);
  return total;
}
const double = (num) =>{
  const porDos=num * 2
  console.log(porDos)
  return porDos;
}
function multiply(n1, n2) {
  return n1 * n2;
}
calculate(double, 0, [1, 2, 4]);      // => 7
 // => 8

 const numbers = [1, 2, 4];
const doubles = numbers.map(function mapper(number) {
  return number+number+number;
});
doubles; // [2, 4, 8]
let sum = (a, b,c, double) => {
  var total = a*double + b*double + c*double;
  console.log(total);
  return total;
} 
sum(3,5,2);

asyncDouble(4)
//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

//https://www.google.com/search?q=math+operations+in+javascript&oq=math+operations+in+javascript&aqs=chrome..69i57j0i10i15i22i30i625j0i22i30l8.12927j0j15&sourceid=chrome&ie=UTF-8

