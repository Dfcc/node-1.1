//1
const sumDue = (var1, var2)=>{
    console.log(var1, var2);
    }
    sumDue('Juan', 'Ymedio')  ;
//2
 ((a)=>{
 const result=()=>{return a + 100;} 
   console.log(result
    )
  })
  
 var person ={
    name:'Pier',
    showName:(name)=>{
        console.log(name);
    }
  }
  person.showName("Juan");

  //3 
  class Rectangulo {
  constructor (alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
     return this.calcArea();
   }
  // Método
  calcArea () {
    return this.alto * this.ancho;
  }
}
const cuadrado = new Rectangulo(10, 10);
console.log(cuadrado.area);