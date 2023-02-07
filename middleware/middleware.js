const path = require("path");
const date = new Date();
const hour = date.getHours();
const day = date.getDay();

const workingtime = function (request, response, next) {
  if (hour > 9 && hour < 18 && day > 0 && day < 6) {
    next();
  } else {
    response.status(400);
    // response.json({
    // message: 'closed'
    // });

    response.sendFile(path.join(__dirname, "../public", "closed.html"));
  }
};

module.exports = workingtime;