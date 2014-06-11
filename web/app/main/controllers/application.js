//helper functions

function getjwtcookie(credentials) {
    return $.post("/api-token-auth/", credentials);
}

function gimmedatcookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}


function authenticateuser(id, pw) {
    var wait = $.Deferred();
    var ret = ""
    return $.post("/auth/login", { username: id, password: pw, csrfmiddlewaretoken: gimmedatcookie("csrftoken")});
}


/*
 ###############
 Controllers
 ###############
 */
App.EditorController = Ember.Controller.extend({
    //TODO: probably rename plugins to 'base templates' or something.
    editorplugins: function () {
        var plgs = [];
        for (var plg in Plugins.installed) {

            for (var e in Plugins.installed[plg].included_elements) {
                plgs.push()

            }

        }

    }.property()
});
App.ApplicationController = Ember.Controller.extend({
    logged_in: false
});

App.LoginController = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, {
    authenticatorFactory: 'authenticator:custom'
});

App.LogoutController = Ember.Controller.extend({

});

App.SignupController = Ember.Controller.extend({
    email: '',
    password: '',
    company: '',

    actions: {
        signup: function() {
            var _payload = {
                email: this.get('email'),
                password: this.get('password'),
                company: this.get('company')
            };

            var _this = this;

            // make sure session is cleared first
            this.session.set('isAuthenticated', false);

            $.post('uiapi/sign-up/', JSON.stringify(_payload)).then(function(data) {
                var _jsondata = JSON.parse(data);

                //alert("Succcess??");
                console.log(_jsondata);

                if ('success' in _jsondata && _jsondata['success'] == true) {
                    _this.clearFields();
                    _this.transitionToRoute('login');
                }
                else {
                    alert("Error, please try again");
                }
            }, function() {
                alert("Sorry, we encountered an issue when creating your account.");
            });
        }
    },

    clearFields: function() {
        this.set('email', '');
        this.set('password', '');
        this.set('company', '');
    }
});

App.AccountController = Ember.Controller.extend({
    old_password: '',
    new_password: '',
    new_password_confirm: '',

    actions: {
        changePassword: function() {
            var _payload = {
                old_password: this.get('old_password'),
                new_password: this.get('new_password')
            };

            var _this = this;

            $.post('uiapi/change-password/', JSON.stringify(_payload)).then(function(data) {
                var _jsondata = JSON.parse(data);

                console.log(_jsondata);

                if ('success' in _jsondata && _jsondata['success'] == true) {
                    _this.clearFields();
                    _this.transitionToRoute('admins');
                }
            });
        }
    },

    clearFields: function() {
        this.set('old_password', '');
        this.set('new_password', '');
        this.set('new_password_confirm', '');
    }
});

App.OrganizationController = Ember.ObjectController.extend({
    actions: {
        block: function() {

        }
    }
});

App.CampaignsCreateController = Ember.Controller.extend({
    needs: ['organization'],

    campaignType: null,
    campaignLabel: '',

    actions: {
        save: function () {
            var _this = this;
            var _campaign = this.store.createRecord('campaign', {
                organization: this.get('controllers.organization.model'),
                label: this.get('campaignLabel'),
                campaign_type: this.get('campaignType'),
                source_event: '',
                data_json: '{}',
                criteria_json: '{}'
            }).save().then(function(campaign) {
                _this.transitionToRoute('campaign.edit', campaign.id);
            });
        },
        cancel: function() {
            this.transitionToRoute('campaigns');
        }
    }
});

App.CampaignIndexController = Ember.ObjectController.extend({
    criteria: {},

    criteriaChanges: function() {
        var _criteria = JSON.parse(this.get('model.campaign.criteria_json'));

        if (!$.isEmptyObject(_criteria)) {
            this.crawlCriteria(_criteria);
        }

        this.set('criteria', _criteria);
    }.observes('model.campaign.criteria_json'),

    crawlCriteria: function(obj) {
        if (obj.left_type == 'equation') {
            obj['left_nested'] = true;

            this.crawlCriteria(obj.left);
        }
        else {
            obj['left_nested'] = false;
        }

        if (obj.right_type == 'equation') {
            obj['right_nested'] = true;

            this.crawlCriteria(obj.right);
        }
        else {
            obj['right_nested'] = false;
        }

        obj['nested'] = (obj.left_type == 'equation' || obj.right_type == 'equation');

        obj['left_variable'] = (obj.left_type == 'variable');
        obj['right_variable'] = (obj.right_type == 'variable');
    }
});

App.CampaignEditController = Ember.ObjectController.extend({
    criteria: {},

    resetCriteria: function() {
        this.set('criteria', {});
    },

    modelChanged: function() {
        var _criteria = JSON.parse(this.get('model.campaign.criteria_json'));

        // set up the criteria
        if (!$.isEmptyObject(_criteria)) {
            this.crawlCriteria(_criteria);
        }

        this.set('criteria', _criteria);
    }.observes('model.campaign.criteria_json'),

    crawlCriteria: function(obj) {
        if (obj.left_type == 'equation') {
            obj['left_nested'] = true;

            this.crawlCriteria(obj.left);
        }
        else {
            obj['left_nested'] = false;
        }

        if (obj.right_type == 'equation') {
            obj['right_nested'] = true;

            this.crawlCriteria(obj.right);
        }
        else {
            obj['right_nested'] = false;
        }

        obj['nested'] = (obj.left_type == 'equation' || obj.right_type == 'equation');

        obj['left_variable'] = (obj.left_type == 'variable');
        obj['right_variable'] = (obj.right_type == 'variable');
        obj['deleted'] = false;
        obj['visible'] = true;
    },

    distillCriteria: function(obj) {
        var _clean = {};

        _clean['left_type'] = obj.left_type;

        if (obj.left_type == 'equation')
            _clean['left'] = this.distillCriteria(obj.left);
        else
            _clean['left'] = obj.left;

        _clean['right_type'] = obj.right_type;

        if (obj.right_type == 'equation')
            _clean['right'] = this.distillCriteria(obj.right);
        else
            _clean['right'] = obj.right;

        _clean['op'] = obj.op;

        return _clean;
    },

    actions: {
        deleteChildCriteria: function(childContext) {
            childContext.set('model.deleted', true);

            this.resetCriteria();
        },
        saveChanges: function () {
            var _cleanObj = this.distillCriteria(this.get('criteria'));

            this.set('model.campaign.criteria_json', JSON.stringify(_cleanObj));

            //console.log(JSON.stringify(_cleanObj));

            this.get('campaign').save();

            this.get('campaign.messages').forEach(function(message) {
                message.save();
            });

            this.transitionToRoute('campaign');
        },
        cancelChanges: function () {
            this.get('campaign').rollback();
            this.transitionToRoute('campaign');
        },
        addTopCriteria: function() {
            var _node = {
                op: "eq",
                left_nested: false,
                left_type: "variable",
                left_variable: true,
                left: "",
                right_nested: false,
                right_type: "literal",
                right_variable: false,
                right: "",
                nested: false,
                deleted: false,
                visible: true
            };

            this.set('criteria', _node);
        },
        addMessage: function() {
            this.get('model.campaign.messages').addObject(this.store.createRecord('campaignMessage', {
                campaign: this.get('model.campaign'),
                order: this.get('model.campaign.messages').get('length'),
                delay: 0,
                content_json: "{}",
                branding: null,
                subject_template: "New message",
                from_email: "",
                from_name: ""
            }));
        },
        deleteMessage: function(message) {
            this.get('model.campaign.messages').removeObject(message);
            if (message.get('isNew')) {
                message.deleteRecord();
            }
            else {
                message.destroyRecord();
            }

        }
    }
});

App.AdminsCreateController = Ember.Controller.extend({
    needs: ['organization'],

    admin_email: '',

    actions: {
        add: function () {
            // todo: check if user object already exists in platform
            // this.store.find....

            // else...
            // create the user

            console.log(this.get('controllers.organization.model'));

            /*var _user = this.store.createRecord('user', {
                username: this.admin_email,
                email: this.admin_email,
                first_name: 'New',
                last_name: 'User'
            });

            var _this = this;

            _user.save().then(function (user) {
                // associate the user
                var _uop = _this.store.createRecord('UserOrganizationPermission', {
                    user: user,
                    organization: _this.get('organization.model'),
                    permissions: '["create","read","update","delete"]'
                });

                _uop.save();

                this.transitionToRoute('admins');
            });*/
        },
        cancel: function () {
            this.transitionToRoute('admins');
        }
    }
});

App.ProviderIndexController = Ember.ObjectController.extend({
    configObject: [],
    generateConfigObject: function () {
        var _tmpFields = JSON.parse(this.get('organization.provider.fields'));
        var _tmpConfig = JSON.parse(this.get('organization.provider_config'));

        var _index;

        for (_index = 0; _index < _tmpFields.length; _index++) {
            _tmpFields[_index]['value'] = '';

            if (_tmpConfig.hasOwnProperty(_tmpFields[_index]['name'])) {
                _tmpFields[_index]['value'] = _tmpConfig[_tmpFields[_index]['name']];
            }
        }

        this.set('configObject', _tmpFields);
    }
});

App.ProviderEditController = Ember.ObjectController.extend({
    selectedProvider: null,
    configObject: [],

    initialConfigObject: function () {
        this.set('selectedProvider', this.get('organization.provider.id'));
    },
    generateConfigObject: function () {
        var _this = this;

        this.store.find('provider', this.selectedProvider).then(function (provider) {
            var _tmpFields = JSON.parse(provider.get('fields'));

            if (_this.get('selectedProvider') == _this.get('organization.provider.id')) {
                var _tmpConfig = JSON.parse(_this.get('organization.provider_config'));

                var _index;

                for (_index = 0; _index < _tmpFields.length; _index++) {
                    _tmpFields[_index]['value'] = '';

                    if (_tmpConfig.hasOwnProperty(_tmpFields[_index]['name'])) {
                        _tmpFields[_index]['value'] = _tmpConfig[_tmpFields[_index]['name']];
                    }
                }
            }

            _this.set('configObject', _tmpFields);
        });
    }.observes('selectedProvider'),
    actions: {
        save: function () {
            var _strippedConfig = {};
            var _configObject = this.get('configObject');

            var _index;

            for (_index = 0; _index < _configObject.length; _index++) {
                _strippedConfig[_configObject[_index]['name']] = _configObject[_index]['value'];
            }

            var _this = this;

            this.store.find('provider', this.selectedProvider).then(function (provider) {
                _this.set('organization.provider', provider);
                _this.set('organization.provider_config', JSON.stringify(_strippedConfig));
                _this.get('organization').save();
                _this.transitionToRoute('provider');
            });
        },
        cancel: function () {
            this.transitionToRoute('provider');
        }
    }
});

App.TemplatesCreateController = Ember.ObjectController.extend({
    needs: ['organization'],

    templateLabel: '',
    templateSenderName: '',
    templateSenderEmail: '',
    templateBaseTheme: null,

    templateSections: [],

    switchBaseTheme: function () {
        var _sectionnames = JSON.parse(this.templateBaseTheme.get('sections'));
        var _sections = [];

        var _numsections = _sectionnames.length;
        var _index;

        for (_index = 0; _index < _numsections; _index++) {
            var _obj = Ember.Object.create({
                "name": _sectionnames[_index],
                "content": "("+_sectionnames[_index]+")"
            });

            var _this = this;
            _obj.addObserver('content', function () {
                _this.generatePreview();
            });

            _sections.push (_obj);
        }

        this.set('templateSections', _sections);
    }.observes('templateBaseTheme'),

    generatePreview: function () {
        var _previewhtml = this.templateBaseTheme.get('content');

        // substitute the style block
        _previewhtml = _previewhtml.replace("{% block style %}{% endblock style %}", this.templateBaseTheme.get('style'));

        var _numsections = this.get('templateSections').length;
        var _index;

        for (_index = 0; _index < _numsections; _index++) {
            var _name = this.get('templateSections')[_index].name;
            var _value = this.get('templateSections')[_index].content;

            _previewhtml = _previewhtml.replace("{% block "+_name+" %}{% endblock "+_name+" %}", _value);
        }

        $("#template_preview").contents().find('html').html(_previewhtml);
    }.observes('templateSections'),

    actions: {
        save: function () {
            var _condensedSections = {};
            var _numsections = this.get('templateSections').length;
            var _index;
            var _this = this;

            for (_index = 0; _index < _numsections; _index++) {
                _condensedSections[this.get('templateSections')[_index].name] = this.get('templateSections')[_index].content;
            }

            var _branding = this.store.createRecord('organizationBranding', {
                organization: this.get('controllers.organization.model'),
                label: _this.templateLabel,
                base_theme: _this.templateBaseTheme,
                content_json: JSON.stringify(_condensedSections),
                from_email: _this.templateSenderEmail,
                from_name: _this.templateSenderName
            });

            _branding.save();

            this.transitionToRoute('templates');
        },
        cancel: function () {
            this.transitionToRoute('templates');
        }
    }
});


App.TemplateIndexController = Ember.ObjectController.extend({
    templateSections: [],

    initializeSections: function () {
        var _this = this;
        var _template = this.get('model');

        _template.get('base_theme').then(function(basetheme) {
            var _sectionnames = JSON.parse(basetheme.get('sections'));
            var _content = JSON.parse(_template.get('content_json'));
            var _sections = [];

            var _numsections = _sectionnames.length;
            var _index;

            for (_index = 0; _index < _numsections; _index++) {
                var _obj = Ember.Object.create({
                    "name": _sectionnames[_index],
                    "content": _content[_sectionnames[_index]]
                });

                _sections.push (_obj);
            }

            _this.set('templateSections', _sections);
        });

    }.observes('model'),


    actions: {

    }
});

App.TemplateEditController = Ember.ObjectController.extend({
    templateSections: [],
    templateBaseTheme: null,

    initializeSections: function () {
        var _this = this;
        var _template = this.get('model.template');

        _template.get('base_theme').then(function(basetheme) {
            _this.set('templateBaseTheme', basetheme);
            _this.themeChanged();
        });

    }.observes('model.template.id'),

    themeChanged: function() {
        var _template = this.get('model.template');
        var _basetheme = _template.get('base_theme');

        var _sectionnames = JSON.parse(_basetheme.get('sections'));
        var _content = JSON.parse(_template.get('content_json'));
        var _sections = [];

        var _numsections = _sectionnames.length;
        var _index;

        for (_index = 0; _index < _numsections; _index++) {
            var _obj = Ember.Object.create({
                "name": _sectionnames[_index],
                "content": _content[_sectionnames[_index]]
            });

            _sections.push (_obj);
        }

        this.set('templateSections', _sections);
    }.observes('templateBaseTheme'),

    actions: {
        save: function () {
            var _condensedSections = {};
            var _numsections = this.get('templateSections').length;
            var _index;

            for (_index = 0; _index < _numsections; _index++) {
                _condensedSections[this.get('templateSections')[_index].name] = this.get('templateSections')[_index].content;
            }

            var _template = this.get('model.template');
            _template.set('base_theme', this.templateBaseTheme);
            _template.set('content_json', JSON.stringify(_condensedSections));
            _template.save();

            this.transitionToRoute('templates');
        },
        cancel: function () {
            this.get('model.template').rollback();
            this.transitionToRoute('templates');
        }
    }
});

App.CriteriaedititemController = Ember.ObjectController.extend({
    needs: ['campaign'],

    resetModel: function(newModel) {
        this.set('model.visible', false);

        var _this = this;
        Ember.run.next(function() {
            Ember.changeProperties(function() {
                _this.set('model.op', newModel.op);
                _this.set('model.left', newModel.left);
                _this.set('model.left_type', newModel.left_type);
                _this.set('model.left_nested', newModel.left_nested);
                _this.set('model.right', newModel.right);
                _this.set('model.right_type', newModel.right_type);
                _this.set('model.right_nested', newModel.right_nested);
                _this.set('model.nested', newModel.nested);
                _this.set('model.deleted', newModel.deleted);
                _this.set('model.visible', newModel.visible);
            });
        });
    },
    actions: {
        deleteChildCriteria: function(childContext) {
            childContext.set('model.deleted', true);

            if (this.get('model.right.deleted') == true) {
                var _obj = Ember.copy(this.get('model.left'));
            }
            else {
                var _obj = Ember.copy(this.get('model.right'));
            }

            this.resetModel(_obj);
        },
        deleteNode: function() {
            this.parentController.send("deleteChildCriteria", this);
        },
        addCriteria: function() {
            var _existingNode = Ember.copy(this.get('model'));

            var _newNode = {
                op: "eq",
                left_nested: false,
                left_type: "variable",
                left_variable: true,
                left: "",
                right_nested: false,
                right_type: "literal",
                right_variable: false,
                right: "",
                nested: false,
                deleted: false,
                visible: true
            };

            var _newBranch = {
                op: "and",
                left_nested: true,
                left_type: "equation",
                left_variable: false,
                left: _existingNode,
                right_nested: true,
                right_type: "equation",
                right_variable: false,
                right: _newNode,
                nested: true,
                deleted: false,
                visible: true
            };

            // batch the changes so we don't get nasty view artifacts
            this.resetModel(_newBranch);
        }
    }
});

App.MessagePreviewController = Ember.ObjectController.extend({
    needs: ['campaign'],
    messageSections: [],
    templateContent: {},

    initializeSections: function() {
        //console.log("test!");

        var _this = this;
        var _message = this.get('model');
        var _template = _message.get('branding');

        if (_template != null) {
            _template.get('base_theme').then(function(basetheme) {
                var _sectionnames = JSON.parse(basetheme.get('sections'));
                var _templatecontent = JSON.parse(_template.get('content_json'));

                _this.set('templateContent', _templatecontent);

                var _messagecontent = JSON.parse(_message.get('content_json'));
                var _sections = [];

                var _numsections = _sectionnames.length;
                var _index;

                for (_index = 0; _index < _numsections; _index++) {
                    var _obj = Ember.Object.create({
                        "name": _sectionnames[_index],
                        "content": (_messagecontent.hasOwnProperty(_sectionnames[_index]) ? _messagecontent[_sectionnames[_index]] : "")
                    });

                    _sections.push (_obj);
                }

                _this.set('messageSections', _sections);

                //console.log(_this.get('messageSections'));
            });
        }

    }.observes('model').on('init'),
});

App.MessageEditController = Ember.ObjectController.extend({
    needs: ['campaign'],
    messageSections: [],
    templateContent: {},

    initializeSections: function() {
        //console.log("test!");

        var _this = this;
        var _message = this.get('model');
        var _template = _message.get('branding');

        if (_template != null) {
            _template.get('base_theme').then(function(basetheme) {
                var _sectionnames = JSON.parse(basetheme.get('sections'));
                var _templatecontent = JSON.parse(_template.get('content_json'));

                _this.set('templateContent', _templatecontent);

                var _messagecontent = JSON.parse(_message.get('content_json'));
                var _sections = [];

                var _numsections = _sectionnames.length;
                var _index;

                for (_index = 0; _index < _numsections; _index++) {
                    var _obj = Ember.Object.create({
                        "name": _sectionnames[_index],
                        "content": (_messagecontent.hasOwnProperty(_sectionnames[_index]) ? _messagecontent[_sectionnames[_index]] : "")
                    });

                    _sections.push (_obj);
                }

                _this.set('messageSections', _sections);

                //console.log(_this.get('messageSections'));
            });
        }

    }.observes('model').on('init'),

    brandingChanged: function() {
        this.initializeSections();
    }.observes('model.branding'),

    contentChanged: function() {
        this.send('updateJSON');
    }.observes('messageSections.@each.content'),

    actions: {
        updateJSON: function() {
            var _condensedSections = {};
            var _numsections = this.get('messageSections').length;
            var _index;

            for (_index = 0; _index < _numsections; _index++) {
                _condensedSections[this.get('messageSections')[_index].name] = this.get('messageSections')[_index].content;
            }

            this.set('model.content_json', JSON.stringify(_condensedSections));
        }
    }
});

App.OrganizationDashboardController = Ember.ObjectController.extend({
    testdata: Ember.computed.uniq('receivedEventsData','sentEmailData'),

    receivedEventsData: Ember.A([{
                "time": d3.time.format('%Y-%m-%d').parse("2013-05-01"),
                "value": 40,
                "label": "events received"
            },
            {
                "time": d3.time.format('%Y-%m-%d').parse("2013-05-02"),
                "value": 80,
                "label": "events received"
            },
            {
                "time": d3.time.format('%Y-%m-%d').parse("2013-05-03"),
                "value": 120,
                "label": "events received"
            }]),
    updateReceivedEventsData: function() {
        var _this = this;

        this.get('model.receivedEventCounts').then(function(counts) {
            var mappedCounts = counts.map(function(item, index, enumerable){
                return {
                    "time": d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse(item.get('date')),
                    "value": item.get('count'),
                    "label": "events received"
                };
            });

            _this.set('receivedEventsData', mappedCounts);
            console.log(mappedCounts);
        });
    }.observes('model.receivedEventCounts'),

    sentEmailData: Ember.A([{
                "time": d3.time.format('%Y-%m-%d').parse("2013-05-01"),
                "value": 40,
                "label": "emails sent"
            },
            {
                "time": d3.time.format('%Y-%m-%d').parse("2013-05-02"),
                "value": 80,
                "label": "emails sent"
            },
            {
                "time": d3.time.format('%Y-%m-%d').parse("2013-05-03"),
                "value": 120,
                "label": "emails sent"
            }]),
    updateSentEmailData: function() {
        var _this = this;

        this.get('model.sentEmailCounts').then(function(counts) {
            var mappedCounts = counts.map(function(item, index, enumerable){
                return {
                    "time": d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse(item.get('date')),
                    "value": item.get('count'),
                    "label": "emails sent"
                };
            });

            _this.set('sentEmailData', mappedCounts);
        });
    }.observes('model.sentEmailCounts')
});