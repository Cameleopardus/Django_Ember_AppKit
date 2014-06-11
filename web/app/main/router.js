/*App.Router.reopen({
    rootURL: '/app/'
});*/

App.Router.map(function() {
    this.resource('editor');
    this.route('login');
    this.route('logout');

    this.route('signup');
    this.route('request-reset');
    this.route('reset-password', { path: 'reset-password/:token'});

    this.resource('onboarding', function(){
        this.route('mailserver');
        this.route('branding');
        this.route('campaign');
        this.route('apiguide');
    });

    this.resource('organizations', function(){
        this.route('create');
    })
    this.resource('organization', { path: 'organizations/:organization_id'}, function() {
        this.route('dashboard');
        this.resource('campaign', { path: 'campaigns/:campaign_id' }, function(){
            this.route('edit');
        });
        this.resource('campaigns', function(){
            this.route('create');
        });
        this.resource('templates', function(){
            this.resource('template', { path: ':template_id' }, function(){
                this.route('edit');
            });
            this.route('create');
        });
        this.resource('user', { path: 'users/:user_id' });
        this.resource('users');

        this.resource('settings', function() {
            this.resource('admins', function() {
                this.resource('admin', { path: ':admin_id' });
                this.route('create');
            });
            this.resource('billing', function() {
                this.route('edit');
            });
            this.resource('provider', function() {
                this.route('edit');
            });
            this.resource('integrations', function() {
                this.resource('integration', { path: ':integration_id' });
            });

            this.resource('account');
        });
    });
});