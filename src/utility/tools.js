

let tools = new Object();

tools.addhooks = (hooks, type, hook) => {
  var typeArray = hooks[type];
  if (!typeArray) {
    typeArray = [];
  }
  typeArray.push(hook);
  hooks[type] = typeArray;
  return hooks;
}

export default tools