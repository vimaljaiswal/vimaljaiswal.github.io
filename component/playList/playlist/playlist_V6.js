var vdxResponsivePlaylistWidget = (function() {

    var root;

    function vdxResponsivePlaylistWidget() {

        this.totalVideos = 15;
        this.currentVideoID = "video1";
        this.timeoutID;
        this.EOPCallback;
        this.EOVCallback;
        this.SOVCallback;
        this.activePlaylist = false;
        this.DAPI;
        this.playListThumbSelection;
        this.vPlayListThumb_show;
        this.vPlayListThumb_hide;
        this.vPlayListStack;
        this.playListThumbSelectionBack;
        this.vPlayListStackBack;
        this.currentStackThumbs;

        root = this;
        backwardCompatibility();
    }

    function triggerMouseEvent(node, eventType) {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
    }


    function backwardCompatibility() {
         //alert("ji");
        if (document.querySelectorAll("div[title='vdxContainer_vPlayListThumb_show']").length > 0) {
            console.log("No styles implemented on playlist ....!!!!");
            root.playListThumbSelection = 'document.querySelector("div.breakpoint.active div[data-title*= ' + "'PlayList_Thumb";
            root.playListThumbSelectionBack = "'" + ']")';
            root.vPlayListThumb_show = "div[title=" + 'vdxContainer_vPlayListThumb_show' + "]";
            root.vPlayListThumb_hide = "div[title=" + 'vdxContainer_vPlayListThumb_hide' + "]";
            root.vPlayListStack = '"div.breakpoint.active div[title=' + "'vdxContainer_vPlayListStack";
            root.vPlayListStackBack = "Trigger']" + '"'
        } else {
            console.log("Styles are implemented on playlist ....!!!!");
            root.playListThumbSelection = 'document.querySelector("div.breakpoint.active div.vdxContainer_vPlayListThumb';
            root.playListThumbSelectionBack = '")';
            root.vPlayListThumb_show = "div.vdxContainer_vPlayListThumb_show";
            root.vPlayListThumb_hide = "div.vdxContainer_vPlayListThumb_hide";
            root.vPlayListStack = '"div.breakpoint.active div.vdxContainer_vPlayListStack';
            root.vPlayListStackBack = 'Trigger"';
        }
    }


    function thumbEventListner() {
        for (let i = 1; i <= root.totalVideos; i++) {
            var thumbDiv = eval(root.playListThumbSelection + i + root.playListThumbSelectionBack);
            if (thumbDiv.getAttribute('data-title').match(/[\w-]*VDXEvents={event:'click',callbacks:['PlayList_Thumb[\w-]*/g)) {
                thumbDiv.addEventListener("click", thumbClickEv, false);
            }
        }
    }

    function thumbClickEv(e) {
        thumbSelection(this);
        setTimeout(selectStack, 10);
    }

    function thumbSelection(el) {
        var tempThumb;
        for (var i = 1; i <= root.totalVideos; i++) {
            tempThumb = eval(root.playListThumbSelection + i + root.playListThumbSelectionBack);
            if (tempThumb.getAttribute('data-title').match(/[\w-]*VDXEvents={event:'click',callbacks:['PlayList_Thumb[\w-]*/g)) {
                if (tempThumb == el) {
                    root.currentVideoID = "video" + i;
                }
                tempThumb.querySelector(root.vPlayListThumb_hide).style.opacity = "1";
                tempThumb.querySelector(root.vPlayListThumb_show).style.opacity = "0";
                tempThumb.style.cursor = "pointer";
                tempThumb.style.pointerEvents = "auto";
            }
        }

        el.style.cursor = "auto";
        el.style.pointerEvents = "none";

        el.querySelector(root.vPlayListThumb_show).style.opacity = "1";
        el.querySelector(root.vPlayListThumb_hide).style.opacity = "0";

        console.log("currentVideoID = " + root.currentVideoID);
    }




    function findStack() {
        var stackLen = [];
        var num = Math.round(root.currentVideoID.split("video").join(""));
        var totalStack = document.querySelectorAll("div.breakpoint.active div[title*='vdxContainer_vPlayListStack']");
        for (var i = 0; i < totalStack.length; i++) {
            if (totalStack[i].getAttribute('class').match(/[\w-]*Container rgba-background clearfix grpelem wp-panel[\w-]*/g)) {
                stackLen.push(totalStack[i].querySelectorAll("div[data-title*='VDXEvents=']").length);
            }
        }
        var startvalue = 1;
        var endvalue = stackLen[0];

        for (var k = 1; k <= stackLen.length; k++) {
            for (var j = startvalue; j <= endvalue; j++) {
                if (num <= j) {
                    root.currentStackThumbs = k;
                    return
                }
            }
            startvalue = endvalue;
            endvalue += stackLen[k];
        }
    }



    function selectStack() {

        if (document.querySelectorAll("div[title='vdxContainer_vPlayListThumb_show']").length > 0) {
            console.log("No styles selectStack ....!!!!");
        findStack();
        var stack = document.querySelector(eval(root.vPlayListStack + root.currentStackThumbs + root.vPlayListStackBack));
        } else {
            console.log("styles selectStack ....!!!!");
        var num = Math.round(root.currentVideoID.split("video").join(""));
        var stack = document.querySelector("div.breakpoint.active div.vdxContainer_vPlayListStack"+Math.ceil(num/3)+"Trigger");
        }
        // console.log(stack + "  >>>>>>>>>stack")
        triggerMouseEvent(stack, "mousedown");
        triggerMouseEvent(stack, "mouseup");
        //thumbEventListner();
    }

    function selectThumb() {
        var num = Math.round(root.currentVideoID.split("video").join(""));
        var thumb = eval(root.playListThumbSelection + num + root.playListThumbSelectionBack);
        if (thumb.getAttribute('data-title').match(/[\w-]*VDXEvents={event:'click',callbacks:['PlayList_Thumb[\w-]*/g)) {
            thumbSelection(thumb);
        }


    }

    function triggerOrientationChange() {

        selectStack();
        selectThumb()
    }

    function handleOrientationChange() {
        clearTimeout(root.timeoutID);
        root.timeoutID = setTimeout(triggerOrientationChange, 1000);
    }


    vdxResponsivePlaylistWidget.prototype.selectVideoThumb = function(videoID) {
        root.currentVideoID = videoID;
        selectStack();
        selectThumb();

    }

    EU.EventManager.add('VideoPlayer_e_play', function(event) {

        root.currentVideoID = CM.requireComponent("VideoPlayer").getVideoSourceId();

        root.selectVideoThumb(root.currentVideoID);
        if (root.SOVCallback) {
            root.DAPI.videoID = root.currentVideoID;
            root.SOVCallback(root.DAPI);
        }        
    });

    EU.EventManager.add('VideoPlayer_e_ended', function(event) {
        if (!root.activePlaylist) {
            return;
        }
        root.currentVideoID = CM.requireComponent("VideoPlayer").getVideoSourceId();
        var cvnum = Math.round(root.currentVideoID.split("video").join(""));

        if (root.EOVCallback) {
            root.DAPI.videoID = root.currentVideoID;
            root.EOVCallback(root.DAPI);
        }

        if (cvnum % root.totalVideos > 0) {
            CM.requireComponent("VideoPlayer").setVideo(null, 'video' + (cvnum + 1), true);
        } else if (cvnum % root.totalVideos == 0) {

            if (root.EOPCallback) {
                root.EOPCallback(root.DAPI);
            }
        }



                
    });


    function hideArrowOnLoad() {
        for (var i = 1; i <= root.totalVideos; i++) {
            tempThumb = eval(root.playListThumbSelection + i + root.playListThumbSelectionBack);
            if (tempThumb.getAttribute('data-title').match(/[\w-]*VDXEvents={event:'click',callbacks:['PlayList_Thumb[\w-]*/g)) {
                if (i != 1) {
                    tempThumb.querySelector(root.vPlayListThumb_hide).style.opacity = "1";
                    tempThumb.querySelector(root.vPlayListThumb_show).style.opacity = "0";
                } else {
                    tempThumb.querySelector(root.vPlayListThumb_hide).style.opacity = "0";
                    tempThumb.querySelector(root.vPlayListThumb_show).style.opacity = "1";
                }
            }

        }
    }


    vdxResponsivePlaylistWidget.prototype.render = function(obj) {
        var dObj = EXPO_CREATIVE.require("designerAPI");
        var prop = dObj.getDesignerApiObject().vdxPlaylistProp;
        root.DAPI = dObj;
        root.totalVideos = prop.totalVideosInPlaylist;
        hideArrowOnLoad()
        root.EOPCallback = prop.onPlaylistEnd;
        root.EOVCallback = prop.onVideoEnd;
        root.SOVCallback = prop.onVideoStart;
        this.activePlaylist = true;
        thumbEventListner();

        window.addEventListener("orientationchange", handleOrientationChange);
        window.addEventListener("resize", handleOrientationChange);

    }

    return vdxResponsivePlaylistWidget;

}());




var vdxScrollEventHandlerWidget = (function() {

    var root;

    function vdxScrollEventHandlerWidget() {
        this.hideElmentsOnScroll;
        this.DAPI;
        root = this;
    }


    function hideElements() {
      if(root.hideElmentsOnScroll){
            for (var i = 0; i < root.hideElmentsOnScroll.length; i++) {
                if (root.hideElmentsOnScroll[i]) {
                    root.hideElmentsOnScroll[i].style.visibility = "hidden";
                }
            }
        }
    }

    function showElements() {
       if(root.hideElmentsOnScroll){
            for (var i = 0; i < root.hideElmentsOnScroll.length; i++) {
                if (root.hideElmentsOnScroll[i]) {
                    root.hideElmentsOnScroll[i].style.visibility = "visible";
                }
            }
        }
    }


    function onScrollStart() {
        if (root.DAPI.onScrollStart) {
            root.DAPI.onScrollStart()
        }
        root.hideElmentsOnScroll = getElementRef(root.DAPI.hideElmentsOnScroll);
        hideElements();
    }

    function onScrollEnd() {
        if (root.DAPI.onScrollStart) {
            root.DAPI.onScrollEnd()
        }
        showElements()
    }

    function getElementRef(elNameArr) {



        var elRefArr = [];
        var tempEl;
 if(elNameArr){
            for (var i = 0; i < elNameArr.length; i++) {
                tempEl = document.querySelector("div.breakpoint.active div." + elNameArr[i]);
                elRefArr[i] = tempEl
            }
   
        return elRefArr;
    }
}

    vdxScrollEventHandlerWidget.prototype.render = function() {
        var dObj = EXPO_CREATIVE.require("designerAPI").getDesignerApiObject();
        dObj.onScrollStart = onScrollStart;
        dObj.onScrollEnd = onScrollEnd;
        root.DAPI = dObj.vdxScrollEvent;

    }


    return vdxScrollEventHandlerWidget;

}());


document.addEventListener("DOMContentLoaded", function() {
    (new vdxResponsivePlaylistWidget()).render();
    (new vdxScrollEventHandlerWidget()).render();
});