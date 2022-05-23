const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;
const { stdin, stdout} = process;


const styles = '05-merge-styles/styles'
const bundle = '05-merge-styles/project-dist/bundle.css'

fs.readdir(styles, { withFileTypes: true }, (err, data) => {
    if (err) throw err;
    let arr = []
    data.forEach( file => {
        if (!file.isDirectory() || (file.name).split('.').pop() === 'css' ) {
        fs.readFile(path.join(styles, file.name),  "utf8", (err, dat) => {
            if (err) throw err;
           
            arr += dat
            
             fs.writeFile(bundle, arr , (err) => {
    if(err) throw err;
}); 

        })
     
    }
}); 
  
    })
 
    

