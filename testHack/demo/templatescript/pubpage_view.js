var fixScreen = function(w, h) {
    screen = {};
    screen = {
        width: w,
        height: h,
        availHeight: h,
        availWidth: w,
        availTop: 0,
        availLeft: w,
        colorDepth: 24,
        pixelDepth: 24
    };
};

var fixFrame = function(w, h) {
    var pubContainer = document.getElementById('pub-container');
    if (!pubContainer) {
        pubContainer = document.createElement('div');
        pubContainer.id = 'pub-container';
        document.body.insertBefore(pubContainer, document.body.children[0]);
        for (var i = 0; i < 3; i++) { pubContainer.appendChild(document.body.children[1]); }
    }
    pubContainer.style.position = 'absolute';
    pubContainer.style.width = w + 'px';
    pubContainer.style.height = h + 'px';
    pubContainer.style.overflow = 'hidden';
};

if (window.location.hash) {
    var hash = {};
    var params = window.location.hash.substr(1).split('&');
    for (var i = 0; i < params.length; i++) {
        hash[params[i].split('=')[0]] = params[i].split('=')[1];
    }
    if (hash.w) {
        e9.saleskit.deviceWidth = hash.w;
    }
    if (hash.h) {
        e9.saleskit.deviceHeight = hash.h;
    }
    if (hash.o) {
        e9.saleskit.orientation = hash.o;
    } else {
        e9.saleskit.orientation = (screen.availWidth > screen.availHeight) ? 'landscape' : 'portrait';
    }
    fixScreen(hash.w, hash.h);
    if (hash.ifix) {
        fixFrame(hash.w, hash.h);
        $("#pub-container").niceScroll();
    } else {
        $("html").niceScroll();
    }
    $.fn.niceScroll = function() { console.log('remove nicescroll'); };
};

if (window.parent == window) {
    delete e9.saleskit;
}

window.addEventListener('message', function(e) {
    if (e.data.event && e.data.event == 'orientationchange') {
        if (hash) {
            console.log('hash is present');
            fixScreen(screen.height, screen.width);
            if (hash.ifix) {
                fixFrame(screen.height, screen.width);
            }
        }
        var orientationEvent = window.document.createEvent('Event');
        orientationEvent.initEvent( 'orientationchange', true, true );
        window.dispatchEvent(orientationEvent);
    }
});