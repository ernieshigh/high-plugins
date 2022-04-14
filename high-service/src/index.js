/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('high/high-service', {
	
	supports: {
		align:true, 
		spacing: {
			margin: true,  // Enable margin UI control.
			padding: true, // Enable padding UI control.
		},
		color: { 
			gradients: true // Enable gradients UI control.
		}
	  },
 
	attributes: {
		title: {
			type: 'string',
			selector: '.service-title',
			default: 'A High Service',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			selector: 'img',
			attribute: 'src',
		},
		description: {
			type: 'array',
			source: 'children',
			selector: '.high-service-description',
		},
		backgroundColor: {
			type: 'string',
		},

		textColor: {
			type: 'string',
		},
		
		align: {
			type: 'string'
		},
		
		alignment: {
			type: 'string'
		}, 
		borderStyle: {
			type: "string",
		},
		borderWidth: {
			type: "string",
		},
		borderRadius: {
			type: "string", 
		},
		borderColor: {
			type: "string",
		},
		padding: {
			type: "string"
		}
	},
	 
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});

 