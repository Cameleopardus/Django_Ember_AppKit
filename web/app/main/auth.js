var CustomAuthenticator = Ember.SimpleAuth.Authenticators.Base.extend({
    serverURL: '/uiapi/api-token-auth/',

    restore: function (data) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            if (!Ember.isEmpty(data.auth_token) && !Ember.isEmpty(data.email)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },
    authenticate: function (options) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            var _this = this;

            var _data = {
                username: options.identification,
                password: options.password
            };

            //resolve();

            Ember.$.ajax({
                url: '/uiapi/api-token-auth/',
                type: 'POST',
                data: _data,
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded'
            }).then(function (response) {
                // success
                Ember.run(function () {
                    if (!Ember.isEmpty(response.token)) {
                        var _sections = response.token.split('.');
                        var _asciiuser = $.base64.atob(_sections[1]);
                        var _decodeduser = JSON.parse(_asciiuser);

                        var _sessiondata = {
                            auth_token: response.token,
                            email: _decodeduser.email,
                            user_id: _decodeduser.user_id
                        };

                        resolve(_sessiondata);
                    } else {
                        reject("Failed to authenticate");
                    }
                });
            }, function (xhr, status, error) {
                // failure
                Ember.run(function () {
                    reject(xhr.responseJSON || xhr.responseText);
                });
            });
        });
    },
    invalidate: function () {
        return Ember.RSVP.resolve();
    }
});

var CustomAuthorizer = Ember.SimpleAuth.Authorizers.Base.extend({
    authorize: function (jqXHR, requestOptions) {
        var authToken = this.get('session.auth_token');

        if (this.get('session.isAuthenticated') && !Ember.isEmpty(authToken)) {
            jqXHR.setRequestHeader('Authorization', 'JWT ' + authToken);
        }
    }
});