requirejs.config({
    shim: {
        'tmpl': {
            exports: 'tmpl'
        }
    }
});

require(
    [
        'tasks-goit/js23-24/js/jquery',
        'tmpl',
        'model',
        'view',
        'controller'
    ],

    function($, tmpl, model, view, controller) {
    }
);