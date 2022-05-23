
const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;
const { stdin, stdout} = process;

fsPromises.mkdir('./04-copy-directory/copy files', { recursive: true })
fs.copyFile('./04-copy-directory/files', './04-copy-directory/copy files', (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
    
  });
// function copyDir () {
    // fs.readdir('./04-copy-directory/files', (err, data) => {
    //     if (err) throw err;
    //     data.forEach( file => {
    //         console.log(file);
    //         fs.copyFile('./04-copy-directory/files', './04-copy-directory/copy files')
    // .then(function() {
    //   console.log("File Copied");
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
            
    //     })
    //     console.log(data);
    // }) 
// }
// copyDir()
// fsPromises.copyFile('./04-copy-directory/files', './04-copy-directory/copy files')
// .then(function() {
//   console.log("File Copied");
// })
// .catch(function(error) {
//   console.log(error);
// });
// try {
//     await copyFile('./04-copy-directory/files', './04-copy-directory/copy files');
//     console.log('source.txt was copied to destination.txt');
//   } catch {
//     console.log('The file could not be copied');
//   }


//   constants.COPYFILE_FICLONE