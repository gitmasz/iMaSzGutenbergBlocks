<?php

defined( 'ABSPATH' ) || exit;

function gutenberg_figure_image_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	};

	wp_register_style(
		'gutenberg-figure-image-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
	
	wp_register_script(
		'gutenberg-figure-image',
		plugins_url( 'block.js', __FILE__ ),
		[ 'wp-blocks', 'wp-element', 'wp-block-editor' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ),
		true
	);

	register_block_type(
		'imasz-gutenberg/figure-image',
		[
			'editor_script' => 'gutenberg-figure-image',
			'editor_style' => 'gutenberg-figure-image-editor',
		]
	);

}
add_action( 'init', 'gutenberg_figure_image_register_block' );