const {Transform} = require('stream');

const log = console.log.bind(console);

// 给内容添加相应的注意信息
const contentFile = (file) => {
    let content = file.contents.toString(); // buffer转换为字符串
    let extension = file.extname.slice(1); // 获取文件后缀名
    let s =''
    if(extension === 'js') {
        s ='// this is a js file' + '\n' +  content;
    } 
    console.log(s);
   let b = Buffer.from(s);
   return b;
}

const selfPlugin = (options) => {
    log('selfPlugin****************************************************************');
    return new Transform({
        objectMode: true,
        transform(file, encoding, callback) {
            file.contents = contentFile(file);
           return callback(null, file);
        }
    })
}

module.exports = selfPlugin;