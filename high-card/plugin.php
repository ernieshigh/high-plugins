<?php
/**
 * Plugin Name: High Card
 * Plugin URI: https://github.com/ernieshigh/High-Card
 * Description: High Card is a custom Gutenberg block plugin. Creates a block t show image/test side by side 
 * Author: ernie
 * Author URI: https://ernieshigh.dev
 * Version: 0.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * 
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
