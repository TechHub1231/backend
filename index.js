const { app } = require("./server");
require('dotenv').config();

const PORT = process.env.PORT || 3001;

// Main Function of the Server.
function main() {
  // Put the Server to Listen.
  app.listen(PORT, async () => {
    // Listening Verify.
    console.log(`server listening on http://localhost:${PORT}`);
    
  });
}

// Execution Server.
main();