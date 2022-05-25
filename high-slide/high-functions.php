<?php
/***
	*
	* Functions for adding users to database
	*
***/

// Call high_css_slide_menu function to load plugin menu in dashboard

 

 
 function high_slide_setup() {
	$labels = array(
		'name' => __( 'High Slide', 'high-css-slider' ),
		'singular_name' => __( 'Slide', 'high-css-slider' ),
		'add_new_item' => __( 'Add New Slide', 'high-css-slider' ),
		'edit_item' => __( 'Edit Slide', 'high-css-slider' ),
		'new_item' => __( 'New Slide', 'high-css-slider' ),
		'not_found' => __( 'No Slide found', 'high-css-slider' ),
		'all_items' => __( 'All Slide', 'high-css-slider' )
	);
	$args = array(
		'labels' => $labels,
		'public' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'has_archive' => true,
		'map_meta_cap' => true,
		'menu_icon' => 'dashicons-admin-media',		
		'supports' => array( 'title', 'thumbnail', 'author' ),
		'taxonomies' => array( 'slide-type' )
	);
	register_post_type( 'high-slide', $args );
}

add_action( 'init', 'high_slide_setup' );


add_action('add_meta_boxes', 'add_high_meta_box');
function add_high_meta_box() {
    add_meta_box(
        'high_meta_box', // $id
        'High Slide', // $title 
        'show_high_meta_box', // $callback
        'high-slide', // $page
        'normal', // $context
        'high'); // $priority
}

// array pf field values 
$prefix = 'high_';
$custom_high_fields = array(
    array(
        'label'=> 'Heading',
        'desc'  => 'Optional slide heading.',
        'id'    => $prefix.'text',
        'type'  => 'text'
    ),
	array(
		
        'label'=> 'Background Image',
		'name'  => 'Image',
		'desc'  => 'Add image for slide background.',
		'id'    => $prefix.'image',
		'type'  => 'image'
	)
 
);


// wtf now
function show_high_meta_box() {
global $custom_high_fields, $post;
// Use nonce for verification
echo '<input type="hidden" name="high_meta_box_nonce" value="'.wp_create_nonce(basename(__FILE__)).'" />';
     
    // Begin the field table and loop
    echo '<table class="form-table">';
    foreach ($custom_high_fields as $field) {
        // get value of this field if it exists for this post
		
        $meta = get_post_meta($post->ID, $field['id'], true); 
		 
		
        echo '<tr>
                <th><label for="'.$field['id'].'">'.$field['label'].'</label></th>
                <td>';
                switch($field['type']) {  
					// text
					case 'text':
						echo '<input type="text" name="'.$field['id'].'" id="'.$field['id'].'" value="'.$meta.'" size="30" />
							<br /><span class="description">'.$field['desc'].'</span>';
					break;
					case 'image':
						$image = WP_PLUGIN_URL.'/high-slide/images/anthony.jpg';  
						
						if($meta){ 
							echo '<img src="' . $meta . '" class="custom_preview_image " name="myplugin_media" id="myplugin_media"  ><br> ';
						}
						echo '<input name="'.$field['id'].'" type="hidden" class="custom_upload_image" value="" /> 
							<img src=" " class="custom_preview_image " name="myplugin_media" id="myplugin_media"  ><br>
							<button type="button" class="button" id="events_video_upload_btn" data-media-uploader-target="#myplugin_media"> Upload Media </button>';
						
					break;
					
                } //end switch
        echo '</td></tr>';
    } // end foreach
    echo '</table>'; // end table
}

// Save the Data
function save_high_meta($post_id) {
    global $custom_high_fields;
     
    // verify nonce
    if (!wp_verify_nonce($_POST['high_meta_box_nonce'], basename(__FILE__))) 
        return $post_id;
    // check autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return $post_id;
    // check permissions
    if ('high-slide' == $_POST['post_type']) {
        if (!current_user_can('edit_page', $post_id))
            return $post_id;
        } elseif (!current_user_can('edit_post', $post_id)) {
            return $post_id;
    }
     
    // loop through fields and save the data
    foreach ($custom_high_fields as $field) {
        $old = get_post_meta($post_id, $field['id'], true);
        $new = $_POST[$field['id']];
		
		echo 'old = ' .$old . '<br>';
		
		echo 'new = ' .$new . '<br>';
        if ($new && $new != $old) {
            update_post_meta($post_id, $field['id'], $new);
        } elseif ('' == $new && $old) {
            delete_post_meta($post_id, $field['id'], $old);
        }
    } // end foreach
}
add_action('save_post', 'save_high_meta');