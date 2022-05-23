const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;
const { stdin, stdout} = process;


const styles = '05-merge-styles/test-files/styles'

let arr = []
fs.readdir(styles, (err, data) => {
    if (err) throw err;

    // data.forEach( file => {
        fs.readdir(path.join(styles, data), (err, dat) => {
            if (err) throw err;
            console.log(dat);  
            arr += dat
        // })
        //  console.log(dat);  
      
//    fs.copyFile(path.join(files, file), path.join(copyFiles, file), (err) => {
// if (err) {
//   console.log("Error Found:", err);
// }

}); 
    })
    // console.log(arr);  
    

