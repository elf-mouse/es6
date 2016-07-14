// This example is specific to the Co library

import co from 'co';

// with objects
co(function*() {
    const {user1, user2, user3} = yield {
        user1: user.findOneAsync({name: "Will"}),
        user2: user.findOneAsync({name: "Adam"}),
        user3: user.findOneAsync({name: "Ben"})
    };
).catch(err => handleError(err))

// with arrays
co(function*() {
    const [user1, user2, user3] = yield [
        user.findOneAsync({name: "Will"}),
        user.findOneAsync({name: "Adam"}),
        user.findOneAsync({name: "Ben"})
    ];
).catch(err => handleError(err))
