const axios = require("axios");

// Reusable logging function
async function Log(stack, level, pkg, message) {
  const logPayload = {
    stack,
    level,
    package: pkg,
    message,
    timestamp: new Date().toISOString(),
  };

  try {
    // Replace with actual test server endpoint
    const response = await axios.post("http://localhost:4000/logs", logPayload);
    console.log("Log sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending log:", error.message);
  }
}

module.exports = Log;
