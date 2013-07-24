define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['intro'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\r\n\r\n<img src=\""
    + escapeExpression(((stack1 = depth0.imgPath),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"\">\r\n<p><a href=\"#\">"
    + escapeExpression(((stack1 = depth0.msg),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></p>";
  return buffer;
  });
});