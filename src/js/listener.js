var Navi = ( function ( module ) {

    // Scrolling function. 
    var scrollTo = function ( hash ) {

        // If present SmoothScroll, otherwise scrollIntoView().
        if(typeof smoothScroll !== 'undefined') {
            smoothScroll.animateScroll( null, hash );
        } else {
            window.history.pushState( null, null, [
                window.location.protocol, 
                '//', 
                window.location.host, 
                window.location.pathname, 
                window.location.search, 
                hash
            ].join(''));
            document.querySelector(hash).scrollIntoView();
        }
    };

    // Listener callback
    var eventListener = function ( e ) {

        // Prevent links from reloading the page
        e.preventDefault();

        var hash = e.target.value || e.target.hash;
        if( hash !== '' ) {
            scrollTo( hash );

            if ( module.type === 'select') {
                e.target.selectedIndex = 0;
            }
        }
    };

    // Activate listener on menu
    module.listen = function () {

        var event = (module.type === 'select') ? 'change' : 'click';

        var menu = document.querySelector('#' + module.id);
        menu.addEventListener(event, eventListener);
    };

    return module;
}( Navi || {} ));