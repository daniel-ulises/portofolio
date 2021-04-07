const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const mail = require("./mail");

app.use(morgan("dev"));
app.use(
	cors({
		origin: process.env.CORS_WHITELIST,
	})
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/mail", mail);
app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`));
