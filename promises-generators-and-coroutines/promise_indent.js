app.post("/purchase", (req, res) => {
  user.findOneAsync(req.body)
    .then(userData => {
      return permissions
        .findAllAsync(userData)
        .then(permissions => {
          if (isAllowed(permissions)) {
            return transaction.processAsync(userData);
          }
        });
    })
    .then(confirmNum => res.send("Your purchase was successful!"))
    .catch(err => handleError(err))
});
