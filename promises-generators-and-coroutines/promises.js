// all asynchronous methods have been promisified
app.post("/purchase", (req, res) => {
  user.findOneAsync(req.body)
    .then(userData => permissions.findAllAsync(userData))
    .then(permissions => {
      if (isAllowed(permissions)) {
        return transaction.processAsync(userData);
        // userData is not defined! It's not in the proper scope!
      }
    })
    .then(confirmNum => res.send("Your purchase was successful!"))
    .catch(err => handleError(err))
});
