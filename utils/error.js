const error = (error, req, res, next) => {
  res.status(400).json({
    status: "Error",
    name: error.name,
    message: error.message,
    path: error.path,
  });
};

module.exports = error;
