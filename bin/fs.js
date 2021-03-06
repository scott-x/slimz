var fs = require('fs');
var fsa = require('fs-extra');
var path = require('path');

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

function mkdir_p(path){
  var promise = new Promise((resolve,reject)=>{
	  fsa.mkdirs(path, function(err){
	    if (err) reject(err);
        resolve()
	  });
  })
  return promise;
}

//copies file and folder
function copy(from,to){
  const promise = new Promise((resolve,reject)=>{
  	fsa.copy(from, to, function(err){
  	  if (err) reject(err);
       resolve()
  	}); 
  })
  return promise;
}

function rm_rf(dir){
  const promise = new Promise((resolve,reject)=>{
  	fsa.remove(dir, function(err){
  	  if (err) reject(err);
      resolve()
  	});
  })
  return promise;
}

function readFile(file){
	const promise = new Promise((resolve,reject)=>{
		fs.readFile(file,'utf-8',(err,data)=>{
			if (err) reject(err)
			resolve(data)	
		})
	})
	return promise;
}

function readJson(file){
	const promise = new Promise((resolve,reject)=>{
		fs.readFile(file,'utf-8',(err,data)=>{
			if (err) reject(err)
			resolve(JSON.parse(data))	
		})
	})
	return promise;
}

function createFile(file){
	const promise = new Promise((resolve,reject)=>{
		fsa.createFile(file, function(err) {
		  if (err) reject(err)
		  resolve()	
		  //file has now been created, including the directory it is to be placed in
		})
	})
	return promise;
}

function writeFile(file,data){
	const promise = new Promise((resolve,reject)=>{
		fsa.outputFile(file, data,function(err) {
		  if (err) reject(err)
		  resolve()	
		  //file has now been created, including the directory it is to be placed in
		})
	})
	return promise;
}

// Note: You can output the data from database into a json file
// json_data: {name:"scott",age:18}
function writeJson(file,json_data){
	const promise = new Promise((resolve,reject)=>{
		fsa.outputJson(file, json_data,function(err) {
		  if (err) reject(err)
		  resolve()	
		  //file has now been created, including the directory it is to be placed in
		})
	})
	return promise;
}

function readJson(jsonFile){
	const promise = new Promise((resolve,reject)=>{
       fsa.readJson(jsonFile, function(err, data) {
           if (err) reject(err)
           resolve(data)
         })
	})
	return promise;
}

function exists(Path){
	const promise = new Promise((resolve,reject)=>{
		fs.exists(Path, function(exists){
		        if(!exists){
		            resolve(false)
		        }else{
		            resolve(true)
		        }
		});
	})
	return promise;
}

function getFileList(options){
	var walk = require('walk');
	var files = [],dirs = [];
	const promise = new Promise((resolve,reject)=>{
	   var walker  = walk.walk(options.folder, { followLinks: false, filters: options.skip});
		walker.on('file', function(roots, stat, next) {
			// console.log("stat.name",stat.name);
			// console.log("type stat.name",typeof(stat.name));
			options.ext.forEach(ext=>{
			  const index = stat.name.lastIndexOf('.');
			  const extension = stat.name.substring(index+1);
			  if (extension===ext && stat.name.substring(0,1)!=='.') {
			  	const file = roots + '/' + stat.name;
			  	console.log(file)
				files.push(file);
			  }
			})
			next();
		});
	 
		walker.on('directory', function(roots, stat, next) {
			dirs.push(roots + '/' + stat.name);
			next();
		});
 
		walker.on("errors", function (root, nodeStatsArray, next) {
		   next();
		 });
		
		walker.on('end', function() {
		   resolve({
			   files,
			   dirs
		   })
		});
	});
	return promise;
 }


// Summary: No matter what file or folder type it is, if doesn't exists, it will created automately, otherwise it will be ignored
// All function return a promise
module.exports={
	mkdir,
	rename,
	copy,
	mkdir_p,
	rm_rf,
	readFile,
	readJson,
	createFile,
	writeFile,
	writeJson,
	readJson,
	exists,
	getFileList
};
