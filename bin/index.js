const { getDay, getTimeString } = require('./date');
const { exec_cmd } = require('./process');
const getFileExtension = require('./normal');
const { 
	mkdir, 
	rename, 
	copy, 
	mkdir_p, 
	rm_rf, 
	readFile ,
	readJson, 
	createFile , 
	writeFile, 
	writeJson,
	exists,
	getFileList
	 } = require('./fs');

module.exports={
	getTimeString,
	getDay,
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
	exec_cmd,
	getFileList,
	getFileExtension
}