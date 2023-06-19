const app = require("./server");

const port = process.env.PORT || 3001;

// run the server locally
app.listen(port, () =>
  console.log("Server listening at http://localhost:3001")
);
