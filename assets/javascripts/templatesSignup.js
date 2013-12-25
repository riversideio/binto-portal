define(['handlebars'], function(Handlebars) {

this["__tmp"] = this["__tmp"] || {};

this["__tmp"]["signup/signup"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"main row signup signup-form\">\n	<a href=\"\" class=\"login-switch\">Already have an Account?</a>\n	<h1>Riverside.io</h1>\n	<div class=\"clearfix\"></div>\n	<h2>Signup Today</h2>\n	<form class=\" pure-form pure-form-stacked\">\n		<label for=\"email\">Email</label>\n		<input type=\"text\" name=\"email\" id=\"email\" value=\"";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n		<label for=\"email\">Password</label>\n		<input type=\"password\" name=\"password\" id=\"password\" value=\"\"/ >\n		<input type=\"submit\" class=\"pure-button alert\" value=\"Create\"/>\n	</form>\n	<div class=\"clearfix\"></div>\n	<p class=\"signup-secure\"> You might notice that you have changed domains, thats alright your still on a domain managed by <a href=\"http://riverside.io/\">Riverside.io</a>. We just pushed you to this domain because it is secure and when passing sensative data security is key. Questions? contact <a href=\"mailto:info@riverside.io\">info@riverside.io</a></p>\n</div>\n<script>\nvar _signup = true;\n</script>\n";
  return buffer;
  });

return this["__tmp"];

});