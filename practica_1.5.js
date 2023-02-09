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
const read = ()=>{
 fs.readFile("sample.txt", function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("Reading the data that's written");
	console.log("Data read : " + data.toString());
	});
}
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
read();
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
const encoded64 = Buffer.from(filePath, 'utf8').toString('base64');
const encodedHex = Buffer.from(filePath, 'utf8').toString('hex');
console.log(encoded64)
console.log(encodedHex)



let data = encoded64;
write("sample64",data)
data = encodedHex;
write("sampleHex",data)


const crypto = require("crypto");

const algorithm = "aes-256-cbc"; 

const initVector = crypto.randomBytes(16);

// protected data
const message =encoded64;

// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);

// the cipher function
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

// encrypt the message
// input encoding
// output encoding
let encryptedData = cipher.update(message, "utf-8", "hex","base64");

encryptedData += cipher.final("hex");

console.log("Encrypted message: " + encryptedData);

const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8","base64");

decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);

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