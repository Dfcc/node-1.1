const {sum, addAsync,countdown, delay,giveMePromise,salut,cappedSum,fetchData,getRandomNumber,Persona,Greeting} = require('../app');
const UnaUOtra = require('../practica_1.3');
 //jest.mock('./data.json')
//jest.mock(data);
//jest.mock('./data.json', () => ([1, 2, 3]));
//const Greeting = require('../classes') ;
//jest.mock(Greeting)
//jest.mock('../app');
//jest.useFakeTimers();

test('User greeting', () => {
  const person = new Persona()
  person.getGreeting()

  // greeting.greet es un mock
  expect(person.greeting.greet).toHaveBeenCalledWith(person.nom)
})
//jest.runAllTimers();
//1

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});

test.each([
  [1, 2, 3],
  [2, 4, 6],
  [5, 5, 10],
  [8, 7, 10],
  [45, 95, 10]
])('.add(%i, %i)', (a, b, expected) => {
  expect(cappedSum(a, b)).toBe(expected);
});

test("Two integers are added if total is below the cap [10]", () => {
  expect(cappedSum(2, 4)).toBe(6);
})
test("Cap [10] is always returned if sum of two integers is higher", () => {
  expect(cappedSum(5, 6)).toBe(10);
})

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });
  
 //2 


  test('promises resolve', () => {
   UnaUOtra(3).then(data => {
      expect(data).toBe('Todo ok con el numero');
    });
  });
  test('add numbers async', done => {
    addAsync(10, 5, result => {
      expect(result).toBe(15);
      done();
    })
  })
  test('should resolve to some value', () => {
    const p = Promise.resolve('some value');
    return expect(p).resolves.toBe('some value');
  });
  
 test('should reject to error', () => {
    const p = Promise.reject('error');
    return expect(p).rejects.toBe('error');
  });

  describe("giveMePromise", () => {
    test("resolves with the correct value", async () => {
       let result = await giveMePromise()
       expect(result).toBe("I am done")
     })
   })
//Problems with json mocks,  file data

//playing with mocks...
 test('playing with mocks', () => {
    const mock = jest.fn()
   console.log(mock) //
  mock()
expect(mock).toHaveBeenCalled() // true
expect(mock).toHaveBeenCalledTimes(1) // false
  }) 

const randomNumberExpected = 0.123456789

beforeEach(() => {
  // modificamos el comportamiento del método random
  // para que retorne randomNumberExpected
  jest.spyOn(global.Math, 'random').mockReturnValue(randomNumberExpected)
})

afterEach(() => {
  // eliminamos el comportamiento asignado anteriormente
  jest.spyOn(global.Math, 'random').mockRestore()
})

test('it should return a random value', () => {
  // pasa porque estamos controlando el comportamiento de Math.random
  expect(getRandomNumber()).toBe(randomNumberExpected)
  // otra posible asersión:
  expect(Math.random).toHaveBeenCalled()
})

