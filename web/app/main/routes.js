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

App.LoginRoute = Ember.Route.extend({
    model: function() { /* */ }
});

App.LogoutRoute = Ember.Route.extend({
    activate: function () {
        this.send("invalidateSession");
    },
    model: function() { /* */ }
});


App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('organizations');
    }
});

App.OrganizationIndexRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    afterModel: function(organization) {
       this.transitionTo('organization.dashboard', organization);
   }
});

App.OrganizationsRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() {
        return this.store.find('userOrganizationPermission');
    },
    afterModel: function(uops) {
        if (uops.get('length') === 1) {
            this.transitionTo('organization.dashboard', uops.get('firstObject').get('organization'));
        }
    }
});

App.OrganizationDashboardRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    /*model: function() {
        var _orgid = this.modelFor('organization').get('id');

        return Ember.RSVP.hash({
            received_event_count: this.store.find('ReceivedEventCount', {organization: _orgid}),
            sent_email_count: this.store.find('SentEmailCount'),
            received_event: this.store.find('ReceivedEvent'),
            sent_email: this.store.find('SentEmail')
        });
    },*/
    renderTemplate: function() {
        this.render('dashboard');
    }
});


App.CampaignsCreateRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() {
        return this.store.find('campaignType');
    }
});

App.CampaignsRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() {
        //alert(this.modelFor('organization').id);
        //return this.store.find('campaign');
        return this.modelFor('organization').get('campaigns');
    }
});

App.CampaignRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function(params) {
        return Ember.RSVP.hash({
            brandTemplates: this.modelFor('organization').get('organizationBrandings'),
            campaign: this.store.find('campaign', params.campaign_id),
            comparisonOperators: this.store.find('comparisonOperator'),
            logicalOperators: this.store.find('logicalOperator')

            /*,
            messages: this.store.find('CampaignMessage', { campaign: params.campaign_id })*/
        });
    }
});

App.CampaignEditRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    /*model: function() {
        return this.modelFor('campaign');
    }*/
});

App.CampaignsNewRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() { /* */ }
});

App.SettingsRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() { /* */ }
});

App.UsersRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() {
        // todo: modify to reflect AppUsers for organization id
        //return this.store.find('appUser');
        return this.modelFor('organization').get('appUsers');
    }
});

App.UserRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function(params) {
        return this.store.find('appUser', params.user_id);
    }
});

App.TemplatesRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
   model: function() {
       // todo: modify to reflect Templates for organization ID via modelFor
       return this.modelFor('organization').get('organizationBrandings');
   }
});

App.TemplatesCreateRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() {
        return this.store.find('baseTheme');
    }
})

App.TemplateRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function(params) {
        return this.store.find('organizationBranding', params.template_id)
    }
});

App.TemplateIndexRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() {
        return this.modelFor('template');
    }/*,
    setupController: function(controller, model){
        controller.set('model', model);
        controller.initializeSections();
    }*/
});

App.TemplateEditRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() {
        return Ember.RSVP.hash({
            template: this.modelFor('template'),
            base_themes: this.store.find('baseTheme')
        });
    }
});

App.AdminsRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() {
        // todo: restrict this to just the current organization
        //return this.store.find('userOrganizationPermission' /*, {organization: modelFor('organization')}*/);
        return this.modelFor('organization').get('admins');
    }
});

App.ProviderRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() {
        return Ember.RSVP.hash({
            organization: this.modelFor('organization'),
            providers: this.store.find('provider')
        });
    }
});

App.ProviderIndexRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    setupController: function(controller, model){
        controller.set('model', model);
        controller.generateConfigObject();
    }
});

App.ProviderEditRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    setupController: function(controller, model){
        controller.set('model', model);
        controller.initialConfigObject();
    }
});

App.IntegrationsRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function() {
        return this.store.find('supportedIntegration');
    }
});

App.IntegrationRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    model: function(params) {
        return this.store.find('supportedIntegration', params.integration_id);
    }
});

App.EditorRoute = Ember.Route.extend({
    model: function() {
        console.log('routing to editor..');
    }
});