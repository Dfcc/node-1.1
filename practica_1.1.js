
//nivel 1.1
const showName=(name)=>{
    console.log(name)
}
showName('Juan');

// nivel_2.1

function ShowYou (){
  const pre = "Juan";
  const last ="Perro";
  console.log(`Mi nombre es ${pre} y mi apellido es ${last}`);  
}
ShowYou();

// nivell 2.2

function returnLiteral(valor){
  const came = console.log(`this is the return del ${valor}`);
  return came;
}
returnLiteral(5)

const getName =()=>{
let nombre ='Pitilongui';
console.log( 'Hola '+ nombre);
console.log ( `Hola ${ nombre }`);
}
getName();

//nivel_3.1
let arr =[];
for(i= 0; i<10; i++){
   arr.push(()=>{
    for(i= 0; i<10; i++)
    console.log(i);
   })
}
 arr.forEach(ele=>ele());

 // 3.2

 (function (name) {
    const saludo='Hola como estas?';
   console.log(saludo + name);
})('Felipe');

