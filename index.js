const createApp = require("./app");

(async () => {
  const port = process.env.PORT || 3000;
  const app = await createApp();
  app.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
})();
