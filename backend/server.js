const connect = require("./config/db");
const app = require("./index");

app.listen(8080, async () => {
  try {
    await connect();
    console.log("Listening on port 8080");
  } catch (error) {
    console.log(error)
  }
});
