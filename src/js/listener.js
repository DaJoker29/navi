var Navi = ( function ( module ) {

    // Scrolling function. 
    // If present, it uses SmoothScroll, otherwise scrollIntoView().
    var scrollTo = function ( location ) {

        if(typeof smoothScroll !== 'undefined') {
            smoothScroll.animateScroll( null, location );
        } else {
            window.history.pushState( null, null, [
                window.location.protocol, 
                '//', 
                window.location.host, 
                window.location.pathname, 
                window.location.search, 
                location
            ].join(''));
            document.querySelector(location).scrollIntoView();
        }
    };

    // Listener callback
    var eventListener = function ( event ) {

        var value = event.target.value;

        if(value === '') {
            return;
        } else {
            scrollTo( value );
            event.target.selectedIndex = 0;
        }
    };

    // Activate listener on menu
    module.listen = function () {

        var menu = document.querySelector('#' + module.id);
        menu.addEventListener('change', eventListener);
    };

    return module;
}( Navi || {} ));