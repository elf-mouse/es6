## Array.observe()，Array.unobserve()

这两个方法用于监听（取消监听）数组的变化，指定回调函数。

它们的用法与`Object.observe`和`Object.unobserve`方法完全一致，也属于ES7的一部分，请参阅[对象的扩展](#)一章。唯一的区别是，对象可监听的变化一共有六种，而数组只有四种：`add`、`update`、`delete`、`splice`（数组的`length`属性发生变化）。
