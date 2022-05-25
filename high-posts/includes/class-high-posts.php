<?php

/** 
 * 
 *
 * @link       https://ernieshigh.dev/
 * @since      1.0.0
 *
 * @package    High_Posts
 * @subpackage High_Posts/includes
 */
 
class High_Posts {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      High_Posts_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	 
	protected $plugin_name;
	protected $version;
  
	public function __construct() {
		if ( defined( 'HIGH_POSTS_VERSION' ) ) {
			$this->version = HIGH_POSTS_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'high-posts';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}
 
	private function load_dependencies() {
 
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-high-posts-loader.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-high-posts-i18n.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-high-posts-admin.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-high-posts-public.php';

		$this->loader = new High_Posts_Loader();

	} 
	private function set_locale() {

		$plugin_i18n = new High_Posts_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	} 
	
	private function define_admin_hooks() {

		$plugin_admin = new High_Posts_Admin( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
		$this->loader->add_action( 'init', $plugin_admin, 'new_high_posts' );

	}
 
	private function define_public_hooks() {

		$plugin_public = new High_Posts_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    High_Posts_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
