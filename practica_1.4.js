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

//1.1

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
    console.log('no tenemos salary con este id')
    }
}
const asy =  async (id) =>{
 await getEmployee(id);
 await getSalary(id);
}

asy(1);


//1.2
const getEmployeeProm =  (id)=>{
  return new Promise( (resolve, reject) => {
    var employee = employees.find(em=> em.id === id);  
    if (employee) {
    setTimeout( () => {
      console.log('Async Code: Wait till feeds completes');
      resolve({
        error: false,
        value:employee.name,
      }) 
      console.log(employee.name);
     }, 2000)
    }
  })
  }
const asyDos = async (id)=>{ await getEmployeeProm(id)  };
  
asyDos(2)

//2.1

const double= async (a)=>{
  const total = await a*2;
 setTimeout( () => { 
     console.log(total);
 }, 2000)
 
  return total;
}
double(2);

//2.2
const doubleDeTres= (a,b,c)=>{
  let total =a + b + c;
  double(total);
 return total;
}
doubleDeTres(3,3,-3)


//3.1
const checkIf =  async (a,b,c)=>{
  try {
    let result2=  ()=>{
      const total2 = doubleDeTres(a,b,c);
   console.log(total2);
  };
  let result1 = async ()=>{
    const total1= await double(a);
   console.log(total1);
  }
  result1();
  result2();
 result2 === result1? console.log("es igual") : console.log("no es igual");
 /*  console.log (result2());
  console.log( result1());
  no me sale esta ternaria */

  } 
  catch (error) {
    console.log(error);
  }
}
checkIf(3,0,0)
