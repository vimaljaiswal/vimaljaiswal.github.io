(function () {
    'use-strict'
    $(window).resize(resizeFn());
    $(document).ready(function () {
        setMuseInput(museInput);
        buildJson(DupliAllowedBreakPoints);
        $(window).trigger('resize');
    });
    window.addEventListener('resize', _compositionWidgetResized);





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
var pageW = $(window).width();
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
    if ($('#' + calcMaxBreak.id).data('max-width') == undefined) {
        maxBreake = museInput[museInput.length - 1];
    } else {
        maxBreake = $('#' + calcMaxBreak.id).data('max-width');
    }
    return maxBreake;
};


function resizeFn() {
console.log("resized function called step1");
    var lastBoundry; // cache the last boundry used
    return function () {
console.log("resized function called");
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
                        var childInitialWidth = $('#' + childDivID).attr('initailW');
                        var childInitialLeft = $('#' + childDivID).attr('initaill');
                        var newWidth = ((childInitialWidth * totalRatioWidth) / 100);
                        // console.log(childInitialWidth+"   .childInitialWidth");
                         if (childInitialWidth != undefined) {
                        if (childInitialWidth.slice(-1) === "%") {
                            newWidth = ((childInitialWidth * totalRatioWidth));
                            $("#" + childDivID).css({
                                "width": newWidth
                            });
                        } else {
                            $("#" + childDivID).css({
                                "width": newWidth + "px"
                            });

                        }
                         }
                        if (childInitialLeft != undefined) {
                            if (childInitialLeft.slice(-1) === "%") {
                                 var newLeft = ((childInitialLeft * totalRatioWidth));
                                $("#" + childDivID).css({
                                    "left": newLeft
                                });
                            } 
                            
                            
                             if (childInitialLeft == 'auto') {
                                 
                                $("#" + childDivID).css({
                                    "left": childInitialLeft
                                });
                            }else {
                                var newLeft = ((childInitialLeft * totalRatioWidth) / 100);
                                $("#" + childDivID).css({
                                    "left": newLeft + "px"
                                });
                            }
                        }
                    }
                }
            }
        }
    }
};


function assignInitails(parentDivStack) {
    for (var k = 0; k < parentDivStack.length; k++) {
        for (var i = 0; i < parentDivStack[k].length; i++) {
            var subDiv = parentDivStack[k][i].querySelectorAll('div');
            for (var j = 0; j < subDiv.length; j++) {
                var elem = subDiv[j];
                if (subDiv[j].getAttribute('class') != "clearfix grpelem shared_content") {
                    var lastChar = $('#' + elem.id).css("left");
                    var str = $('#' + elem.id).css("width")

                    if (str != undefined) {
                        
                        if (str == 'auto' || str.slice(-1) === "%") {
                          // console.log(str+"   >>>>>>>>   "+document.getElementById(elem.id).offsetWidth);
                        $('#' + elem.id).attr('initailW', str);

                        }else{
                           $('#' + elem.id).attr('initailW', trimCharacter(str, 2)); 
                        }
                    }
                    if (lastChar != undefined) {
                        if (lastChar == 'auto' || lastChar.slice(-1) === "%") {
                            $('#' + elem.id).attr('initaill', lastChar);
                        } else {
                            $('#' + elem.id).attr('initaill', trimCharacter($('#' + elem.id).css("left"), 2));
                        }
                    }

                }
            }
        }
    }
};


    function breakPointChanged() {
        window.removeEventListener('resize', _compositionWidgetResized);
        _compositionWidgetLoad();
        setTimeout(function () {
            window.addEventListener('resize', _compositionWidgetResized);
        }, setTime);
    };


function _compositionWidgetResized() {
    pageW = $(window).width();
    maxBreak = calMaxBreak();
    totalRatioWidth = ((pageW / maxBreak) * 100);
    parentDivStack = document.querySelectorAll("div.breakpoint.active div.PamphletWidget");
    lightBoxDivStack = document.querySelectorAll("div.LightboxContent");
    if (pageW >= lowestbreakpointPoint) {
        assignProp([parentDivStack, lightBoxDivStack]);
    }
    console.log(lowestbreakpointPoint + "    .....resizing evt.......     " + pageW);

};


function _compositionWidgetLoad() {
    setTimeout(function () {
        pageW = $(window).width();
        maxBreak = calMaxBreak();
        totalRatioWidth = ((pageW / maxBreak) * 100); //browser
        var selectActiveDiv = document.querySelector("div.breakpoint.active");
        placePosition = selectActiveDiv.querySelector("div.clearfix.borderbox");
        parentDivStack = selectActiveDiv.querySelectorAll("div.PamphletWidget");
        lightBoxDivStack = document.querySelectorAll("div.LightboxContent");
        placePosition.style.position = "relative";
        assignInitails([parentDivStack, lightBoxDivStack]);
        assignProp([parentDivStack, lightBoxDivStack]);
        console.log(maxBreak + "    .......load.....     " + pageW);
    }, setTime);
    
};
})();
/*Bugs*/