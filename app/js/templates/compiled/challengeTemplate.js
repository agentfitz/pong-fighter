define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['challenge'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\r\n\r\n<div id=\"team1\">\r\n	<img class=\"arena-player\" data-player=\"1\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.team1),stack1 == null || stack1 === false ? stack1 : stack1.profile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"\">\r\n</div>\r\n\r\n<div id=\"vs\" class=\"center-xy-line-height\">\r\n	<div>VS</div>\r\n</div>\r\n\r\n<div id=\"team2\">\r\n	<img class=\"arena-player\" data-player=\"1\" src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.team2),stack1 == null || stack1 === false ? stack1 : stack1.profile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"\">\r\n</div>";
  return buffer;
  });
});