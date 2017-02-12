  // var dragVideo
   var dragImg
   var ImgTimer;
   var trackMainUnitClosed = false;
   var countPosition = 485;

   function timerCalled(timer) {
       document.getElementById("warning").style.visibility = "visible"
       if (timer >= 485) {
           playTeaser();
       }
       else {
           callMainUnit(.001, .001, .001);
		   		    clearInterval(ImgTimer);
			clearTimeout(dragImg);

           timerImg();
           dragImg = setTimeout(function () {
			  // console.log("   set time out initiated...  ");
               document.getElementById("warning").style.visibility = "hidden";
               playTeaser();
			    clearTimeout(dragImg);
           }, 20000);
       }
   }

   function timerImg() {
       var countdownElement = document.getElementById('time');
       seconds = 0;
       second = 20;
       countdownElement.firstChild.data = second;
       ImgTimer = setInterval(function () {
           countdownElement.firstChild.data = second - 1;
           second--;
           //console.log("timerImg initiated...  " + second);
           if (second == seconds) {
               clearInterval(ImgTimer);
           }
       }, 1000);
   }

   function addEvents() {
      document.getElementById('videoTab').addEventListener('mouseover', chkRollover);
       document.getElementById('imgFrame').addEventListener('mouseover', chkRollover);
       document.getElementById('videoTab').addEventListener('mouseout', chkRollout);
       document.getElementById('imgFrame').addEventListener('mouseout', chkRollout);
       document.getElementById('videoTab').addEventListener('click', chkClick);
      document.getElementById('imgFrame').addEventListener('click', chkClick);
   }

   function chkRollover(event) {
       
       if (countPosition > 485 || countPosition == 485) {
           if (this.id == "videoTab") {
               playTeaser();
               console.log("rolloveer implemented video...");
           }
           else {}
       }
   }

   function chkRollout(event) {
       if (this.id == "videoTab") {
           document.getElementById("indicator").style.visibility = "hidden";
          // clearTimeout(dragVideo);
       }
       else {
          
       }
   }

   function chkClick(event) {
       
       if (this.id == "videoTab") {
           playTeaser();
       }
       else if (event.id == "imageTab") {}
   }

   function playTeaser() {
       document.getElementById("fiftyBan").style.visibility = "hidden";
       document.getElementById("containerVideo").style.visibility = "visible";
       window.frames[2].frameElement.contentWindow.window.anim();
   }
   window.mainUnitClosed = function () {
       console.log("reoladed the div");
       trackMainUnitClosed = true;
       displayText();
       refreshAdiframe("adLoader");
   }

   function resetTeaser() {
       if (trackMainUnitClosed == true) {
           trackMainUnitClosed = false;
			countPosition = 485;
           //callMainUnit(500,500,4400);
           $("#indicator").fadeIn(1000);
           document.getElementById("dividerBtn").style.left = 485 + "px";
           document.getElementById("videoContainerName").style.width = 485 + "px";
           document.getElementById("videoLi").style.width = 485 + "px";
           document.getElementById("imgFrame").style.width = 485 + "px";
           document.getElementById("fiftyBan").style.visibility = "visible";
           document.getElementById("containerVideo").style.visibility = "hidden";
		 document.getElementById('videoTab').addEventListener('mouseover', chkRollover);
       }
   }

   function refreshAdiframe(iFrameName) {
       document.getElementById("containerVideo").style.visibility = "hidden";
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
       document.getElementById("warning").style.visibility = "hidden"
       document.getElementById("indicator").style.visibility = "visible";
   }

   function callMainUnit(teaser2VPM, vpm2MainUnit, delayTime) {
       // window.frames[2].frameElement.contentWindow.EXPO_CREATIVE_CONFIG_JSON.Core.transitions.teaser2VPM.duration = teaser2VPM;
       //window.frames[2].frameElement.contentWindow.EXPO_CREATIVE_CONFIG_JSON.Core.transitions.vpm2MainUnit.duration = vpm2MainUnit;
       window.frames[2].frameElement.contentWindow.EXPO_CREATIVE_CONFIG_JSON.Core.states.VPM.delayTime = delayTime;
   }