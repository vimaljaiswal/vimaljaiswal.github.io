 
(function(){
  //Sample: VDXTracker={event:'click',callbacks:['cb1','cb2']}

   function stringToJSON(jsonString){
     return JSON.parse(JSON.stringify(eval("(" + jsonString.split("=")[1] + ")")));

   }
   
   function setCallBacks(callBackObj)
   {
	   	 return function()
	   	{
		   	 for(var k = 0;k<callBackObj.length;k++){
				designerAPI[callBackObj[k]]();
			 }
		  
	    }
   }
   function setTrackers(designerAPI){
		var tabs = document.querySelectorAll("div[title*='VDXTracker']");
		for(var i=0; i< tabs.length; i++) {
			tabs[i].setAttribute('data-title',tabs[i].title);			
			var jsonObj = stringToJSON(tabs[i].title);
			tabs[i].removeAttribute('title');
			tabs[i].addEventListener(jsonObj['event'].toLowerCase(), setCallBacks(jsonObj.callbacks),false);
		}
   }

function activateDefaultTab(){
   var thumbGrp = document.getElementsByClassName("Thumb");
   var containerGrp = document.getElementsByClassName("Container");
   var currentActiveContainer = document.getElementsByClassName("wp-panel-active")[0];
   var currentActiveTab = document.querySelectorAll("div[aria-selected='true']")[0];
    
    currentActiveTab.classList.remove("wp-tab-active");
    currentActiveTab.classList.remove("PamphletThumbSelected");
    currentActiveTab.setAttribute("aria-selected","false")

    currentActiveContainer.classList.remove("wp-panel-active");
    currentActiveContainer.style.display = "none";

    thumbGrp[0].classList.add("wp-tab-active");
    thumbGrp[0].classList.add("PamphletThumbSelected");
    thumbGrp[0].setAttribute("aria-selected","true");

    containerGrp[0].classList.add("wp-panel-active");
    containerGrp[0].style.display = "inline";
}

EU.EventManager.add('close.mainunit', function(cb){
   activateDefaultTab();
   cb();
})

window.addEventListener('load',function(){setTrackers(this.designerAPI) },false);

})();










