'use-strict'

$(window).resize(resizeFn());
$(document).ready(function () {
  $(window).trigger('resize');
  _compositionWidgetLoad();
});
window.addEventListener('resize', _compositionWidgetResized);


var setTime = 300;
var totalRatioWidth;
var totalRatioHeight;
var parentDivStack;
var pageW;
var pageH;
var maxBreak;
var placePosition;

// to be removed
var setInitails = new Array();
var setInitails_970 = false;
var setInitails_768 = false;
var setInitails_414 = false;



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
    max: 970,
    func: breakPointChanged
  },
  {
    min: 971,
    max: 2000,
    func: breakPointChanged
  }
];



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


function trimCharacter(element, num) {
  var str = element;
  str = str.slice(0, -(num));
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
    var divID = parentDivStack[i].id;
    var childDivs = getDivChildren(divID);
    if (document.querySelector("div.breakpoint.active div[title='fitWidth']")) {
      for (var j = 0; j < childDivs.length; j++) {
        var childDivID = childDivs[j].getAttribute('id');
        var childInitialWidth = $('#' + childDivID).attr('initailW');
        var childInitialLeft = $('#' + childDivID).attr('initaill');
        var newWidth = ((childInitialWidth * totalRatioWidth) / 100);
        //  console.log(childDivID);
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

  //console.log("  ....assignProp loaded....");
};


function assignInitails(parentDivStack) {
  for (var i = 0; i < parentDivStack.length; i++) {
    var divID = parentDivStack[i].id;
    var div = document.querySelector("#" + divID);
    var subDiv = div.querySelectorAll('div');
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


function removeDuplicates(array) {
  var uniqueNames = [];
  $.each(array, function (i, el) {
    if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
  });
  return uniqueNames;
}

function breakpointCalls(){
      window.removeEventListener('resize', _compositionWidgetResized);
      _compositionWidgetLoad();
      setTimeout(function () {
        window.addEventListener('resize', _compositionWidgetResized);
      }, setTime);
}


// to be made generic
function breakPointChanged() {
  var chkBreakPoints = removeDuplicates(setInitails);
 // console.log(setInitails+"  >>>>>>>>   " + setInitails_970);
  for (var i = 0; i < chkBreakPoints.length; i++) {
    if ((chkBreakPoints[i] == 971 || chkBreakPoints[i] == 970) && setInitails_970 == false) {
      setInitails_970 = true;
      breakpointCalls();
     // console.log("true 970   " + setInitails_970);
    }
    if (chkBreakPoints[i] == 768 && setInitails_768 == false) {
      setInitails_768 = true;
      breakpointCalls();
      //console.log("true 768");
    }
    if (chkBreakPoints[i] == 414 && setInitails_414 == false) {
      setInitails_414 = true;
      breakpointCalls();
     // console.log("true 414");
    }

  }

}


function _compositionWidgetResized() {
  pageW = $(window).width();
  maxBreak = calMaxBreak();
  totalRatioWidth = ((pageW / maxBreak) * 100); //browser
  parentDivStack = document.querySelectorAll("div.breakpoint.active div.PamphletWidget");
  assignProp(parentDivStack);
};

var selectActiveDiv;
function _compositionWidgetLoad() {
  setTimeout(function () {
    pageW = $(window).width();
    pageH = $(window).height();
    selectActiveDiv = document.querySelector("div.breakpoint.active");
    placePosition = selectActiveDiv.querySelector("div.clearfix.borderbox");
    parentDivStack = selectActiveDiv.querySelectorAll("div.PamphletWidget");
    maxBreak = calMaxBreak();
    totalRatioWidth = ((pageW / maxBreak) * 100); //browser
    placePosition.style.position = "relative";
    assignInitails(parentDivStack);
    assignProp(parentDivStack);
    setInitails.push(maxBreak);

// to be taken from macow
    if (maxBreak == 970) {
      setInitails_970 = true;
    }
    if (maxBreak == 768) {
      setInitails_768 = true;
    }
    if (maxBreak == 414) {
      setInitails_414 = true;
    }
  }, 500)

};


/* Bugs
1: picking value from macow.
2: 
5: on 414 we have blank screen -- no adunit is displayed. muse issue
*/