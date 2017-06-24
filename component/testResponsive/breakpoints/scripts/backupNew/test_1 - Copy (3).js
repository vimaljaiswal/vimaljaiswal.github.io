(function () {

     window.addEventListener("load", function (event) {
         var intervalSet = setInterval(function () {
             if (window.Muse.assets.checked) {
                 setMuseInput(museInput);
                 buildJson(DupliAllowedBreakPoints);
                 resizeFn()();
                 clearInterval(intervalSet)
                 console.log(window.Muse.assets.checked + "     loaded assets");
             }
         }, 0)
     });




     window.addEventListener('resize', resizeFn());

     window.addEventListener("orientationchange", function () {
         window.addEventListener('resize', resizeFn());
     });


     var setTime = 500;
     var totalRatioWidth;
     var totalRatioHeight;
     var parentDivStack;
     var maxBreak;
     var placePosition;
     var lightBoxDivStack;
     var AllowedBreakPoints;
     var firstJson;
     var bounds = [];
     var pageW = window.innerWidth;
     var museInput = [414, 768, 970];
     var DupliAllowedBreakPoints = [];
     var lowestbreakpointPoint;


     function setMuseInput(museInput) {
         for (var i = 0; i < museInput.length - 1; i++) {
             DupliAllowedBreakPoints.push(museInput[i]);
         }
         DupliAllowedBreakPoints.push(5000);
     };


     function buildJson(AllowedBreakPoints) {
         var item1 = {}
         item1["min"] = 320;
         item1["max"] = AllowedBreakPoints[0];
         item1["func"] = breakPointChanged;
         bounds.push(item1);
         for (i = 0; i < AllowedBreakPoints.length - 1; i++) {
             var item = {}
             item["min"] = AllowedBreakPoints[i] + 1;
             item["max"] = AllowedBreakPoints[i + 1];
             item["func"] = breakPointChanged;
             bounds.push(item);
         }
         jsonString = JSON.stringify(bounds);
         lowestbreakpointPoint = bounds[0].min;
     };


     function trimCharacter(element, num) {
         var str = element;
         str = str.slice(0, -(num));
         return str
     };


     function calMaxBreak() {
         var maxBreake
         var calcMaxBreak = document.querySelector("div.breakpoint.active");
         var maxWidth = calcMaxBreak.getAttribute('data-max-width');
         if (maxWidth == undefined) {
             maxBreake = museInput[museInput.length - 1];
         } else {
             maxBreake = maxWidth;
         }
         return maxBreake;
     };


     function resizeFn() {
         var lastBoundry; // cache the last boundry used
         return function () {
             var width = window.innerWidth;
             var boundry, min, max;
             for (var i = 0; i < bounds.length; i++) {
                 boundry = bounds[i];
                 min = boundry.min || Number.MIN_VALUE;
                 max = boundry.max || Number.MAX_VALUE;
                 if (width > min && width < max &&
                     lastBoundry !== boundry) {
                     lastBoundry = boundry;
                     for (j = 0; j < DupliAllowedBreakPoints.length; j++) {
                         if (DupliAllowedBreakPoints[j] == max) {
                             var index = DupliAllowedBreakPoints.indexOf(DupliAllowedBreakPoints[j]);
                             DupliAllowedBreakPoints.splice(index, 1);
                             return boundry.func.call(boundry);
                         }
                     }
                 }
             }
         }
     };


     function assignProp(parentDivStack) {
         for (var k = 0; k < parentDivStack.length; k++) {
             for (var i = 0; i < parentDivStack[k].length; i++) {
                 var childDivs = parentDivStack[k][i].querySelectorAll('div');
                 if (document.querySelector("div.breakpoint.active div[title='fitWidth']") || document.querySelector("div.LightboxContent div[title='popupContainer_expo']")) {
                     for (var j = 0; j < childDivs.length; j++) {
                         var childDivID = childDivs[j].getAttribute('id');
                         if (childDivs[j].getAttribute('class') != "clearfix grpelem shared_content") {
                             var childInitialWidth = childDivs[j].getAttribute('initailW')
                             var childInitialLeft = childDivs[j].getAttribute('initaill');
                             var newWidth = ((childInitialWidth * totalRatioWidth) / 100);
                             if (childInitialWidth != undefined) {
                                 if (childInitialWidth.slice(-1) === "%") {
                                     newWidth = ((childInitialWidth * totalRatioWidth));
                                     childDivs[j].style.width = newWidth;
                                 } else {
                                     childDivs[j].style.width = newWidth + "px";
                                 }
                             }
                             if (childInitialLeft != undefined) {
                                 if (childInitialLeft.slice(-1) === "%") {
                                     var newLeft = ((childInitialLeft * totalRatioWidth));
                                     childDivs[j].style.left = newLeft;
                                 }
                                 if (childInitialLeft == 'auto') {
                                     childDivs[j].style.left = childInitialLeft;
                                 } else {
                                     var newLeft = ((childInitialLeft * totalRatioWidth) / 100);
                                     childDivs[j].style.left = newLeft + "px";
                                 }
                             }
                         }
                     }
                 }
             }
         }
         window.removeEventListener('resize', resizeFn());
         console.log("assign out");
     };


     function assignInitails(parentDivStack) {
         for (var k = 0; k < parentDivStack.length; k++) {
             for (var i = 0; i < parentDivStack[k].length; i++) {
                 var subDiv = parentDivStack[k][i].querySelectorAll('div');
                 for (var j = 0; j < subDiv.length; j++) {
                     var elem = subDiv[j];
                     if (subDiv[j].getAttribute('class') != "clearfix grpelem shared_content") {
                         style = window.getComputedStyle(elem),
                             top = style.getPropertyValue('left');
                         var lastChar = style.getPropertyValue('left');
                         var str = style.getPropertyValue('width')
                         if (str != undefined) {
                             if (str == 'auto' || str.slice(-1) === "%") {
                                 elem.setAttribute('initailW', str);
                             } else {
                                 elem.setAttribute('initailW', trimCharacter(str, 2));
                             }
                         }
                         if (lastChar != undefined) {
                             if (lastChar == 'auto' || lastChar.slice(-1) === "%") {
                                 elem.setAttribute('initaill', lastChar);
                             } else {
                                 elem.setAttribute('initaill', trimCharacter(lastChar, 2));
                             }
                         }

                     }
                 }
             }
         }
         console.log("initails out");
     };


     function breakPointChanged() {
         _compositionWidgetLoad();
     };


     function _compositionWidgetResized() {
         pageW = window.innerWidth;
         maxBreak = calMaxBreak();
         totalRatioWidth = ((pageW / maxBreak) * 100);
         parentDivStack = document.querySelectorAll("div.breakpoint.active div.PamphletWidget");
         lightBoxDivStack = document.querySelectorAll("div.LightboxContent");
         if (pageW >= lowestbreakpointPoint) {
             assignProp([parentDivStack, lightBoxDivStack]);
         }
     };


     function _compositionWidgetLoad() {
           setTimeout(function () {
         pageW = window.innerWidth;
         maxBreak = calMaxBreak();
         totalRatioWidth = ((pageW / maxBreak) * 100); //browser
         var selectActiveDiv = document.querySelector("div.breakpoint.active");
         placePosition = selectActiveDiv.querySelector("div.clearfix.borderbox");
         parentDivStack = selectActiveDiv.querySelectorAll("div.PamphletWidget");
         lightBoxDivStack = document.querySelectorAll("div.LightboxContent");
         placePosition.style.position = "relative";
         assignInitails([parentDivStack, lightBoxDivStack]);
         assignProp([parentDivStack, lightBoxDivStack]);
            }, setTime);

     };
 })();