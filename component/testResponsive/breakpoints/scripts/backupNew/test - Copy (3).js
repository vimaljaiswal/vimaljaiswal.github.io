'use-strict'

$(window).resize(resizeFn());
$(document).ready(function () {
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
var bounds;
var pageW = $(window).width();
var DupliAllowedBreakPoints = [414, 768, 5000]; // read it from macow

// to be make generic
var bounds = [{
        min: 320,
        max: 414,
        func: breakPointChanged
    },
    {
        min: 415,
        max: 768,
        func: breakPointChanged
    },
    {
        min: 769,
        max: 5000,
        func: breakPointChanged
    }
];

function dataReady() {
    //code here...
    DupliAllowedBreakPoints = [414, 768, 970, 971]; // read it from macow
    firstJson = "{min: 320,max:" + DupliAllowedBreakPoints[0] + ",func: breakPointChanged}";
    bounds = [buildJson(DupliAllowedBreakPoints)];
    // console.log(bounds);
};



function buildJson(AllowedBreakPoints) {
    for (i = 0; i < AllowedBreakPoints.length - 1; i++) {
        firstJson = firstJson + ",{ min:" + (AllowedBreakPoints[i] + 1) + ",max:" + AllowedBreakPoints[i + 1] + ",func:breakPointChanged}";
    }
    return firstJson;
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
        maxBreake = 970; // to be taken from macow
    } else {
        maxBreake = $('#' + calcMaxBreak.id).data('max-width');
    }
    return maxBreake;
};


function resizeFn() {

    // AllowedBreakPoints = [414, 768, 970, 2000]; // read it from macow
    // firstJson = "{min: 320,max:" + AllowedBreakPoints[0] + ",func: breakPointChanged}";
    // bounds = [buildJson()];
    // console.log(bounds);
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
                        console.log(DupliAllowedBreakPoints + "   ..... resize");
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
                        // 
                        $("#" + childDivID).css({
                            "width": newWidth + "px"
                        });
                        if (childInitialLeft != undefined) {
                            if (childInitialLeft == 'auto' || childInitialLeft.slice(-1) === "%") {
                                $("#" + childDivID).css({
                                    "left": childInitialLeft
                                });
                            } else {
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
                var lastChar = $('#' + elem.id).css("left");
                var str = $('#' + elem.id).css("width")
                if (str != undefined) {
                    $('#' + elem.id).attr('initailW', trimCharacter(str, 2));
                }
                if (lastChar != undefined) {
                    if (lastChar == 'auto' || lastChar.slice(-1) === "%") {
                        $('#' + elem.id).attr('initaill', $('#' + elem.id).css("left"));
                    } else {
                        $('#' + elem.id).attr('initaill', trimCharacter($('#' + elem.id).css("left"), 2));
                    }
                }

            }
        }
    }
};


function breakPointChanged() {
    console.log(DupliAllowedBreakPoints + "  .... min...... ");
    window.removeEventListener('resize', _compositionWidgetResized);
    _compositionWidgetLoad();
    setTimeout(function () {
        window.addEventListener('resize', _compositionWidgetResized);
    }, setTime);
};


function _compositionWidgetResized() {
    pageW = $(window).width();
    maxBreak = calMaxBreak();
    totalRatioWidth = ((pageW / maxBreak) * 100); //browser
    parentDivStack = document.querySelectorAll("div.breakpoint.active div.PamphletWidget");
    lightBoxDivStack = document.querySelectorAll("div.LightboxContent");
    lightBoxDivStackClose = document.querySelectorAll("div.LightboxContent div.PamphletCloseButton.PamphletLightboxPart");
    lightBoxDivStackNext = document.querySelectorAll("div.LightboxContent div.PPamphletNextButton.PamphletLightboxPart");
    lightBoxDivStackPrev = document.querySelectorAll("div.LightboxContent div.PamphletPrevButton.PamphletLightboxPart");
    if (pageW >= 320) {
        assignProp([parentDivStack, lightBoxDivStack]);
    }

};

var lightBoxDivStackClose;
var lightBoxDivStackNext;
var lightBoxDivStackPrev;

function _compositionWidgetLoad() {
    setTimeout(function () {
        pageW = $(window).width();
        maxBreak = calMaxBreak();
        totalRatioWidth = ((pageW / maxBreak) * 100); //browser
        var selectActiveDiv = document.querySelector("div.breakpoint.active");
        placePosition = selectActiveDiv.querySelector("div.clearfix.borderbox");
        parentDivStack = selectActiveDiv.querySelectorAll("div.PamphletWidget");
        lightBoxDivStack = document.querySelectorAll("div.LightboxContent");
        lightBoxDivStackClose = document.querySelectorAll("div.LightboxContent div.PamphletCloseButton.PamphletLightboxPart");
        lightBoxDivStackNext = document.querySelectorAll("div.LightboxContent div.PPamphletNextButton.PamphletLightboxPart");
        lightBoxDivStackPrev = document.querySelectorAll("div.LightboxContent div.PamphletPrevButton.PamphletLightboxPart");
        placePosition.style.position = "relative";
        assignInitails([parentDivStack, lightBoxDivStack]);
        assignProp([parentDivStack, lightBoxDivStack]);

    }, setTime);
};

//

/* Bugs
1: picking value from macow.
2: lightbox
*/