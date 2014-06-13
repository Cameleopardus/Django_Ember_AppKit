App.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin, {
    actions: {
        error: function(error, transition) {
            if (error.status === 401) {
                console.log("session failed");

                this.session.set('isAuthenticated', false);

                transition.abort();
                this.set('session.attemptedTransition', transition);
                transition.send('authenticateSession');
            }
        }
    }
});
