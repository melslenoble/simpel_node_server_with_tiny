
/*
	Pervorm 2016
*/

function Point(x, y) {
	this.x = x;
	this.y = y;
}

function angleBetweenPoints(x1, x2, y1, y2) {
	var deltaY = y2 - y1;
	var deltaX =  x2 - x1;
	return Math.atan2(deltaY, deltaX);
}

function getLableFrameNumber(obj, frame){ return obj.timeline._labels[frame]; };

function randomRange(min, max) { return min + Math.random() * (max - min); };
function randomInt(min, max) { return Math.floor(min + Math.random() * (max - min + 1)); };
function clamp(value, min, max) { return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max)); };

function radsToDegrees(radians) { return radians * (180/Math.PI); };		
function degreesToRads(degrees) { return degrees * Math.PI / 180; };
function distanceBetweenPoints(x1, x2, y1, y2) { return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)); }	
function pointOnCircle(centerX, centerY, radius, radians) { return new Point(centerX + radius * Math.cos(radians), centerY + radius * Math.sin(radians)); }

function saveProps(obj, v) {
	// console.log(obj)
	
	obj.startX = obj.x;
	obj.startY = obj.y;
	obj.startXS = obj.scaleX;
	obj.startYS = obj.scaleY;
	obj.startA = obj.alpha;
	obj.startR = obj.rotation;
	obj.visible = v;
}

function resetProps(obj, v) {
	obj.x = obj.startX;
	obj.y = obj.startY;
	obj.scaleX = obj.startXS;
	obj.scaleY = obj.startYS;
	obj.alpha = obj.startA;
	obj.rotation = obj.startR;
	obj.visible = v;
}

function setAs(obj, source) {
	obj.x = source.x;
	obj.y = source.y;
	obj.scaleX = source.scaleX;
	obj.scaleY = source.scaleY;
	obj.alpha = source.alpha;
	obj.rotation = source.rotation;
}

function saveGuides(prnt, objName, num) {
	
	prnt[objName].guides = [];
	for(var nGuide = 0; nGuide < num; nGuide++){
		var guide = prnt[objName+"_G"+nGuide];
		prnt[objName].guides.push(guide);
		saveProps(guide, false);
	}
};

function setVis(arr, v) { for(var i = 0; i < arr.length; i++)arr[i].visible = v };
function saveAllProps(arr, v) { for(var i = 0; i < arr.length; i++)saveProps(arr[i], v); };
function resetAllProps(arr, v) { for(var i = 0; i < arr.length; i++)resetProps(arr[i], v); };
function killAllTweens(arr) { for(var i = 0; i < arr.length; i++)TweenLite.killTweensOf(arrObjects[i]); };

function isPaxPreview() {
	var qVars = window.location.search.substring(1).split("&");
	for (i = 0; i < qVars.length; i++) {
		var pair = qVars[i].split("=");
		if(pair[0] == "preview" && pair[1] == "true"){
			return true;
		}
	}
	return false;
}

function isCanvasSupported() {
	var elem = document.createElement("canvas");
	return !!(elem.getContext && elem.getContext("2d"));
}
function setActive(target, bool){ target.active = bool; }
function getDepth(target){ return target.parent.getChildIndex(target); };
function setDepth(target, index){ target.parent.setChildIndex(target, index); }

function swapDepths(source, target){
	var index = target.parent.getChildIndex(target);
	target.parent.setChildIndex(source, index); 
}

