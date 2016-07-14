app.post("/purchase", async function(req, res) {
  const userData = await user.findOneAsync(req.body);
  const permissions = await permissions.findAllAsync(userData);
  if (isAllowed(permissions)) {
    const confirmNum = await transaction.processAsync(userData);
    res.send("Your purchase was successful!")
  }
});
