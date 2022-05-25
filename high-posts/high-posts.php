<?php

/**
 * This plugins core files were created with a generator https://wppb.me/  
 *
 * @link              https://ernieshigh.dev/
 * @since             1.0.0
 * @package           High_Posts
 *
 * @wordpress-plugin
 * Plugin Name:       High Posts
 * Plugin URI:        https://github.com/ernieshigh/high-plugins
 * Description:       Adds custom post type funtionality
 * Version:           1.0.0
 * Author:            ernie
 * Author URI:        https://ernieshigh.dev/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       high-posts
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'HIGH_POSTS_VERSION', '1.0.0' );

 
register_activation_hook( __FILE__, 'activate_high_posts' );
register_deactivation_hook( __FILE__, 'deactivate_high_posts' );
function activate_high_posts() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-high-posts-activator.php';
	High_Posts_Activator::activate();
} 
function deactivate_high_posts() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-high-posts-deactivator.php';
	High_Posts_Deactivator::deactivate();
}


 
require plugin_dir_path( __FILE__ ) . 'includes/class-high-posts.php';

function run_high_posts() {

	$plugin = new High_Posts();
	$plugin->run();

}
run_high_posts();
