/**
 * 基本用法
 */

function demo1() {
  var promise = new Promise(function(resolve, reject) {
    if (true /* 异步操作成功 */ ) {
      resolve(value);
    } else {
      reject(error);
    }
  });

  promise.then(function(value) {
    // success
  }, function(value) {
    // failure
  });
}

function demo2() {
  function timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  timeout(100).then(() => {
    console.log('done');
  });
}

function demo3() {
  var getJSON = function(url) {
    var promise = new Promise(function(resolve, reject) {
      var client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();

      function handler() {
        if (this.status === 200) {
          if (this.readyState === 4) {
            resolve(this.response);
          }
        } else {
          reject(new Error(this.statusText));
        }
      }
    });

    return promise;
  };

  getJSON("data.json").then(function(json) {
    console.log('Contents: ' + JSON.stringify(json));
    console.log(json);
  }, function(error) {
    console.error('出错了', error);
  });
}

//demo1();
//demo2();
