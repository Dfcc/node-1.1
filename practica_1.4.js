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
       console.log('Async Code: Esperando a encontrar el employee con el id: ' + id);
        resolve({
          error: false,
          value:employee,
        }) 
     } 
    
    reject({
      error: true,
      message: "No hay ningun employee con este " +  id
    });
 })
}
const getSalary= (id) =>{
  return new Promise( (resolve, reject) => {
  var salOne = salaries.find(sal => sal.id === id);
     if (salOne) {
       console.log('Async Code: Esperando encontrar el salario del ' + id);
        resolve({
          error: false,
          value:salOne,
        }) 
   } 
   
    reject({
      error: true,
      message: "No hay ningun salario con este " +  id
    });
    })
 }

   
const asy =  async (id) =>{
  const employe = await getEmployee(id);
  const salary = await getSalary(employe.value.id);
  console.log(`func asy con promises using async await with the man ${employe.value.name} and the salary ${salary.value.salary}`)
}


asy(1);

//1.2
const asyncFunc = () => {
  return new Promise((resolve) => {
   console.log('request start 1.2');
   console.log('starts async, Promise pending, ');
   setTimeout(() => {
     resolve('async resolve promise in 2 sec');
   }, 2000);
 });
};

const asyncCall = async () => {
 try {
   const result = await asyncFunc();
   console.log(result);
 } catch (error) {
   console.log('Error, something went wrong.');
 }

};

asyncCall();

//2.1 Promises

const retornDouble = (num) => {
 return new Promise((resolve, reject) => {
    if (!num || typeof num !== 'number') {
      reject('REJECTED: Error, parameter(s) either missing or not of type number');
     return;
    }
    setTimeout(() => {
      console.log(2 * num);
      resolve(2 * num);
    }, 2000);
  });
};


const plus3 = async (n1,n2,n3) => {
  const res = await retornDouble(n1+n2+n3);
  console.log(`Result line 115 is ${res*2}`);
};

plus3(1, 2, 3);
plus3(1,2,null);


//2.1 callbacks 
const doubleDeTres = (a,b,c,callback)=>{
   let total =a + b + c;
   console.log("this is 144 "   + total)  
   callback(total);
   return total 
 }
 const cb = (total) => {
    console.log("line 127_ " + total*2)
  }
  setTimeout(doubleDeTres,2000,3,3,3,cb);


//3.1
const asyError =  async (id) =>{
  try {
   const employe = await getEmployee(id);
   const salary = await getSalary(employe.value.id);
   console.log(`func asy con promises using async await with the man ${employe.value.name} and the salary ${salary.value.salary}`)
  } catch (error) {
    console.log(error.message)
  }
}
asyError(6);




const plusErr = async (n1,n2,n3) => {
  try {
     const res = await retornDouble(n1+n2+n3);
     console.log(`Result line 115 is ${res*2}`);
   } catch (error) {
     console.log('Something went wrong line 143');
   }
 };
 plusErr('b',2,1)
