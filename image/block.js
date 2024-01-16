( function( blocks, blockEditor, i18n, element, components, _  ) {
	var __ = i18n.__;
	var el = element.createElement;
	var MediaUpload = blockEditor.MediaUpload;
	
	blocks.registerBlockType( 'imasz-gutenberg/image', {
		title: __( 'Image', 'imaszgutenberg' ),
		category: 'imaszgutenberg',
		icon: 'format-image',
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
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
				default: ''
			},
			mediaALT: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'alt',
				default: ''
			},
		},
		edit: function( props ) {
			var attributes = props.attributes;
			
			var onSelectImage = function( media ) {
				return props.setAttributes( {
					mediaID: media.id,
					mediaURL: media.url,
					mediaALT: media.alt,
				} );
			};
			
			return el(
				'div',
				{ className: 'imasz_content image ' + props.className },
					el( MediaUpload, {
						onSelect: onSelectImage,
						allowedTypes: 'image',
						value: attributes.mediaID,
						render: function( obj ) {
							return el(
								components.Button,
								{
									className: attributes.mediaID
										? 'image_button'
										: 'button button-large',
									onClick: obj.open,
								},
								! attributes.mediaID
									? __( 'Upload Image', 'imaszgutenberg' )
									: el( 'img', { src: attributes.mediaURL, alt: attributes.mediaALT } )
							);
						},
					} ),
			);
		},
		save: function( props ) {
			var attributes = props.attributes;
			return el(
				'img',
				{ src: attributes.mediaURL, alt: attributes.mediaALT, className: props.className, },
			);
		},
	} );
} )( window.wp.blocks, window.wp.blockEditor, window.wp.i18n, window.wp.element, window.wp.components, window._ );