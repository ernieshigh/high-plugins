/**
	*
	* Some JS for scroll
	*
**/  
	jQuery(function($) {
'use strict';

	// Instantiates the variable that holds the media library frame.
	var metaImageFrame; 

	// Runs when the media button is clicked.
	$( 'body' ).click(function(e) {

		// Get the btn
		var btn = e.target;

		// Check if it's the upload button
		if ( !btn || !$( btn ).attr( 'data-media-uploader-target' ) ) return;

		// Get the field target
		var field = $( btn ).data( 'media-uploader-target' );

		// Prevents the default action from occuring.
		e.preventDefault();

		// Sets up the media library frame
		metaImageFrame = wp.media.frames.metaImageFrame = wp.media({ 
			button: { text:  'Use this file' },
		});

		// Runs when an image is selected.
		metaImageFrame.on('select', function() {
			
			alert(field)

			// Grabs the attachment selection and creates a JSON representation of the model.
			var media_attachment = metaImageFrame.state().get('selection').first().toJSON();

			// Sends the attachment URL to our custom image input field.
			$('input[name="high_image"]').val(media_attachment.url);
			
			$(field).attr('src', media_attachment.url)

		});

		// Opens the media library frame.
		metaImageFrame.open();

	});
  }); 
