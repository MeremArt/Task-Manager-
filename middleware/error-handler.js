const { CustomAPIError } = require(`../error/cusom-err`);
const errorHandlesMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(err.status)
    .json({ msg: `Something went wrong,please try again` });
};

module.exports = errorHandlesMiddleware;
