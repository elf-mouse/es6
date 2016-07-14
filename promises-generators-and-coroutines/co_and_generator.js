// If there is an error at any step in the generator, the coroutine will stop execution and return a rejected Promise.

import co from 'co';

app.post("/purchase", (req, res) => {
  co(function*() {
    const person = yield user.findOneAsync(req.body);
    const permissions = yield permissions.findAllAsync(person);
    if (isAllowed(permissions)) {
      const confirmNum = yield transaction.processAsync(user);
      res.send("Your transaction was successful!")
    }
  }).catch(err => handleError(err))
});
