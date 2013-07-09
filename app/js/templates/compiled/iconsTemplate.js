define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['icons.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n		<li class=\"icon\" draggable=\"true\">\r\n			<img src=\""
    + escapeExpression(helpers.getIconSrc.call(depth0, depth0.email, {hash:{},data:data}))
    + "\" alt=\""
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n		</li>\r\n	";
  return buffer;
  }

  buffer += "\r\n\r\n<ul>\r\n	";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });
});