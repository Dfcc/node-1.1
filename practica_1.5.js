//1.1
//escribir, leer, comprimir
var fs = require("fs");
console.log(" Writing into an file ");
const write = (name,text)=>{
 fs.writeFile(`${name}.txt`,text, function (err) {
	if (err) {
	return console.error(err);
	}
 console.log(" Finished writing ");
});
}
//1.2
// read value from callback fs read
/* 
make sure to use await only when necessary (to unwrap promises into their values).

var pathToText ="./sample.txt";
var buffer = fs.readFileSync(pathToText);
var output="";
 const fileText=()=>(buffer, function(err, chunks){
  if (err){
      console.log(err);
      return;
    }
    output = chunks;
    getData(); // chunks content

});

function getData() {
  console.log(`this is the getdata ${output}`);
}
fileText()
 */
const getInput=  async ()=> {
    return  await new Promise((resolve, reject) => {
        let input = [];
        fs.readFile('text1.txt',(err,data)=>{
            if(err) return reject(err);
            var input = data.toString().split(' ');
            return resolve(input);
        })
    });
}

const fsBase = require('fs');
const fs2 = fsBase.promises

const fn = async () => {
    const data = await fs2.readFile('text3.txt', 'utf8');
    console.log(data);
};

fn();

fs.readFile('./text1.txt', function read(err, data) {
  if (err) {
      throw err;
  }
  const content = data.toString();

  // Invoke the next step here however you like
  console.log(content);   // Put all of the code here (not the best solution)
  processFile(content);   // Or put the next step in a function and invoke it
});

function processFile(content) {
  console.log(content);
}
// First I want to read the file
fs.readFile('./sample.txt', function read(err, data) {
  if (err) {
      throw err;
  }
  const content =data.toString();

  // Invoke the next step here however you like
  console.log(content);   // Put all of the code here (not the best solution)
  processFile(content);   // Or put the next step in a function and invoke it
});

function processFile(content) {
  console.log(content);
}
// First I want to read the file
fs.readFile('./text2.txt', function read(err, data) {
  if (err) {
      throw err;
  }
  const content = data;

  // Invoke the next step here however you like
  console.log(content.toString());   // Put all of the code here (not the best solution)
  processFile(content.toString());   // Or put the next step in a function and invoke it
});

function processFile(content) {
  console.log(content);
}
 
 const readFile= async(file) =>{
  const promise = await new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      else resolve(data.toString());
    });
  });
  return promise;
}
async function readFile2(file) {
  const promise = await new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      else resolve(data.toString());
    });
  });
  return promise;
}
readFile2("./text3.txt").then(res=>console.log(res));
readFile("./text4.txt").then(res=>console.log(res));


let fileTextThis;
const read = (file)=>{
 fs.readFile(`${file}.txt`, function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("Reading the data that's written");
	console.log("Data read : " + data.toString());
  console.log(data.toString())
  fileTextThis=data.toString() ;
  console.log(fileTextThis)
  return fileTextThis;
	});

}
const textRead = (read("sample"));
console.log(textRead)
//1.3
const zlib = require("zlib");
function gzip(filename, callback) {
    let source = fs.createReadStream(filename);
    let destination = fs.createWriteStream(filename + ".gz");
    let gzipper = zlib.createGzip();
    // Set up the pipeline
    source
        .on("error", callback)
        .pipe(gzipper)
        .pipe(destination)
        .on("error", callback)
        .on("finish", callback);
}

write("sample","hellouuu text");
read("sample");
gzip("./sample.txt", (msg) => {
    console.log(msg);
}); 
 
//2.1
var i = 1;  

function myLoop(nom) {         
  setTimeout(function() {  
    console.log('hello ' + nom);   
    i++;                   
    if (i < 10) {          
      myLoop(nom);            
    }                     
  }, 1000)
}

myLoop("Juan");  
 
//2.2
const { spawn } = require('child_process');
const child = spawn('dir', ['D:'], {shell: true});
child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
  
child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
  
child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

//3.1
let filePath ="/sample.txt"
const getOrigin =read("sample");
console.log(getOrigin)
const encoded64 = Buffer.from(filePath, 'utf8').toString('base64');
const encodedHex = Buffer.from(filePath, 'utf8').toString('hex');
console.log(getOrigin)
console.log(encoded64)
console.log(encodedHex)

let data = encoded64;
write("sample64",data)
data = encodedHex;
write("sampleHex",data)
data = getOrigin;

const cripDcrip = (data)=>{
const crypto = require("crypto");
const algorithm = "aes-256-cbc"; 
const initVector = crypto.randomBytes(16);
const message = data;
const Securitykey = crypto.randomBytes(32);
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

let encryptedData = cipher.update(message, "utf-8", "hex","base64");
encryptedData += cipher.final("hex");
console.log("Encrypted message: " + encryptedData);

const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
let decryptedData = decipher.update(encryptedData, "hex", "utf-8","base64");
decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);
}


//write("sample_encrypted", encryptedData);



//Borrar
 const path = './sample64.txt'
try {
  fs.unlinkSync(path)
  //file removed
} catch(err) {
  console.error(err)
}  
//Inclou un README amb instruccions per a l'execució de cada part.
//3.2 criptear https://www.section.io/engineering-education/data-encryption-and-decryption-in-node-js-using-crypto/
//https://lollyrock.com/posts/nodejs-encryption/
//https://codeforgeek.com/encrypt-and-decrypt-data-in-node-js/
//https://stackoverflow.com/questions/52165333/deprecationwarning-buffer-is-deprecated-due-to-security-and-usability-issues