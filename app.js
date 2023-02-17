
function sum(a, b) {
    return a + b;
  }
  function addAsync(a, b, callback) {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500)
  }
  const salut=(name,callback)=> {
    if(name.length>3){
      let res ="Nombre ok"
      callback(res);
    }else{
      let res ="No masa curt"
      callback(res)
    } 
    let resultado =(res)=>console.log(res);
    salut('john',resultado);
    salut('jo',resultado);
 } 

  
 
 function timerGame(callback) {
    console.log('Ready....go!');
    setTimeout(() => {
      console.log("Time's up -- stop!");
      callback && callback();
    }, 1000);
  }
  function asyncAdd (a, b) {
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(a + b);
    }, 500)
  );
}
function countdown(time, progressCallback, doneCallback) {
  progressCallback(time);
  setTimeout(function() {
    if (time > 1) {
      countdown(time - 1, progressCallback, doneCallback);
    } else {
      doneCallback();
    }
  }, 1000);
}
const delay = (milliseconds, fn) => {
  setTimeout(() => {
    fn();
  }, milliseconds);
};
function giveMePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("I am done"), 2000)
  })
}
const cappedSum = (a, b) => {
  const cap = 10
  const tot = a + b
  if (tot > cap) {
      return cap
  } else {
      return tot
  }
}
/* class User {
  name = 'john'

  getGreeting() {
    return `hello ${this.name}`
  }
} */
class Greeting {
  greet(name) {
    return `hello ${name}`
  }
}
class User {
  greeting = new Greeting()
  name = 'john'

  getGreeting() {
    return this.greeting.greet(this.name)
  }
}
function fetchData() {
  return fetch('./data.json').then((postsResponse) => {
    if (postsResponse.ok) {
      return postsResponse.json()
    }
    return Promise.reject()
  })
}
const getRandomNumber = () => Math.random()

const getEmployee = (id)=>{
  
  return new Promise( (resolve, reject) => {
 fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    let employees = JSON.parse(data);
    console.log(employees);
   var employee = employees.find(em=> em.id === id);  
   if (employee) {
      resolve({
        error: false,
        value:employee
      });
      return employee;
    } 
});
   reject({
      error: true,
      message: "No hay ningun employee con este " +  id
    });
 })
 
}



module.exports=({sum, addAsync,timerGame,asyncAdd, countdown,delay,giveMePromise,salut,cappedSum,fetchData,getRandomNumber});