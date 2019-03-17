var fs = require('fs');

function mkdir(folder_path){
	const promise = new Promise((resolve,reject)=>{
       fs.mkdir(folder_path,err=>{
       	if (err) {reject(err)}  
       	resolve(folder_path) 
       })
	})
	return promise;
	
}

function rename(old_path,new_Path){
	const promise = new Promise((resolve,reject)=>{
       fs.rename(old_path,new_Path,err=>{
       	if (err) { reject(err)}
       	resolve('success')	
       })
	})
	return promise;
}

module.exports={
	mkdir
	rename
};
