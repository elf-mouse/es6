/* Node.js环境的用法 */
var config = {
  input: 'calc.js',
  output: 'output.js'
};

var traceur = require('traceur');
var fs = require('fs');

// 将ES6脚本转为字符串
var contents = fs.readFileSync(config.input).toString();

var result = traceur.compile(contents, {
  filename: config.input,
  sourceMap: true,
  // 其他设置
  modules: 'commonjs'
});

if (result.error) {
  throw result.error;
}

// result对象的js属性就是转换后的ES5代码
fs.writeFileSync(config.output, result.js);
// sourceMap属性对应map文件
fs.writeFileSync(config.output + '.map', result.sourceMap);
