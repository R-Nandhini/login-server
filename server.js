const express = require("express");
const cors = require("cors");
const pool = require("./database");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const router = require("./app/routers/route")

app.use(express.json());
let port = process.env.PORT || 4000;
app.use(cookieParser());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api",router);


// method - get
// public
// get user
app.get('/', (req, res) => {
    res.send('Hello World, Zylens world ');
  });

app.post("/createtable", async (req, res) => {
    const tableName = req.body["tablename"];
    const createTableQuery = `CREATE TABLE ${tableName}(
      user_id serial PRIMARY KEY,
      username VARCHAR (50) UNIQUE NOT NULL,
      password VARCHAR (50) UNIQUE NOT NULL,
      password2 VARCHAR (50) UNIQUE NOT NULL
  );`;
    try {
      const res = await pool.query(createTableQuery);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  });



app.listen(port, () => console.log(`Server listening on port ${port}`));
