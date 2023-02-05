//1
const sumDue =( (var1, var2)=>{
  return var1 + var2;
    
    })(3, 2)
    console.log(sumDue);
   

 /* ((a)=>{
 const result= a + 100;
 console.l og(result)
  })(10);*/
 //2.1
let showName =(name)=>{
        console.log(name);
    }
  console.log(showName('Juan'));  

  //2.2
  class Persona {
    constructor (nom) {
      this.nom = nom;
    }
    dirNom(){
      console.log(this.nom);
    }
  }
  const person1 = new Persona('Paco');
  person1.dirNom();
   
  

  //3  esta mal 
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
console.log(cuadrado);

// miraar clases javascript abstractas