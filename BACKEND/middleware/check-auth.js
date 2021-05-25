const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'.
    if (!token) {
      throw new Error("Authentication failed!");
    }
    const decodeToken = jwt.verify(token, "mern_application_memories");
    req.userData = { userId: decodeToken.userId };
    next();
  } catch (error) {
    return next(new HttpError("Authentication failed", 401));
  }
};
