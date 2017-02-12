(function($){
	$.fn.fifty50Slider = function(options){
		var elemPos
		var defaults = {
			dragButton: "#dividerBtn",
			dragContainer : "#sliderCont",
			innerContainer:".fiftyBanner",
			dragTooltip: "#indicator",
			warning: "#warning",
			MainUnittimer : 30000,
			timer : 500,
			sliderMode: "horizontal",
			revertPosition:false,
            videoContainer: "videoContainerName"
		}
		
		function CookieClass(name){
			this.name = name;
			this.today = new Date();
			this.today.setTime(this.today.getTime() + (365 * 24 * 60 * 60 * 1000));
			var expiry = "expires="+this.today.toUTCString();
		}
		
		/* Getter Method for Cookie Value */
		CookieClass.prototype.setCookie = function(cvalue) {
			document.cookie = CookieClass.name + "=" + cvalue + "; " + CookieClass.expiry;
		}
		
		CookieClass.prototype.getCookie = function() {
			var name = CookieClass.name + "=";
			var ca = document.cookie.split(';');
			for(var i=0; i<ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1);
				if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
			}
			return "";
		}
		/* End Cookies */
				
		return this.each(function(){
			var me = $(this);
			var settings = $.extend({}, defaults, options);
			var $That = $(settings.dragButton);
			var sMode = settings.sliderMode === "horizontal" ? "x" : "y";			
			var cookieName = me.attr('class');
			
			$(settings.innerContainer).css({
				width:me.width()
			});
			
			$(window).on("load resize", function(){
				$(settings.innerContainer).css({
                    
					width:me.width()
				});	
			});
			
			var myCookie = new CookieClass(cookieName);
			if(myCookie.getCookie() === ""){
				$(settings.dragTooltip).fadeIn();
			};
											
			$That.draggable({
				revert:settings.revertPosition,
				addClasses:false,
				axis: sMode,
				refreshPositions: true,
				containment: me,				
				drag:function(event, ui){					
					elemPos = Math.min(ui.position.left);
					$(settings.dragContainer + " li:first").width(elemPos);
                    $(settings.dragContainer + " .fiftyBanner iframe").width(485+(485 - elemPos));
					$(settings.dragContainer + " .fiftyBanner video").width(elemPos);
					countPosition = elemPos;
					document.getElementById("videoTab").removeEventListener("mouseover", chkRollover);
					
				},
				start:function(){
					if(myCookie.getCookie() === ""){
						myCookie.setCookie('1');
					}
				},
				stop:function(){
					timerCalled(elemPos);
                    $(settings.dragTooltip).fadeOut(settings.timer);
				}
			});
		});		
	}
})(jQuery);