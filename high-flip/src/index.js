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
import Edit from './edit';
import save from './save';


/** 
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('high-flip-block/high-flip', {
	
	 supports: { // Hey WP, I want to use your alignment toolbar!
        align: true, 
    },
 
	attributes: {
		backgroundColor:{
			type: "string",
		},
		backgroundImage: {
			type: "string",
		},
		backgroundPosition: {
			type: "string",
			default: "center",
		}, 
		backgroundRepeat: {
			type: "string",
			default: "no-repeat",
		},
		backgroundSize: {
			type: "string",
			default: "cover",
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
		backBackgroundColor:{
			type: "string",
		},
		backBackgroundImage: {
			type: "string",
		},
		backBackgroundPosition: {
			type: "string",
			default: "center",
		}, 
		backBackgroundRepeat: {
			type: "string",
			default: "no-repeat",
		},
		backBackgroundSize: {
			type: "string",
			default: "cover",
		}, 
		backBorderStyle: {
			type: "string",
		},
		backBorderWidth: {
			type: "string",
		},
		backBorderRadius: {
			type: "string", 
		},
		backBorderColor: {
			type: "string",
		}, 
		height: {
			type: "number", 
		},
		width: {
			type: 'string', 
		},
		flipDirection: {
			type: "string"
		},  
		subheading: {
		  type: 'string',
		},
		heading: {
		  type: 'string',
		},
		content: {
		  type: 'string',
		},
		subheadingColor: {
		  type: 'string',
		},
		headingColor: {
		  type: 'string',
		},
		contentColor:{
			type: 'string',
		},
		subheadingAlign: {
		  type: 'string',
		},
		headingAlign: {
		  type: 'string',
		},  
		contentAlign: {
		  type: 'string',
		},
		backSubheading: {
		  type: 'string',
		},
		backHeading: {
		  type: 'string',
		},
		backContent: {
		  type: 'string',
		},
		backSubheadingColor: {
		  type: 'string',
		},
		backHeadingColor: {
		  type: 'string',
		},
		backContentColor: {
		  type: 'string',
		}, 
		backContentAlign: {
		  type: 'string',
		},
		backSubheadingAlign: {
		  type: 'string',
		},
		backHeadingAlign: {
		  type: 'string',
		},
		panelSwitch: {
			type: "boolean",
		}, 
	},
	
 /* @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
});
