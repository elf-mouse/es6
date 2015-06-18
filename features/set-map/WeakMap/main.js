console.info('WeakMap');

// WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），不接受原始类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制。

// WeakMap的设计目的在于，键名是对象的弱引用（垃圾回收机制不将该引用考虑在内），所以其所对应的对象可能会被自动回收。当对象被回收后，WeakMap自动移除对应的键值对。典型应用是，一个对应DOM元素的WeakMap结构，当某个DOM元素被清除，其所对应的WeakMap记录就会自动被移除。基本上，WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。

function demo1() {
  var wm = new WeakMap();
  var element = document.querySelector(".element");

  wm.set(element, "Original");
  console.log(wm.get(element)); // "Original"

  element.parentNode.removeChild(element);
  element = null;
  console.log(wm.get(element)); // undefined
}

// WeakMap与Map在API上的区别主要是两个，一是没有遍历操作（即没有key()、values()和entries()方法），也没有size属性；二是无法清空，即不支持clear方法。这与WeakMap的键不被计入引用、被垃圾回收机制忽略有关。因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。

function demo2() {
  var wm = new WeakMap();

  console.log(wm.size); // undefined

  console.log(wm.forEach); // undefined
}

function demo3() {
  let myElement = document.getElementById('logo');
  let myWeakmap = new WeakMap();

  myWeakmap.set(myElement, {
    timesClicked: 0
  });

  myElement.addEventListener('click', function() {
    let logoData = myWeakmap.get(myElement);
    logoData.timesClicked++;
    myWeakmap.set(myElement, logoData);
    console.log(myWeakmap.get(myElement));
  }, false);
}

function demo4() {
  let _counter = new WeakMap();
  let _action = new WeakMap();

  class Countdown {
    constructor(counter, action) {
      _counter.set(this, counter);
      _action.set(this, action);
    }
    dec() {
      let counter = _counter.get(this);
      if (counter < 1) return;
      counter--;
      _counter.set(this, counter);
      if (counter === 0) {
        _action.get(this)();
      }
    }
  }

  let c = new Countdown(2, () => console.log('DONE'));

  c.dec();
  c.dec();
  // DONE
}

//demo1();
//demo2();
//demo3();
//demo4();
