app.post("/purchase", (req, res) => {
  user.findOne(req.body, (err, userData) => {
    if (err) return handleError(err);
    permissions.findAll(userData, (err2, permissions) => {
      if (err2) return handleError(err2);
      if (isAllowed(permissions)) {
        transaction.process(userData, (err3, confirmNum) => {
          if (err3) return handleError(err3);
          res.send("Your purchase was successful!");
        });
      }
    });
  });
});
