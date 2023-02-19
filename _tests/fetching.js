//const {fetch} = require('node-fetch');
/* import fetch from 'node-fetch'

 */

  import { readFile } from 'fs/promises'
  const json = await readFile('data.json')  
 const packa = JSON.parse(json);
 console.log(packa.employees)

async function fetchEmploye(emId,callback) {
  var result=packa.employees.find(obj=> obj.id == emId);
   console.log(result);
   callback(emId);
      }
      async function fetchSalary(salId) {
        var result=packa.salaries.find(obj=> obj.id == salId);
      console.log(result);
         
            }

  fetchEmploye(1,fetchSalary); 
  fetchSalary(1)
  function searchByKey(id) {
    for (var i = 0, l = packa.employees.length; i < l; i++){
      if (packa.employees[i]['id'] === id) {
        console.log(packa.employees[i]['employees'])
        //return packa[i]['Values'];
      }
    }
    return false;
  }
  searchByKey(1);