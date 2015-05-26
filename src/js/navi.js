var Navi = (function ( module ) {

    module.init = function ( args ) {
        
        // Set module properties
        module.container = document.querySelector( args.container || 'body' );
        module.target = document.querySelectorAll( args.target || '[data-navi]' );
        module.id = args.id || 'navi';

        // Run methods
        module.build();
        module.listen();
    };

    return module;
} ( Navi || {} ));