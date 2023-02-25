const bar1 = (fooNumber) => {
    return fooNumber + 5;
  }
  
  const foo1 = () => {
    setTimeout(() => {
      const myNumber = 10;
      return myNumber;
    }, 500)
  }
  
  console.log(bar1(foo1())) // expected result: ?

  const bar = (fooNumber) => {
    return fooNumber + 5;
  };
  
  // Then, pass it into foo as an argument
  const foo = (callback) => {
    setTimeout(() => {
    const myNumber = 10;
    callback(myNumber);
    }, 500)
  };
  
  foo((fooNumber) => console.log(bar(fooNumber))); 

  //Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

 
// Callback Function Example
function greet(name, myFunction) {
  console.log('Hello world');
 // callback function executed only after the greet() is executed
  myFunction(name);
}
// callback function
function sayName(name) {
  console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);

const asyncFunc = () => {
   return new Promise((resolve) => {
    console.log('request start');
    console.log('Promise pending, starts async');
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
  // Afegit try-catch
};
// Descomentar línia següent ⬇⬇
asyncCall();