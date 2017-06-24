'use-strict'
window.addEventListener('resize', _compositionWidgetResized);
window.addEventListener('load', _compositionWidgetLoad);
//alert("hi");
//window.addEventListener('deviceorientation', _compositionWidgetLoad);
//$(window).on("orientationchange",function(){
//  alert("The orientation has changed!");
//});

var totalRatioWidth;
var totalRatioHeight;
var count = 0;
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
var placePosition;

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
 var div = document.querySelector("#"+ containerId);
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

function trimCharacter(element){
      var str = element
      str = str.slice(0, -2);
      return str
}



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
  console.log("  ....assignProp loaded....");
};


function assignInitails(parentDivStack) {
  for (var i = 0; i < parentDivStack.length; i++) {
    subDivWidth[i] = new Array();
    subDivHeight[i] = new Array();
    subDivLeft[i] = new Array();
    var divID = parentDivStack[i].id;
    var div = document.querySelector("#"+ divID);
    var subDiv = div.querySelectorAll('div');
    for (var j = 0; j < subDiv.length; j++) {
      var elem = subDiv[j];
      $('#' + elem.id).attr('initailW', $('#' + elem.id).css( "width" ));
      $('#' + elem.id).attr('initailL', $('#' + elem.id).css( "left" ));
      subDivWidth[i][j] = trimCharacter($('#' + elem.id).css( "width" ));
      subDivLeft[i][j] = trimCharacter($('#' + elem.id).css( "left" ));
    }
  }
  console.log("  ....assignInitails loaded....");
}

function _compositionWidgetResized() {
  pageW = $(window).width();
  maxBreak = calMaxBreak();
  totalRatioWidth = ((pageW / maxBreak) * 100); //browser
  parentDivStack = document.querySelectorAll("div.breakpoint.active div.PamphletWidget");
  assignProp(parentDivStack);
  console.log("  ...._compositionWidgetResized loaded....");
  //console.log(totalRatioWidth+"     totalRatioWidth>>>>>>>>>>>");
};

function _compositionWidgetLoad() {
  setTimeout(function () {
    pageW = $(window).width();
    pageH = $(window).height();
    maxBreak = calMaxBreak();
    totalRatioWidth = ((pageW / maxBreak) * 100); //browser
    placePosition = document.querySelector("div.breakpoint.active div.clearfix.borderbox");
    placePosition.style.position = "relative";
    pageWInitialWidth = $(window).width();
    pageWInitialHeight = $(window).height();
    findFitWidth = FindByAttributeValue(['title'], 'fitWidth');
    parentDivStack = document.querySelectorAll("div.breakpoint.active div.PamphletWidget");
    assignInitails(parentDivStack);
  }, 1500);
  setTimeout(function () {
    assignProp(parentDivStack);
  }, 1500);
  console.log("_compositionWidgetLoad loaded");
};


/* Bugs
1: picking value from macow.
2: resize placement
3: on breakpoint resize
4: on breakpoint change reset the initails ---   prirority 1
*/