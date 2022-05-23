const fs = require('fs');
const path = require('path');
fs.readFile("./01-read-file/text.txt", "utf8", 
            function(error,data){
              
                if(error) throw error;
                console.log(data); 
});
path.resolve(__dirname,'./01-read-file/text');

