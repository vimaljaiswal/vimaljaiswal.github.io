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

/*
function assignInitailsWithBreaks(parentDivStack) {

  for (var i = 0; i < parentDivStack.length; i++) {
    subDivWidth[i] = new Array();
    subDivHeight[i] = new Array();
    subDivLeft[i] = new Array();
    var divID1 = parentDivStack[i].getAttribute("data-orig-id");
    var divID = parentDivStack[i].getAttribute("id");
    // console.log(divID1);
    if (divID != null) {
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
    } else {
      var div1 = document.getElementById(divID1);
      var subDiv1 = div1.getElementsByTagName('div');
      for (var k = subDiv.length; k < (subDiv1.length + subDiv.length); k++) {
        var elem1 = subDiv1[k];
        // console.log(subDiv1[k])
        $('#' + elem1.id).attr('initailW', elem1.offsetWidth);
        $('#' + elem1.id).attr('initailH', elem1.offsetHeight);
        $('#' + elem1.id).attr('initailL', elem1.offsetLeft);

        subDivWidth[i][k] = (elem1.offsetWidth);
        subDivHeight[i][k] = (elem1.offsetHeight);
        subDivLeft[i][k] = (elem1.offsetLeft);
      }
    }





  }
}
*/

function assignInitails(parentDivStack) {
 
  for (var i = 0; i < parentDivStack.length; i++) {
    subDivWidth[i] = new Array();
    subDivHeight[i] = new Array();
    subDivLeft[i] = new Array();
    var divID = parentDivStack[i].id;
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
  console.log("  ....assignInitails loaded....");

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
  if(div != null){
  var subDiv = div.getElementsByTagName('div');
  var subDivArray = new Array();
  for (var i = 0; i < subDiv.length; i++) {
    var elem = subDiv[i];
    subDivArray.push(elem);
  }
  return subDivArray;
};
}

function assignProp(parentDivStack) {
  for (var i = 0; i < parentDivStack.length; i++) {
     
    var divLen = getCount(parentDivStack[i], true);
   
    var divID = parentDivStack[i].id;
     
    var childDivs = getDivChildren(divID);
   //console.log(parentDivStack[i]+"   .... div   "+divLen);
    if (findFitWidth > 0) {
      
      for (var j = 0; j < childDivs.length; j++) {
        var childDivID = childDivs[j].getAttribute('id');
        
        var newWid = ((subDivWidth[i][j] * totalRatioWidth) / 100);
        var newLeft = ((subDivLeft[i][j] * totalRatioWidth) / 100);
       // console.log(subDivWidth[i][j] +"      .......OLD....   "+childDivID);
        //var newHit = ((subDivHeight[i][j] * totalRatioWidth) / 100);
        $("#" + childDivID).css({
          "width": newWid + "px"
        });
        $("#" + childDivID).css({
          "left": newLeft + "px"
        });
       // console.log( newWid+   "    ..NEW.   "+childDivID);
        /*   $("#" + childDivID).css({
            "height": newHit + "px"
          });
        */
      }

    }

  }
  console.log("  ....assignProp loaded....");

};

var pageW;
var pageH;
var maxBreak;
var placePosition;

function _compositionWidgetResized() {

  pageW = $(window).width();
  maxBreak = calMaxBreak();
  totalRatioWidth = ((pageW / maxBreak) * 100); //browser
  parentDivStack = document.querySelectorAll("div.breakpoint.active div.PamphletWidget"); 
  assignProp(parentDivStack);
  console.log("  ...._compositionWidgetResized loaded....");
  //console.log(totalRatioWidth+"     totalRatioWidth>>>>>>>>>>>");
  // assignProp(parentDivStack);
  // pageW = $(window).width();
  //console.log(pageW+"   .....pageW");


/* if(pageW > 768 ){
         console.log(">>>>>768");
     assignInitails(parentDivStack);
  }
    if(pageW <= 768 &&  pageW >= 415){
console.log("<<<<<<<<<768");
    assignInitails(parentDivStack);
    setTimeout(assignProp(parentDivStack), 5000);
    // assignProp(parentDivStack);
 }

     if(pageW <= 414){
       console.log(">>>>>>>>>>>414");
    assignInitails(parentDivStack);
   // setTimeout(assignProp(parentDivStack), 1000);
    // assignProp(parentDivStack);
 }*/

};

function calMaxBreak(){
var maxBreake
  var calcMaxBreak = document.querySelector("div.breakpoint.active");
    if($('#'+calcMaxBreak.id).data('max-width') == undefined){
      maxBreake = 970; // to be taken from macow
    }else{
      maxBreake = $('#'+calcMaxBreak.id).data('max-width');
    }
    return maxBreake;
}


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
1: setting of max - width
2: second tab width issue.
3: picking value from macow.
4: console error on resize.
*/
