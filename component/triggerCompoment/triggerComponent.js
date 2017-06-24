var buttonsNames = ["btn0", "btn1", "btn2"];
var triggersNames = ["tab2", "tab3", "tab4"];

function triggerMouseEvent(node, eventType) {
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent(eventType, true, true);
    node.dispatchEvent(clickEvent);
}

var gDiv = function(styleName) {
    var d = document.querySelector("div[title='" + styleName + "'" + ']');
    return d;
}

var triggerTab = function(id) {
    var el = document.querySelector("div[title='" + id + "'" + ']');
    console.log("el" + el)
    triggerMouseEvent(el, "mousedown");
    triggerMouseEvent(el, "mouseup");
}

document.addEventListener("DOMContentLoaded", function() {
    for (var i = 0; i < buttonsNames.length; i++) {
        var btnNames = gDiv(buttonsNames[i])

        btnNames.addEventListener("click", function() {
            var triggerPosition = Number(this.title.slice(-1));
            triggerTab(triggersNames[triggerPosition]);
        })
    }
});