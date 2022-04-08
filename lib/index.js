const yaml = require("yaml");

exports.parseInputs = function() {
  const inputAction = process.env.WF_INPUT_ACTION.split("@");
  if (inputAction.length != 2) {
    core.setFailed("Input `action` should have the format 'action@version'");
    return
  }
  let inputWith;
  try {
    inputWith = yaml.parse(process.env.WF_INPUT_WITH);
  } catch(ex) {
    core.setFailed(`Input \`with\`: ${ex}`);
    return
  }
  return {
    repository: inputAction[0],
    ref: inputAction[1],
    with: inputWith || {},
  };
}
