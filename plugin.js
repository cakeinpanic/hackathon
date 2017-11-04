module.exports = postcss.plugin('postcs-upside-down', function (opts) {
	return function (css, result) {
		css.walkRules(function(rule) {
			rule.selector = rule.selector + ', .hello';
		});
		css.walkDecls(function(decl) {
			if (decl.prop === 'width') {
				var comment = postcss.comment({text: 'Upside down!'});
				comment.source = decl.source; //for sourcemaps
				decl.prop = 'height';
				decl.parent.insertBefore(decl, comment);
			}
		});
	};
});