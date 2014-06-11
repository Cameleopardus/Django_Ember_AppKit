Ember.TEMPLATES['MessageEdit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <p><b>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" block</b><br>\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RedactorView", {hash:{
    'valueBinding': ("content"),
    'focus-out': ("updateJSON")
  },hashTypes:{'valueBinding': "STRING",'focus-out': "STRING"},hashContexts:{'valueBinding': depth0,'focus-out': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </p>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n<div class=\"large-6 columns\">\n");
  stack1 = helpers.each.call(depth0, "messageSections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<div class=\"large-6 columns\">\n    <h3>Live preview</h3>\n    <iframe></iframe>\n</div>\n\n</div>");
  return buffer;
  
});Ember.TEMPLATES['MessagePreview'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"row\">\n<div class=\"large-12 columns\">\n    <iframe></iframe>\n</div>\n\n</div>");
  
});Ember.TEMPLATES['account'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"row\">\n<div class=\"medium-5 columns\">\n    <h3>Change Your Password</h3>\n    <form id=\"reset_pw\" data-abide ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changePassword", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          <div class=\"current-password-field\">\n    <label>Current Password <small>required</small>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("old_password"),
    'placholder': ("Provide your old password"),
    'value': ("old_password"),
    'type': ("password")
  },hashTypes:{'id': "STRING",'placholder': "STRING",'value': "ID",'type': "STRING"},hashContexts:{'id': depth0,'placholder': depth0,'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </label>\n\n  </div>\n  <div class=\"password-field\">\n    <label>New Password <small>required</small>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("new_password"),
    'placholder': ("Provide a new password"),
    'value': ("new_password"),
    'type': ("password")
  },hashTypes:{'id': "STRING",'placholder': "STRING",'value': "ID",'type': "STRING"},hashContexts:{'id': depth0,'placholder': depth0,'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </label>\n\n  </div>\n  <div class=\"password-confirmation-field\">\n    <label>Confirm New Password <small>required</small>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("new_password_confirm"),
    'placholder': ("Confirm your new password"),
    'value': ("new_password_confirm"),
    'type': ("password")
  },hashTypes:{'id': "STRING",'placholder': "STRING",'value': "ID",'type': "STRING"},hashContexts:{'id': depth0,'placholder': depth0,'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </label>\n    <small class=\"error\">The password did not match</small>\n  </div>\n  <button type=\"submit\">Submit</button>\n</form>\n</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['admin'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<h1>Admin: ");
  stack1 = helpers._triageMustache.call(depth0, "first_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "last_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>");
  return buffer;
  
});Ember.TEMPLATES['admins/create'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>Add Admin User</h1>\n<p><b>What is the email address of the admin you would like to add?</b><br>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("controller.admin_email")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</p>\n\n<p><button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add Admin</button> <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button></p>");
  return buffer;
  
});Ember.TEMPLATES['admins/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<button>Add Admin User</button>");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div>\n");
  stack1 = helpers._triageMustache.call(depth0, "user.first_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "user.last_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (");
  stack1 = helpers._triageMustache.call(depth0, "user.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\n</div>\n");
  return buffer;
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admins.create", options) : helperMissing.call(depth0, "link-to", "admins.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['admins'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['billing'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<b>No billing information needed (yet)</b>");
  
});Ember.TEMPLATES['campaign/edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("s");
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div class=\"row\">\n    <div class=\"large-12 columns\">\n        <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-plus-circle fa-2x\"></i>Add Message</a>\n        <br><br>\n    </div>\n</div>\n");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "campaign.messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"panel\">\n");
  stack1 = helpers.unless.call(depth0, "view.singleMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"row\">\n    <div class=\"large-6 columns\">\n        ");
  stack1 = helpers.unless.call(depth0, "view.singleMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <p><b>Branding</b><br>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("templates"),
    'selectionBinding': ("branding"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.label"),
    'prompt': ("Select a branding template")
  },hashTypes:{'content': "ID",'selectionBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'prompt': "STRING"},hashContexts:{'content': depth0,'selectionBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n        </p>\n    </div>\n\n    <div class=\"large-6 columns\">\n        <p><b>Subject</b><br>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("subject_template")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </p>\n        <p><b>From Email</b><br>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("from_email"),
    'placeholder': ("branding.from_email")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "ID"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </p>\n        <p><b>From Name</b><br>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("from_name"),
    'placeholder': ("branding.from_name")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "ID"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </p>\n    </div>\n</div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "MessageEdit", "", options) : helperMissing.call(depth0, "render", "MessageEdit", "", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n<div class=\"row\">\n    <div class=\"large-10 columns\"></div>\n    <div class=\"large-2 columns\">\n        <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteMessage", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push("><i class=\"fa fa-trash-o fa-2x\"></i></a>\n    </div>\n</div>\n");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <p><b>Message #</b><br>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("order")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </p>\n        <p><b>Delay</b><br>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("delay")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </p>\n        ");
  return buffer;
  }

  data.buffer.push("<p><b>What should this campaign be labeled?</b><br/>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("campaign.label")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</p>\n\n<p><b>What event should trigger this campaign?</b><br/>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("campaign.source_event")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</p>\n\n<p><b>Which users should receive this campaign?</b><br/>\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.CriteriaEdit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</p>\n\n<h2>Message");
  stack1 = helpers['if'].call(depth0, "view.singleMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n");
  stack1 = helpers.unless.call(depth0, "view.singleMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['with'].call(depth0, "brandTemplates", "as", "templates", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveChanges", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save Campaign</button> <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelChanges", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>");
  return buffer;
  
});Ember.TEMPLATES['campaign/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Edit Campaign</a>");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\nUsers matching the following criteria: <br>\n<div class=\"panel\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "criteria", "criteria", options) : helperMissing.call(depth0, "render", "criteria", "criteria", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\nAll users will receive this campaign.\n");
  }

function program7(depth0,data) {
  
  var buffer = '';
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("s");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"panel\">\n<div class=\"row\">\n<div class=\"large-6 columns\">\n    ");
  stack1 = helpers.unless.call(depth0, "view.singleMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <p><b>Branding</b><br>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "branding.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </p>\n</div>\n<div class=\"large-6 columns\">\n    <p><b>Subject</b><br>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "subject_template", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </p>\n    <p><b>From Email</b><br>\n    ");
  stack1 = helpers['if'].call(depth0, "from_email", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </p>\n    <p><b>From Name</b><br>\n    ");
  stack1 = helpers['if'].call(depth0, "from_name", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </p>\n</div>\n</div>\n\n<div class=\"row\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "MessagePreview", "", options) : helperMissing.call(depth0, "render", "MessagePreview", "", options))));
  data.buffer.push("\n</div>\n</div>\n");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <p><b>Message #</b><br>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "order", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </p>\n    <p><b>Delay</b><br>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "delay", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </p>\n    ");
  return buffer;
  }

function program14(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "from_email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program16(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "branding.from_email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program18(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "from_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program20(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "branding.from_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "campaign.edit", options) : helperMissing.call(depth0, "link-to", "campaign.edit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<br>\n<p><b>How is this campaign triggered?</b><br>\nSent on ");
  stack1 = helpers._triageMustache.call(depth0, "campaign.source_event", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" event\n</p>\n\n<p><b>Which users should receive this campaign?</b><br>\n");
  stack1 = helpers['if'].call(depth0, "view.isCriteriaSet", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n\n<h2>Message");
  stack1 = helpers['if'].call(depth0, "view.singleMessage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n");
  stack1 = helpers.each.call(depth0, "campaign.messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['campaign'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<button>Back to Campaigns</button>");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "campaigns", options) : helperMissing.call(depth0, "link-to", "campaigns", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<h1>");
  stack1 = helpers._triageMustache.call(depth0, "campaign.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (");
  stack1 = helpers._triageMustache.call(depth0, "campaign.campaign_type.slug", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")</h1>\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['campaigns/create'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<h1>New Campaign</h1>\n<p><b>What type of campaign would you like to create?</b><br>\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("model"),
    'selectionBinding': ("controller.campaignType"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.description"),
    'prompt': ("Select a type")
  },hashTypes:{'content': "ID",'selectionBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'prompt': "STRING"},hashContexts:{'content': depth0,'selectionBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</p>\n\n<p><b>What would you like to label this campaign?</b><br>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("campaignLabel"),
    'size': ("50"),
    'placeholder': ("Provide a label")
  },hashTypes:{'type': "STRING",'value': "ID",'size': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'size': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</p>\n\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">create</button>");
  return buffer;
  
});Ember.TEMPLATES['campaigns/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<button>Create Campaign</button>");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "campaign", "id", options) : helperMissing.call(depth0, "link-to", "campaign", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <a href=\"#\">");
  stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - sent on '");
  stack1 = helpers._triageMustache.call(depth0, "source_event", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("'</a>\n    ");
  return buffer;
  }

  data.buffer.push("<h1>Campaigns</h1>\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "campaigns.create", options) : helperMissing.call(depth0, "link-to", "campaigns.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['campaigns'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['criteria'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "criteria", "left", options) : helperMissing.call(depth0, "render", "criteria", "left", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "left_variable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <b>");
  stack1 = helpers._triageMustache.call(depth0, "left", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b>\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        \"");
  stack1 = helpers._triageMustache.call(depth0, "left", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"\n        ");
  return buffer;
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"row\">\n        <div style=\"margin:25px 0 25px 25px;\"><em>\n        ");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n        </em></div>\n        </div>\n        ");
  }

function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "criteria", "right", options) : helperMissing.call(depth0, "render", "criteria", "right", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "right_variable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <b>");
  stack1 = helpers._triageMustache.call(depth0, "right", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</b>\n        ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        \"");
  stack1 = helpers._triageMustache.call(depth0, "right", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n    <div style=\"margin-left:25px;border-left:1px solid #cccccc;\">\n\n        ");
  stack1 = helpers['if'].call(depth0, "left_nested", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "nested", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers._triageMustache.call(depth0, "op", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "nested", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "right_nested", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['criteriaedit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\nUsers matching the following criteria: <br/>\n<div class=\"panel\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "criteriaedititem", "criteria", options) : helperMissing.call(depth0, "render", "criteriaedititem", "criteria", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\nAll users will receive this campaign.<br>\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addTopCriteria", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add Criteria</button>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "view.isCriteriaSet", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['criteriaedititem'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers.unless.call(depth0, "deleted", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "nested", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"panel\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "criteriaedititem", "left", options) : helperMissing.call(depth0, "render", "criteriaedititem", "left", options))));
  data.buffer.push("\n\n            <div class=\"row\">\n                <div class=\"large-2\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("controllers.campaign.logicalOperators"),
    'valueBinding': ("op"),
    'optionValuePath': ("content.slug"),
    'optionLabelPath': ("content.label"),
    'prompt': ("Select a boolean operation")
  },hashTypes:{'content': "ID",'valueBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'prompt': "STRING"},hashContexts:{'content': depth0,'valueBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n            </div>\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "criteriaedititem", "right", options) : helperMissing.call(depth0, "render", "criteriaedititem", "right", options))));
  data.buffer.push("\n            </div>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"row\">\n                <div class=\"large-4 columns\">\n                ");
  stack1 = helpers['if'].call(depth0, "left_variable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n\n                <div class=\"large-2 columns\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("controllers.campaign.comparisonOperators"),
    'valueBinding': ("op"),
    'optionValuePath': ("content.slug"),
    'optionLabelPath': ("content.label"),
    'prompt': ("Select a comparison")
  },hashTypes:{'content': "ID",'valueBinding': "STRING",'optionValuePath': "STRING",'optionLabelPath': "STRING",'prompt': "STRING"},hashContexts:{'content': depth0,'valueBinding': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                </div>\n\n                <div class=\"large-4 columns\">\n                ");
  stack1 = helpers['if'].call(depth0, "right_variable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n\n                <div class=\"large-1 columns\"><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteNode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-trash-o fa-2x\"></i></a></div>\n                <div class=\"large-1 columns\"><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addCriteria", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-plus-circle fa-2x\"></i></a></div>\n            </div>\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("left")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("right")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n\n        ");
  stack1 = helpers['if'].call(depth0, "visible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['dashboard'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<li>");
  stack1 = helpers._triageMustache.call(depth0, "received_date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "data", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<li>");
  stack1 = helpers._triageMustache.call(depth0, "sent_date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "data", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n");
  return buffer;
  }

  data.buffer.push("<h1>Dashboard</h1>\n\n");
  data.buffer.push(escapeExpression((helper = helpers['time-series-chart'] || (depth0 && depth0['time-series-chart']),options={hash:{
    'barData': ("testdata"),
    'selectedInterval': ("W"),
    'selectedSeedColor': ("rgb(255, 64, 64)")
  },hashTypes:{'barData': "ID",'selectedInterval': "STRING",'selectedSeedColor': "STRING"},hashContexts:{'barData': depth0,'selectedInterval': depth0,'selectedSeedColor': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "time-series-chart", options))));
  data.buffer.push("\n\nReceived Events:\n<ul>\n");
  stack1 = helpers.each.call(depth0, "receivedEvents", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n\nSent Emails:\n<ul>\n");
  stack1 = helpers.each.call(depth0, "sentEmails", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>");
  return buffer;
  
});Ember.TEMPLATES['editor'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n");
  }

  stack1 = helpers.view.call(depth0, "App.EditorView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['editortemplate'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<style type=\"text/css\">\n    /*\n    TODO: make sass file for this.\n    */\n    .editor{\n    background: url('../../../images/main/editorbg.png');\n        background-repeat: repeat;\n\n min-height: 600px;\n    }\n\n    .left-off-canvas-menu {\n-webkit-backface-visibility: hidden;\ntransition: background 300ms ease;\ncursor: pointer;\n/* box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5); */\ndisplay: block;\nposition: absolute;\n\ntop: 0;\nbottom: 0;\nleft: 0;\nright: 0;\nz-index: 1002;\n-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.move-right .exit-off-canvas {\nbox-shadow: none;\n}\n\n\n#contenarea{\n        margin-top: 20px;\n    }\n    .fullWidth {\n        width: 100%;\n        margin-left: auto;\n        margin-right: auto;\n        max-width: initial;\n    }\n\n    .button {\n        background-color: rgb(87, 118, 146);\n        width: 45.7%;\n\n    }\n\n    .button:hover {\n        -webkit-transition: background-color 300ms ease-out;\n        -moz-transition: background-color 300ms ease-out;\n        /* transition: background-color 300ms ease-out; */\n        background-color: #96C2DB;\n    }\n\n\n\n    #lnav {\n        background: rgba(255, 255, 255, 0.80);\n\n        color: #666;\n        margin-left: 3%;\n        margin-top: 3%;\n\n    }\n    #sidenavlist{\n        min-height: 300px;\n          list-style-type: none;\n        padding: 0px;\n    }\n    #sidenavlist li{\n        padding: 3px;\n    }\n    #sidenavlist li:hover{\n        background: rgba(255, 255, 255, 0.90);\n\n    }\n    .draggable{\n        resize:both;\noverflow:auto;\n    }\n    .viewbounds{\n        border :1px solid  #CACACA;\n        height: 99%;\n\n        min-height: 500px;\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAG0lEQVQIW2OMq7zlw4ADMIIkF7WrbcEmP+gkAarWGgXyq5CNAAAAAElFTkSuQmCC) repeat;\n            overflow: auto;\n    }\n    .draggable{\n        height: 100px; width: 100px; border: 1px dashed black; padding: 20px;\n    }\n    .viewport\n    {\n        padding: 3px;\n        min-height: 300px;\n        background: rgba(255, 255, 255, 0.80);\n        margin-top: 15px;\n        width: 97%;\n        min-height: 500px;\n         border-top: 15px solid #577692;\n    }\n    .widget{\n\n        border-left: 15px solid rgb(87, 118, 146);\n    }\n\n    .breadcrumb{\n\n                height: 37px;\n        background: rgba(255, 255, 255, 0.80);\n\n        color: #666;\n\n        width: 97%;\n       margin-top: 0.5%;\n    }\n       @media (max-width: 600px) {\n        .breadcrumb{\n            margin-left: 5.5%;\nwidth: 91.5%;\n\n        }\n    }\n    #searchbox{\n        background: rgba(255, 255, 255, 0.80);\n    }\n    #searchbox #search\n    {\nbackground: rgba(0, 0, 0, 0.07);\n        border: none;\n    }\n    #searchbox .prefix{\n     background: rgba(0, 0, 0, 0.07);\n        border: none;\n\n    }\n\n\n\n    #searchbox {\n        margin-left: 0px;\n        height: 37px;\n        background: rgba(255, 255, 255, 0.80);\n\n        color: #666;\n\n\n        margin-top: 3%;\n    }\n\n    .side-nav {\n\n        margin-left: 3%;\n        margin-top: 3%;\n    }\n\n    /* For the \"inset\" look only */\n\n\n/* Let's get this party started */\n::-webkit-scrollbar {\n    width: 7px;\n    height: 7px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n\n    -webkit-border-radius: 0px;\n    border-radius: 1px;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    -webkit-border-radius: 1px;\n    border-radius: 1px;\n    background: #8DB9D4;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);\n}\n::-webkit-scrollbar-thumb:window-inactive {\n	background: #8DB9D4;\n    opacity: 0.2;\n}\n</style>\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"row editor fullWidth\">\n\n    <div class=\"medium-2 columns\" style=\"margin-top: 20px\">\n        <div id=\"lnav\">\n            <div id=\"searchbox\" class=\"row collapse\">\n\n\n                <div class=\"small-2 columns\">\n                    <span class=\"prefix\"><i class=\"fa fa-search\"></i>  </span>\n                </div>\n                <div class=\"small-10 columns\">\n                    <input id=\"search\" type=\"text\" placeholder=\"\">\n                </div>\n\n\n            </div>\n            <div class=\"small-12\">\n                <ul id=\"sidenavlist\" class=\"magellan tabs vertical\" data-magellan-expedition=\"fixed\"\n                    style=\" margin-left: 0px; background: rgba(255, 255, 255, 0.80);\">\n\n\n\n                </ul>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"medium-10 columns\" id=\"contenarea\">\n         <div class=\"row\">\n\n            <div class=\"breadcrumb medium-12 text-center\">\n\n\n</div>\n             <div class=\"viewport medium-12\">\n                    <div class=\"viewbounds medium-10\">\n                        <div  class=\"draggable\">\n                            <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<!-- If you delete this tag, the sky will fall on your head -->\n<meta name=\"viewport\" content=\"width=device-width\" />\n\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n<title>ZURBemails</title>\n\n<link rel=\"stylesheet\" type=\"text/css\" href=\"stylesheets/email.css\" />\n\n</head>\n\n<body bgcolor=\"#FFFFFF\">\n\n<!-- HEADER -->\n<table class=\"head-wrap\" bgcolor=\"#999999\">\n	<tr>\n		<td></td>\n		<td class=\"header container\">\n\n				<div class=\"content\">\n					<table bgcolor=\"#999999\">\n					<tr>\n						<td><img src=\"http://placehold.it/200x50/\" /></td>\n						<td align=\"right\"><h6 class=\"collapse\">Hero</h6></td>\n					</tr>\n				</table>\n				</div>\n\n		</td>\n		<td></td>\n	</tr>\n</table><!-- /HEADER -->\n\n\n<!-- BODY -->\n<table class=\"body-wrap\">\n	<tr>\n		<td></td>\n		<td class=\"container\" bgcolor=\"#FFFFFF\">\n\n			<div class=\"content\">\n			<table>\n				<tr>\n					<td>\n\n						<h3>OH HI</h3>\n						<p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>\n\n						<!-- A Real Hero (and a real human being) -->\n						<p><img src=\"http://placehold.it/600x300\" /></p><!-- /hero -->\n\n						<!-- Callout Panel -->\n						<p class=\"callout\">\n							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. <a href=\"#\">Do it Now! &raquo;</a>\n						</p><!-- /Callout Panel -->\n\n						<h3>Title Ipsum <small>This is a note.</small></h3>\n						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n						<a class=\"btn\">Click Me!</a>\n\n						<br/>\n						<br/>\n\n						<!-- social & contact -->\n						<table class=\"social\" width=\"100%\">\n							<tr>\n								<td>\n\n									<!--- column 1 -->\n									<table align=\"left\" class=\"column\">\n										<tr>\n											<td>\n\n												<h5 class=\"\">Connect with Us:</h5>\n												<p class=\"\"><a href=\"#\" class=\"soc-btn fb\">Facebook</a> <a href=\"#\" class=\"soc-btn tw\">Twitter</a> <a href=\"#\" class=\"soc-btn gp\">Google+</a></p>\n\n\n											</td>\n										</tr>\n									</table><!-- /column 1 -->\n\n									<!--- column 2 -->\n									<table align=\"left\" class=\"column\">\n										<tr>\n											<td>\n\n												<h5 class=\"\">Contact Info:</h5>\n												<p>Phone: <strong>123 - 456 -7890</strong><br/>\n                Email: <strong><a href=\"emailto:admin@email.org\">admin@email.org</a></strong></p>\n\n											</td>\n										</tr>\n									</table><!-- /column 2 -->\n\n									<span class=\"clear\"></span>\n\n								</td>\n							</tr>\n						</table><!-- /social & contact -->\n\n\n					</td>\n				</tr>\n			</table>\n			</div>\n\n		</td>\n		<td></td>\n	</tr>\n</table><!-- /BODY -->\n\n<!-- FOOTER -->\n<table class=\"footer-wrap\">\n	<tr>\n		<td></td>\n		<td class=\"container\">\n\n				<!-- content -->\n				<div class=\"content\">\n				<table>\n				<tr>\n					<td align=\"center\">\n						<p>\n							<a href=\"#\">Terms</a> |\n							<a href=\"#\">Privacy</a> |\n							<a href=\"#\"><unsubscribe>Unsubscribe</unsubscribe></a>\n						</p>\n					</td>\n				</tr>\n			</table>\n				</div><!-- /content -->\n\n		</td>\n		<td></td>\n	</tr>\n</table><!-- /FOOTER -->\n\n</body>\n</html>\n                            <div class=\"elemcontainer row\">\n\n                            </div>\n\n                        </div>\n                    </div>\n                 <div class=\"medium-12\" style=\"height: 25%\"></div>\n             </div>\n            </div>\n    </div>\n\n</div>");
  
});Ember.TEMPLATES['index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['integration'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<h1>");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n<p>");
  stack1 = helpers._triageMustache.call(depth0, "content_json", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>");
  return buffer;
  
});Ember.TEMPLATES['integrations/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "integration", "id", options) : helperMissing.call(depth0, "link-to", "integration", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<a href=\"#\">");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>");
  return buffer;
  }

  data.buffer.push("<p><b>Supported Integrations</b></p>\n<p>The following integrations are supported out of the box.</p>\n\n");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['integrations'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['login'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n\n");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Sign up!</a>");
  }

  stack1 = helpers['if'].call(depth0, "session.isAuthenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div style=\"margin:200px auto; padding:2px; margin-bottom: 0px;\" class=\"logobox small-12 large-4\">\n<div class=\"logoimg\">\n\n</div>\n    </div>\n\n<div style=\"margin:200px auto; padding:20px; margin-top: 0px;\" class=\"loginbox small-12 large-4\">\n\n    <form class=\"form-horizontal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "authenticate", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <div class=\"control-group\">\n            <div class=\"control-label\">\n                <label>Email</label>\n            </div>\n\n            <div class=\"controls\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("identification"),
    'placholder': ("Enter login"),
    'value': ("identification"),
    'type': ("text")
  },hashTypes:{'id': "STRING",'placholder': "STRING",'value': "ID",'type': "STRING"},hashContexts:{'id': depth0,'placholder': depth0,'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n        </div>\n\n        <div class=\"control-group\">\n            <div class=\"control-label\">\n                <label>Password</label>\n            </div>\n\n            <div class=\"controls\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("password"),
    'placeholder': ("Enter password"),
    'value': ("password"),
    'type': ("password")
  },hashTypes:{'id': "STRING",'placeholder': "STRING",'value': "ID",'type': "STRING"},hashContexts:{'id': depth0,'placeholder': depth0,'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn loginbutton\">Log in!</button>\n    </form>\n    <div><em>Don't have an account?</em> ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("span")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "signup", options) : helperMissing.call(depth0, "link-to", "signup", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['organization'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Dashboard</a>");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Branding</a>");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Campaigns</a>");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Users</a>");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Settings</a>");
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <a class=\"button small round\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "invalidateSession", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Logout</a>\n                    ");
  return buffer;
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n                        <a class=\"button small round alert\">Access Denied</a>\n                    ");
  }

  data.buffer.push("<div class=\"contain-to-grid\">\n    <nav class=\"top-bar\" data-topbar>\n        <ul class=\"title-area\">\n            <li class=\"name\">\n                <h1><a href=\"#\">App</a></h1>\n            </li>\n            <li class=\"toggle-topbar menu-icon\"><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "block", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span>Menu</span></a></li>\n        </ul>\n\n        <section class=\"top-bar-section\">\n\n            <ul class=\"right\">\n\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "organization.dashboard", "model", options) : helperMissing.call(depth0, "link-to", "organization.dashboard", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "templates", "model", options) : helperMissing.call(depth0, "link-to", "templates", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "campaigns", "model", options) : helperMissing.call(depth0, "link-to", "campaigns", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "users", "model", options) : helperMissing.call(depth0, "link-to", "users", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "provider", "model", options) : helperMissing.call(depth0, "link-to", "provider", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                <li>\n                    ");
  stack1 = helpers['if'].call(depth0, "session.isAuthenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n\n            </ul>\n\n        </section>\n    </nav>\n</div>\n<div class=\"row\">\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['organizations'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <a class=\"button small round\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "invalidateSession", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Logout</a>\n                    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                        <a class=\"button small round alert\">Access Denied</a>\n                    ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "organization", "organization", options) : helperMissing.call(depth0, "link-to", "organization", "organization", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<a href=\"#\">");
  stack1 = helpers._triageMustache.call(depth0, "organization.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>");
  return buffer;
  }

  data.buffer.push("<nav class=\"top-bar\">\n    <div class=\"row\" style=\"max-width: 1280px\">\n        <ul class=\"title-area\">\n            <li class=\"name\">\n                <h1><a href=\"#\">App</a></h1>\n            </li>\n            <li class=\"toggle-topbar menu-icon\"><a href=\"#\">Menu</a></li>\n        </ul>\n\n        <section class=\"top-bar-section\">\n\n            <ul class=\"right\">\n\n                <li>\n                    ");
  stack1 = helpers['if'].call(depth0, "session.isAuthenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n\n            </ul>\n\n        </section>\n    </div>\n</nav>\n<div class=\"row\">\n<h1>Select an Organization</h1>\n<p>You are an administrator for more than one organization. Select an organization to continue.</p>\n");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['provider/edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<p><b>");
  stack1 = helpers._triageMustache.call(depth0, "display", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(":</b><br>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("value")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</p>\n");
  return buffer;
  }

  data.buffer.push("<p><b>Provider:</b><br>\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("providers"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.name"),
    'value': ("selectedProvider")
  },hashTypes:{'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"},hashContexts:{'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</p>\n\n");
  stack1 = helpers.each.call(depth0, "configObject", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button> <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>\n");
  return buffer;
  
});Ember.TEMPLATES['provider/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<button>Edit</button>");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<p><b>");
  stack1 = helpers._triageMustache.call(depth0, "display", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(":</b> ");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n");
  return buffer;
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "provider.edit", options) : helperMissing.call(depth0, "link-to", "provider.edit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<p><b>Provider:</b> ");
  stack1 = helpers._triageMustache.call(depth0, "organization.provider.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n\n");
  stack1 = helpers.each.call(depth0, "configObject", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['provider'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['settings'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Admin Users</a>");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Email Provider</a>");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Billing</a>");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Integrations</a>");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Account</a>");
  }

  data.buffer.push("<h1>Settings</h1>\n<dl class=\"sub-nav\">\n    <!--");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("dd")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admins", options) : helperMissing.call(depth0, "link-to", "admins", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("-->\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("dd")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "provider", options) : helperMissing.call(depth0, "link-to", "provider", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("dd")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "billing", options) : helperMissing.call(depth0, "link-to", "billing", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("dd")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "integrations", options) : helperMissing.call(depth0, "link-to", "integrations", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("dd")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "account", options) : helperMissing.call(depth0, "link-to", "account", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</dl>\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['signup'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<a href=\"#\">Log in!</a>");
  }

  data.buffer.push("<div style=\"margin:200px auto;background-color:#cccccc;padding:20px;\" class=\"small-12 large-4\">\n    <h1>Sign Up for App</h1>\n    <form class=\"form-horizontal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signup", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <div class=\"control-group\">\n            <div class=\"control-label\">\n                <label>Company Name</label>\n            </div>\n\n            <div class=\"controls\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("company"),
    'placholder': ("Enter a Company Name"),
    'value': ("company"),
    'type': ("text")
  },hashTypes:{'id': "STRING",'placholder': "STRING",'value': "ID",'type': "STRING"},hashContexts:{'id': depth0,'placholder': depth0,'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n        </div>\n\n        <div class=\"control-group\">\n            <div class=\"control-label\">\n                <label>Email</label>\n            </div>\n\n            <div class=\"controls\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("identification"),
    'placholder': ("Enter login"),
    'value': ("email"),
    'type': ("text")
  },hashTypes:{'id': "STRING",'placholder': "STRING",'value': "ID",'type': "STRING"},hashContexts:{'id': depth0,'placholder': depth0,'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n        </div>\n\n        <div class=\"control-group\">\n            <div class=\"control-label\">\n                <label>Password</label>\n            </div>\n\n            <div class=\"controls\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("password"),
    'placeholder': ("Enter password"),
    'value': ("password"),
    'type': ("password")
  },hashTypes:{'id': "STRING",'placeholder': "STRING",'value': "ID",'type': "STRING"},hashContexts:{'id': depth0,'placeholder': depth0,'value': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn\">Sign up!</button>\n    </form>\n    <div><em>Already have an account?</em> ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("span")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['template/edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <p><b>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" block</b><br>\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.RedactorView", {hash:{
    'valueBinding': ("content"),
    'focus-out': ("updateJSON")
  },hashTypes:{'valueBinding': "STRING",'focus-out': "STRING"},hashContexts:{'valueBinding': depth0,'focus-out': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </p>\n    ");
  return buffer;
  }

  data.buffer.push("<p><b>How should this Branding Template be labeled?</b><br>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("template.label")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</p>\n\n<p><b>What is the default sender name for this Template?</b><br>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("template.from_name")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</p>\n\n<p><b>What is the default sender email for this Template?</b><br>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("template.from_email")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</p>\n\n<p><b>Select a Base Theme for this template:</b><br>\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("base_themes"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.slug"),
    'selection': ("templateBaseTheme")
  },hashTypes:{'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'selection': "ID"},hashContexts:{'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'selection': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</p>\n\n<h2>Sections</h2>\n\n<div class=\"row\">\n    <div class=\"large-6 columns\">\n    ");
  stack1 = helpers.each.call(depth0, "templateSections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div class=\"large-6 columns\">\n    <p><b>Preview:</b><br>\n    <iframe id=\"template_edit_preview\"></iframe></p>\n    </div>\n</div>\n\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button> <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>\n");
  return buffer;
  
});Ember.TEMPLATES['template/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("[ <a href=\"#\">Edit</a> ]");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <p><b>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" block</b><br>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </p>\n    ");
  return buffer;
  }

  data.buffer.push("<p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "template.edit", options) : helperMissing.call(depth0, "link-to", "template.edit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n\n<p><b>Base Theme:</b><br>\n");
  stack1 = helpers._triageMustache.call(depth0, "base_theme.slug", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n<p><b>Default Sender Name:</b><br>\n");
  stack1 = helpers._triageMustache.call(depth0, "from_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n<p><b>What is the default sender email for this Template?</b><br>\n");
  stack1 = helpers._triageMustache.call(depth0, "from_email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n\n\n<h2>Sections</h2>\n\n<div class=\"row\">\n    <div class=\"large-6 columns\">\n    ");
  stack1 = helpers.each.call(depth0, "templateSections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div class=\"large-6 columns\">\n    <p><b>Preview:</b><br>\n    <iframe id=\"template_preview\"></iframe></p>\n    </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['template'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<button>Back to Branding Templates</button>");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "templates", options) : helperMissing.call(depth0, "link-to", "templates", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<h1>");
  stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['templates/create'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <p><b>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" block</b><br>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("content")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </p>\n    ");
  return buffer;
  }

  data.buffer.push("<h1>Create Branding Template</h1>\n<p><b>How should this Branding Template be labeled?</b><br>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("templateLabel")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</p>\n\n<p><b>What is the default sender name for this Template?</b><br>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("templateSenderName")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</p>\n\n<p><b>What is the default sender email for this Template?</b><br>\n");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("templateSenderEmail")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</p>\n\n<p><b>Select a Base Theme for this template:</b><br>\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("model"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.slug"),
    'selection': ("templateBaseTheme")
  },hashTypes:{'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'selection': "ID"},hashContexts:{'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'selection': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</p>\n\n<h2>Sections</h2>\n\n<div class=\"row\">\n    <div class=\"large-6 columns\">\n    ");
  stack1 = helpers.each.call(depth0, "templateSections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    <div class=\"large-6 columns\">\n    <p><b>Preview:</b><br>\n    <iframe id=\"template_preview\"></iframe></p>\n    </div>\n</div>\n\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button> <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>\n");
  return buffer;
  
});Ember.TEMPLATES['templates/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<button>Create Branding Template</button>");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "template.index", "id", options) : helperMissing.call(depth0, "link-to", "template.index", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<a href=\"#\">");
  stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>");
  return buffer;
  }

  data.buffer.push("<h1>Branding Templates</h1>\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "templates.create", options) : helperMissing.call(depth0, "link-to", "templates.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['templates'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['user'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<button>Back to Users</button>");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<h1>");
  stack1 = helpers._triageMustache.call(depth0, "user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\nData:<br>\n");
  stack1 = helpers._triageMustache.call(depth0, "user_data", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['users'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("div")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "id", options) : helperMissing.call(depth0, "link-to", "user", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <a href=\"#\">");
  stack1 = helpers._triageMustache.call(depth0, "user_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n");
  return buffer;
  }

  data.buffer.push("<h1>Users</h1>\n");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});