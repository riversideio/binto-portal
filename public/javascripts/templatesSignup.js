define(['handlebars'], function(Handlebars) {

this["__tmp"] = this["__tmp"] || {};

this["__tmp"]["signup/creditcard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2>Billing Information</h2>\n<form class=\" pure-form pure-form-stacked\">\n	<label for=\"card_number\">Credit Card Number</label>\n	<input type=\"text\" name=\"card_number\" id=\"card_number\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<div class=\"pure-g-r\">\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"cvc\">CVC</label>\n				<input type=\"text\" name=\"card_cvc\" id=\"cvc\" value=\"\"/ >\n			</div>\n		</div>\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"card_exp_month\">Expiration Month</label>\n				<input type=\"text\" name=\"card_exp_month\" id=\"card_exp_month\" value=\"\"/ >\n			</div>\n		</div>\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"card_exp_year\">Expiration Year</label>\n				<input type=\"text\" name=\"card_exp_year\" id=\"card_exp_year\" value=\"\"/ >\n			</div>\n		</div>\n	</div>\n	<input type=\"submit\" class=\"pure-button alert\" value=\"Submit\"/>\n</form>\n";
  return buffer;
  });

this["__tmp"]["signup/login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2>Login</h2>\n<form class=\" pure-form pure-form-stacked\">\n	<label for=\"email\">Email</label>\n	<input type=\"email\" name=\"email\" id=\"email\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<label for=\"email\">Password</label>\n	<input type=\"password\" name=\"password\" id=\"password\" value=\"\"/ >\n	<input type=\"submit\" class=\"pure-button alert\" value=\"Login\"/>\n</form>";
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
    + "\" />\n	<label for=\"email\">Password</label>\n	<input type=\"password\" name=\"password\" id=\"password\" value=\"\"/ >\n	<input type=\"submit\" class=\"pure-button alert\" value=\"Create\"/>\n</form>";
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
    + "\" />\n	<div class=\"pure-g-r\">\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"cvc\">CVC</label>\n				<input type=\"text\" name=\"card_cvc\" id=\"cvc\" value=\"\"/ >\n			</div>\n		</div>\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"card_exp_month\">Expiration Month</label>\n				<input type=\"text\" name=\"card_exp_month\" id=\"card_exp_month\" value=\"\"/ >\n			</div>\n		</div>\n		<div class=\"pure-u-1-3\">\n			<div>\n				<label for=\"card_exp_year\">Expiration Year</label>\n				<input type=\"text\" name=\"card_exp_year\" id=\"card_exp_year\" value=\"\"/ >\n			</div>\n		</div>\n	</div>\n	<input type=\"submit\" class=\"pure-button alert\" value=\"Submit\"/>\n</form>\n";
  return buffer;
  });

this["__tmp"]["signup/updatethanks"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2>Thanks.</h2>\n<p>Your payment method has been updated</p>\n";
  });

return this["__tmp"];

});