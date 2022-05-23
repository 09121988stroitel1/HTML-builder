
const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;
const { stdin, stdout} = process;

fsPromises.mkdir('./04-copy-directory/copy files', { recursive: true })
const files = './04-copy-directory/files'
const copyFiles = './04-copy-directory/copy files'


function copyDir () {
    fs.readdir(files, (err, data) => {
        if (err) throw err;
        data.forEach( file => {
            console.log(file);  
          
       fs.copyFile(path.join(files, file), path.join(copyFiles, file), (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
 
  }); 
        })
   
    }) 
}
copyDir()
