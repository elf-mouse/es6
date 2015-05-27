'use strict';

console.info('Object.observe()，Object.unobserve()');

function demo1() {
  var user = {};
  Object.observe(user, function(changes) {
    changes.forEach(function(change) {
      user.fullName = user.firstName + " " + user.lastName;
    });
  });

  user.firstName = 'Michael';
  user.lastName = 'Jackson';
  console.log(user.fullName); // 'Michael Jackson'
}

function demo2() {
  var user = {};
  var div = $("#foo");

  Object.observe(user, function(changes) {
    changes.forEach(function(change) {
      var fullName = user.firstName + " " + user.lastName;
      div.text(fullName);
    });
  });
}

function demo3() {
  var o = {};

  function observer(changes) {
    changes.forEach(function(change) {
      console.log('发生变动的属性：' + change.name);
      console.log('变动前的值：' + change.oldValue);
      console.log('变动后的值：' + change.object[change.name]);
      console.log('变动类型：' + change.type);
    });
  }

  Object.observe(o, observer);

  /*var change = {
    object: {
      //...
    },
    type: 'update',
    name: 'p2',
    oldValue: 'Property 2'
  }*/
}

/**
 * Object.observe方法目前共支持监听六种变化。
 *
 * add：添加属性
 * update：属性值的变化
 * delete：删除属性
 * setPrototype：设置原型
 * reconfigure：属性的attributes对象发生变化
 * preventExtensions：对象被禁止扩展（当一个对象变得不可扩展时，也就不必再监听了）
 */

// Object.observe方法还可以接受第三个参数，用来指定监听的事件种类。
// Object.observe(o, observer, ['delete']);

// Object.unobserve方法用来取消监听。
// Object.unobserve(o, observer);
// 注意，Object.observe和Object.unobserve这两个方法不属于ES6，而是属于ES7的一部分。不过，Chrome浏览器从33版起就已经支持。
