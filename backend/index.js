const express = require("express");
const { connection } = require("./db");
const {userRouter}=require("./routes/user.route");

const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRouter);
app.get("/", (req, res) =>{
res.status(200).send("👉 Api is Running in Renderer 😎")
})

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(
       ` Database is connected & Server is running at ${process.env.PORT}`
       
    );
  } catch (error) {
    console.log(error);
  }
});
