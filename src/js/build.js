var Navi = ( function ( module ) {

    var target, container, id, type;

    // Append Helper
    var append = function ( element, fragment ) {
        if( typeof element.appendChild === 'function' ) {
            element.appendChild( fragment );
        }
    };

    // Option factory
    var createItem = function ( value, textContent, def ) {

        var opt, link;

        if ( type === 'select') {

            // Create option
            opt = document.createElement('option');
            opt.value = value;
            opt.textContent = textContent;

            // Check default flag
            if (def) {
                opt.disabled = opt.selected = true;
            }
        } else {

            // Create option
            opt = document.createElement('li');
            link = document.createElement('a');
            link.href = value;
            link.textContent = textContent;

            append( opt, link );
        }

        return opt;
    };

    // Select Menu constructor
    var build = function () {

        // Create elements
        var frag = document.createDocumentFragment();
        var menu = document.createElement( type );

        // Set element values
        menu.id = menu.className = id;

        // Build menu
        append( frag, menu );

        if ( type === 'select') {
            append( menu, createItem( '', 'Navigation', true ) );
        }

        for(var i = 0; i < target.length; i++) {
            append( menu, createItem( '#' + target[i].id,
                target[i].textContent ) );
        }

        // Push to DOM
        append( container, frag );
    };

    // Generate navigation menu
    module.build = function () {

        target = module.target;
        container = module.container;
        id = module.id;
        type = module.type;

        build();
    };

    return module;
} ( Navi || {} ));