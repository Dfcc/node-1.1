const {sum, addAsync,countdown, delay,giveMePromise,salut,cappedSum,fetchData,getRandomNumber} = require('../app');
const UnaUOtra = require('../practica_1.3');
 //jest.mock('./data.json')
//jest.mock(data);
//jest.mock('./data.json', () => ([1, 2, 3]));
//const Greeting = require('../classes') ;
//jest.mock(Greeting)

/* test('User greeting', () => {
const user = User;
user.getGreeting()
 // greeting.greet es un mock
  expect(user.greeting.greet).toHaveBeenCalledWith(user.name)
})
 */
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
describe("giveMePromise", () => {
 test("resolves with the correct value", async () => {
    let result = await giveMePromise()
    expect(result).toBe("I am done")
  })
})

//jest.mock('./classes')
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });
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
  

//playing with mocks...
/*  test('playing with mocks', () => {
    const mock = jest.fn()
   console.log(mock) //
  mock()
  
expect(mock).toHaveBeenCalled() // true
expect(mock).toHaveBeenCalledTimes(1) // false
  }) */

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

const theExpectedApiResponse = {} // lo que sea que esperemos de la API

// reemplazamos el objeto global fetch por un mock
// el mock es creado con jest.fn() y
// estamos definiendo el comportamiento esperado en el callback que pasamos
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(theExpectedApiResponse),
  })
)
it('returns the api data expected', async () => {
  const data = await fetchData()

  // ya que controlamos fetch, podemos asegurar que retorna lo
  // que definimos en el comportamiento del mock
  expect(data).toEqual(theExpectedApiResponse)

  // podemos revisar también que se haya ejecutado N veces y cómo
  expect(fetch).toHaveBeenCalledTimes(1)
  expect(fetch).toHaveBeenCalledWith('./data.json')
})
  //https://www.google.com/search?q=+mock+json+file++with+Jest&ei=-dLtY5SZEvyjptQP2b6moAs&ved=0ahUKEwjU-dHDupn9AhX8kYkEHVmfCbQQ4dUDCGs&uact=5&oq=+mock+json+file++with+Jest&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQogQyBQgAEKIEMgUIABCiBDIFCAAQogQ6CggAEEcQ1gQQsAM6BwgAELADEEM6BAgAEEM6CAgAEIAEELEDOgUIABCABDoRCC4QgAQQsQMQgwEQxwEQrwE6CwguEIAEEMcBEK8BOgoIIRCgARDDBBAKOgkIABANEIAEEBM6CggAEAgQHhANEBM6DQgAEAgQHhANEPEEEBM6BAghEAo6BwgAEIAEEBM6CwgAEAgQHhDxBBATSgQIQRgAUMcJWJerAmDvtAJoAXABeACAAc4CiAGJGZIBCTE1LjEzLjAuMZgBAKABAaABAsgBCsABAQ&sclient=gws-wiz-serp

  //https://www.google.com/search?q=Jest+Fake+Timers&oq=Jest+Fake+Timers&aqs=chrome..69i57j0i22i30i625l7j0i22i30j0i22i30i625.3594j0j15&sourceid=chrome&ie=UTF-8

  //https://onestepcode.com/jest-js-testing/
//https://www.jstwister.com/post/unit-testing-beginners-guide-mock-http-and-files/

//https://jestjs.io/docs/tutorial-async