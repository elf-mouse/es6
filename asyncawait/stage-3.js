// Stage 3: Generators/Yields (ES6)

var generator = publishLevel(12, {
  data: true
});

generator.next().value.then(function(user) {
  return generator.next(user).value.then(function(can_create) {
    return generator.next(can_create).value.then(function(level_result) {
      console.log(level_result);
    });
  });
});

function * publishLevel(user_id, level_data) {
  var user = yield getUser(user_id);
  var can_create = yield canCreate(user);

  if (!can_create) {
    return null;
  }

  var level = yield saveLevel(user, level_data);

  return level;
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
