// Stage 3.5: Generators/Yields + co (ES6)

var co = require('co');

publishLevel(12, {
  data: true
}).then(function(level_data) {
  console.log(level_data);
});

function publishLevel(user_id, level_data) {
  return co(function * publishLevel() {
    var user = yield getUser(user_id);
    var can_create = yield canCreate(user);

    if (!can_create) {
      return null;
    }

    var level = yield saveLevel(user, level_data);

    return level;
  });
}

function getUser(user_id) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        id: user_id,
        nickname: 'tlhunter'
      });
    }, 100);
  });
}

function canCreate(user) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(user.id === 12);
    }, 100);
  });
}

function saveLevel(user, data) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        id: 100,
        owner: user.nickname,
        data: data
      });
    }, 100);
  });
}
