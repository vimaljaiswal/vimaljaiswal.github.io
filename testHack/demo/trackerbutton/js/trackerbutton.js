(function(W) {

    function trackerButton(conf) {

        var elements = document.querySelectorAll('.expo_muse_trackerButton');
        elements = Array.prototype.slice.call(elements);
        var oThis = this;
        elements.every(function(item) {
            if (item.getAttribute('data-listenerattached') !== "true") {
                item["data-buttonconf"] =  conf;
                item.setAttribute('data-listenerattached',"true");
                item.addEventListener('click', function() {
                    var designerAPI = EXPO_CREATIVE && EXPO_CREATIVE.require("designerAPI");
                    var data  = item["data-buttonconf"];
                    data.callbacks && data.callbacks.forEach(function (cb) {
                        typeof cb==="function"?cb.call(oThis,data.event):designerAPI[cb]?designerAPI[cb](data.event):
                            (designerAPI.getDesignerApiObject())[cb](data.event);
                    }.bind(this));
                }.bind(this));
                return false;
            }else{
                return true;
            }
        });
    };


    trackerButton.prototype.setVideo = function (src , id) {
        CM.requireComponent("VideoPlayer").setVideo(src,id);
    };

    trackerButton.prototype.pauseVideo = function () {
        CM.requireComponent("VideoPlayer").pausePlayer();
    };

    trackerButton.prototype.resumeVideo = function () {
        CM.requireComponent("VideoPlayer").resumePlayer();
    };

    trackerButton.prototype.muteVideo = function () {
        CM.requireComponent("VideoPlayer").setMuteStatus(true);
    };

    trackerButton.prototype.unMuteVideo = function () {
        CM.requireComponent("VideoPlayer").setMuteStatus(false);
    };

    trackerButton.prototype.trackImp = function (obj) {
        debugger;
    };

    trackerButton.prototype.openUrl = function (url, newWindow) {
        if(!url) return;

        if(newWindow === true) {
            window.open(url, '_blank');
        }else{
            window.open(url);
        }

    };

    trackerButton.prototype.firePixel = function () {
        if(W.EXPO_CREATIVE){
            var tracker = EXPO_CREATIVE.require('tracker');
            if(tracker) {
                tracker.firePixel(data)
            }
        }
    };

    window.TrackerButton = trackerButton;

})(window);