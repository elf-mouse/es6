'use strict';

console.info('at()');

function es5() {
  console.log('𠮷'.charAt(0)); // '\uD842'
}

function es6() {
  console.log('𠮷'.at(0)); // '𠮷'
}

es5();
es6();
