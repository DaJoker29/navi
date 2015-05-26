var Navi = ( function ( module ) {

    // Option factory
    var createOpt = function ( value, textContent, def ) {

        // Create option
        var opt = document.createElement('option');
        opt.value = value;
        opt.textContent = textContent;

        // Check default flag
        if (def) {
            opt.disabled = opt.selected = true;
        }

        return opt;
    };

    // Generate navigation menu
    module.build = function () {

        var target = module.target;
        var container = module.container;

        // Create elements
        var frag = document.createDocumentFragment();
        var menu = document.createElement('select');
        
        // Set element values
        menu.id = menu.className = module.id;
        frag.appendChild(menu);

        // Default option
        menu.appendChild(createOpt('', 'Navigation', true));

        // Populate menu with options
        for(var i = 0; i < target.length; i++) {
            menu.appendChild(createOpt('#' + target[i].id, target[i].textContent));
        }

        // Add fragment to DOM
        container.appendChild(frag);
    };

    return module;
} ( Navi || {} ));