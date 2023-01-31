//1
function UnaUOtra(num) {
    return new Promise( (resolve, reject) => {
            if (num >= 3) {
              resolve('Todo ha ido bien');
              console.log('Tot b')
            } else {
              reject('Algo ha fallado')
              console.log('Tot Merda')
            }
         })
      }
      UnaUOtra(4);
      UnaUOtra(2);
      UnaUOtra(3);

      //2
      const salut=(name)=> {
        console.log(`Hello, ${name}`);
      }
      salut('John Doe');
      
     const pregunta=(callback)=> {
        const name =console.log("Please enter your name.");
        callback(name);
      }
      
      pregunta(salut);

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
          resolve('Todo ha ido bien');
          console.log(employee.name)
        } else {
          reject('Algo ha fallado')
          console.log('no tenemos employe con ese id')
        }
     })
  }
  getEmployee(3);
  
  
  const getSalary= (id) =>{
    return new Promise((resolve,reject)=>{
       var salOne = salaries.find(sal => sal.id === id);
       if (salOne) {
        resolve('Todo ha ido bien');
        console.log(salOne.salary)
      } else {
        reject('Algo ha fallado')
        console.log('no tenemos em')
      }
    })
   }
    getSalary(2);
  

  
const employeeSal = (id)=>{ 

  return new Promise( (resolve, reject) => {
     const em = getEmployee(id);
   const sal = getSalary(em.id)
    if(em){
      //sal();
      resolve('Todo ha ido bien');
      console.log(em.name)
      console.log(sal.salary)
      console.log('Tenemos em sal')
    } else {
      reject('Algo ha fallado')
      console.log('no tenemos em sal')
    }
    }
)}
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
employePag(2);