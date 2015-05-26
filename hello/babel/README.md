## 命令行转换

```sh
npm install -g babel

# Babel自带一个 `babel-node` 命令，与Node命令行完全一致，而且可以直接运行ES6代码
babel-node

# `babel-node` 命令可以将ES6代码转为ES5代码
babel-node es6.js

# -o 参数将转换后的代码，从标准输出导入文件
babel es6.js -o es5.js
```
