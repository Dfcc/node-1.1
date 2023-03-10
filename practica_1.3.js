//1.1
const UnaUOtra = (num)=>{
    return new Promise( (resolve, reject) => {
            if (num >= 3) {
              resolve('Todo ok con el numero');
            } else {
              reject(console.log("algo wrong con el numero "+ num))
            }
         })
        }
        module.exports = UnaUOtra;
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
doTask(3, function(err, result) {
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
            value:employee
          });
          return employee;
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
  .then((res)=>console.log(res.value.name))
  .catch((err)=>console.log(err.message))
  
  //2.2
  const getSalary = (id)=>{
    return new Promise( (resolve, reject) => {
      var salary = salaries.find(sal=> sal.id === id);
      if (salary) {
        resolve({
          error: false,
          value:salary
        });
        return salary;
      } 
      reject({
        error: true,
        message: "No hay ningun salary con este " +  id
      });
   })
  }
//2.3
  const getAmbes = (n)=>{ 
      getEmployee(n)
      .then((res) => {
      console.log( `El trabajador ${res.value.name},su id es: ${res.value.id}`,);
      getSalary(res.value.id)
      .then((sal)=>{console.log(`Su salario es ${sal.value.salary}`)
    })
     return res.value.id;
    })
  }
   getAmbes(3);

//3
    const errorMessage = (n)=>{
      getSalary(n).catch(err=>console.log(err.message))
    } 
    errorMessage(7);   
       
