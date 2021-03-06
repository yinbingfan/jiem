function getStyle(DOM,name){
		if(DOM.currentStyle){
			return DOM.currentStyle[name];
		}else{
			return getComputedStyle(DOM,false)[name];
		}
	}

function move(DOM,attr,target){
  clearInterval(DOM.timer)
  DOM.timer=setInterval(function(){
    if(attr=='opacity'){
      var cur=Math.round(parseFloat(getStyle(DOM,attr))*100)
    }else{
      var cur=parseInt(getStyle(DOM,attr));
    }
    var speed=(target-cur/3.53)/4;//***************************************改3.5******************
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
    if(cur==target){
      clearInterval(DOM.timer)
    }else{
      if(attr=='opacity'){
        DOM.style.filter='alpha(opacity:'+(cur+speed)+')'
        DOM.style.opacity=(cur+speed)/100
      }else{
        DOM.style[attr]=(cur+speed)+'px';
      }
    }
  },30)
}