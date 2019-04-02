## Description
Utils for node.js

## Normal API
- `getTimeString(type)`
- `getDay(number)` eg:-1,0,1,2,3...
- `getFileExtension(file)`: Return the extension of the file. The file here can be any string that contains the file name.

#### type options
- `getTimeString()`: 2019年03月17日 11:31:18
- `getTimeString('yyyymmdd')`: 20190317
- `getTimeString('yyyy年mm月dd日')`: 2019年03月17日
- `getTimeString('yyyy-mm-dd')`: 2019-03-17
- `getTimeString('yyyy/mm/dd')`: 2019/03/17
- `getTimeString('mmdd')`: 0317
- `getTimeString('mm月dd日')`: 03月17日
- `getTimeString('mm-dd')`: 03-17
- `getTimeString('mm/dd')`: 03/17
- `getTimeString('hh:mm:ss')`: 11:31:18
- `getTimeString('hh时:mm分:ss秒')`: 11时31分18秒

### Promise API
- `rename(old_file, new_file)`
- `copy(from,to)`
- `mkdir_p(folder)`
- `rm_rf(folder)`
- `readFile(file)`
- `readJson(jsonFile)`
- `createFile(file)`
- `writeFile(file,data)`
- `writeJson(file,json_data)`
- `exists(Path)`: The Path here is belong to file-system, which is a bit difference from js
- `exec_cmd(linux_cmd,cb)`: cb will exec after linux_cmd, note the result of the linux_cmd will not show in screen, so you should make it into a output stream, like `echo hello > a.txt`, ofcourse you can excute bash here
- `getFileList(options)`:Recive options, data structure liike `{folder:"",skip:[],ext:[]}`, return a obj like `{files:[...],dirs:[...]}`

## example
### getTimeString(type)
```
const { getTimeString } = require('slimz');
getTimeString(type)
```
### mkdir(dir)
```
const { mkdir } = require('slimz');

mkdir('./a').then(()=>{
	return mkdir('a/b')
}).then(()=>{

}).catch(err=>{
	console.log(err)
})
```

### exists(filePath)
```
exists('package.json').then(data=>{
	console.log(data)
})
```
### exec_cmd(linx_cmd)
```
exec_cmd(`ls -al > a.txt`,()=>{
   console.log("finish")
}).then((data)=>{
    console.log(data)
})
```

### getFileList(options)

#### options<Object>
- `folder`: The path of the folder
- `skip`: The folder you want to skip, it must be an Array
- `ext`: Filter the extension, it must be an Array

**example**
```
const options={
  folder: path.resolve(__dirname),
  skip:['node_modules/slimz','node_modules/fs-extra'],
  ext:['md']
}

getFileList(options).then(data=>{
  console.log(data)
}).catch(err=>{
  console.log(err);
})
//also you can do like this:
const { getFileList } = require('slimz')
async function run(){
  const options = {
    folder:"/Volumes/datavolumn_bmkserver_Pub/新做稿",
    skip:['摄影'],
    ext:['xls','xlsx']
  }
  let files = await getFileList(options)
  console.log(files)
}

run()
```
