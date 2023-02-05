//escribir, leer, comprimir

var fs = require("fs");
console.log(" Writing into an file ");

// Sample.txt is an empty file
fs.writeFile(
"sample.txt",
"Let's write a few sentences in the file",
function (err) {
	if (err) {
	return console.error(err);
	}

	// If no error the remaining code executes
	console.log(" Finished writing ");
	console.log("Reading the data that's written");

	// Reading the file
	fs.readFile("sample.txt", function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("Data read : " + data.toString());
		
	});
}
);

/* var fs2 = require("fs");
const zlib = require("zlib");
  
// gzip() function accepts a filename 
// to be compressed and a callback function
function gzip(filename, callback) {
    // Create the streams
    let source = fs2.createReadStream(filename);
    let destination = fs2.createWriteStream(filename + ".gz");
    let gzipper = zlib.createGzip();
      
    // Set up the pipeline
    source
        .on("error", callback)
        .pipe(gzipper)
        .pipe(destination)
        .on("error", callback)
        .on("finish", callback);
}
  
gzip("./index.txt", (msg) => {
    console.log(msg);
});
- Exercici 1
Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.


- Exercici 2
Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes. 
const myFunction =()=> console.log("hi there");
setTimeout(myFunction, 1000);

const { spawn } = require('child_process');
const child = spawn('dir', ['D:\2023 tech-learn'], {shell: true});
child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
  
child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
  
child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
//3
//https://www.tutorialspoint.com/node-js-base64-encoding-and-decoding
//https://gist.github.com/sid24rane/bdf557cf9f835181a994439da0b5b82a

var buffer = require('buffer');
var path = require('path');

function encode_base64(filename){
	fs.readFile(path.join(__dirname,'/1er_sprint/',filename),function(error,data){
	  if(error){
		throw error;
	  }else{
		var buf = Buffer.from(data);
		var base64 = buf.toString('base64');
		//console.log('Base64 of ddr.jpg :' + base64);
		return base64;
	  }
	});
  }



// create a buffer
const buff = Buffer.from(strB, 'utf-8');

// decode buffer as Base64
const base64 = buff.toString('base64');

// print Base64 string
console.log(base64);

// Base64 encoded string
const base64B= base64;

// create a buffer
const buffB = Buffer.from(base64B, 'base64');

// decode buffer as UTF-8
const strB = buff.toString('utf-8');

// print normal string
console.log(strB);

// Convert file to base64 string
const fileToBase64 = (filename, filepath) => {
	return new Promise(resolve => {
	  var file = new File([filename], filepath);
	  var reader = new FileReader();
	  // Read file content on file loaded event
	  reader.onload = function(event) {
		resolve(event.target.result);
	  };
	  
	  // Convert data to base64 
	  reader.readAsDataURL(file);
	});
  };
  // Example call:
  fileToBase64("sample.txt", "./sample.txt").then(result => {
	console.log(result);
  });
  */
