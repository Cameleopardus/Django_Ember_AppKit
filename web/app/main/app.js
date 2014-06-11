Ember.Application.initializer({
    name: "Init",
    initialize: function () {
        console.log("Initializing..");
    }
});

Ember.Application.initializer({
    name: 'authentication',
    initialize: function (container, application) {
        container.register('authenticator:custom', CustomAuthenticator);
        container.register('authorizer:custom', CustomAuthorizer);
        Ember.SimpleAuth.setup(container, application, {
            authorizerFactory: 'authorizer:custom',
            routeAfterAuthentication: 'organizations'
        });
    }
});

App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_ACTIVE_GENERATION: true
});

DS.RESTAdapter.reopen({
    /*host: 'http://127.0.0.1:8080',*/
    namespace: ''
});
App.ApplicationAdapter = DS.RESTAdapter;
