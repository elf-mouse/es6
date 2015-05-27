有了export default命令，输入模块时就非常直观了，以输入jQuery模块为例。

```javascript
import $ from 'jquery';
```

如果想在一条import语句中，同时输入默认方法和其他变量，可以写成下面这样。

```javascript
import customName, { otherMethod } from './export-default';
```

如果要输出默认的值，只需将值跟在`export default`之后即可。

```javascript
export default 42;
```

export default也可以用来输出类。

```javascript
// MyClass.js
export default class { ... }

// main.js
import MyClass from 'MyClass'
let o = new MyClass();
```
