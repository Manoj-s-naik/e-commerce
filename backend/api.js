const express = require("express");
<<<<<<< HEAD
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
=======
const dotenv = require("dotenv");
const app = express();
dotenv.config()
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
>>>>>>> 4678ca4 (Add simple server with environment-based port configuration)
});
