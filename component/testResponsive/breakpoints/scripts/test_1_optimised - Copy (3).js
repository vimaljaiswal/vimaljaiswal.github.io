(function () {

    window.addEventListener("load", function (event) {
        var intervalSet = setInterval(function () {
            if (window.Muse.assets.checked) {
                setMuseInput(museInput);
                buildJson(DupliAllowedBreakPoints);
                resizeFn()();
                clearInterval(intervalSet);
            }
        }, 0)
    });

    window.addEventListener("resize", function (event) {
        removeInitails([parentDivStack, lightBoxDivStack]); // or use setInterval
        if (count == 0) {
            setTimeout(function () {
                setMuseInput(museInput);
                buildJson(DupliAllowedBreakPoints);
                resizeFn()();
                console.log("resized");
            }, setTime);
            count = 1;
        }
    });


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


    var count = 0;
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
                //  if (document.querySelector("div.breakpoint.active div[title='fitWidth']") || document.querySelector("div.LightboxContent div[title='popupContainer_expo']")) {
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
        // }
        count = 0;
    };

    function assignInitails(parentDivStack) {
        for (var k = 0; k < parentDivStack.length; k++) {
            for (var i = 0; i < parentDivStack[k].length; i++) {
                var subDiv = parentDivStack[k][i].querySelectorAll('div');
                for (var j = 0; j < subDiv.length; j++) {
                    var elem = subDiv[j];
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

/*
any class with shared content need to be excluded from assign initials.
any item that are pinned will have "shared_content" in the class name.
item that have fixed width will have "rgba-background"  in the class name.
*/