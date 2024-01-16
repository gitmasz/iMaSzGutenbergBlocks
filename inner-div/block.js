( function( blocks, blockEditor, i18n, element, components, _  ) {
	var __ = i18n.__;
	var el = element.createElement;
	var InnerBlocks = blockEditor.InnerBlocks;
	var MediaUpload = blockEditor.MediaUpload;
	
	blocks.registerBlockType( 'imasz-gutenberg/inner-div', {
		title: __( 'Inner DIV', 'imaszgutenberg' ),
		category: 'imaszgutenberg',
		icon: 'editor-code',
		supports: {
			anchor: true,
		},
		attributes: {
			mediaID: {
				type: 'number',
				default: 0
			},
			mediaURL: {
				type: 'string',
				default: ''
			},
		},
		edit: function( props ) {
			var attributes = props.attributes;
			
			var onSelectImage = function( media ) {
				return props.setAttributes( {
					mediaID: media.id,
					mediaURL: media.url,
				} );
			};
			
			var removeMedia = function( media ) {
				return props.setAttributes( {
					mediaID: 0,
					mediaURL: '',
				} );
			};
			
			return el(
				'div',
				{ className: 'imasz_block div ' + props.className },
				el(
					'div',
					{ className: 'block_options_switch' },
					el( 'span', {className: 'options_toggle'}, __( 'block options', 'imaszgutenberg' ) ),
				),
				el(
					'div',
					{ className: 'block_options' },
					el( 'div', {className: 'block_option_title'}, __( 'Background Image', 'imaszgutenberg' ) ),
					el( MediaUpload, {
						onSelect: onSelectImage,
						allowedTypes: 'image',
						value: attributes.mediaID,
						render: function( obj ) {
							return el(
								components.Button,
								{
									className: 'button button-large',
									onClick: obj.open,
								},
								! attributes.mediaID
									? __( 'Upload Image', 'imaszgutenberg' )
									: __( 'Replace Image', 'imaszgutenberg' )
							);
						},
					} ),
					el(
						components.Button,
						{
							className: ! attributes.mediaID
								? 'hidden_button'
								: 'button button-large',
							onClick: removeMedia,
						},
						! attributes.mediaID
							? __( 'Image not yet set', 'imaszgutenberg' )
							: __( 'Remove Image', 'imaszgutenberg' )
					),
					el(
						'div',
						{ className: 'background_image_url' },
						! attributes.mediaID
							? __( 'URL: image not yet set', 'imaszgutenberg' )
							:  __( 'URL: ', 'imaszgutenberg' ) + attributes.mediaURL
					),
				),
				el( InnerBlocks ),
			);
		},
		save: function( props ) {
			var attributes = props.attributes;
			return el(
				'div',
				{ className: props.className, style: attributes.mediaID ? { backgroundImage: 'url(' + attributes.mediaURL + ')' } : {} },
				el( InnerBlocks.Content )
			);
		},
	} );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.i18n, window.wp.element, window.wp.components, window._ );