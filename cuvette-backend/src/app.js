const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config/dev.env" });
const userRouter = require("./routes/userroutes.js");
const contextPath = "/rest/api";
const app = express();
require("./db/mongoose.js");
const cors = require('cors');
app.use(cors({
  origin: '*'
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(contextPath, userRouter);

const PORT = process.env.PORT;
app.get("/",(req, res)=>{
 res.send("Hi,This is the vendor Panel.!")
})
const server = app.listen(PORT, () =>
  console.log(`server running on port ${PORT}`)
);