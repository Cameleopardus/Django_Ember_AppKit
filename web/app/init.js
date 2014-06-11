requirejs.config({
    'baseUrl': '/app',
    'paths': {
        'ios': 'ios/app',
        'main': 'main/app',
        'jquery': '/scripts/lib/jquery-1.10.2',
        'handlebars': '/scripts/lib/handlebars-1.1.2',
        'ember': '/scripts/lib/ember-1.5.0'
    },
    'shim': {
        'ember': {
            'deps': ['jquery', 'handlebars'],
            'exports': 'Ember'
        },
        'handlebars': {
            'exports': 'Handlebars'
        }
    }
});

var app = 'ios';
app = 'main';

require([app]);
