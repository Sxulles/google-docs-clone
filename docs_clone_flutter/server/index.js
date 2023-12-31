const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT | 3001;

const app = express();

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is listening on http://localhost:${PORT} or https://localhost:${PORT}`)
});