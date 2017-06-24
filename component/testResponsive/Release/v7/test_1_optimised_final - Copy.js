(function () {
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
    var loadTimer;
    var resizedTimer;
    var countOrientation = 0;
    var loadTimer;
    var resizedTimer;

    window.addEventListener("load", onWindowLoad);
    window.addEventListener("orientationchange", onWindowResized);

    function onWindowLoad() {
        var intervalSet = setInterval(function () {
            if (window.Muse.assets.checked) {
                setMuseInput(museInput);
                buildJson(DupliAllowedBreakPoints);
                resizeFn()();
                clearInterval(intervalSet);
            }
        }, 0)
    }

    function onWindowResized() {
        clearTimeout(resizedTimer);
        clearTimeout(loadTimer);
        window.removeEventListener("load", onWindowLoad);
        resizedTimer = setTimeout(function () {
            bounds = [];
            DupliAllowedBreakPoints = [];
            AllowedBreakPoints = [];
            firstJson = "";
            lowestbreakpointPoint = "";
            if (countOrientation == 1) {
                removeInitails([parentDivStack, lightBoxDivStack]);
            } else {
                 removeInitails([parentDivStack]);
            }
            removeInitails([parentDivStack]);
            setMuseInput(museInput);
            buildJson(DupliAllowedBreakPoints);
            resizeFn()();
             clearTimeout(resizedTimer);
        }, setTime);
        
        console.log("onWindowResized called");
    };


    function removeInitails(parentDivStack) {
        for (var k = 0; k < parentDivStack.length; k++) {
            for (var i = 0; i < parentDivStack[k].length; i++) {
                var subDiv = parentDivStack[k][i].querySelectorAll('div');
                for (var j = 0; j < subDiv.length; j++) {
                    var elem = subDiv[j];
                    elem.style.width = "";
                    elem.style.left = "";

                }
            }
        }
    };

    function setMuseInput(museInput) {
        for (var i = 0; i < museInput.length - 1; i++) {
            DupliAllowedBreakPoints.push(museInput[i]);
        }
        DupliAllowedBreakPoints.push(5000);
        //  console.log("setMuseInput");
    };

    function buildJson(AllowedBreakPoints) {
        var item1 = {}
        item1["min"] = 320;
        item1["max"] = AllowedBreakPoints[0];
        item1["func"] = _compositionWidgetLoad;
        bounds.push(item1);
        for (i = 0; i < AllowedBreakPoints.length - 1; i++) {
            var item = {}
            item["min"] = AllowedBreakPoints[i] + 1;
            item["max"] = AllowedBreakPoints[i + 1];
            item["func"] = _compositionWidgetLoad;
            bounds.push(item);
        }
        jsonString = JSON.stringify(bounds);
        lowestbreakpointPoint = bounds[0].min;
        //  console.log("buildJson");
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
        //  console.log("resizeFn");
    };


    function assignProp(parentDivStack) {
        for (var k = 0; k < parentDivStack.length; k++) {
            for (var i = 0; i < parentDivStack[k].length; i++) {
                var childDivs = parentDivStack[k][i].querySelectorAll('div');
                for (var j = 0; j < childDivs.length; j++) {
                    var childInitialWidth = childDivs[j].getAttribute('initailW')
                    var childInitialLeft = childDivs[j].getAttribute('initaill');
                    if (childInitialWidth != undefined) {
                        if (childInitialWidth.slice(-1) === "%") {
                            var newWidth = (parseFloat(childInitialWidth, 10) * totalRatioWidth) + "%";
                        } else {
                            var newWidth = ((parseFloat(childInitialWidth, 10) * totalRatioWidth) / 100) + "px";
                        }
                        childDivs[j].style.width = newWidth;
                    }
                    if (childDivs[j].getAttribute('class').match(/[\w-]*PamphletCloseButton PamphletLightboxPart popup_element[\w-]*/g) || childDivs[j].getAttribute('class').match(/[\w-]*Thumb popup_element[\w-]*/g) || childDivs[j].getAttribute('class').match(/[\w-]*PamphletNextButton[\w-]*/g)) {
                        if (childInitialLeft != undefined) {
                            if (childInitialLeft.slice(-1) === "%") {
                                var newLeft = (parseFloat(childInitialLeft, 10) * totalRatioWidth);
                                childDivs[j].style.left = newLeft + "%";
                            }
                            if (childInitialLeft == 'auto') {
                                childDivs[j].style.left = childInitialLeft;
                            } else {
                                var newLeft = ((parseFloat(childInitialLeft, 10) * totalRatioWidth) / 100);
                                childDivs[j].style.left = newLeft + "px";
                            }
                        }
                    }
                }
            }
        }
    
          console.log("assignProp");
    };


    function assignInitails(parentDivStack) {
        for (var k = 0; k < parentDivStack.length; k++) {
            for (var i = 0; i < parentDivStack[k].length; i++) {
                var subDiv = parentDivStack[k][i].querySelectorAll('div');
                for (var j = 0; j < subDiv.length; j++) {
                    var elem = subDiv[j];
                    if (!subDiv[j].getAttribute('class').match(/[\w-]*shared_content[\w-]*/g)) {
                        style = window.getComputedStyle(elem);
                        var styleLeft = style.getPropertyValue('left');
                        var styleWidth = style.getPropertyValue('width');
                        if (styleWidth != undefined) {
                            elem.setAttribute('initailW', styleWidth);
                        }
                        if (styleLeft != undefined) {
                            elem.setAttribute('initaill', styleLeft);
                        }
                    }
                }
            }
        }
        // console.log("assignInitails");
    };


    function _compositionWidgetLoad() {
        clearTimeout(resizedTimer);
        clearTimeout(loadTimer);
        loadTimer = setTimeout(function () {
            pageW = window.innerWidth;
            maxBreak = calMaxBreak();
            totalRatioWidth = ((pageW / maxBreak) * 100); //browser
            var selectActiveDiv = document.querySelector("div.breakpoint.active");
            placePosition = selectActiveDiv.querySelector("div.clearfix.borderbox");
            parentDivStack = selectActiveDiv.querySelectorAll("div.PamphletWidget");
            lightBoxDivStack = document.querySelectorAll("div.LightboxContent");
            placePosition.style.position = "relative";
            if (countOrientation < 2) {
                assignInitails([parentDivStack, lightBoxDivStack]);
                assignProp([parentDivStack, lightBoxDivStack]);
            } else {
                assignInitails([parentDivStack]);
                assignProp([parentDivStack]);
            }
            countOrientation++
               
        clearTimeout(loadTimer);
        }, setTime);
        
    };
    // console.log("_compositionWidgetLoad");
})();

/*
close,next button position in lightbox on 2nd orientation change. 
*/