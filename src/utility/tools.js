

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

/**
 * 两个对象数组根据某个属性进行减法。
 */
tools.getRemainFromTwoArrayByProp = (array, subArray, property) => {
  let tempList = []
  for(let i=0; i<array.length; i++){
    let count = 0;
    for(let j=0; j<subArray.length; j++){
      if(array[i][property] != subArray[j][property]){
         count ++
      }
    }
    if(count == subArray.length){
      tempList.push(array[i])
    }
  }
  return tempList;
}
export default tools