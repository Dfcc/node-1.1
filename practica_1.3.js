//1.1
const UnaUOtra = (num)=>
    new Promise( (resolve, reject) => {
            if (num >= 3) {
              resolve(console.log('Todo ok con el numero'));
            } else {
              reject(console.log("algo wrong con el numero"))
            }
         })
    UnaUOtra(3)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      });
      UnaUOtra(2)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      });


  //1.2 
      const salut=(name,callback)=> {
        if(name.length>3){
          let res ="Nombre ok"
          callback(res);
        }else{
          let res ="No masa curt"
          callback(res)
        }
     } 
     let resultado =(res)=>console.log(res);
     salut('john',resultado);
     salut('jo',resultado);

const doTask = (iterations, callback) => {
  const numbers = [];
  for (let i = 0; i < iterations; i++) {
    const number = 1 + Math.floor(Math.random() * 6);
    numbers.push(number);
    if (number === 6) {
     callback({
        error: true,
        message: "Se ha sacado un 6"
      });
      return;
    }
  }
   return callback(null, {
    error: false,
    value: numbers
  });
}
doTask(10, function(err, result) {
  if (err) {
    console.error("Se ha sacado un ", err.message);
    return;
  }
  console.log("Tiradas correctas: ", result.value);
});
   
//2
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
  
  //2.1
    const getEmployee = (id)=>{
      return new Promise( (resolve, reject) => {
        var employee = employees.find(em=> em.id === id);
        if (employee) {
          resolve({
            error: false,
            value:employee.name
          });
        } 
        reject({
          error: true,
          message: "No hay ningun employee con este " +  id
        });
     })
  }

  getEmployee(1)
  .then((res)=>console.log(res.value))
  .catch((err)=>console.log(err))
  getEmployee(5)
  .then((res)=>console.log(res))
  .catch((error)=>console.log(error.message))
  
  //2.2
  const getSalary= (id) =>{
    return new Promise((resolve,reject)=>{
       var salOne = salaries.find(sal => sal.id === id);
       if (salOne) {
        resolve({
          error:false,
          value:salOne.salary
        });
       } else {
        reject({
          error:true,
          message:"No hay ningun salario con este " + id
        })
      }
    })
   }
    getSalary(2)
    .then((res)=>console.log(res.value))
    .catch((err)=>console.log(err.message))

    getSalary(5)
    .then((res)=>console.log(res.value.salary))
    .catch((err)=>console.log(err.message))

    
 //2.3 

  
function employeeSal(id) {
  getEmployee(id)
    .then((res)=>console.log(res.value)),
    getSalary(id)
    .then((res2)=>console.log(res2.value))
}
   
employeeSal(3)

//3 
function employeeSalErr(id) {
  getEmployee(id)
  .then((res)=>console.log(res.value))
  .catch((err)=>console.log(err.message))
  getSalary(id)
  .then((res2)=>console.log(res2.value))
  .catch((err)=>console.log(err.message))
}
employeeSalErr(4)




//https://www.sitepoint.com/flow-control-callbacks-promises-async-await/
//https://compile7.org/decompile/callback-vs-promises-vs-async-await/