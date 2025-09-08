const Log = require("./logger");

function loggingMiddleware(req, res, next) {
  // Log incoming request
  Log("RequestHandler", "info", "loggingMiddleware", `Incoming ${req.method} ${req.url}`);

  // Continue with request
  res.on("finish", () => {
    // Log when response finishes
    Log("ResponseHandler", "info", "loggingMiddleware", `Response ${res.statusCode} for ${req.method} ${req.url}`);
  });

  next();
}

module.exports = loggingMiddleware;
