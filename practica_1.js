//nivel 1
const showName=(name)=>{
    console.log(name)
}

showName('Juan');

// nivel_2
function ShowYou (pre, last){
  console.log(`Mi nombre es ${pre} y mi apellido es ${last}`)  
}
ShowYou('David', 'Flaquer');

let nombre ='Pitilongui';
console.log( 'Hola '+ nombre);
console.log ( `Hola ${ nombre }`);

//nivel_3
let number = 10;
for(let i= 0; i< number; i++){
    console.log(i);
}

(function (name) {
    const saludo='Hola como estas?';
    
 console.log(saludo + name);
})('Felipe');
