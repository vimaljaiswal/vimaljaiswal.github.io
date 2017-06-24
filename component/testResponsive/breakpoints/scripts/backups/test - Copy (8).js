'use-strict'

$(window).resize(resizeFn());
$(document).ready(function () {
  $(window).trigger('resize');
  //_compositionWidgetLoad();
});
window.addEventListener('resize', _compositionWidgetResized);
window.addEventListener('load', _compositionWidgetLoad);

var setTime = 100;
var totalRatioWidth;
var totalRatioHeight;
var startFlag = false;
var arr = new Array();
var subDivWidth = new Array();
var subDivHeight = new Array();
var subDivLeft = new Array();
var pageWInitialWidth;
var pageWInitialHeight;
var parentDivStack;
var findFitWidth;
var pageW;
var pageH;
var maxBreak;
var setInitails = new Array();
var setInitails_970 = false;
var setInitails_768 = false;
var setInitails_414 = false;
var placePosition;
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
    min: 970,
    max: 2000,
    func: breakPointChanged
  }
];


function FindByAttributeValue(attribute, value, divID) {
  var subDiv = document.getElementsByTagName('div');
  for (var j = 0; j < attribute.length; j++) {
    for (var i = 0; i < subDiv.length; i++) {
      if (subDiv[i].getAttribute(attribute[j]) == value) {
        arr.push(subDiv[i]);
      }
    }
    return arr.length;
  }
};


function getCount(parent, getChildrensChildren) {
  var relevantChildren = 0;
  var children = parent.childNodes.length;
  for (var i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
};


function getDivChildren(containerId) {
  var div = document.querySelector("#" + containerId);
  if (div != null) {
    var subDiv = div.querySelectorAll('div');
    var subDivArray = new Array();
    for (var i = 0; i < subDiv.length; i++) {
      var elem = subDiv[i];
      subDivArray.push(elem);
    }
    return subDivArray;
  };
}


function trimCharacter(element) {
  var str = element
  //console.log(str)
  str = str.slice(0, -2);
  return str
}


function calMaxBreak() {
  var maxBreake
  var calcMaxBreak = document.querySelector("div.breakpoint.active");
  if ($('#' + calcMaxBreak.id).data('max-width') == undefined) {
    maxBreake = 970; // to be taken from macow

  } else {
    maxBreake = $('#' + calcMaxBreak.id).data('max-width');

  }

  return maxBreake;
}


function resizeFn() {
  var lastBoundry; // cache the last boundry used
  return function () {
    //console.log("resizeFn");
    var width = window.innerWidth;
    var boundry, min, max;
    for (var i = 0; i < bounds.length; i++) {
      boundry = bounds[i];
      min = boundry.min || Number.MIN_VALUE;
      max = boundry.max || Number.MAX_VALUE;

      if (width > min && width < max &&
        lastBoundry !== boundry) {
        setInitails.push(max);
        lastBoundry = boundry;
        return boundry.func.call(boundry);
      }
    }
  }
};


function assignProp(parentDivStack) {
  for (var i = 0; i < parentDivStack.length; i++) {
    var divLen = getCount(parentDivStack[i], true);
    var divID = parentDivStack[i].id;
    var childDivs = getDivChildren(divID);
    if (findFitWidth > 0) {
      for (var j = 0; j < childDivs.length; j++) {
        var childDivID = childDivs[j].getAttribute('id');
        var newWidth = ((subDivWidth[i][j] * totalRatioWidth) / 100);
        var newLeft = ((subDivLeft[i][j] * totalRatioWidth) / 100);
        $("#" + childDivID).css({
          "width": newWidth + "px"
        });
        $("#" + childDivID).css({
          "left": newLeft + "px"
        });
      }
    }
  }
  //console.log("  ....assignProp loaded....");
};


function assignInitails(parentDivStack) {
  for (var i = 0; i < parentDivStack.length; i++) {

    subDivWidth[i] = new Array();
    subDivHeight[i] = new Array();
    subDivLeft[i] = new Array();
    var divID = parentDivStack[i].id;
    if (divID == undefined) {
      console.log(parentDivStack.length + "  ....assignInitails loaded....");
      var divID = $("." + parentDivStack[i].className).attr('data-orig-id');
    }

    var div = document.querySelector("#" + divID);
    var subDiv = div.querySelectorAll('div');
    for (var j = 0; j < subDiv.length; j++) {
      var elem = subDiv[j];
      $('#' + elem.id).attr('initailW', $('#' + elem.id).css("width"));
      $('#' + elem.id).attr('initailL', $('#' + elem.id).css("left"));
      subDivWidth[i][j] = trimCharacter($('#' + elem.id).css("width"));
      subDivLeft[i][j] = trimCharacter($('#' + elem.id).css("left"));
    }
  }
  // console.log("  ....assignInitails loaded....");
}

function removeDuplicates(array) {

  var uniqueNames = [];
  $.each(array, function (i, el) {
    if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
  });

  return uniqueNames;
}


function breakPointChanged() {
  var chkBreakPoints = removeDuplicates(setInitails)

  for (var i = 0; i < chkBreakPoints.length; i++) {


    if (chkBreakPoints[i] == 970 && setInitails_970 == false) {
      setInitails_970 = true;
        window.removeEventListener('resize', _compositionWidgetResized);
       
          _compositionWidgetLoad();
           setTimeout(function () {
          window.addEventListener('resize', _compositionWidgetResized);
        }, setTime);
      console.log("true 970");

    }

    if (chkBreakPoints[i] == 768 && setInitails_768 == false) {
      setInitails_768 = true;
        window.removeEventListener('resize', _compositionWidgetResized);
      
          _compositionWidgetLoad();
            setTimeout(function () {
          window.addEventListener('resize', _compositionWidgetResized);
        }, setTime);
      console.log("true 768");

    }

    if (chkBreakPoints[i] == 414 && setInitails_414 == false) {
      setInitails_414 = true;
        window.removeEventListener('resize', _compositionWidgetResized);
        
          _compositionWidgetLoad();
          setTimeout(function () {
          window.addEventListener('resize', _compositionWidgetResized);
        }, setTime);
      console.log("true 414");

    }

  }
  // console.log("    ............breakpoints............   " + chkBreakPoints);
}


function _compositionWidgetResized() {
  pageW = $(window).width();
  maxBreak = calMaxBreak();
  console.log(maxBreak+ "  ....maxBreak loaded....");
  totalRatioWidth = ((pageW / maxBreak) * 100); //browser
  parentDivStack = document.querySelectorAll("div.breakpoint.active div.PamphletWidget");
  assignProp(parentDivStack);
  // console.log("  ...._compositionWidgetResized loaded....");
};


function _compositionWidgetLoad() {
 setTimeout(function () {
    pageW = $(window).width();
    pageH = $(window).height();
    maxBreak = calMaxBreak();
    totalRatioWidth = ((pageW / maxBreak) * 100); //browser
    var selectActiveDiv = document.querySelector("div.breakpoint.active");
    placePosition = selectActiveDiv.querySelector("div.clearfix.borderbox");
    parentDivStack = selectActiveDiv.querySelectorAll("div.PamphletWidget");
    placePosition.style.position = "relative";
    pageWInitialWidth = $(window).width();
    pageWInitialHeight = $(window).height();
    findFitWidth = FindByAttributeValue(['title'], 'fitWidth');
    assignInitails(parentDivStack);
    assignProp(parentDivStack);
    setInitails.push(maxBreak);
    if (maxBreak == 970) {
      setInitails_970 = true;
    }
    if (maxBreak == 768) {
      setInitails_768 = true;
    }
    if (maxBreak == 414) {
      setInitails_414 = true;
    }
    

     },500)

  //  console.log(setInitails_970 + "  <<>>>  " + setInitails_768 + "  <<>>>  " + setInitails_414);
    // window.removeEventListener('load', _compositionWidgetLoad);
 
  //console.log("_compositionWidgetLoad loaded");
};


/* Bugs
1: picking value from macow.
2: resize placement
3: on breakpoint resize
4: on breakpoint change reset the initails ---   prirority 1
5: on 414 we have blank screen -- no adunit is displayed. muse issue
*/