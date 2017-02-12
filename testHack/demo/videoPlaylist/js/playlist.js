window.addEventListener('load', function() {

	var config = playListConfig;

	var mainContainerPlaylist = document.getElementsByClassName("mainContainerPlaylist")[0];
	var playListCont = document.getElementsByClassName("VideoPlayListContainer")[0];
	mainContainerPlaylist.appendChild(playListCont);


	var leftArrow = playListCont.getElementsByClassName('PlayListLeftArrow')[0];
	var rightArrow = playListCont.getElementsByClassName('PlayListRightArrow')[0];
	var thumbnail = playListCont.getElementsByClassName('PlayListThumbnail')[0];
	var thumbnailCont = playListCont.getElementsByClassName('PlayListThumbContainer')[0];
	var currentVideoPlaying = parseInt(config.active_thumbnail);
	var thumbnails = playListCont.getElementsByClassName('PlayListThumbnail');
	var lastThumbnailNumber = config.thumbnail.count - 1;
	var firstThumbnailNumber = 0;
	var thumbnailGap = config.thumbnail.gap ? parseInt(config.thumbnail.gap.split('px')[0]) : 20;
	var currentTransform = 0;
	var remainingTransform = 0;
	var animQueue = [];
	var totaltransform = 0;
	var pauseCalled = false;
	var animPlaying = false;
	var intialTransform = window.getComputedStyle(thumbnail)["transform"];
	var defaultVideo = parseInt(config.active_thumbnail);
	var isVertical = config.vertical ? config.vertical : false;
	var thumbnailDimension;
	var displacementHackVal = 0;

	var thumbnailDisplayWidth = mainContainerPlaylist.offsetWidth - leftArrow.offsetWidth - rightArrow.offsetWidth;

	function renderPlayList () {
		if (isVertical) {
			thumbnailDimension = thumbnail.offsetHeight;
			displacementHackVal = parseInt(window.getComputedStyle(thumbnail).left.split('px')[0]) - (Math.floor((thumbnail.offsetWidth/2) + parseInt(window.getComputedStyle(thumbnail).left.split('px')[0]) - (thumbnail.offsetHeight/2)));
			console.log("displacementHackVal : " + displacementHackVal );
		} else {
			thumbnailDimension = thumbnail.offsetWidth;
		}
		if (!displayArrows()) {
			leftArrow.style.display = "none";
			rightArrow.style.display = "none";
		} else {
			//hack for composition
			var rightArrowLeftPos = mainContainerPlaylist.offsetWidth - rightArrow.offsetWidth;
			if (parseInt(window.getComputedStyle(rightArrow).left.split('px')[0]) > rightArrowLeftPos) {

				rightArrow.style.left = rightArrowLeftPos + 'px';
			}
		}
		thumbnails[config.active_thumbnail - 1].getElementsByClassName("playIcon")[0].classList.add('activePlaylist');
		removeExtraThumbnails();
		addListeners();
		if (!config.circular) {
			isLeftMovePossible();
			isRightMovePossible();
		}
	}

	function addListeners () {
		leftArrow.addEventListener('click', leftArrowClicked);
		rightArrow.addEventListener('click', rightArrowClicked);
		thumbnailCont.addEventListener('click', thumbnailContClicked);
		EU.EventManager.add('close.mainunit', function(callback){
			CM.requireComponent("VideoPlayer").setVideo(null,'video1', true);
			currentVideoPlaying = defaultVideo;
			var activeThumbnail = thumbnailCont.getElementsByClassName('activePlaylist')[0];
			activeThumbnail.classList.remove('activePlaylist');
			thumbnails[defaultVideo - 1].getElementsByClassName("playIcon")[0].classList.add('activePlaylist');
			if (!isThumbnailInView(thumbnails[currentVideoPlaying - 1])) {
				moveThumbnailIntoView(thumbnails[currentVideoPlaying - 1]);
			}
			callback();
		});
		EU.EventManager.add('VideoPlayer_e_ended', function(type,event){
			if (config.circular || currentVideoPlaying < config.thumbnail.count) {
				thumbnails[currentVideoPlaying - 1].getElementsByClassName("playIcon")[0].classList.remove('activePlaylist');
				currentVideoPlaying = (currentVideoPlaying%config.thumbnail.count) + 1;
				CM.requireComponent("VideoPlayer").setVideo(null,'video' + (currentVideoPlaying));
				if (!isThumbnailInView(thumbnails[currentVideoPlaying - 1])) {
					moveThumbnailIntoView(thumbnails[currentVideoPlaying - 1]);
				}
				thumbnails[currentVideoPlaying - 1].getElementsByClassName("playIcon")[0].classList.add('activePlaylist');
			} else if (currentVideoPlaying >= config.thumbnail.count) {
				window.switchTab(1);
			}
		});

		EU.EventManager.add('VideoPlayer_e_play', function(type ,event) {
			var videoSourceID = parseInt(CM.requireComponent("VideoPlayer").getVideoSourceId().replace(/[A-Za-z$-]/g, ""));
			if (currentVideoPlaying) {
				thumbnails[currentVideoPlaying - 1].getElementsByClassName("playIcon")[0].classList.remove('activePlaylist');
				currentVideoPlaying = videoSourceID
				if (!isThumbnailInView(thumbnails[currentVideoPlaying - 1])) {
					moveThumbnailIntoView(thumbnails[currentVideoPlaying - 1]);
				}
				thumbnails[currentVideoPlaying - 1].getElementsByClassName("playIcon")[0].classList.add('activePlaylist');
			}
		}); 
	}

	function thumbnailContClicked(event) {
		var source = event.target;
			
		while(!source.className.match("PlayListThumbnail")) {
			if (source.className.match("PlayListThumbContainer")) {
				source = "";
				break;
			}
			source = source.parentNode;
		}
		if (!source || source.getElementsByClassName("activePlaylist")[0]) {
			return;
		}
		
		if (source) {
			source.getElementsByClassName("playIcon")[0].classList.add('activePlaylist');
			for (var i = 0; i < config.thumbnail.count ; i++) {
				if (thumbnails[i] !== source) {
					thumbnails[i].getElementsByClassName("playIcon")[0].classList.remove('activePlaylist');
				} else {
					CM.requireComponent("VideoPlayer").setVideo(null,'video' + (i + 1)); 
					currentVideoPlaying = i + 1;
				}
			}
		}
		var pixel_data = {
            "custom1": "VideoThumb" + currentVideoPlaying,
            "multi": false,
            "trackers": [{
                "pixel": "IntLive",
                 "type": 'img'
            }]
        }
        if(EXPO_CREATIVE) {
        	var tracker = EXPO_CREATIVE.require("tracker");
        	if (tracker) {
        		tracker.firePixels(pixel_data);
        	}
        }
	}

	function rightArrowClicked (event) {
		if(animPlaying) return;
		remainingTransform = totaltransform - currentTransform;
			
		var queueLength = animQueue.length;
		for (var i =0 ; i < queueLength ; i++) {
			animQueue[i].pause();
		}	
		for (var i =0 ; i < queueLength ; i++) {
			animQueue.shift();
		}	
		if (isRightMovePossible() || config.circular) {
			function animUpdate(anim) {
				if (!config.circular) {
					isLeftMovePossible();
				}
				if (isRightMovePossible() || config.circular) {
					currentTransform = getTranslateX(anim.animatables[0].target.style.transform);
					if (config.circular && (currentTransform + parseFloat(window.getComputedStyle(anim.animatables[firstThumbnailNumber].target).left.split('px')[0]) + thumbnailDimension < 0)) {
						finalLeft = parseFloat(window.getComputedStyle(thumbnails[lastThumbnailNumber]).left.split('px')[0]) + thumbnailDimension + thumbnailGap;
						anim.animatables[firstThumbnailNumber].target.style.left = finalLeft + 'px';
						lastThumbnailNumber = firstThumbnailNumber;
						firstThumbnailNumber = (++firstThumbnailNumber)%config.thumbnail.count;
					}
				} 
				else {
					animPlaying = false;
					anime.remove(thumbnails);
					remainingTransform = 0;
					totaltransform = currentTransform;
				}
			}

			function onComplete() {
				animPlaying = false;
			}

			var anim = anime({
			    targets: thumbnails,
			    translateX: currentTransform - parseInt(config.displacement) + remainingTransform,
			    duration: config.transition_time,
			    delay: function(el, i) {
			        return i * 1;
			    },
			    easing: config.ease + 'Quad',
			    update : animUpdate,
			    complete : onComplete,
			    initialTransform : intialTransform

			});
			animPlaying = true;
			animQueue.push(anim);
			totaltransform = anim.settings.translateX;
		}
	}

	function leftArrowClicked(event) {
		if(animPlaying) return;
		remainingTransform = totaltransform - currentTransform;
			
		var queueLength = animQueue.length;
		for (var i =0 ; i < queueLength ; i++) {
			animQueue[i].pause();
		}	
		for (var i =0 ; i < queueLength ; i++) {
			animQueue.shift();
		}	

		if (isLeftMovePossible() || config.circular) {
			function animUpdate(anim) {
				if (!config.circular) {
					isRightMovePossible();
				}
				if (isLeftMovePossible() || config.circular) {
					currentTransform = getTranslateX(anim.animatables[0].target.style.transform);

						if (config.circular && (currentTransform + parseFloat(window.getComputedStyle(anim.animatables[lastThumbnailNumber].target).left.split('px')[0]) > mainContainerPlaylist.offsetWidth)) {
							finalLeft = parseFloat(window.getComputedStyle(thumbnails[firstThumbnailNumber]).left.split('px')[0]) - thumbnailDimension - thumbnailGap;
							anim.animatables[lastThumbnailNumber].target.style.left = finalLeft + 'px';
							firstThumbnailNumber = lastThumbnailNumber;
							lastThumbnailNumber = (firstThumbnailNumber -1) < 0? config.thumbnail.count -1 :  firstThumbnailNumber -1;
							
						}
					} 
					else {
						animPlaying = false;
						anime.remove(thumbnails);
						emainingTransform = 0;
						totaltransform = currentTransform
					}
				}

			function onComplete() {
				animPlaying = false;
			}

		   	var anim = anime({
			    targets: thumbnails,
			    translateX: currentTransform + parseInt(config.displacement) + remainingTransform,
			    duration: config.transition_time,
			    delay: function(el, i) {
			    	return i * 1;
			    },
			    easing: config.ease + 'Quad',
			    update : animUpdate,
			    complete : onComplete,
			    initialTransform : intialTransform
			});
			animPlaying = true;
		   	animQueue.push(anim);
		   	totaltransform = anim.settings.translateX;
		}
	}

	function displayArrows () {
		var thumbnails = playListCont.getElementsByClassName('PlayListThumbnail');
		var no_of_thumbnails = config.thumbnail.count;
		var thumbnail = thumbnails[0];
		if (mainContainerPlaylist.offsetWidth < ((thumbnailDimension + thumbnailGap) * no_of_thumbnails)) {
			return true;
		} else {
			return false;
		}
	}

	function removeExtraThumbnails() {
		var thumbnails = playListCont.getElementsByClassName('PlayListThumbnail');
		for (var i = thumbnails.length - 1; i >= config.thumbnail.count; i--) {
			thumbnails[i].parentElement.removeChild(thumbnails[i]);
		}
	}

	function isThumbnailInView(thumbnailParam) {
		if (!displayArrows()) {
			return true;
		}
		var posThumnail = currentTransform + parseFloat(window.getComputedStyle(thumbnailParam).left.split('px')[0]);
		var posRightArrow = parseFloat(window.getComputedStyle(rightArrow).left.split('px')[0]); //mainContainerPlaylist.offsetWidth - leftArrow.offsetWidth;
		if ((rightArrow && (posThumnail + thumbnailDimension > posRightArrow + displacementHackVal)) ||
		(leftArrow && posThumnail - thumbnailDimension < 0)) {
			return false;
		}
		return true;
	}

	function moveThumbnailIntoView(thumbnailParam) {
		if (!displayArrows()) {
			return;
		}
		var leftDisp = displacementFromLeft(thumbnailParam);
		var rightDisp = displacementFromRight(thumbnailParam);
		var displacemnt;

		if (Math.abs(leftDisp) <= Math.abs(rightDisp)) {
			displacement = leftDisp;
		} else {
			displacement = -rightDisp;
		}

		function onUpdate() { //Can write just onComplete here instead of onUpdate
			currentTransform = getTranslateX(anim.animatables[0].target.style.transform);
		}

		function onComplete() {
			isRightMovePossible();
			isLeftMovePossible();
		}

		var anim = anime({
		    targets: thumbnails,
		    translateX: currentTransform + displacement,
		    duration: config.transition_time,
		    delay: function(el, i) {
		    	return i * 1;
		    },
		    easing: config.ease + 'Sine',
		    update : onUpdate,
		    complete : onComplete,
		    initialTransform : intialTransform
		});
		totaltransform = anim.settings.translateX;
	}

	function displacementFromLeft(thumbnailParam) {
		var disp = currentTransform + parseInt(window.getComputedStyle(thumbnailParam).left.split('px')[0]);
		return (leftArrow.offsetWidth - disp + displacementHackVal);
	}

	function displacementFromRight(thumbnailParam) {
		var disp = currentTransform + parseInt(window.getComputedStyle(thumbnailParam).left.split('px')[0]) - rightArrow.offsetWidth - thumbnailDisplayWidth + thumbnailDimension;
		return disp - (displacementHackVal/2);
	}

	function getTranslateX(transform) {
		var transXRegex = /\.*translateX\((.*)px\)/i;
		var xTrans = transXRegex.exec(transform)[1];
		return parseInt(xTrans);
	}

	function isRightMovePossible() {
		if (Math.abs(currentTransform) +  thumbnailDisplayWidth < ((config.thumbnail.count) * (thumbnailDimension + thumbnailGap)) - thumbnailGap) {
			if (!config.circular && (!rightArrow.getAttribute("enabled") || rightArrow.getAttribute("enabled") == "false")) {
				enableArrowButton(rightArrow);
			}
			return true;
		} else {
			if (!config.circular && (!rightArrow.getAttribute("enabled") || rightArrow.getAttribute("enabled") == "true")) {
				disableArrowButton(rightArrow);
			}
			return false;
		}
	}

	function isLeftMovePossible() {
		if (currentTransform < -3) {
			if (!config.circular && (!leftArrow.getAttribute("enabled") || leftArrow.getAttribute("enabled") == "false")) {
				enableArrowButton(leftArrow);
			}
			return true;
		} else {
			if (!config.circular && (!leftArrow.getAttribute("enabled") || leftArrow.getAttribute("enabled") == "true")) {
				disableArrowButton(leftArrow);
			}
			return false;
		}
	}

	function enableArrowButton(button) {
		button.setAttribute("enabled", true);
		button.style.opacity = "1";
		button.addEventListener('click', button);
	}

	function disableArrowButton(button) {
		button.setAttribute("enabled", false);
		if (isVertical) {
		   button.style.opacity = ".8";
		} else {
		   button.style.opacity = ".3";
		}
		button.removeEventListener('click', button);
	}

	renderPlayList();

}, false)


