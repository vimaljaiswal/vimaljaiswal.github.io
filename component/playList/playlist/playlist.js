var vdxResponsivePlaylistWidget = (function () {  
 
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

        root = this;
        
    }

    function triggerMouseEvent (node, eventType) {
            var clickEvent = document.createEvent ('MouseEvents');
            clickEvent.initEvent (eventType, true, true);
            node.dispatchEvent (clickEvent);
        } 


    function thumbEventListner(){
        for(let i=1;i<=root.totalVideos;i++){
             document.querySelector("div.breakpoint.active div[data-title*='PlayList_Thumb"+i+"']").addEventListener("click",thumbClickEv,false)   
        } 
    }

    function thumbClickEv(e){
      thumbSelection(this);
      setTimeout(selectStack,10); 
    }

    function thumbSelection(el){
        var tempThumb;
        for(var i=1;i<=root.totalVideos;i++){
            tempThumb =  document.querySelector("div.breakpoint.active div[data-title*='PlayList_Thumb"+i+"']");
            if(tempThumb == el){
                root.currentVideoID = "video"+i;
            }
           
           tempThumb.querySelector("div[title='vdxContainer_vPlayListThumb_hide']").style.opacity = "1";
           tempThumb.querySelector("div[title='vdxContainer_vPlayListThumb_show']").style.opacity = "0";
           tempThumb.style.cursor = "pointer";
           tempThumb.style.pointerEvents = "auto";
           
        } 

        el.style.cursor = "auto";
        el.style.pointerEvents = "none";

        el.querySelector("div[title='vdxContainer_vPlayListThumb_show']").style.opacity = "1";
        el.querySelector("div[title='vdxContainer_vPlayListThumb_hide']").style.opacity = "0";
        
        console.log("currentVideoID = "+root.currentVideoID);
    }

    function selectStack(){
        var num = Math.round(root.currentVideoID.split("video").join(""));
        var stack = document.querySelector("div.breakpoint.active div.vdxContainer_vPlayListStack"+Math.ceil(num/3)+"Trigger");
        triggerMouseEvent(stack,"mousedown");
        triggerMouseEvent(stack,"mouseup");
       
       //thumbEventListner();
    }

    function selectThumb(){
        var num = Math.round(root.currentVideoID.split("video").join(""));
        var thumb = document.querySelector("div.breakpoint.active div[data-title*='PlayList_Thumb"+num+"']");
        thumbSelection(thumb);
       
    }

    function triggerOrientationChange(){
        
         selectStack();
         selectThumb() 
    }

    function handleOrientationChange(){
      clearTimeout(root.timeoutID);
      root.timeoutID = setTimeout(triggerOrientationChange,1000);
    }


    vdxResponsivePlaylistWidget.prototype.selectVideoThumb = function(videoID){
        root.currentVideoID = videoID;
        selectStack();
        selectThumb();
       
    }

    EU.EventManager.add('VideoPlayer_e_play', function(event){
       
        root.currentVideoID = CM.requireComponent("VideoPlayer").getVideoSourceId();
        
        root.selectVideoThumb(root.currentVideoID);
        if(root.SOVCallback){
                root.DAPI.videoID = root.currentVideoID;
                root.SOVCallback(root.DAPI);
            }
        });

    EU.EventManager.add('VideoPlayer_e_ended', function(event){
        if(!root.activePlaylist){return;}
        root.currentVideoID = CM.requireComponent("VideoPlayer").getVideoSourceId();
        var cvnum = Math.round(root.currentVideoID.split("video").join(""));

        if(root.EOVCallback){
                root.DAPI.videoID = root.currentVideoID;
                root.EOVCallback(root.DAPI);
            }

        if(cvnum%root.totalVideos>0){
            CM.requireComponent("VideoPlayer").setVideo(null,'video'+(cvnum+1), true);
        }else if(cvnum%root.totalVideos==0){
            
            if(root.EOPCallback){
                root.EOPCallback(root.DAPI);
            }
        }
        
        
        
        });


    function hideArrowOnLoad(){
        for(var i=1;i<=root.totalVideos;i++){
            tempThumb =  document.querySelector("div.breakpoint.active div[data-title*='PlayList_Thumb"+i+"']");
            if(i!=1){
                tempThumb.querySelector("div[title='vdxContainer_vPlayListThumb_hide']").style.opacity = "1";
                tempThumb.querySelector("div[title='vdxContainer_vPlayListThumb_show']").style.opacity = "0";
            }
            else{
                tempThumb.querySelector("div[title='vdxContainer_vPlayListThumb_hide']").style.opacity = "0";
                tempThumb.querySelector("div[title='vdxContainer_vPlayListThumb_show']").style.opacity = "1";
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
       
        window.addEventListener("orientationchange",handleOrientationChange);
        window.addEventListener("resize",handleOrientationChange);
      
    }
    
    return vdxResponsivePlaylistWidget;

}());




var vdxScrollEventHandlerWidget = (function () {  
 
    var root;

    function vdxScrollEventHandlerWidget() {
        this.hideElmentsOnScroll;
        this.DAPI;
        root = this;
    }

    
    function hideElements(){
         if(root.hideElmentsOnScroll){
        for(var i=0; i<root.hideElmentsOnScroll.length; i++){
           if(root.hideElmentsOnScroll[i]){
            root.hideElmentsOnScroll[i].style.visibility = "hidden";
           }
            }  
            }      
    }

    function showElements(){
         if(root.hideElmentsOnScroll){
        for(var i=0; i<root.hideElmentsOnScroll.length; i++){
            if(root.hideElmentsOnScroll[i]){
            root.hideElmentsOnScroll[i].style.visibility = "visible";
           }
            }   
    }
}


    function onScrollStart(){
        if(root.DAPI.onScrollStart){root.DAPI.onScrollStart()}
        root.hideElmentsOnScroll = getElementRef(root.DAPI.hideElmentsOnScroll);
        hideElements();
    }

    function onScrollEnd(){
        if(root.DAPI.onScrollStart){root.DAPI.onScrollEnd()}
        showElements()
    }

    function getElementRef(elNameArr){

        var elRefArr = [];
        var tempEl;
 if(elNameArr){
        for(var i=0; i<elNameArr.length; i++){
            tempEl = document.querySelector("div.breakpoint.active div."+elNameArr[i]);
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


document.addEventListener("DOMContentLoaded", function () {
    (new vdxResponsivePlaylistWidget()).render();
    (new vdxScrollEventHandlerWidget()).render();
     });
