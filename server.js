const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello from AWS server");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
