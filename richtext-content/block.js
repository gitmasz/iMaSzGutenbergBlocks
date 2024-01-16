( function( blocks, blockEditor, i18n, element, ) {
	var __ = i18n.__;
	var el = element.createElement;
	var RichText = blockEditor.RichText;
	
	blocks.registerBlockType( 'imasz-gutenberg/richtext-content', {
		title: __( 'RichText Content', 'imaszgutenberg' ),
		category: 'imaszgutenberg',
		icon: 'edit',
		supports: {
			anchor: false,
			customClassName: false,
		},
		attributes: {
			content: {
				type: 'array',
				source: 'children',
			},
		},
		edit: function( props ) {
			var content = props.attributes.content;
			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}
			return el( RichText, {
				tagName: 'div',
				className: 'imasz_content blank ' + props.className,
				onChange: onChangeContent,
				value: content,
			} );
		},
		save: function( props ) {
			return el( RichText.Content, {
				value: props.attributes.content,
			} );
		},
	} );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.i18n, window.wp.element );