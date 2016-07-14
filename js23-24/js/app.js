requirejs.config({
    shim: {
        'tmpl': {
            exports: 'tmpl'
        }
    }
});

require(
    [
        'jquery',
        'tmpl',
        'model',
        'view',
        'controller'
    ],

    function($, tmpl, model, view, controller) {
    }
);