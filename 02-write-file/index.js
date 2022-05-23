
const fs = require('fs');
const path = require('path');
const { stdin, stdout} = process;
 
stdout.write('Ведите текст\n');

process.on('SIGINT', ()=>  {
    console.log(`Exit on keypress"ctr + c"`)
    process.exit();
});
 stdin.on('data', (dat) => {
    let name = dat.toString();
 
    if (name.trim() === 'exit') {
        console.log(`Exit when typing a word "ext"`);
        process.exit();
    };
    let date = ''
      date += dat
      fs.appendFile("02-write-file/hello.txt", date , (err) => {
        if(err) throw err;
    });   
      });
  


