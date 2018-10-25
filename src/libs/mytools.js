/**
 * 通过一个树加工过滤出另一个树
 */
export const machiningFromTwoTree  = (nodes, ownerMenus)=> {
	let result = [];
	(function traverse(nodes, ownerMenus, result) {
		nodes.forEach((node, index) => {
			for(let j=0; j<ownerMenus.length; j++){
				// console.log("------", node.meta.title, ownerMenus[j].menuName)
				if(node.meta.title == ownerMenus[j].menuName){
					// console.log(node)
					// console.log(ownerMenus[j])
					node.meta.hideInMenu = false
					if(node.children){
						let children = node.children;																																																																																																																																																																																																																																																																																
						node.children = []
						traverse(children, ownerMenus[j].childMenus, node.children)
					}
					break
				}
			}
			result.push(node);
			
		})//遍历结束
	})(nodes, ownerMenus, result);
	return result;
}
/**
 * 通过字段的值过滤出新树
 */
export const getTreeFromTreeByValue  = (nodes, prop, value)=> {
	let result = [];
	(function traverse(nodes, result) {
		nodes.forEach((node, i) => {
			// console.log(node[prop] , value);
			if(node[prop] == value){
				result.push(node)
			}
			if(node.childMenus && node.childMenus.length){
				let children = node.childMenus;																																																																																																																																																																																																																																																																																
				result[i].childMenus = []
				traverse(children, result[i].childMenus)
			}
		})//遍历结束
	})(nodes, result);
	return result;
}
/**
 * 通过字段的值过滤出数组
 */
export const getArrayFromTreeByValue  = (nodes, prop, value)=> {
	let result = [];
	(function traverse(nodes) {
		nodes.forEach((node, i) => {
			// console.log(node[prop] , value);
			if(node[prop] == value){
				result.push(node)
			}
			if(node.childMenus && node.childMenus.length){
				traverse(node.childMenus)
			}
		})//遍历结束
	})(nodes);
	return result;
}
/**
 * 判断用户是否拥有此按钮权限
 */
export const isAccessForButton  = (code)=> {
	let buttons = this.$store.user.buttonList
	for(let i=0; i<buttons.length; i++){
		if(buttons[i].url == code){
			return true;
		}
	}
	return false;
}
/**
 * 将数组中连续的部分和不连续的分段
 */
export const getStrArrayFromBigArray  = (arr)=> {
	if (!arr || !arr.length) {
		return []
	}
	var result = [],
      i = 0;
  result[i] = [arr[0]];
  arr.reduce(function(prev, cur){
    cur-prev === 1 ? result[i].push(cur) : result[++i] = [cur];
    return cur;
  });
  return result;
}
