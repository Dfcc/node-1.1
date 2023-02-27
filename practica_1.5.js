const fs = require("fs");
const fs2 = fs.promises;
const { readdir } = require('fs/promises');
const zlib = require("zlib");
const { spawn } = require('child_process');
const crypto = require("crypto");
const algorithm = "aes-256-cbc"; 
const initVector = crypto.randomBytes(16);
const Securitykey = crypto.randomBytes(32);
const password = 'RJ23edrf';


//1.1
const writeFile = (name,text)=>{
 fs.writeFile(`${name}.txt`,text, function (err) {
	if (err) {
	return console.error(err);
	}
 console.log(" Finished writing ");
});
}
writeFile("sample_renew", "Este es el renew del 1.5")

//1.2-A
const readFileA = async (file)=>{
   const promise = await new Promise((resolve, reject) => {
          fs.readFile(`${file}.txt`, (err, data) => {
            if (err) reject(err);
            else resolve(console.log(`linea 23 de data${data.toString()}`));
          });
        });
        return promise;
   }
   //1.2-B
const fn = async (name) => {
    const data = await fs2.readFile(name, 'utf8');
    console.log(`linea 37 del 1.2-B ${data}`);
    return data;
};
readFileA("sample_renew")
.then(res=>{console.log(res)});
fn("sample_renew.txt");


//1.3

function gzip(filename, callback) {
    let source = fs.createReadStream(filename);
    let destination = fs.createWriteStream(filename + ".gz");
    let gzipper = zlib.createGzip();
   
    source
        .on("error", callback)
        .pipe(gzipper)
        .pipe(destination)
        .on("error", callback)
        .on("finish", callback);
}
gzip("./sample_renew.txt", () => {
    console.log("Comprim Success");
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


const getAndCode = async (callback,callback2,callback4) =>{
  //get data
  const getOrigin = async() => { 
  const data = await fn("sample_renew.txt")
  console.log(data)
   return data
 } 
 //return data;
const filePath =getOrigin.toString();
 
  //decoding
  const utf8 = await getOrigin();
  const encoded64 =  Buffer.from(filePath, 'utf8').toString('base64');
  const encodedHex = Buffer.from(filePath, 'utf8').toString('hex');
  console.log(utf8.toString());
  console.log(encoded64);
  console.log(encodedHex);
 
  //saving file decoding
  var dir = './dec';
 if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    callback("dec/sample_renew_utf8_the same", utf8.toString());
    callback("dec/sample_renew_64", encoded64);
    callback("dec/sample_renew_hex",encodedHex);
  }
//cripting decoding files
 const encrypt = callback2(encoded64);
 const encrypt2 = callback2(encodedHex);
 const encrypt3 = callback2(utf8);

 //saving crypting files
callback("sample_renew_64_crypt", encrypt);
 callback("sample_renew_hex_crypt",encrypt2);
callback("sample_renew_utf8_crypt",encrypt3);
  
 //deleting files are not crypted
/*  setTimeout( () => {
  callback3("./dec","txt");
}, 1000) */
 //callback4(utf8);
  console.log(encoded64)
  callback4(utf8);
 
  }



const findByExtensionAndDelete = async (dir, ext) => {
    const matchedFiles = [];
    var folder = dir;
    const files = await readdir(dir);
   for (const file of files) {
        // Method 2:
        if (file.endsWith(`.${ext}`)) {
            matchedFiles.push(file);  
          
    }
    console.log(matchedFiles);  
    if (fs.existsSync(folder)){
      fs.rmdirSync(folder, { recursive: true });
    
      console.log('Folder Deleted Successfully.');
  }
  

    }
   
}




const encrypt = (text)=>{
    var cipher = crypto.createCipheriv(algorithm, Securitykey, initVector)
    var crypted = cipher.update(text,'utf8','hex','base64')
    crypted += cipher.final('hex','utf8','base64');
    console.log(crypted)
    return crypted.toString();
}

const decrypt=(text)=>{
  if (text === null || typeof text === 'undefined' || text === '') {
    return text
  }
   var decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector)
   var dec = decipher.update(text,'hex','utf8','base64')
   dec += decipher.final('utf8');
   console.log(dec)
   return dec.toString();
}

getAndCode(writeFile,encrypt,decrypt);
  
