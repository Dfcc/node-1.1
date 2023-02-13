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


 const getEmployee = (id)=>{
  return new Promise( (resolve, reject) => {
    var employee = employees.find(em=> em.id === id);
    if (employee) {
      setTimeout( () => {
        console.log('Async Code: Esperando a encontrar el employee con el id: ' + id);
        resolve({
          error: false,
          value:employee,
        }) 
      }, 2000)
    } 
    setTimeout( () => {
    reject({
      error: true,
      message: "No hay ningun employee con este " +  id
    });
  }, 2000)
 })
}
const getSalary= (id) =>{
  return new Promise( (resolve, reject) => {
  var salOne = salaries.find(sal => sal.id === id);
     if (salOne) {
      setTimeout( () => {
        console.log('Async Code: Esperando encontrar el salario del ' + id);
        resolve({
          error: false,
          value:salOne,
        }) 
        }, 1000)
    } 
    setTimeout( () => {
    reject({
      error: true,
      message: "No hay ningun salario con este " +  id
    });
  }, 1000)
  })
 }

   
const asy =  async (id) =>{
  try {
   const employe = await getEmployee(id);
   console.log(employe.value.name); 
  const salary = await getSalary(employe.value.id);
   console.log(salary.value.salary)
  } catch (error) {
    console.log(error)
  }
}

asy(1);

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
    let result2= async ()=>{
     const total2 = await doubleDeTres(a,b,c);
     console.log(total2);
    };
    let result1 = async ()=>{
    const total1= await double(a);
   console.log(total1);
  }
  await result1();
  await result2();
 result2 === result1? console.log("es igual") : console.log("no es igual");
 /*  console.log (result2());
  console.log( result1());
  no me sale esta ternaria */

  } 
  catch (error) {
    console.log(error);
  }
}
checkIf(3,3,10)
