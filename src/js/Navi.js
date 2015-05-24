var Navi = (function ( module ) {

    /* BUILD */
    var build = function( args ) {

        var container = document.querySelector(args.container);
        var target = document.querySelectorAll(args.target);
        // Create elements
        var fragment = document.createDocumentFragment();
        var menu = document.createElement('select');
        
        // Set element values
        menu.id = menu.className = 'navi';
        fragment.appendChild(menu);

        // Create/Add default option
        var option = document.createElement('option');
        option.value = '';
        option.disabled = true;
        option.selected = true;
        option.textContent = 'Navigation';
        menu.appendChild(option);

        // Populate menu with options
        for(var i = 0; i < target.length; i++) {
            // Build option
            option = document.createElement('option');
            option.value = '#' + target[i].id;
            option.textContent = target[i].textContent;

            // Add to menu
            menu.appendChild(option);
        }

        // Add to DOM
        container.appendChild(fragment);
    };

    /* LISTEN */
    var listener = function() {
        var el = document.querySelector('#navi');
        el.addEventListener('change', function( e ) {
            var selection = e.target.value;

            if(selection === '') {
                return;
            }

            if(typeof smoothScroll !== 'undefined') {
                smoothScroll.animateScroll( null, selection );
            } else {
                selection = document.querySelector(selection);
                selection.scrollIntoView();
            }
            e.target.selectedIndex = 0;
        });
    };

    /* INITIALIZE */
    module.init = function ( args ) {
        build(args);
        listener();
    };

    return module;
} ( Navi || {} ));