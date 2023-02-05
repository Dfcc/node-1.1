//1 poner el then y el catch
const UnaUOtra = (num)=>
    new Promise( (resolve, reject) => {
            if (num >= 3) {
              resolve('Todo ha ido bien');
              //console.log('Todo ok con el numero')
              
            } else {
              reject('Algo ha fallado')
             console.log("algo wrong con el numero")
            }
         })
    UnaUOtra(3)
      .then((res)=>{
        console.log(res.Promise)
      })
      .catch((err)=>{
        console.log(err.message)
      });
      UnaUOtra(2)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err.message)
      });


      //2
      const salut=(name,callback)=> {
        if(name.length>3){
          let res ="Nombre ok"
          callback(res);
        }else{
          let res ="No es un nom correct"
          callback(res)
        }
     } 
     let resultado =(res)=>console.log(res);
     salut('john',resultado);
     /* Implementación con callbacks */
const doTask = (iterations, callback) => {
  const numbers = [];
  for (let i = 0; i < iterations; i++) {
    const number = 1 + Math.floor(Math.random() * 6);
    numbers.push(number);
    if (number === 6) {
      /* Error, se ha sacado un 6 */
      callback({
        error: true,
        message: "Se ha sacado un 6"
      });
      return;
    }
  }
  /* Termina bucle y no se ha sacado 6 */
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
   
      
    

      //3
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
  
  
    const getEmployee = (id)=>{
      return new Promise( (resolve, reject) => {
        var employee = employees.find(em=> em.id === id);
        if (employee) {
          resolve({
            error: false,
            value:employee
          });
        } 
        reject({
          error: true,
          message: "No hay ningun employee con este " +  id
        });
     })
  }

  getEmployee(1)
  .then((res)=>console.log(res.value.name))
  .catch((err)=>console.log(err.message))
  getEmployee(5)
  .then((res)=>console.log(res.value))
  .catch((err)=>console.log(err.message))
  
  
  const getSalary= (id) =>{
    return new Promise((resolve,reject)=>{
       var salOne = salaries.find(sal => sal.id === id);
       if (salOne) {
        resolve({
          error:false,
          value:salOne
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
    .then((res)=>console.log(res.value.salary))
    .catch((err)=>console.log(err.message))

    getSalary(5)
    .then((res)=>console.log(res.value.salary))
    .catch((err)=>console.log(err.message))
  

  
const employeeSal = (id)=>{ 
  getEmployee(3)
  .then((res)=>getSalary(res.id))
  .catch((err)=>console.log(err.Promise))
}
employeeSal(3)

//3
const employePag =(id)=>{
  return new Promise( (resolve, reject) => {
  const em = getEmployee(id);
  const sal = getSalary(em.id)
  
  if(sal.salary>3000)
  try {
  console.log('buen sueldo')
  resolve('Todo ha ido bien');
  } catch (error) {
    console.log(error);
 }
  })}


//https://www.sitepoint.com/flow-control-callbacks-promises-async-await/
//https://compile7.org/decompile/callback-vs-promises-vs-async-await/