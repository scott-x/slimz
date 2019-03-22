'use strict'

const exec = require('child_process').exec;

function exec_cmd(linx_cmd,cb){
    const promise = new Promise((resolve,reject)=>{
       exec(linx_cmd, (error, stdout, stderr) => {
               if (error) {
                   console.log(error)
                   process.exit()
               }
               cb();
               resolve();
               process.exit();
        }) 
    })
    return promise;  
}

module.exports={ 
    exec_cmd
}
