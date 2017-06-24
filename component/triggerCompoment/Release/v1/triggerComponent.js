//var externalTriggerButtonsNames = ["btn0", "btn1", "btn2"];
//var triggersNames = ["tab2", "tab3", "tab4"];
(function() {
    function triggerMouseEvent(node, eventType) {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
    }

    var findButtonDiv = function(titleName) {
        var buttonDiv = document.querySelector("div[title='" + titleName + "'" + ']');
        return buttonDiv;
    }

    var triggerTab = function(titleName) {
        var triggerDiv = document.querySelector("div[title='" + titleName + "'" + ']');
        triggerMouseEvent(triggerDiv, "mousedown");
        triggerMouseEvent(triggerDiv, "mouseup");
    }

    document.addEventListener("DOMContentLoaded", function() {
        for (var i = 0; i < externalTriggerButtonsNames.length; i++) {
            var triggerBtnNames = findButtonDiv(externalTriggerButtonsNames[i])
            triggerBtnNames.addEventListener("click", function() {
                var triggerPosition = Number(this.title.slice(-1));
                triggerTab(targetTriggersNames[triggerPosition]);
            })
        }
    });

})();