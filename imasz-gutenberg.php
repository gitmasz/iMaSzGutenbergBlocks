<?php

/**
 * Plugin Name: iMaSz Gutenberg
 * Description: Plugin with blocks for the Gutenberg editor dedicated for developers.
 * Version: 1.0.0
 * Author: Marcin Szczepkowski
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: imaszgutenberg
 *
 * @package imasz-gutenberg
 */

defined( 'ABSPATH' ) || exit;

include 'inner-div/index.php';
include 'richtext-content/index.php';
include 'inner-link/index.php';
include 'image/index.php';
include 'figure-image/index.php';

add_filter( 'block_categories', function($categories) {
	array_unshift($categories, [
		'slug' => 'imaszgutenberg',
		'title' => 'iMaSz Gutenberg'
	]);
	return $categories;
});

add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_script(
		'imasz-gutenberg-script',
		plugins_url( 'imasz-gutenberg-editor.js', __FILE__ )
	);
});