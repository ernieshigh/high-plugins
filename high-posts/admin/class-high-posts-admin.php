<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://ernieshigh.dev/
 * @since      1.0.0
 *
 * @package    High_Posts
 * @subpackage High_Posts/admin
 */
 
class High_Posts_Admin {
 
	private $plugin_name;
	private $version;

	
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}
 
	public function enqueue_styles() { 
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/high-posts-admin.css', array(), $this->version, 'all' );

	}
 
	public function enqueue_scripts() { 

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/high-posts-admin.js', array( 'jquery' ), $this->version, false );

	}
	
	/**
		* Creates a new custom post type
		*
		* @since 1.0.0
		* @access public
		* @uses register_post_type()
		*/
		public static function new_high_posts() {
			$cap_type = 'post';
			$plural = 'High Posts';
			$single = 'High Post';
			$cpt_name = 'rdm-quote';
			$opts['can_export'] = TRUE;
			$opts['capability_type'] = $cap_type;
			$opts['description'] = '';
			$opts['exclude_from_search'] = FALSE;
			$opts['has_archive'] = FALSE;
			$opts['hierarchical'] = FALSE;
			$opts['map_meta_cap'] = TRUE;
			$opts['menu_icon'] = 'dashicons-businessman';
			$opts['menu_position'] = 25;
			$opts['public'] = TRUE;
			$opts['publicly_querable'] = TRUE;
			$opts['query_var'] = TRUE;
			$opts['register_meta_box_cb'] = '';
			$opts['rewrite'] = FALSE;
			$opts['show_in_admin_bar'] = TRUE;
			$opts['show_in_menu'] = TRUE;
			$opts['show_in_nav_menu'] = TRUE;

			$opts['labels']['add_new'] = esc_html__( "Add New {$single}", 'high-posts' );
			$opts['labels']['add_new_item'] = esc_html__( "Add New {$single}", 'high-posts' );
			$opts['labels']['all_items'] = esc_html__( $plural, 'high-posts' );
			$opts['labels']['edit_item'] = esc_html__( "Edit {$single}" , 'high-posts' );
			$opts['labels']['menu_name'] = esc_html__( $plural, 'high-posts' );
			$opts['labels']['name'] = esc_html__( $plural, 'high-posts' );
			$opts['labels']['name_admin_bar'] = esc_html__( $single, 'high-posts' );
			$opts['labels']['new_item'] = esc_html__( "New {$single}", 'high-posts' );
			$opts['labels']['not_found'] = esc_html__( "No {$plural} Found", 'high-posts' );
			$opts['labels']['not_found_in_trash'] = esc_html__( "No {$plural} Found in Trash", 'high-posts' );
			$opts['labels']['parent_item_colon'] = esc_html__( "Parent {$plural} :", 'high-posts' );
			$opts['labels']['search_items'] = esc_html__( "Search {$plural}", 'high-posts' );
			$opts['labels']['singular_name'] = esc_html__( $single, 'high-posts' );
			$opts['labels']['view_item'] = esc_html__( "View {$single}", 'high-posts' );
			register_post_type( strtolower( $cpt_name ), $opts );
		} // new_cpt_job()

	 

}
