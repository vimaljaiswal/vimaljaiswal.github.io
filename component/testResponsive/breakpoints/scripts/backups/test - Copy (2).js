'use-strict'
window.addEventListener('resize', _compositionWidget);
window.addEventListener('load', _compositionWidget);

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

function assignInitails(parentDivStack) {
  for (var i = 0; i < parentDivStack.length; i++) {
    subDivWidth[i] = new Array();
    subDivHeight[i] = new Array();
    subDivLeft[i] = new Array();
    var divID = parentDivStack[i].getAttribute("data-orig-id");
    if (divID == null) {
      var divID = parentDivStack[i].id;
    } else {
      var divID = parentDivStack[i].getAttribute("data-orig-id");
    }
    var div = document.getElementById(divID);
    var subDiv = div.getElementsByTagName('div');
    for (var j = 0; j < subDiv.length; j++) {
      var elem = subDiv[j];
      $('#' + elem.id).attr('initailW', elem.offsetWidth);
      $('#' + elem.id).attr('initailH', elem.offsetHeight);
      $('#' + elem.id).attr('initailL', elem.offsetLeft);
      subDivWidth[i][j] = (elem.offsetWidth);
      subDivHeight[i][j] = (elem.offsetHeight);
      subDivLeft[i][j] = (elem.offsetLeft);
    }
  }
}


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
  var div = document.getElementById(containerId);
  var subDiv = div.getElementsByTagName('div');
  var subDivArray = new Array();
  for (var i = 0; i < subDiv.length; i++) {
    var elem = subDiv[i];
    subDivArray.push(elem);
  }
  return subDivArray;
};


function assignProp(parentDivStack) {
  for (var i = 0; i < parentDivStack.length; i++) {
    var divLen = getCount(parentDivStack[i], true);
    var divID = parentDivStack[i].getAttribute("data-orig-id");
    if (divID == null) {
      var divID = parentDivStack[i].id;
    } else {
      var divID = parentDivStack[i].getAttribute("data-orig-id");
    }
    var childDivs = getDivChildren(divID);
    if (findFitWidth > 0) {
      for (var j = 0; j < childDivs.length; j++) {
        var childDivID = childDivs[j].getAttribute('id');
        var newWid = ((subDivWidth[i][j] * totalRatioWidth) / 100);
        var newLeft = ((subDivLeft[i][j] * totalRatioWidth) / 100);
        //var newHit = ((subDivHeight[i][j] * totalRatioWidth) / 100);
        $("#" + childDivID).css({
          "width": newWid + "px"
        });

        $("#" + childDivID).css({
          "left": newLeft + "px"
        });

        /*   $("#" + childDivID).css({
            "height": newHit + "px"
          });
        */
      }

    }

  }

};


function _compositionWidget() {
  var pageW = $(window).width();
  var pageH = $(window).height();
  var maxBreak = 970;
  totalRatioWidth = ((pageW / maxBreak) * 100); //browser
  document.querySelector("#page").style.position = "relative";
  if (count == 0) {
    pageWInitialWidth = $(window).width();
    pageWInitialHeight = $(window).height();
    parentDivStack = $("div[class^='PamphletWidget clearfix']");
    findFitWidth = FindByAttributeValue(['title'], 'fitWidth');
    assignInitails(parentDivStack);
    count++
  }
  assignProp(parentDivStack);
};