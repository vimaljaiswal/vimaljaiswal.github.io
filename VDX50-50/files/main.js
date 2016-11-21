(function($){

    function detectTouchDevices() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $(".primaryNavWrapper #navClone #menuClone > li > a").on("click touchstart", function(e) {
				//e.preventDefault();				
							
			});
        }
    }

    /* Elite Client List */
    function eliteAccordian(eleName){
        $.each(eleName, function(index, element){
            $(element).find("h3").on("click", function(e){
                e.preventDefault();
                $(element).find("h3").removeClass('active')
                $(element).find('.list-details').stop(true).slideUp();
                $(this).addClass('active')
                $(this).next().stop(true).slideDown();
            });
        });
    }
    /* End Elite Client List */

    $(function(){

        //$( "#datepicker" ).datepicker();

        /* Search Component code */
        $("#searchWrapper input[type='text']").on("focus blur", function(e){
            var _parent = $(this).parent();
            if(e.type === "focus"){
                _parent.find("label").hide();
            }
            if(e.type === "blur"){
                if($(this).val() === ''){
                    _parent.find("label").show();
                }
            }
        });
        $(window).on('load resize', function(){
            $('#block-system-main-menu > .content > ul > li').each(function(index, element) {
                $(element).find('div').eq(0).width($('.primaryNavWrapper .row').width());
            });
        });
        /* End Search Component Code */

        /* hover animated underline */
        underlineHover("nav ul > li");
        /* End hover animated underline */

        detectTouchDevices();

        /*  This Code is for device only */
        if(isMobile.any()){
            $(".dMenu").toggleNav();
            $(".assistanceNav").toggleNav();

            /*$('#menuClone li').each(function(index, element) {
                $(element).on('click',function(e){
                    //e.preventDefault();
					alert();
                    $('#menuClone li div').slideUp();
                    $(this).find('div:first').slideDown();
                });
            });*/
			// $('#menuClone > li .assistanceNav').click(function(){
			// 	if($(this).next('.headerWrapper').css('display') == 'none')
			// 	{
			// 		$('.assistanceNav').next('.headerWrapper').slideUp();
			// 		$(this).next('.headerWrapper').slideDown()
			// 	}
			// 	else
			// 	{
			// 		$(this).next('.headerWrapper').slideUp()
			// 	}
				
			// 	});

            /* Expandable Search Component */
            $(".searchIcon").on("click",function(){
                if($(".assistanceNav").hasClass('active')){
                    $(".assistanceNav").trigger('click');
                }
                if($(".dMenu").hasClass('active')){
                    $(".dMenu").trigger('click');
                }
                var $parent = $(this).parent();
                var $that = $(this);
                //var cWidth = ($(".container").width()/16);
                if($(".searchForm", $parent).css('display') == "none"){
                    $parent.animate({
                        //width:cWidth+"em
                        
                        width:"100%"
                    },{
                        duration:500,
                        queue:false,
                        complete:function(){
                            $that.fadeOut(function(){
                                $(".searchForm", $parent).fadeIn();
                            });
                        }
                    });
                }
            });
            $("#closeBtn").on('click', function(){
                $(".searchForm").fadeOut(function(){
                    $(".searchIcon").fadeIn(function(){
                        $('#searchWrapper').animate({
                            width:"3.125em"
                        },{
                            duration:500,
                            queue:false,
                            complete:function(){

                            }
                        });
                    });
                });
            });

            /* onorientationChange Event  */
            var orientationchange = (window.deviceorientation) ? "resize" : "orientationchange";
            window.addEventListener(orientationchange, orientationReset);

            /* This code is implement just because, getting issue in iOS phone  */
            $('#searchWrapper input[type="text"]')
                .on('focus', function (e) {
                    $('.primaryNavWrapper').css('position', 'absolute');
                })
                .on('blur', function (e) {
                    $('.primaryNavWrapper').css('position', 'fixed');
                    //force page redraw to fix incorrectly positioned fixed elements
                    setTimeout( function() {
                        window.scrollTo( $.mobile.window.scrollLeft(), $.mobile.window.scrollTop() );
                    }, 10 );
                });
            /* End This code is implement just because, getting issue in iOS phone  */

        }
        /*  end this Code here */

        /* Auto Height */
        //if(!isMobile.any()){
        DLBI.on.height(".autoHeight");
        //}
        /* End Auto Height */

        /* Sticky Navigation */
        DLBI.on.scroll('.primaryNavWrapper', 'scroll', 77);
        DLBI.on.tabButtonWidth(".prodcutDetailTabs #DetailTabsBtn");
        /* End Sticky Navigation */

        $(".cubic").refineSlide();
        $(".homeBanner .bxslider").bxSlider();
        $(".waterHeater .bxslider").bxSlider({
  mode: 'fade',
  captions: true
});


        /*Product DetailPage Sliders*/
        $(".productSection .product-Slider .bxslider").thumbBxslider({
            nextHandle :'.product-Slider .tumbView .nxt',
            prevHandle :'.product-Slider .tumbView .prev',
            isChild:true,
            parentImgHandle:'.product-Slider .mainImg'

        });

        /*Color Panel Sliders*/
        $(".panelSlider .productColorPanels").thumbBxslider({
                nextHandle :'.panelSlider .nxt',
                prevHandle :'.panelSlider  .prev',
                slideWidth : 51,
                minSlides: 4,
                maxSlides: 4
        }); 



        /* Accoridon */
        //eliteAccordian("#elite-client-list li");
        $("#elite-client-list li h3").each(function(index, element) {
            var pos = $("#elite-client-list li h3").eq(0).offset().top;
            $(element).on("click", function(e){
                e.preventDefault();
                $("html,body").animate({scrollTop:(pos - 70)},{duration:500,queue:false});
                $("#elite-client-list li h3").removeClass("active");
                $("#elite-client-list li .list-details").slideUp();
                $(this).addClass("active");
                $(this).next(".list-details").slideDown();
            });
        });


        $(".tabBlock").tabPlugIn();


        popupoverlays();

        /* Device Accordion */
        if($(".prodcutDetailTabs").is(":hidden")){
            $(".detailTabSection h2").each(function(index, element) {
                var pos = $(".detailTabSection h2").eq(0).offset().top;
                $(element).on("click", function(e){
                    e.preventDefault();
                    $("html,body").animate({scrollTop:(pos - 70)},{duration:500,queue:false});
                    $(".detailTabSection h2").removeClass("active");
                    $(".detailTabSection h2").next().slideUp();
                    $(this).addClass("active");
                    $(this).next().slideDown();
                });
            });
        }
        /* End Device Accordion */


        /* Sticky Tab */
        $('.prodcutDetailTabs').ddscrollSpy({ //initialize first demo
            highlightclass: 'active',
            scrolltopoffset: -250
        });

        $('.prodcutDetailTabs').sticky({
            topSpacing:60,
            wrapperClassName: 'tabFixed',
            center: true,
            getWidthFrom: $(".prodcutDetailTabs").parent(),
            responsiveWidth: true
        });
        /* Sticky Tab */

        /* Fifty-50 Slider */
        $(".fifty50Banner").fifty50Slider();

        /* ToolTip */
        $('.dvEmi .icnHelp').on('click', function(e) {
            e.preventDefault();
            $('.dvEmi .dvPopup').show();
        });

        $('.dvEmi .dvPopup .close').on('click', function(e) {
            e.preventDefault();
            $('.dvEmi .dvPopup').hide();
        });

        /* Global Auto Height */
        var h = 0;
        $('.row .column > div').each(function() {
            var height = $(this).height();
            if(h < height) {
                h = height;
            }
        });
        $('.row .column > div').height(h);

        /* Compare Product on checkbox selection */
        $($(".prodCompare input[type='checkbox']")).change(function() {
            if($(this).is(":checked")) {
                $('.comparePopup').show();
            } else {
                $('.comparePopup').hide();
            }
        });

        /* Range Slider */
        rangeValue();

        /* Custom Radio */
        $("input[type=radio]").on('change',function(){
            var group = "input[name="+$(this).attr('name')+"]";
            var $label = $(this).next();
            if($(this).is(":checked")){
                $(group).next().removeClass('radioActive');
                $label.addClass('radioActive');
            }else{
                $label.removeClass('radioActive');
            }
        });


        // Color based Image Select
        $(".productColorPanels").on('click','.productColorControls label',function(){
            $(this).closest('.productColorPanels').find('label.active').removeClass('active')
            $(this).addClass('active');
            var color = $(this).attr('for');
            if(color !== undefined)
            {
                var img = $(".thumbBxslider ul").find('img[data-color='+color+']');
                if(img !==undefined){
                    if(img.length >0)
                    {
                        img.trigger('click');
                    }
                }
            }


        })

        /* Custom CheckBox */
        $("input[type=checkbox]").on('change',function(){
            //var group = "input[name="+$(this).attr('name')+"]";
            var $label = $(this).next();
            if($(this).is(":checked")){
                //$(group).next().removeClass('checkActive');
                $label.addClass('checkActive');
            }else{
                $label.removeClass('checkActive');
            }
        });
        
        if ( $(".rangeDiv .views-widget-filter-field_wh_type_tid input[type=checkbox]").length ) {
          $(".rangeDiv .views-widget-filter-field_wh_type_tid input[type=checkbox]").on('change',function(){
            if($(this).is(":checked")){
              $(this).parent().addClass('highlight');
            }else{
              $(this).parent().removeClass('highlight');
            }
          });
        }

        if ( $(".rangeDiv .views-widget-filter-field_controls_tid input[type=checkbox]").length ) {
          $(".rangeDiv .views-widget-filter-field_controls_tid input[type=checkbox]").on('change',function(){
              if($(this).is(":checked")){
                $(this).parent().addClass('highlight');
              }else{
                $(this).parent().removeClass('highlight');
              }
          });
        }

        if ( $(".rangeDiv .views-widget-filter-field_select_term_tid input[type=checkbox]").length ) {
          $(".rangeDiv .views-widget-filter-field_select_term_tid input[type=checkbox]").on('change',function(){
              if($(this).is(":checked")){
                $(this).parent().addClass('highlight');
              }else{
                $(this).parent().removeClass('highlight');
              }
          });
        }
        
        $( document ).ajaxComplete(function() {
          if ( $(".rangeDiv .views-widget-filter-field_wh_type_tid input[type=checkbox]").length ) {
            $(".rangeDiv .views-widget-filter-field_wh_type_tid input[type=checkbox]").each(function() {
              if($(this).is(":checked")){
                $(this).parent().addClass('highlight');
              }else{
                $(this).parent().removeClass('highlight');
              }
            });
          }

          if ( $(".rangeDiv .views-widget-filter-field_controls_tid input[type=checkbox]").length ) {
            $(".rangeDiv .views-widget-filter-field_controls_tid input[type=checkbox]").each(function() {
              if($(this).is(":checked")){
                $(this).parent().addClass('highlight');
              }else{
                $(this).parent().removeClass('highlight');
              }
            });
          }

          if ( $(".rangeDiv .views-widget-filter-field_select_term_tid input[type=checkbox]").length ) {
            $(".rangeDiv .views-widget-filter-field_select_term_tid input[type=checkbox]").each(function() {
              if($(this).is(":checked")){
                $(this).parent().addClass('highlight');
              }else{
                $(this).parent().removeClass('highlight');
              }
            });
          }
        });

        if ( $(".productReview .form-item-terms-checkbox input[type=checkbox]").length ) {
          $(".productReview .form-item-terms-checkbox input[type=checkbox]").on('change',function(){
              if($(this).is(":checked")){
                $(".productReview .btnGroup input.checkout-continue").removeAttr('disabled');
              }else{
                $(".productReview .btnGroup input.checkout-continue").attr('disabled','disabled');
              }
          });
        }

    });/*Document Ready ends here*/


    var bxConfig = {
        mode: 'horizontal',
        adaptiveHeight: true,
        responsive: true,
        preloadImages: 'all',
        auto: true,
        autoHover: true
    }


    var DLBI = {
        on:{
            height:	function(element){
                var arr = [];
                var len = $(element).length;
                $(window).on("load resize", function(){
                    if($(window).width() > 479){
                        for(var i = 0; i < len ; i++){
                            arr[i] = $(element).eq(i).find("img").height();
                        }
                        arr.sort(function(a, b) {
                            return a - b;
                        });
                        $(element).height(arr[arr.length - 1]);
                    }
                });
            },

            scroll:function(element,method,pos){
                var _pos = pos || 77;
                if(arguments.length < 2){
                    throw new Error("ERROR: function agrument length should not be less then 2.");
                }
                $(window).scroll(function(e){
                    if($(this).scrollTop() > _pos){
                        $(element).addClass(method);
                    }else{
                        $(element).removeClass(method);
                    }
                });

            },
            tabButtonWidth:function(element){
                var _this = $(element);
                var _parent = _this.parent();
                var _li = _this.children("li");
                var _len = _li.length;
                $(window).on("load resize", function(){
                    var _ulWidth = Number(100 * parseInt(_this.width()) / parseInt(_parent.width()));
                    var _singalWidth = Number(_ulWidth/_len).toFixed(2)+"%";
                    _li.width(_singalWidth);
                });
            }
        }

    };
    /* Flexslider Function with function parameter */
    function sliderBanner(elemClass) {
        jQuery(elemClass).flexslider({
            animation: "slide",
            start: function(slider){
                jQuery('body').removeClass('loading');
            }
        });
        jQuery(".cubic").refineSlide();
    }

    /* Anchor underline on mouseover */
    function underlineHover(ele){
        if(isMobile.IE()){
            jQuery(ele).on("mouseover mouseout",function(e){
                if(e.type === "mouseover"){
                    jQuery("a span", this).animate({width:"100%"},{duration:500,queue:false});
                }
                if(e.type === 'mouseout'){
                    jQuery("a span", this).animate({width:"0"},{duration:500,queue:false});
                }
            });
        }
    }

    /* On Devices Orientation */
    function orientationReset(event){
        setTimeout(function(){
            if(window.innerWidth < 768 ){
                if(jQuery("#searchWrapper").attr('style')){
                    if(jQuery(".assistanceNav").hasClass('active')){
                        jQuery(".assistanceNav").trigger('click');
                    }
                    if(jQuery(".dMenu").hasClass('active')){
                        jQuery(".dMenu").trigger('click');
                    }
                    var childLen = jQuery("#searchWrapper").children().length;
                    jQuery("#searchWrapper").removeAttr('style');
                    for(var i = 0; i < childLen; i++){
                        jQuery("#searchWrapper").children().eq(i).removeAttr('style');
                    }
                }

            }
        }, 500);
    }

    /*Custom Thumb Plugin Starts*/

    $.fn.thumbBxslider = function(options){
        var defaults ={
            controls:true,
            slideWidth: 70,
            minSlides: 3,
            maxSlides: 3,
            slideMargin:8,
            pager:false,
            infiniteLoop:false,
            hideControlOnEnd:true,
            isChild:false,
            parentImgHandle: '.mainImg'

        }
        var settings = $.extend( {}, defaults, options );

        return this.each(function() {
            var objThis = $(this);
            objThis.parent().addClass('thumbBxslider');
            settings.onSlideAfter = function($slideElement, oldIndex, newIndex){

                var current = newIndex +1;
                var total = 2//Math.ceil($slideElement.getSlideCount()/settings.minSlides);

                $(settings.nextHandle).removeClass('disable');
                $(settings.prevHandle).removeClass('disable');

                if (current === total) {
                    $(settings.nextHandle).addClass('disable');
                    $(settings.prevHandle).removeClass('disable');
                } else if (current === 1) {
                    $(settings.prevHandle).addClass('disable');
                    $(settings.nextHandle).removeClass('disable');
                }
            }
            var slider = $(this).bxSlider(settings);
            if(settings.nextHandle !== undefined)
            {
                $(settings.nextHandle).on('click',function(e){
                    e.preventDefault();
                    slider.goToNextSlide();
                });
            }
            if(settings.prevHandle !== undefined)
            {
                $(settings.prevHandle).addClass('disable');
                $(settings.prevHandle).on('click',function(e){
                    e.preventDefault();
                    slider.goToPrevSlide();
                });
            }

            if(settings.isChild === true){
                $(".thumbBxslider ul img").on('click',function(e){
                    e.preventDefault();
                    var largeURL = $(this).data('largesrc');
                    if($(settings.parentImgHandle).length){
                        $(settings.parentImgHandle).attr('src',largeURL);
                    }
                });
            }


        });
    }
    /*Custom Thumb Plugin Ends*/


    /*-----tab functionality-------*/
    $.fn.tabPlugIn = function () {
        this.each(function () {
            var tabLi=$(this).find(".tabs li a"),
                tabContent =$(this).find(".tabContent");
            $(tabContent).hide();
            $(tabContent).eq(0).show();
            $(tabLi).eq(0).addClass("current");

            //click Functionality
            $(tabLi).on("click",function(e){
                var tabIndex=$(this).parent().index();
                $(tabLi).removeClass("current");
                $(this).addClass("current");
                $(tabContent).hide();
                $(tabContent).eq(tabIndex).show();
                e.preventDefault();
            });
        }); // end for each
    }; // end of functions

    /*-----tab functionality Ends-------*/

//Function for Light box to play Videos
    function popupoverlays () {
        var winheight = $(window).height(),
            winWidth = $(window).width(),
            popWidth = winWidth/2,
            popHeight = winheight/2,
            left = popWidth/2,
            top = popHeight/2;

        $(".videoLink").on("click", function (e) {
            e.preventDefault();
            var videoId = $(this).attr('href'),
                youTubeLink = '<a href="#" class="popCloseBtn" title="Close"></a><iframe width="100%" height="100%" src="//www.youtube.com/embed/'+ videoId +'?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>';
            if (videoId !== ""){
                $('html, body').animate({scrollTop:0}, '500');
                $(".popBlock").fadeIn();
                $(".overlay").fadeIn().css({width: '100%', height: '100%'});
                $(".popBlock").css({width:popWidth, height: popHeight, marginLeft: -left, marginTop: -top});
                $(".popBlock").html(youTubeLink);
            }

        });

        $(".popBlock").bind("click", ".popCloseBtn", function (e) {
            $(".popBlock").html("");
            $(".overlay, .popBlock").fadeOut();
            e.preventDefault();
        });

        $(".overlay").on("click", function (e) {
            $(".popBlock").html("");
            $(".overlay, .popBlock, .formDiv").fadeOut();
            e.preventDefault();
        });
    }

    /* Custom Radio Button functionality */
    $.fn.customRadio = function(){

    }
    /* End Custom Radio Button Functionality */


}(jQuery));




/*Range Slider Function*/
function rangeValue() {
    jQuery( "#slider" ).slider({
        range: true,
        min: 7000,
        max: 39000,
        step: 500,
        values: [ 10000, 35000 ],
        slide: function( event, ui ) {
            jQuery( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        }
    }).draggable();
    jQuery( "#amount" ).val( "" + jQuery( "#slider" ).slider( "values", 0 ) +
        " - " + jQuery( "#slider" ).slider( "values", 1 ) );
} 
jQuery( document ).ready(function(){
	jQuery("a.close").hide();
	jQuery("a.open").click(function (e) {
	e.preventDefault();
		
		jQuery('.sidebar_section').css("right","0");
		jQuery(this).hide();
		jQuery("a.close").show();
	});
	jQuery("a.close").click(function (e) {
	e.preventDefault();
		
		jQuery('.sidebar_section').css("right","-290px");
		jQuery(this).hide();
		jQuery("a.open").show();
	});
});
jQuery(document).ready(function(){  // alert('1');
	 jQuery('#edit-submitted-product-category').on('change', function() {
     if(this.value !='' && this.value == 'Water Purifier'){
		jQuery('#replace_div_1').hide();
		jQuery('select#edit-submitted-capacity').removeClass('form-select required').addClass('form-select');
	 }else{
		 jQuery('#replace_div_1').show();
		jQuery('select#edit-submitted-capacity').removeClass('form-select').addClass('form-select required');
	 }
    });
	jQuery('#node-9710 h2').html('<h2>ASK FOR FREE HOME DEMO</h2>');
});