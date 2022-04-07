const yaml = require("yaml");

exports.parseAction = function() {
  const action = process.env.WF_ACTION.split("@");
    if (action.length != 2) {
      core.setFailed("Input `action` should have the form 'action@version'");
    }
    return {
      repository: action[0],
      ref: action[1],
    };
}
