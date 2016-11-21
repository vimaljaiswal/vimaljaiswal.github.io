/* Mobile Devices decetion */
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    },
	IE9:function(){
		return navigator.userAgent.match(/MSIE 9.0/i);	
	},
	IE8: function(){
		return navigator.userAgent.match(/MSIE 8.0/i);			
	},
	IE:function(){
		return (isMobile.IE8() || isMobile.IE9());	
	}
};
/* End Mobile Devices decetion */

/* Device Navigation */
(function ($) {
    $.fn.toggleNav = function (options) {
        var settings = $.extend({
            container: $(this).next(),
            speed: "fast",
            toggle: "active",
            where: "#navClone"
        }, options);

        return this.each(function (event) {
            var $this = $(this);
            var s = $.extend(settings, options);
			var navClass = $this.attr('title')+'Clone';
            var elem = ($('#'+navClass).length === 0) ? $(s.container).clone().attr('id', navClass).appendTo($(s.where)) : $(s.container);
			$('#menuClone > li > a').attr('href',"#");	
			var flag = false;
            /*$this.on("click onTouch Tap", function (e) {
				if(!flag){
					$(s.where).children().slideUp(s.speed);		
					$('nav a:first-child').removeClass(s.toggle);		
					$this.addClass(s.toggle);
                	elem.slideDown(s.speed);
					flag = true;
				}else{
					$this.removeClass(s.toggle);
                	elem.slideUp(s.speed);
					flag = false;
				}				
                
            });*/
			$this.on("click onTouch Tap", function (e) {
				if(!flag){
					$(s.where).children('#menuClone').slideDown();
					
					flag = true;
				}else{
					$(s.where).children('#menuClone').slideUp();
					flag = false;
				}				
                
            });
        });
    };
	
})(jQuery);
/* End Device Navigation */

/* Anchor underline on mouseover */
function underlineHover(ele){
	if(isMobile.IE()){
		$(ele).on("mouseover mouseout",function(e){
			if(e.type === "mouseover"){				
				$("a span", this).animate({width:"100%"},{duration:500,queue:false});	
			}
			if(e.type === 'mouseout'){
				$("a span", this).animate({width:"0"},{duration:500,queue:false});
			}	
		});
	}
}



/* On Devices Orientation */
function orientationReset(event){
	setTimeout(function(){
		  if(window.innerWidth < 768 || $("#searchWrapper").attr('style')){
			  if($(".assistanceNav").hasClass('active')){
				  $(".assistanceNav").trigger('click');
			  }
			  if($(".dMenu").hasClass('active')){
				  $(".dMenu").trigger('click');
			  }
			  var childLen = $("#searchWrapper").children().length;
			  $("#searchWrapper").removeAttr('style');
			  for(var i = 0; i < childLen; i++){
				  $("#searchWrapper").children().eq(i).removeAttr('style');
			  }	
		  }
	}, 500);
}

;(function($){
	$.fn.fifty50Slider = function(options){
				
		var defaults = {
			dragButton: "#dividerBtn",
			dragContainer : "#sliderCont",
			innerContainer:".fiftyBanner",
			dragTooltip: "#indicator",
			timer : 900,
			sliderMode: "horizontal",
			revertPosition:false
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
					$(settings.dragContainer + " li:first").width(elemPos);
				},
				start:function(){
					if(myCookie.getCookie() === ""){
						myCookie.setCookie('1');
					}
					setTimeout(function(){
						$(settings.dragTooltip).fadeOut(settings.timer);
					},settings.timer);
				}
			});
		});		
	}
})(jQuery);