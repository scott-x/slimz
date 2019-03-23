function getFileExtension(file){
    let index = file.lastIndexOf('.');
    if (index===0) {
      return
    }
    if (index>-1) {
      return file.substring(index+1)
    }
  }
  module.exports = getFileExtension;
