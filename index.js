const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());

const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");

app.use("/users", userRouter);
app.use("/blogs", blogRouter);

app.listen(port, () => {
  console.log(`App is listening on port :${port}`);
});
