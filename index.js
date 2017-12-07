module.exports = function ({ types: t }) {
	return {
		visitor: {
			ExportDefaultDeclaration(path, state) {
				const { template } = state.opts;
				const declaration = path.get('declaration');
				const { node } = declaration;

				if (node.properties) {
					node.properties.unshift(
						t.objectProperty(
							t.identifier('template'),
							t.templateLiteral([
								t.templateElement({
									raw: template,
								})
							], [])
						)
					);
				}
			},
		},
	};
};
