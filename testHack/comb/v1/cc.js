(function(W, EU, EXPO_CREATIVE) {
    "use strict";
    var utility = EU.utility,
        Controller = EU.ObserverClass.extend({

            constructor: function(CM, model, sandbox, render) {

                this.sandBox = sandbox;
                this.videoPixels = {};
                this.peel = CM.requireComponent('Peel');
                this.close = CM.requireComponent('Close');
                this.rectangleClose = CM.requireComponent('RectangClose');
                this.replay = CM.requireComponent('Replay');
                this.video = CM.requireComponent('VideoPlayer');
                this.events = EXPO_CREATIVE.require('events', sandbox);
                this.tracker = EXPO_CREATIVE.require('tracker', sandbox);
                this.playWrapper = CM.requireComponent('PlayWrapper');
                this.Messages = EXPO_CREATIVE.require('messages', sandbox);
                this.AssetsLoader = EXPO_CREATIVE.require('assetsLoader', sandbox);
                this.designerAPI = EXPO_CREATIVE.require('designerAPI', sandbox);
                this.VizuWidget = CM.requireComponent('VizuWidget');
                this.muse_assetLoaded = false;
                this.VPMFastCLick = false;

                this.deepEngagementTimmer = "";
                this.oldVideoId;


                if (this.getDeviceInfo().browserName === "ie") {
                    this.canvas = CM.requireComponent('Canvas');

                    this.canvasAction = function(value) {
                        this.canvas[value]();
                    };

                } else {
                    this.canvasAction = function(value) {

                    };
                }

                this.variableManager = {};

                this.helper = new EU.CreativeAnimationHelper(model, render);
                this.helper.addObserver(this);

                this.adWindow = window;
                this.compManager = CM;
                this.render = render;
                this.model = model;
                this.config = this.model.adConfig;
                this.dimension = this.config.teaser.width + "x" + this.config.teaser.height;
                this.teaserVideoCfg = {};
                this.teaserVideoCfg.standard = this.config.teaser[this.dimension].standard.video;
                this.model.setAdDimension(this.dimension);
                this.videoRestarted = false;
                this.currentEvent = undefined;
                this.transitionEvent = undefined;
                this.peelContainer = "";
                this.sandBox.urlConfig = this.config.urlConfig;

                utility.compose(
                    this.showComponents,
                    this.saveInitialProps,
                    this.applyTeaserState,
                    this.getPossibleExpansion,
                    this.registerForComponentEvent,
                    this.startComponentManager,
                    this.render.initializeComponent.bind(this.render),
                    this.fireTeaserLoaded,
                    this.render.setInitialTracker.bind(this.tracker),
                    this.initTracker
                ).call(this);
                this.bindRender();

                //bebouncing mainunit close callback
                this.mainunitCloseCB = utility.debounce(this.mainunitCloseCB.bind(this), 2);

            },

            initTracker: function() {
                var tracker = {};
                tracker.pixel_info = this.config.pixelInfo;
                tracker.teaser = this.config.teaser.trackers;
                tracker.fullscreen = this.config.fullscreen.trackers;
                tracker.customTrackers = this.model.adConfig.customTrackers;
                this.tracker.setProperties(tracker);
            },
            firePixel: function(pixels_obj) {
                if (pixels_obj.referrer && pixels_obj.trigger) {
                    pixels_obj.custom2 = ';referrer:' + pixels_obj.referrer + ';trigger:' + pixels_obj.trigger;
                }
                this.tracker.firePixels(pixels_obj);
            },
            fireTeaserLoaded: function() {
                var readyPixel = {
                    type: "img",
                    pixel: "ready"
                };
                this.tracker.firePixel(readyPixel);
            },
            bindRender: function() {
                var close,wrapperClose;
                if (this.rectangleClose) {
                    this.rectangleClose.add(this.events.RECTANGLECLICK.getEventName(), this.onRectangleClose.bind(this));
                    this.render.add('rectangClose_mouseover', this.onRectangleCloseHover.bind(this));
                    this.render.add('rectangClose_mouseout', this.onRectangleCloseOut.bind(this));
                    this.render.add('rectangClose_click', this.onRectangleClose.bind(this));
                }

                if (this.close) {
                    this.close.add(this.events.CIRCULARCLICK.getEventName(), this.onCircularClick.bind(this));
                    if (this.VizuWidget.isVizu) {
                        this.close.add(this.events.CIRCULARHOVER.getEventName(), this.onCircularHover.bind(this));
                    }
                }

                if (this.replay) {
                    this.replay.add(this.events.REPLAYCLICK.getEventName(), this.onReplayClick.bind(this));
                }
                // TEASER STATE
                this.render.add('mouseover.TEASER', this.onTeaserMouseOver.bind(this));
                this.render.add('mouseout.TEASER', this.onTeaserMouseOut.bind(this));
                this.render.add('click.TEASER', this.onTeaser2VPMClick.bind(this));

                // COLLAPSED TEASER state
                this.render.add('mouseover.COLLAPSED-TEASER', this.onCollapsedTeaserMouseOver.bind(this));
                this.render.add('mouseout.COLLAPSED-TEASER', this.onCollapsedTeaserMouseOut.bind(this));
                this.render.add('click.COLLAPSED-TEASER', this.onCollapsedTeaser2VPMClick.bind(this));

                this.render.add('click.VPM', this.applyMainUnit.bind(this, true));
                this.render.add('click.MAINUNIT', this.videoClickOnMainUnit.bind(this));

                close = document.getElementsByTagName('rm_close')[0];
                wrapperClose = document.getElementsByTagName('rm_wrapper_close')[0];

                //mainUnitClientLogo = document.getElementsByTagName('rm_client_logo')[0];


                close.addEventListener(this.events.CIRCULARCLICK.getEventName(), this.onCircularClickMainUnit.bind(this));
                close.addEventListener(this.events.CIRCULARHOVER.getEventName(), this.onCircularHover.bind(this));
                if (this.VizuWidget.isVizu) {
                    wrapperClose.addEventListener(this.events.CIRCULARHOVER.getEventName(), this.onCircularHover.bind(this));
                }

                this.video.addPlayListener(this.videoPlay.bind(this));
                this.video.setInitialListeners(this.handleVideoEvent.bind(this));
                this.video.add('renderComplete', function() {
                    this.render.showAd();
                }.bind(this));
                this.peelContainer = document.getElementById('peelContainer');
                this.sandBox.baseEventManager.add('muse.playlist.playlistEnd', function () {
                    if(this.designerAPI && this.designerAPI.getCallBackApi){
                        var callback = this.designerAPI.getCallBackApi()["playListEndEvent"];
                        if(callback){
                            callback.call(this.designerAPI);
                        }
                    }
                }.bind(this));
                //top = 
                  window.show  =this.showMainUnit.bind(this);
               // top = 
                    window.anim = this.onTeaserMouseOver.bind(this);


            },

            // resetVideoPixels: function () {
            //     var videos = this.config.fullscreen.trackers.videos;
            //     Object.keys(videos).forEach(function (videoConf) {
            //        Object.keys(videos[videoConf]).forEach(function (eventConf) {
            //            if(typeof videos[videoConf][eventConf] == "object") {
            //                videos[videoConf][eventConf]['isFirePixel'] = false;
            //            }
            //
            //        })
            //     });
            // },


            handleVideoEvent: function(event) {
                if (!event || !event.type) {
                    return;
                }

                var currentState = this.model.getCurrentState(),
                    stateName = event.type,
                    videoId = "",
                    custom1 = null,
                    status, pixelObj,
                    videoId = this.getCurrentVideoSourceId() || this.config.fullscreen.trackers.videos.video1.custom1;
                switch (stateName) {
                    case "play":
                        if (currentState !== this.model.CONST.AD_STATE_VPM && currentState !== this.model.CONST.AD_STATE_MAINUNIT) {
                            return;
                        }
                        if (this.oldState && (this.oldState === "pause" || this.oldState === "suspend")) {
                            status = "resume";
                        }

                        this.oldState = stateName;
                        var currentVideoId = this.getCurrentVideoSourceId();
                        if(this.oldVideoId != currentVideoId) {
                            this.oldVideoId = currentVideoId;
                            this.checkForLandingPage();
                        }
                        break;
                    case "rewind":
                        status = "rewind";
                        break;
                    case "pause":
                        var percentageComplete = Math.floor((event.target.currentTime / event.target.duration) * 100);
                        status = "paused";
                        this.oldState = stateName;
                        if (percentageComplete > 96) {
                            status = undefined;
                        }
                        break;
                    case "emptied":
                        status = "changed";
                        break;
                    case "ended":
                        status = "complete";
                        if(this.designerAPI && this.designerAPI.getCallBackApi){
                            var callback = this.designerAPI.getCallBackApi()["videoEndedEvent"];
                            if(callback){
                                callback.call(this.designerAPI,videoId,event);
                            }
                        }
                        break;
                    case "timeupdate":
                        if (currentState !== this.model.CONST.AD_STATE_VPM && currentState !== this.model.CONST.AD_STATE_MAINUNIT) {
                            return;
                        }
                        if (!this.videoRestarted && this.model.getCurrentState() === this.model.CONST.AD_STATE_TEASER) {
                            return;
                        }
                        var percentageComplete = Math.floor((event.target.currentTime / event.target.duration) * 100);
                        if (percentageComplete >= 75) {
                            status = "thirdquartile";
                        } else if (percentageComplete >= 50) {
                            status = "secondquartile";
                        } else if (percentageComplete >= 25) {
                            status = "firstquartile";
                        } else if (percentageComplete >= 0) {
                            status = "start";
                        }

                        if(this.designerAPI && this.designerAPI.getCallBackApi){
                            var callback = this.designerAPI.getCallBackApi()["videoProgressEvent"];
                            if(callback){
                                callback.call(this.designerAPI,videoId,event);
                            }
                        }

                        break;
                    case "volumechange":
                        if (currentState !== this.model.CONST.AD_STATE_VPM && currentState !== this.model.CONST.AD_STATE_MAINUNIT) {
                            return;
                        }
                        if (event.target.muted) {
                            status = "mute";
                            this.video.setMuteStatus(true);
                        } else {
                            if (this.video.getMuteStatus()) {
                                status = "unmute";
                            }
                        }
                        break;
                    case "fullscreenchange":
                    case "mozfullscreenchange":
                    case "webkitfullscreenchange":
                    case "MSFullscreenChange":
                        status = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || (document.msFullscreenElement ? true : false) ? 'fullscreen' : false;
                        if (status === "fullscreen") {
                            this.canvasAction("hide");
                        } else {
                            this.canvasAction("reConfig");
                            // this.canvasAction("show");
                        }
                        this.handleVideoFullScreen();
                        break;
                }
                if (status) {


                    pixelObj = this.config.fullscreen.trackers.videos[videoId][status] || null;
                    custom1 = this.config.fullscreen.trackers.videos[videoId][status] && 
                              (this.config.fullscreen.trackers.videos[videoId][status].custom1 ||
                        this.config.fullscreen.trackers.videos[videoId].custom1 ||
                        videoId);
                    if(pixelObj){
                        pixelObj.custom1 = custom1;
                        pixelObj.custom2 = ';vo:0';
                        this.tracker.firePixels(pixelObj);
                    }
                    // if(status === "complete" || status == "changed" ) {
                    //     //reset the pixel to be fired again
                    //     this.resetVideoPixels();
                    // }
                }
                
            },
            checkForLandingPage:function(){
                if (this.checkForVideoClickUrl()) {
                    this.video.showHandCursor();
                } else {
                    this.video.hideHandCursor();
                }
            },


            videoPlay: function() {
                this.tracker.firePixels(this.config.teaser.trackers.impression.imp);
                this.renderVideoToCanvas();
            },

            handleTransition: function(state) {
                //console.log("handleTransition  " +  state);
                switch (state) {
                    case "teaser-to-vpm":
                        //this.peel.hide();

                        if (!this.vpmStateReached) {
                            this.applyTeaser2VPMVideo();
                        }
                        break;
                    case 'teaser-to-vpm-fast':
                        this.applyVPMVideo();
                        //this.peel.hide();
                        this.replay.hide();
                        if (this.checkForRectangleClose()) {
                            this.rectangleClose.hide();
                        }
                        break;
                    case 'vpm-to-teaser':
                        clearTimeout(this.teaserVideoTimeout);
                        this.teaserVideoTimeout = "";
                        this.close.hide();
                        //this.peel.hide();
                        break;
                    case 'vpm-to-mainunit':
                        break;
                    case 'teaser-to-collapsed':
                        this.rectangleClose.hide();
                        break;
                    case 'collapsed-teaser-to-vpm':
                        this.replay.hide();
                        //this.peel.hide();
                        if (!this.vpmStateReached) {
                            this.applyTeaser2VPMVideo();
                        }
                        break;
                    case 'collapsed-teaser-to-vpm-fast':
                        this.applyVPMVideo();
                        //this.peel.hide();
                        this.replay.hide();
                        if (this.checkForRectangleClose()) {
                            this.rectangleClose.hide();
                        }
                        break;
                    case 'vpm-to-collapsed-teaser':
                        clearTimeout(this.teaserVideoTimeout);
                        this.teaserVideoTimeout = "";
                        break;
                    case 'vpm-to-teaser-fast':
                        break;
                    case 'pausedTeaser-to-pausedCollapsed':
                        this.rectangleClose.hide();
                        break;
                    case 'collapsed-teaser-to-vpm-fast':
                        break;
                    case 'MainUnit-to-collapsed-teaser':
                        break;
                    case 'MainUnit-to-teaser-fast':
                        break;
                }
            },
            fireDeepEngagement: function() {
                var pixelObj,type_CPEplus = "CPE+";
                if (this.model.getCurrentState() === this.model.CONST.AD_STATE_MAINUNIT || this.model.getCurrentState() === this.model.CONST.AD_STATE_VPM) {
                    pixelObj = this.config.fullscreen.trackers.deepEngagement.eng;
                    if (pixelObj) {
                        this.tracker.firePixels(pixelObj);
                    }
                     if (this.model.getEngagementType().toUpperCase() === type_CPEplus){
                        this.fireBillablePixels();
                     }
                }
            },
            handleChangeState: function(state) {
                var pixelObj,type_CPM = "CPM",type_CPME = "CPME";
                clearTimeout(this.teaserVideoTimeout);
                this.teaserVideoTimeout = "";
                switch (state) {
                    case this.model.CONST.AD_STATE_VPM:
                        console.log("VPM STATE REASHED ", Date.now());
                        //this.video.togglePosition('fixed');
                        var rm_video = document.getElementsByTagName('rm_video')[0];
                        rm_video.style.zIndex = 999;
                        pixelObj = this.config.fullscreen.trackers.engagement.eng;
                        if (pixelObj) {
                            this.tracker.firePixels(pixelObj);
                        }
                        pixelObj = null;
                        if ( this.model.getEngagementType().toUpperCase() === type_CPM ||this.model.getEngagementType().toUpperCase() === type_CPME ){
                            this.fireBillablePixels();
                         }
                        if (!this.VizuWidget.isVizuShown()) {
                            this.VizuWidget.add('firePixel', this.fireVizuPixel.bind(this));
                            this.VizuWidget.fireVizuPixel();
                        }
                        this.canvasAction("hide");
                        this.render.hideWrapperContainer();
                        this.video.setLoop();
                        this.video.addDataAttribute("vpm");
                        this.video.showControls(false);
                        var close = document.getElementsByTagName('rm_close')[0];
                        var wrapperClose = document.getElementsByTagName('rm_wrapper_close')[0];
                        // document.body.appendChild(close);
                        if (this.VizuWidget.isVizu) {
                            document.body.insertBefore(wrapperClose, document.body.firstChild);
                            wrapperClose.style.display = "block";

                        }

                        document.body.insertBefore(close, document.body.firstChild);

                        close.style.display = "block";
                        this.close.show();

                        if (this.checkForRectangleClose()) {
                            this.rectangleClose.hide();
                        }
                        if (this.clearTimmer) {
                            return;
                        }
                        this.vpmStateReached = true;
                        this.clearTimmer = this.applyMainUnit();
                        this.tracker.setEngagementTime();
                        this.communicateToPublisher(this.Messages.CHANGEWRAPPERDISPLAY.eventName, {
                            display: 'none'
                        });
                        this.communicateToPublisher(this.Messages.CHANGECLOSEDISPLAY.eventName, {
                            display: 'none'
                        });
                        this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                            setHigh: true
                        });
                        this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                            setHigh: true
                        });
                        pixelObj = this.config.fullscreen.trackers.deepEngagement.eng;
                        if (pixelObj) {
                            this.deepEngagementTimmer = setTimeout(this.fireDeepEngagement.bind(this), 5000);
                        }
                        pixelObj = null;

                        //**NOTE**: this is a HACK to place the circular close at the top
                        //TODO: set the top of the container from render of videoview
                        //document.querySelector('#appsnack_innerContainer_' + this.sandBox.id).style.top = '';
                        break;
                    case this.model.CONST.AD_STATE_TEASER:
                        this.canvasAction("show");
                        this.setPlayerVolume(0);
                        //this.peel.show();
                        this.video.showControls(false);
                        this.peel.entryPeelAnimation();
                        break;
                    case this.model.CONST.AD_STATE_PAUSED_TEASER:
                        this.communicateToPublisher(this.Messages.MAINUNITBACKGROUNDDIV.eventName, {
                            action: false
                        });

                        this.canvasAction("show");
                        //this.peel.show();
                        //this.peel.pause();
                        this.close.hide();
                        if (this.checkForRectangleClose()) {
                            this.rectangleClose.show();
                        }
                        this.replay.show();
                        this.pausePlayer();
                        this.tracker.resetEngagementTime();
                        this.video.showControls(false);

                        this.communicateToPublisher(this.Messages.CHANGEWRAPPERDISPLAY.eventName, {
                            display: 'none'
                        });

                        this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                            setHigh: false
                        });
                        break;
                    case this.model.CONST.AD_STATE_COLLAPSED_TEASER:
                        this.canvasAction("show");
                        this.peel.entryPeelAnimation();
                        this.setPlayerVolume(0);
                        //this.peel.show();
                        if (this.checkForRectangleClose()) {
                            this.rectangleClose.hide();
                        }
                        this.video.showControls(false);

                        this.communicateToPublisher(this.Messages.CHANGECLOSEDISPLAY.eventName, {
                            display: 'none'
                        });
                        break;
                    case this.model.CONST.AD_STATE_COLLAPSED_PAUSED_TEASER:
                        this.communicateToPublisher(this.Messages.MAINUNITBACKGROUNDDIV.eventName, {
                            action: false
                        });

                        this.canvasAction("show");
                        this.close.hide();
                        //this.peel.show();
                        //this.peel.pause();
                        this.replay.show();
                        if (this.checkForRectangleClose()) {
                            this.rectangleClose.hide();
                        }
                        this.pausePlayer();
                        this.tracker.resetEngagementTime();
                        this.video.showControls(false);


                        this.communicateToPublisher(this.Messages.CHANGEWRAPPERDISPLAY.eventName, {
                            display: 'none'
                        });

                        this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                            setHigh: false
                        });
                        break;
                }
            },

            //@override
            update: function(context, state) {
                var pixelObj, stateName;
                if (this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION || this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION_FAST) {
                    if (this.transitionEvent && utility.isArray(this.transitionEvent)) {
                        this.transitionEvent.forEach(function(val) {
                            stateName = "transition_" + this.model.getCurrentState() + "_" + val;
                            pixelObj = this.config.fullscreen.trackers.phaze[stateName.toLowerCase()];
                            if (pixelObj) {
                                this.firePixel(pixelObj);
                            }
                        }.bind(this));
                    }
                    //if(this.canvas){
                    //    this.canvas.show();
                    //}
                    this.video.showControls(false);
                    this.handleTransition(state);
                    this.transitionEvent = undefined;
                    return;
                }
                if (this.currentEvent && utility.isArray(this.currentEvent)) {
                    this.currentEvent.forEach(function(val) {
                        stateName = this.model.getCurrentState() + "_" + this.model.getPreviousState() + "_" + val;
                        pixelObj = this.config.teaser.trackers.phaze[stateName.toLowerCase()];
                        if (pixelObj) {
                            this.firePixel(pixelObj);
                        }
                    }.bind(this));
                }
                this.canvasAction("hide");
                this.handleChangeState(state);
                this.currentEvent = undefined;
                return;
            },

            getDeviceInfo: function() {
                return this.sandBox.sniffer.getDeviceInfo();
            },

            renderVideoToCanvas: function() {
                this.canvasAction("renderVideo");
                //if (this.canvas) {
                //    this.canvas.renderVideo();
                //}
            },

            showComponents: function() {
                if (this.checkForRectangleClose()) {
                    var rectangleClose = {};
                    rectangleClose = this.compManager.requireComponent('RectangClose');
                    rectangleClose.show();
                }
            },
            startComponentManager: function() {
                this.compManager.init(this.sandBox, this.model);
            },
            registerForComponentEvent: function() {

                this.sandBox.baseEventManager.add(this.Messages.SETPOSSIBLEEXPANSION.eventName, function(message) {
                    this.setPossibleExpansion(message.eventObj);

                }.bind(this));
            },
            communicateToPublisher: function(eventName, message) {
                this.sandBox.baseEventManager.fire(this.Messages.SENDTOPUBLISHER.eventName, {
                    eventName: eventName,
                    message: message
                });
            },
            setPossibleExpansion: function(dimension) {
                var vpm = {};
                this.destinationPosition = dimension.mainUnitClip;
                this.sourcePosition = dimension.possibleExpansion;

                vpm.top = dimension.mainUnitClip.top;
                //                vpm.right = dimension.mainUnitClip.right;
                //                vpm.bottom = dimension.mainUnitClip.bottom;
                if (this.model.adConfig.teaser.height > this.model.adConfig.fullscreen.height) {
                    vpm.top = 0;
                }
                vpm.left = dimension.mainUnitClip.left;
                vpm.width = this.config.fullscreen.width;
                vpm.height = this.config.fullscreen.height;
                this.model.saveDimensions({
                    'vpm': vpm
                });
                if (dimension.expansionData) {
                    this.config.expansionData = dimension.expansionData;
                }
                this.render.initializeComponent.call(this.render);
                this.saveInitialProps();
                if (this.model.getCurrentState() === this.model.CONST.AD_STATE_COLLAPSED_TEASER || this.model.getCurrentState() === this.model.CONST.AD_STATE_COLLAPSED_PAUSED_TEASER) {
                    this.video.resizePlayer(this.model.getDimensions('collapsedVideo'));
                } else {
                    this.video.resizePlayer(this.model.getDimensions('initialVideo'));
                }

                //if(this.model.getCurrentState() === this.model.CONST.AD_STATE_COLLAPSED_PAUSED_TEASER ||
                //    this.model.getCurrentState() === this.model.CONST.AD_STATE_PAUSED_TEASER){
                //    this.handleReplayClick();
                //}
            },


            setStyle: function(element, attrs) {
                for (var attr_name in attrs) {
                    element.style[attr_name] = attrs[attr_name];
                }
            },
            checkForRectangleClose: function() {
                return this.dimension === "970x250";
            },

            getPossibleExpansion: function() {
                var message = {
                    action: 'getPossibleExpansion',
                    adId: this.adId,
                    target: {
                        width: this.config.fullscreen.width,
                        height: this.config.fullscreen.height
                    }


                };
                this.communicateToPublisher(this.Messages.GETPOSSIBLEEXPANSION.eventName, message);
            },
            saveInitialProps: function() {
                this.model.saveDimensions({
                    'teaserCurrent': this.helper.mergeTweenObjects(this.model.getDimensions('initialTeaser'),
                        this.model.getDimensions('initialVideo'))
                });
                if (this.checkForRectangleClose()) {
                    var initialTeaser = this.model.getDimensions('initialTeaser'),
                        collapsedTeaser = {
                            width: initialTeaser.width,
                            height: 90,
                            left: initialTeaser.left,
                            top: initialTeaser.top,
                        };
                    try {
                        var teaserConfig = this.model.adConfig.teaser;
                        var clip = this.model.adConfig.initialPosition.clip.match(/([0-9]|\.)+/g)
                        var collapsedConfig = teaserConfig[teaserConfig.width + "x" + teaserConfig.height].collapsed.video;
                        var collapsedVideo = {
                            width: collapsedConfig.scaledWidth,
                            height: collapsedConfig.scaledHeight,
                            left: Number(this.config.initialPosition.left - this.config.expansionData.mainUnitClip.left) + collapsedConfig.x,
                            top: Number(this.config.initialPosition.top - this.config.expansionData.mainUnitClip.top) + collapsedConfig.y
                        };
                    } catch (e) {
                        // The teaser is not present
                        // go to defaults
                        var collapsedVideo = this.model.getDimensions('initialVideo');
                    }
                    this.model.saveDimensions({
                        'collapsedTeaser': collapsedTeaser
                    });
                    this.model.saveDimensions({
                        'collapsedVideo': collapsedVideo
                    });
                }
            },

            applyTeaser2VPMVideo: function() {
                if (!this.teaserVideoTimeout) {
                    this.teaserVideoTimeout = setTimeout(this.applyVPMVideo.bind(this), 2000);
                }
            },
            applyVPMVideo: function() {
                //this.soundStarted = true;
                this.setPlayerVolume(0.25); // get this from config
                if (!this.doNotRestartVideo) {
                    this.setPlayerTime(0);
                    this.videoRestarted = true;
                }
                this.resumePlayer();
            },
            applyPausedVideo: function() {
                this.pausePlayer();
            },
            pausePlayer: function() {
                CM.requireComponent('VideoPlayer').pausePlayer();
            },
            resumePlayer: function() {
                CM.requireComponent('VideoPlayer').resumePlayer();
            },
            setPlayerVolume: function(newVol) {
                CM.requireComponent('VideoPlayer').setVolume(newVol);
            },
            setPlayerTime: function(newTime) {
                CM.requireComponent('VideoPlayer').setTime(newTime);
            },

            getCurrentVideoSourceId: function() {
                return CM.requireComponent('VideoPlayer').getVideoSourceId();
            },

            applyTeaserState: function() {
                // teaserCurrent should be kept updated at all times during the
                // tween animation
                this.close.hide();
                this.canvasAction("show");
                this.model.setCurrentState(this.model.CONST.AD_STATE_TEASER);
                this.firePixel(this.config.teaser.trackers.phaze.teaser_loading_loaded);
                this.video.showControls(false);
                //this.setPlayerVolume(0);
            },



            onTeaserMouseOver: function() {
                if (this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION_FAST) {
                    return;
                }
                this.peel.exitTeaserAnimation();
                //if(this.model.getPreviousEvent() === "rectangularClose_mouseout"){
                //    return;
                //}
                this.currentEvent = ['timecomplete'];
                this.transitionEvent = ['mouseover'];
                this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION);
                this.helper.transitions.teaser2VPM.call(this.helper, false);
                this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                    setHigh: true
                });
            },
            onCollapsedTeaserMouseOver: function() {
                if (this.model.getPreviousEvent() === "rectangularClose_mouseout") {
                    return;
                }
                this.peel.exitTeaserAnimation();
                this.currentEvent = ['timecomplete'];
                this.transitionEvent = ['mouseover'];
                this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION);
                this.helper.transitions.collapsed2VPM.call(this.helper);
            },
            onRectangleClose: function() {
                this.model.setCurrentEvent("rectangularClose_" + this.events.RECTANGLECLICK.getEventName());
                if (this.checkForRectangleClose()) {
                    this.currentEvent = ['transitioncomplete'];
                    this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION_FAST);
                    if (this.model.getCurrentState() === this.model.CONST.AD_STATE_PAUSED_TEASER) {
                        this.transitionEvent = ['closead'];
                        this.helper.transitions.pausedTeaser2pausedCollapsed.call(this.helper);
                    } else {
                        this.render.showWrapperContainer();
                        this.transitionEvent = ['closead'];
                        this.helper.transitions.teaser2Collapsed.call(this.helper);
                    }
                    this.teaserCollapsed = true;
                }
            },
            onRectangleCloseHover: function(e) {
                this.model.setCurrentEvent("rectangularClose_" + this.events.RECTANGLEHOVER.getEventName());
            },
            onRectangleCloseOut: function(e) {
                this.model.setCurrentEvent("rectangularClose_" + this.events.RECTANGLEOUT.getEventName());
            },
            onReplayClick: function() {

                this.communicateToPublisher(this.Messages.IFRAMERESIZECLICK.eventName, {});

                this.model.setCurrentEvent("replay_" + this.events.REPLAYCLICK.getEventName());
                this.doNotRestartVideo = false;
                this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION);
                this.peel.hide();
                setTimeout(function() {
                    this.handleReplayClick();
                }.bind(this), 50);

            },
            handleReplayClick: function() {
                if (this.model.getCurrentState() === this.model.CONST.AD_STATE_COLLAPSED_PAUSED_TEASER) {
                    this.transitionEvent = ['click'];
                    this.helper.transitions.collapsed2VPM.call(this.helper, true);
                } else {
                    this.transitionEvent = ['click'];
                    this.helper.transitions.teaser2VPM.call(this.helper, true);
                }
                this.applyVPMVideo();
            },
            onCircularClick: function() {
                var close = document.getElementsByTagName('rm_close')[0];
                close.style.display = "none";
                this.peel.pause();
                this.model.setCurrentEvent("circular_" + this.events.CIRCULARCLICK.getEventName());

                this.currentEvent = ["closebtnclick"];
                clearTimeout(this.clearTimmer);
                this.clearTimmer = "";
                this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION);
                this.helper.transitions.VPM2TeaserFast.call(this.helper);
                this.video.removeDataAttribute('vpm');

            },
            onCircularClickMainUnit: function() {
                 this.vizuCloseWidget();
                if (this.model.getCurrentState() === this.model.CONST.AD_STATE_VPM) {
                    this.onCircularClick();
                    return;
                }
                //this.hideMuseWidget();
                var mainUnit = document.getElementById('rm-main-unit');
                var close = document.getElementsByTagName('rm_close')[0];
                this.VPMFastCLick = false;
                close.style.display = "none";
                this.close.hide();
                // mainUnit.style.opacity = 0;
                
                if (this.sandBox.baseEventManager._data('close.mainunit').handlers.length) {
                    this.sandBox.baseEventManager.fire('close.mainunit', this.mainunitCloseCB);
                } else {
                    this.mainunitCloseCB();
                }
            },

            mainunitCloseCB: function() {
                 
                var container = document.querySelector(this.sandBox.adContainerId),
                    rm_video,mainUnit = document.getElementById('rm-main-unit');
                container = container || document.body;
                mainUnit.style.opacity = 0;
                rm_video = document.getElementsByTagName('rm_video')[0];
                // mainUnit.style.display = "none";
                //this.video.togglePosition('fixed');
                container.appendChild(rm_video);
                document.querySelector('#appsnack_innerContainer_' + this.sandBox.id).style.display = 'block';
                this.peel.pause();
                // temporary fix
                this.model.setCurrentEvent("circular_" + this.events.CIRCULARCLICK.getEventName());
                this.currentEvent = ["closebtnclick"];
                this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION);
                clearTimeout(this.clearTimmer);
                this.clearTimmer = "";
                this.hideMainUnit();
                this.helper.transitions.MainUnit2TeaserFast.call(this.helper);
                //this.playWrapper.hide();
                this.video.hideHandCursor();

                this.video.removeDataAttribute('mainUnit');
                this.canvasAction("renderPosterImage");
                

            },

            vizuCloseWidget :function(){
                var wrapperClose;
                if (this.VizuWidget.isVizu) {
                    this.VizuWidget.closeWidget();
                    wrapperClose = document.getElementsByTagName('rm_wrapper_close')[0];
                    wrapperClose.style.display = 'none';
                }
            },

            onCircularHover: function(e) {

                var currentState = this.model.getCurrentState(),videoState = this.video.checkPauseStatus();

                if (currentState === this.model.CONST.AD_STATE_VPM || currentState === this.model.CONST.AD_STATE_MAINUNIT) {
                    if (this.VizuWidget.isVizu) {
                        this.VizuWidget.displayWidget();
                        //this.VizuWidget.hoverAnimation();
                        if(!videoState){
                        this.pausePlayer();
                        this.VizuWidget.add('resumeVideo', this.resumeVideo.bind(this));
                        }
                    }
                }



            },
            resumeVideo: function(e) {
                
                this.VizuWidget.remove('resumeVideo');
                this.resumePlayer();
            },
            fireVizuPixel: function(e) {
                //var image = document.createElement('img');
                var pixelUrl = this.VizuWidget.getVizuPixel(),tobj;
                //image.src = unescape(pixelUrl);
                //var directSrc = pixelUrl;
                var trckerObj={};
                trckerObj.trackers=[]
                tobj = {
                    type: 'img',
                    src : pixelUrl
                };
                trckerObj.pixelUrl = pixelUrl
                trckerObj.trackers.push(tobj);
                this.tracker.firePixels(trckerObj);
            },

            pixelHack: function(obj) {
                var pixel = obj,
                    pixelArray = [];

                for (var i = 0; i < pixel.length; i++) {
                    pixelArray[i] = pixel[i];
                }
                return pixelArray;
            },
            onVPMTOCollapsedCircularClick: function() {
                this.helper.transitions.VPM2Collapsed.call(this.helper);
            },
            /**
             * Applies the event listeners required during the transition
             * from teaser to VPM. Relevant events are click and mouseout
             *
             */

            onTeaser2VPMClick: function() {
                //var pixelObj;
                if (this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION_FAST) {
                    return;
                }
                this.peel.hide();
                // true means fast transition
                this.currentEvent = ['closebtnclick'];

                this.transitionEvent = ['click']
                this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION_FAST);
                this.helper.transitions.teaser2VPM.call(this.helper, true);
                //pixelObj = this.config.fullscreen.trackers.engagement.eng;
                //if (pixelObj) {
                //    this.tracker.firePixels(pixelObj);
                //}

            },
            onCollapsedTeaser2VPMClick: function() {
                //var pixelObj;
                if (this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION_FAST) {
                    return;
                }
                this.peel.hide();
                this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION_FAST);
                this.transitionEvent = ['click'];
                this.helper.transitions.collapsed2VPM.call(this.helper, true);
                //pixelObj = this.config.fullscreen.trackers.engagement.eng;

                //if (pixelObj) {
                //    this.tracker.firePixels(pixelObj);
                //}
            },
            onTeaserMouseOut: function() {
                if (this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION_FAST) {
                    return;
                }
                if (this.model.getPreviousEvent() === "TEASER_click") {
                    return;
                }
                this.transitionEvent = ['mouseout'];
                if (!this.vpmStateReached) {
                    this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION);
                    this.helper.transitions.VPM2Teaser.call(this.helper);
                }

                this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                    setHigh: false
                });
            },

            onCollapsedTeaserMouseOut: function() {
                this.render.hideWrapperContainer();
                if (this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION_FAST) {
                    return;
                }
                this.transitionEvent = ['mouseout'];
                //this.peel.hide();
                this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION);
                this.helper.transitions.VPM2Collapsed.call(this.helper);
            },

            videoClickOnMainUnit: function() {
                var url = this.checkForVideoClickUrl(),
                    pixelObj, videoID = this.video.getVideoSourceId();
                if (url) {

                    if (!this.videoPixels[videoID]) {
                        this.videoPixels[videoID] = utility.extend({},
                            this.model.adConfig.fullscreen.trackers.videos.trackers.click || null);
                    }
                    pixelObj = this.videoPixels[videoID];


                    if(url.toLowerCase().indexOf("replacethisurl.com") == -1){
                        if(pixelObj){
                            pixelObj.custom1 = this.config.fullscreen.trackers.videos[videoID]['custom1'] || pixelObj.custom1 || videoID;
                            this.tracker.firePixels(pixelObj);
                        }
                        this.pausePlayer();
                        window.open(url, '_blank');

                    }


                }
            },

            checkForVideoClickUrl: function() {
                var url = this.video.getVideoLandingURL();
                if (url) {
                    if (url && utility.isString(url) && url.trim() !== "") {
                        return url;
                    } else {
                        return false;
                    }
                }
            },


            museAssetLoader: function(cb) {
                if (!this.assetsloader) {
                    var assetConfig = {
                            baseUrl: this.model.getMuseLocation(),
                            query: {
                                js: 'script[type="text/xjavascript"]',
                                link: 'link[rel="xstylesheet"]',
                                img: 'img[data-expo-src]'
                            }
                        },
                        assetLoaded = function assetLoaded() {
                            $(document).ready(function() {
                                if (this.model.getCurrentState() !== this.model.CONST.AD_STATE_VPM) {
                                    return;
                                }
                                cb(true);

                            }.bind(this));

                            $('html').css({
                                height: '100%',
                                overflow: 'visible'
                            });


                        }.bind(this);

                    this.assetsloader = new this.AssetsLoader(assetConfig);
                    this.assetsloader.add('loaded', assetLoaded);
                    this.assetsloader.once('loaded', function() {
                        var e, d;

                        try {
                            e = new Event('load');
                            d = new Event('DOMContentLoaded');
                        } catch (ex) {
                            e = document.createEvent('Event');
                            e.initEvent('load', true, true);

                            d = document.createEvent('Event');
                            d.initEvent('DOMContentLoaded', true, true);
                        }

                        window.dispatchEvent(e);
                        document.dispatchEvent(d);

                    }.bind(this));

                    this.assetsloader.load();
                } else {
                    this.assetsloader.load();
                }
            },

            applyMainUnit: function(fast) {

                var rm_video = document.getElementsByTagName('rm_video')[0];
                var mainUnit = document.getElementById('rm-main-unit');
                this.VPMFastCLick = fast;
                if (this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION || this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION_FAST) {
                    return;
                }
                if (fast) {
                    clearTimeout(this.clearTimmer);
                    this.clearTimmer = "";
                }
                var assetLoaderCallback = function(assets) {
                    //TODO: find a better place or api to hide the appsnack container
                    this.muse_assetLoaded = assets;
                    console.log("Asset loaded ", Date.now());
                    if (!this.clearTimmer) {
                        transitionToMainUnit.call(this);
                    }
                }

                setTimeout(function() {
                    this.museAssetLoader(assetLoaderCallback.bind(this), fast);
                }.bind(this), 0)


                var transitionToMainUnit = function() {
                    var wrapperClose;
                    if (!fast) {
                        clearTimeout(this.clearTimmer);
                        this.clearTimmer = "";
                    }
                    var rm_video = document.getElementsByTagName('rm_video')[0],
                        pixelObj, rm_video_framework, close, fast = this.VPMFastCLick;
                    if (!this.muse_assetLoaded) {
                        //clearTimeout(this.clearTimmer);
                        return;
                    }

                    if (this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION || this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION_FAST) {
                        return;
                    }
                    if (this.model.getCurrentState() !== this.model.CONST.AD_STATE_VPM && this.model.getCurrentState() === this.model.CONST.AD_STATE_MAINUNIT) {
                        return;
                    }
                    document.querySelector('#appsnack_innerContainer_' + this.sandBox.id).style.display = 'none';
                    //this.video.resumePlayer();
                    this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION);
                    this.update(this, 'vpm-to-mainunit');
                    //this.render.resizeInnerContainer();
                    close = document.getElementsByTagName('rm_close')[0];
                    //this.close.hide();
                    close.style.display = "block";
                    if (this.VizuWidget.isVizu) {
                        wrapperClose = document.getElementsByTagName('rm_wrapper_close')[0];
                        wrapperClose.style.display = 'block';
                    }

                    if (fast) {
                        this.transitionEvent = ['click'];
                        pixelObj = this.config.fullscreen.trackers.phaze.transition_vpm_click;
                        if (pixelObj) {
                            this.firePixel(pixelObj);
                        }
                    } else {
                        this.currentEvent = ['timecomplete'];
                        //this.transitionEvent = ['timecomplete'];
                        pixelObj = this.config.fullscreen.trackers.phaze.transition_vpm_timecomplete;
                        if (pixelObj) {
                            this.firePixel(pixelObj);
                        }
                    }

                    this.communicateToPublisher(this.Messages.MAINUNITBACKGROUNDDIV.eventName, {
                        action: true
                    });
                    mainUnit.style.opacity = 1;
                    mainUnit.style.width = this.model.adConfig.fullscreen.width + "px";
                    mainUnit.style.height = this.model.adConfig.fullscreen.height + "px";
                    mainUnit.style.overflow = "hidden";
                    this.VPMFastCLick = false;
                    this.videoAnimation();


                };

                var timmer = setTimeout(transitionToMainUnit.bind(this), fast ? 0 : this.model.adConfig.Core.states[this.model.CONST.AD_STATE_VPM].delayTime);
                return timmer;

            },

            showMainUnit: function() {

                var mainUnit = document.getElementById('rm-main-unit');
                //utility.setStyle(mainUnit, this.model.getDimensions('vpm'));
                var elements = Array.prototype.slice.call(mainUnit.querySelectorAll('.rm-display-none'));
                elements.forEach(function(element) {
                    element.classList.remove('rm-display-none');
                });


                //var videoTag = mainUnit.getElementsByTagName('rm_video')[0];
                //videoTag.style.width = "79.6%";
                //videoTag.style.height = "93.3476%";
                //var newStyle = {
                //    width: "100%",
                //    height: "296px"
                //};
                ////this.render.checkForCharectorLimitMainUnit();
                //this.video.resizePlayer(newStyle);
                //this.setPercentage();
                this.model.setIntermediateState();
                this.model.setCurrentState(this.model.CONST.AD_STATE_MAINUNIT);
                this.handleVideoFullScreen();
                this.update(this, this.model.CONST.AD_STATE_MAINUNIT);
                //this.playWrapper.show();
                this.video.showControls(true);

                this.checkForLandingPage();

                this.video.addDataAttribute('mainUnit');
                //this.firePixel(this.config.fullscreen.trackers.phaze.mainunit_loaded);

                this.communicateToPublisher(this.Messages.CHANGEWRAPPERDISPLAY.eventName, {
                    display: 'none'
                });

                //this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                //    setHigh: false
                //});
                /****************************************************
                 *                                                  *
                 *          Demo Start                              *
                 *                                                  *
                 ***************************************************/
                //if (!this.assetsloader) {
                //    var assetConfig = {
                //            baseUrl: this.model.getMuseLocation(),
                //            autoload: true,
                //            query: {
                //                js: 'script[type="text/xjavascript"]',
                //                link: 'link[rel="xstylesheet"]',
                //                img: 'img[data-expo-src]'
                //            }
                //        },
                //        windowOnload = function windowOnload() {
                //            document.querySelector('rm_video').style.position = 'relative';
                //            $('html').css({
                //                height: '100%',
                //                overflow: 'visible'
                //            });
                //            $(window).trigger('load');
                //        };
                //
                //    this.assetsloader = new this.AssetsLoader(assetConfig);
                //    this.assetsloader.add('loaded', windowOnload);
                //    this.assetsloader.load();
                //}
                // this.communicateToPublisher('mainunitDemo');

                /****************************************************
                 *                                                  *
                 *          Demo End                                *
                 *                                                  *
                 ***************************************************/
            },

            handleVideoFullScreen: function() {
                // settime needed CPLATFORM-3730
                setTimeout(function() {
                    var screenType = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
                    if (!screenType && this.model.getCurrentState() === this.model.CONST.AD_STATE_MAINUNIT) {
                        this.communicateToPublisher(this.Messages.MAINUNITBACKGROUNDDIV.eventName, {
                            action: true
                        });
                    }

                }.bind(this), 500);
            },

            videoAnimation: function() {
                var tweenobject = {},
                    tweenIns, newVideoSize = {},
                    currentVideoSize, rm_video;
                rm_video = document.getElementById('rm_video_framework_ref').getBoundingClientRect();
                currentVideoSize = this.video.getSize();

                //if (!newVideoSize) {
                newVideoSize = {};
                newVideoSize.width = rm_video.width;
                newVideoSize.height = rm_video.height;
                newVideoSize.left = rm_video.left;
                newVideoSize.top = rm_video.top;

                tweenobject.source = currentVideoSize;
                tweenobject.destination = newVideoSize;
                tweenobject.duration = this.model.stateTransitionTimes.vpm2MainUnit;
                tweenobject.onUpdate = this.videoAnimationUpdate(this);
                tweenobject.onComplete = this.mainUnitVideoAnimationEnd.bind(this);
                this.helper.animationClip = false;
                tweenIns = this.helper.createTween(tweenobject);
                tweenIns.start();
                this.helper.animateClip();
            },
            videoAnimationUpdate: function(that) {
                return function() {
                    that.video.resizePlayer(this);
                };

            },


            mainUnitVideoAnimationEnd: function() {
                var rm_video_framework, rm_video = document.getElementsByTagName('rm_video')[0],
                    newStyle,videoState;
                //that.transitionToMainUnit(true);
                //this.video.togglePosition()
                videoState = this.video.checkPauseStatus()
                this.showMainUnit();
                rm_video_framework = document.getElementById('rm_video_framework_ref');
                rm_video_framework.appendChild(rm_video);
                
                 
                 if(!videoState){
                   this.video.resumePlayer()
                }
                rm_video_framework.parentNode.style.zIndex = "9999"; //to make sure that none of the widget from muse has more z-index than this
                //this.video.togglePosition();
                newStyle = {
                    //width : "100%",
                    //height : "100%",
                    top: 0,
                    left: 0
                };
                this.video.resizePlayer(newStyle);
                console.log("Main unit loaded ", Date.now());
                this.sandBox.baseEventManager.fire(this.Messages.MAINUNITLOAD.eventName, true);
                this.communicateToPublisher(this.Messages.MAINUNITLOAD.eventName, true);
            },

            hideMainUnit: function() {
                var mainUnit = document.getElementById('rm-main-unit'),
                    videoTag = document.getElementsByTagName('rm_video')[0];

                mainUnit.style.width = this.model.adConfig.fullscreen.width + "px";
                mainUnit.style.height = this.model.adConfig.fullscreen.height + "px";
                mainUnit.style.overflow = "";
                mainUnit.style.left = "0%";
                mainUnit.style.top = "0%";
                videoTag.style.width = "100%";
                videoTag.style.height = "100%";
                this.communicateToPublisher(this.Messages.MAINUNITHIDE.eventName, true);

            },
            fireBillablePixels :function(){
                var pixelObj = this.config.fullscreen.trackers.billable;
                    if (pixelObj) {
                        this.tracker.firePixels(pixelObj);
                    }
                    pixelObj = null;
            },
            setPercentage: function() {
                var vpWidth, vpHeight, elem = document.getElementById('rm-main-unit'),
                    vpLeft, vpTop;
                vpWidth = utility.getViewportwidth();
                vpHeight = utility.getViewportHeight();
                if (vpWidth < this.model.adConfig.fullscreen.width) {
                    vpLeft = this.model.adConfig.initialPosition.left - this.model.adConfig.adPositon.x;
                    elem.style.width = vpWidth + "px";
                    elem.style.left = vpLeft + "px";

                }
                if (vpHeight < this.model.adConfig.fullscreen.height) {
                    console.log("height not handled ");
                }

            }
           
        });
    EXPO_CREATIVE.Controller = EXPO_CREATIVE.Controller || Controller;


})(window, window.EU, window.EXPO_CREATIVE);
