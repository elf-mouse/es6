// This is an example using the Bluebird library.

// with the Bluebird library
import {props, all, coroutine} from 'bluebird';

// with objects
coroutine(function*() {
    const {user1, user2, user3} = yield props({
        user1: user.findOneAsync({name: "Will"}),
        user2: user.findOneAsync({name: "Adam"}),
        user3: user.findOneAsync({name: "Ben"})
    });
)().catch(err => handleError(err))

// with arrays
coroutine(function*() {
    const [user1, user2, user3] = yield all([
        user.findOneAsync({name: "Will"}),
        user.findOneAsync({name: "Adam"}),
        user.findOneAsync({name: "Ben"})
    ]);
)().catch(err => handleError(err))
