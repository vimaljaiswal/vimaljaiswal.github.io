   var dragVideo
   var dragImg
   var ImgTimer;
   var trackMainUnitClosed = false;
       seconds = 0;
       second = 10;

   function timerCalled(timer) {
	   document.getElementById("warning").style.visibility = "visible"
       if (timer >= 485) {
			playTeaser();
       }
       else {
		   //$("#warning").fadeOut(13000);
	
		   
		   showMainUnit(.001,.001,.001);

		   timerImg();
           dragVideo = setTimeout(function () {
			  
			   console.log(ImgTimer);
			   			   document.getElementById("warning").style.visibility = "hidden";

				playTeaser();
           }, 10000);
           
       }
   }


   function timerImg(){
	    var countdownElement = document.getElementById('time');
		countdownElement.firstChild.data = second;
		ImgTimer = setInterval(function() {
        countdownElement.firstChild.data = second - 1;
        if (second <= seconds) {
            clearInterval(ImgTimer);
        }

        second--;
    }, 1000);
   
   }

   function chkRollover(event) {
       if (event.id == "videoTab") {
			playTeaser();
         
       }
       else {

       }
   }

   function chkRollout(event) {
       if (event.id == "videoTab") {
		   document.getElementById("indicator").style.visibility = "hidden";
           clearTimeout(dragVideo);
       }
       else {
           clearTimeout(dragImg); 
       }
   }

   function chkClick(event) {
     
       if (event.id == "videoTab") {
			playTeaser();
       }
       else if (event.id == "imageTab") {
           
       }
   }

   function playTeaser(){
          document.getElementById("fiftyBan").style.visibility = "hidden";
          document.getElementById("containerVideo").style.visibility = "visible";
          window.frames[2].frameElement.contentWindow.window.anim();
   }


   window.mainUnitClosed = function () {
       console.log("reoladed the div");
	   trackMainUnitClosed = true;
	   refreshAdiframe("adLoader");
   }

   function resetTeaser(){
  if(trackMainUnitClosed == true){
	   trackMainUnitClosed = false;
	   displayText();
	   showMainUnit(500,500,4400);
	   $("#indicator").fadeIn(1000);
       document.getElementById("dividerBtn").style.left = 485 + "px";
       document.getElementById("videoContainerName").style.width = 485 + "px";
       document.getElementById("videoLi").style.width = 485 + "px";
       document.getElementById("imgFrame").style.width = 485 + "px";
       document.getElementById("fiftyBan").style.visibility = "visible";
       document.getElementById("containerVideo").style.visibility = "hidden";

  }
   
   }

   function refreshAdiframe(iFrameName){
   
    var frame = document.getElementById(iFrameName);
	frame.src = "";
	frameDoc = frame.contentDocument || frame.contentWindow.document;
	frameDoc.removeChild(frameDoc.documentElement);
	var element1 = document.getElementById("teaser_123456");
	var element2 = document.getElementById("backGroundFadedDiv_123456");
	element1.outerHTML = "";
	element2.outerHTML = "";
	frame.src = "template.html";
   }

   function displayText() {
       document.getElementById("indicator").style.visibility = "visible";
	   document.getElementById("warning").style.visibility = "hidden"
   }

   function showMainUnit(teaser2VPM,vpm2MainUnit,delayTime){
  // window.frames[2].frameElement.contentWindow.EXPO_CREATIVE_CONFIG_JSON.Core.transitions.teaser2VPM.duration = teaser2VPM;
   //window.frames[2].frameElement.contentWindow.EXPO_CREATIVE_CONFIG_JSON.Core.transitions.vpm2MainUnit.duration = vpm2MainUnit;
	window.frames[2].frameElement.contentWindow.EXPO_CREATIVE_CONFIG_JSON.Core.states.VPM.delayTime = delayTime;
   }