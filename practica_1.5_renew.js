var fs = require("fs");
const fs2 = fs.promises;
const zlib = require("zlib");
const { spawn } = require('child_process');
const crypto = require("crypto");


//1.1
const writeFile = async (name,text)=>{
 fs.writeFile(`${name}.txt`,text, function (err) {
	if (err) {
	return console.error(err);
	}
 console.log(" Finished writing ");
});
}
writeFile("sample_renew", "Este es el renew")
//1.2
const readFileA = async (file)=>{
   const promise = await new Promise((resolve, reject) => {
          fs2.readFile(`${file}.txt`, (err, data) => {
            if (err) reject(err);
            else resolve(console.log(data.toString()));
          });
        });
        return promise;
   }
   const fsBase = require('fs');


const fn = async (name) => {
    const data = await fs2.readFile(name, 'utf8');
    console.log(data);
};



fn("sample_renew.txt");
readFileA("sample_renew")
.then((res)=>console.log(res));
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
/* var i = 1;  

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
 */
//3.1
const ConvertAndSave=  async (filePath,callback,callback2)=>{
const getOrigin = async()=>{ const data = await readFileA("sample_renew")
console.log(data)
return data
};
 console.log(`pruebas 3.1 pillar texto ${getOrigin.data}`);
const encoded64 =  Buffer.from(filePath, 'utf8').toString('base64');
const encodedHex = Buffer.from(filePath, 'utf8').toString('hex');

let data = encoded64;
let nom = "sample64_renew";

const create = () => writeFile(nom,data)
create();
await callback(data);
await create();
await callback2(nom);

data = encodedHex;
nom = "sample_renewHex";
create();
await callback(data);
await create();
await callback2(`${nom}.text`);
//data = getOrigin;
//writeFile("sample_renew_utf8",data)
}


//3.2



const encDec =(text)=>{
 algorithm = 'aes-256-ctr',password = 'RJ23edrf';
  //Here "aes-256-cbc" is the advance encryption standard we are using for encryption.
  //Text is the Confidential data which we need to encrypt using 'password'(Key).
  
  function encrypt(text){
      var cipher = crypto.createCipheriv(algorithm,password);
      var crypted = cipher.update(text,'utf8','hex')
      crypted += cipher.final('hex');
      return crypted;
  }
  
  //Here "aes-256-cbc" is the advance encyption standard we used for encrytion.
  //Text is the Cipher which we need to decrypt using 'password'(Key).
  function decrypt(text){
     var decipher = crypto.createDecipher(algorithm,password)
     var dec = decipher.update(text,'hex','utf8')
     dec += decipher.final('utf8');
     return dec;
  }
  
  //Actual content
  var text = "Nodejsera for all web development languages";
  //Calling the encrypt function and printing the encrypted content				
  var e = encrypt(text);
  console.log(e);
  var d = decrypt(e);
  console.log(d)
}
 



   const deleteFile  = (nom) => {
    try {
     fs.unlinkSync(nom);
    }
    catch(err) {
        console.error(err)
      }  
     };
   


ConvertAndSave("./sample_renew.txt", encDec, deleteFile);
    //Borrar
