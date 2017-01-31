/* Mobile Devices decetion */
(function($){
	$.fn.fifty50Slider = function(options){
		var finalpos;		
		var defaults = {
			dragButton: "#dividerBtn",
			dragContainer : "#sliderCont",
			innerContainer:".fiftyBanner",
			dragTooltip: "#indicator",
			timer : 1000,
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
					var elemPos = Math.min(ui.position.left);
                    finalpos = elemPos;
					$(settings.dragContainer + " li:first").width(elemPos);
                    document.getElementById("videoContainerName").width= elemPos
                    document.getElementById("imgContainerName").width= 485+(485 - elemPos)
                    // document.getElementById("imgContainerName").marginLeft= elemPos
                   // document.getElementById("test2").width= elemPos+100
                   // document.getElementById("videoContainerName").height= elemPos/3.88;
                   //document.getElementById("videoContainerName").width= elemPos + "!important";
                    //console.log("dragContainer "+elemPos)
				},
				start:function(){
					if(myCookie.getCookie() === ""){
						myCookie.setCookie('1');
					}
					setTimeout(function(){
                        timerCalled(finalpos);
						$(settings.dragTooltip).fadeOut(settings.timer);
					},settings.timer);
				}
			});
		});		
	}
})(jQuery);