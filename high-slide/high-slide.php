<?php
/*
Plugin Name:  High CSS Slider
Plugin URI:  https://github.com/ernieshigh/bs
Description:  Creates an all CSS sliding background
Version:      0.0.1
Author:       ernie
Author URI:   https://ernieshigh.dev
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  high-slide
Domain Path:  /languages
*/
 
add_action( 'wp_enqueue_scripts', 'high_enqueue' );
function high_enqueue() {
    wp_enqueue_style( 'high-style', plugin_dir_url( __FILE__ ) . 'high-style.css' );
    wp_enqueue_script( 'high-js', plugin_dir_url( __FILE__ ) . '/js/high-js.js' );
	
    wp_enqueue_media();
}


add_action('admin_enqueue_scripts', 'high_admin_scripts');
function high_admin_scripts() { 
		wp_enqueue_style( 'thickbox' ); 
		
		wp_enqueue_style( 'admin-style', WP_PLUGIN_URL.'/high-slide/css/high-admin-style.css',); 
		wp_enqueue_script( 'thickbox' );  
        wp_enqueue_media();
        wp_enqueue_script ('high-admin', WP_PLUGIN_URL.'/high-slide/js/high-admin-js.js', array('jquery'));
        
    
}



include( plugin_dir_path( __FILE__ ) . 'high-functions.php');
register_activation_hook( __FILE__, 'high_slide_activate' );
function high_slide_activate() {

  add_option( 'Activated_Plugin', 'high-css-slider' );
 
}

add_action( 'admin_init', 'load_plugin' );
function load_plugin() {

    if ( is_admin() && get_option( 'Activated_Plugin' ) == 'high-css-slider' ) {

        delete_option( 'Activated_Plugin' );
 
		
add_action( 'init', 'high_slide_setup' );
    }
}