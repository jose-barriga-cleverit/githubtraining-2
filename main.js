const core = require("@actions/core");

const gradeLearner = require("./lib/gradeLearner");

const run = () => {
  try {
    const results = await gradeLearner();
    core.setOutput("reports", results);
  } catch (error) {
    core.setFailed(error);
  }
}

module.exports = {
  run
}