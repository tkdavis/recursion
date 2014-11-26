// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var result = [];
	step(document.body);
	function step(node){
		var children = node.childNodes;
	    var nodeClasses = Array.prototype.slice.call(node.classList,0);
		if(nodeClasses.indexOf(className) != -1){
			result.push(node);
		}
		for(var i=0; i < children.length; i++){
			if(children[i].nodeType === 1){
				step(children[i]);
			}
	    }
	}
	return result;
};