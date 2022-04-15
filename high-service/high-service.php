<?php
/**
 * Plugin Name:       High Service
 * Description:       A custom block creating image/text card
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.9
 * Author:            ernie
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       high-service
 *
 * @package           high
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function high_high_service_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'high_high_service_block_init' );

 