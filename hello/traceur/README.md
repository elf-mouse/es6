```sh
npm install -g traceur

# traceur直接运行es6脚本文件，会在标准输出显示运行结果
traceur calc.js

# 将ES6脚本转为ES5保存
traceur --script calc.es6.js --out calc.es5.js

# 为了防止有些特性编译不成功，最好加上`--experimental`选项
traceur --script calc.es6.js --out calc.es5.js --experimental
```
