define(['handlebars'], function(Handlebars) {

this["__tmp"] = this["__tmp"] || {};

this["__tmp"]["signup/cancelplan"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2>Cancel Plan</h2>\n<p>Are you sure you want to cancel your plan?</p>\n<a href=\"#\" class=\"pure-button alert yes-plan\">Yes</a>\n<a href=\"#\" class=\"pure-button alert no-plan\">No</a>\n\n";
  });

this["__tmp"]["signup/creditcard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2>Billing Information</h2>\n<form class=\" pure-form pure-form-stacked\">\n	<label for=\"card_number\">Credit Card Number</label>\n	<input type=\"text\" name=\"card_number\" id=\"card_number\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<div class=\"pure-g-r\">\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"cvc\">CVC</label>\n				<input type=\"text\" name=\"card_cvc\" id=\"cvc\" value=\"\"/ >\n			</div>\n		</div>\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"card_exp_month\">Expiration Month</label>\n				<input type=\"text\" name=\"card_exp_month\" id=\"card_exp_month\" value=\"\"/ >\n			</div>\n		</div>\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"card_exp_year\">Expiration Year</label>\n				<input type=\"text\" name=\"card_exp_year\" id=\"card_exp_year\" value=\"\"/ >\n			</div>\n		</div>\n		<input type=\"hidden\" name=\"plan\" value=\"";
  if (stack1 = helpers.planId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.planId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	</div>\n	<input type=\"submit\" class=\"pure-button alert\" value=\"Submit\"/>\n</form>\n";
  return buffer;
  });

this["__tmp"]["signup/dashboard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<p class=\"message\">";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<h3>Current Plan</h3>\n	<p>\""
    + escapeExpression(((stack1 = ((stack1 = depth0.plan),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" at $"
    + escapeExpression(((stack1 = ((stack1 = depth0.plan),stack1 == null || stack1 === false ? stack1 : stack1.amount)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " a "
    + escapeExpression(((stack1 = ((stack1 = depth0.plan),stack1 == null || stack1 === false ? stack1 : stack1.interval)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n	<h3>You have no plan</h3>\n	<p><a href=\"#\" data-view=\"updateplan\">Choose a Plan</a></p>\n";
  }

  buffer += "<h2>Hello.</h2>\n";
  stack1 = helpers['if'].call(depth0, depth0.message, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, depth0.plan, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<p> What would you like to do?</p>\n<ul>\n	<li> \n		<a href=\"#\" data-view=\"donate\">Donate</a>\n	</li>\n	<li> \n		<a href=\"#\" data-view=\"donate\">Make a Payment</a>\n	</li>\n	<li> \n		<a href=\"#\" data-view=\"updateplan\">Update Plan</a>\n	</li>\n	<li> \n		<a href=\"#\" data-view=\"updatepayment\">Change Card</a>\n	</li>\n	<li> \n		<a href=\"#\" data-view=\"cancelplan\">Cancel Membership</a>\n	</li>\n</ul>\n\n";
  return buffer;
  });

this["__tmp"]["signup/donte"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2>Donate to Riverside.io</h2>\n<p>Thanks you for your consideration.</p>\n<form class=\" pure-form pure-form-stacked\">\n	<label for=\"card_number\">Amount</label>\n	<input type=\"text\" name=\"card_number\" id=\"card_number\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<label for=\"card_number\">Credit Card Number</label>\n	<input type=\"text\" name=\"card_number\" id=\"card_number\" />\n	<div class=\"pure-g-r\">\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"cvc\">CVC</label>\n				<input type=\"text\" name=\"card_cvc\" id=\"cvc\" value=\"\"/ >\n			</div>\n		</div>\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"card_exp_month\">Expiration Month</label>\n				<input type=\"text\" name=\"card_exp_month\" id=\"card_exp_month\" value=\"\"/ >\n			</div>\n		</div>\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"card_exp_year\">Expiration Year</label>\n				<input type=\"text\" name=\"card_exp_year\" id=\"card_exp_year\" value=\"\"/ >\n			</div>\n		</div>\n	</div>\n	<input type=\"submit\" class=\"pure-button alert\" value=\"Submit\"/>\n	<a class=\"update-payment-cancel pure-button alert\">Cancel</a>\n</form>\n";
  return buffer;
  });

this["__tmp"]["signup/forgotpassword"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2>Reset Password</h2>\n<form class=\" pure-form pure-form-stacked\">\n	<label for=\"email\">Email</label>\n	<input type=\"email\" name=\"email\" id=\"email\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<input type=\"submit\" class=\"pure-button alert\" value=\"Request\"/>\n</form>";
  return buffer;
  });

this["__tmp"]["signup/login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n		<p class=\"message\">We have sent you an email to reset your password. Once you have reset your password come back to this page and login with your new password</p>\n	";
  }

  buffer += "<h2>Login</h2>\n<form class=\" pure-form pure-form-stacked\">\n	";
  stack1 = helpers['if'].call(depth0, depth0.reset, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<label for=\"email\">Email</label>\n	<input type=\"email\" name=\"email\" id=\"email\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<label for=\"email\">Password</label>\n	<input type=\"password\" name=\"password\" id=\"password\" value=\"\"/ >\n	<input type=\"submit\" class=\"pure-button alert\" value=\"Login\"/>\n</form>";
  return buffer;
  });

this["__tmp"]["signup/plans"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<li>\n			<input type=\"radio\" name=\"plan_id\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n			<h3>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n			<p>$";
  if (stack1 = helpers.amount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.amount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " a ";
  if (stack1 = helpers.interval) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.interval; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n		</li>	\n	";
  return buffer;
  }

  buffer += "<h2>Choose a Plan</h2>\n<form></form>\n<ul class=\"plan-list\">\n	";
  stack1 = helpers.each.call(depth0, depth0.plans, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<li>\n		<input type=\"radio\" name=\"plan_id\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-none=\"true\">\n		<h3>No Thanks</h3>\n		<p>You can always signup for a plan later on.</p>\n	</li>\n</ul>\n<a href=\"#\" class=\"pure-button alert submit-plan\">Next</a>\n\n";
  return buffer;
  });

this["__tmp"]["signup/signup"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2>Signup Today</h2>\n<form class=\" pure-form pure-form-stacked\">\n	<label for=\"email\">Email</label>\n	<input type=\"email\" name=\"email\" id=\"email\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<label for=\"password\">Password</label>\n	<input type=\"password\" name=\"password\" id=\"password\" value=\"\"/ >\n	<input type=\"submit\" class=\"pure-button alert\" value=\"Create\"/>\n</form>";
  return buffer;
  });

this["__tmp"]["signup/updatepayment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2>Update Billing Information</h2>\n<p>By submitting your information here will overwrite your old information if submission is successful.</p>\n<form class=\" pure-form pure-form-stacked\">\n	<label for=\"card_number\">Credit Card Number</label>\n	<input type=\"text\" name=\"card_number\" id=\"card_number\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<div class=\"pure-g-r\">\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"cvc\">CVC</label>\n				<input type=\"text\" name=\"card_cvc\" id=\"cvc\" value=\"\"/ >\n			</div>\n		</div>\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"card_exp_month\">Expiration Month</label>\n				<input type=\"text\" name=\"card_exp_month\" id=\"card_exp_month\" value=\"\"/ >\n			</div>\n		</div>\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"card_exp_year\">Expiration Year</label>\n				<input type=\"text\" name=\"card_exp_year\" id=\"card_exp_year\" value=\"\"/ >\n			</div>\n		</div>\n	</div>\n	<input type=\"submit\" class=\"pure-button alert\" value=\"Submit\"/>\n	<a class=\"update-payment-cancel pure-button alert\">Cancel</a>\n</form>\n";
  return buffer;
  });

this["__tmp"]["signup/updateplan"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<li>\n			<input type=\"radio\" name=\"plan_id\" class=\"switch\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n			<h3>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n			<p>$";
  if (stack1 = helpers.amount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.amount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " a ";
  if (stack1 = helpers.interval) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.interval; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n		</li>	\n	";
  return buffer;
  }

  buffer += "<h2>Update Plan</h2>\n<form></form>\n<ul class=\"plan-list\">\n	";
  stack1 = helpers.each.call(depth0, depth0.plans, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n<a href=\"#\" class=\"pure-button alert submit-plan\">Ok</a>\n<a href=\"#\" class=\"pure-button alert cancel-plan\">Cancel</a>\n";
  return buffer;
  });

this["__tmp"]["signup/updatethanks"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2>Thanks.</h2>\n<p>Your payment method has been updated</p>\n";
  });

return this["__tmp"];

});