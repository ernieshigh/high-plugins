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
	
	supports: { 
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
		textColor: {
			type: 'string',
		}, 
		height: {
			type: "number", 
		},
		width: {
			type: 'string', 
		},
		padding:{
			type: 'string'
		},
		flipDirection: {
			type: "string"
		},
		contentAlign: {
			type: "string",
			default: "center",
		},
		frontText: {
			type: "string",
		},
		frontBackground: {
			type: "string",
		},
		backText: {
			type: "string",
		},
		backBackground: {
			type: "string",
		},
		buttonBg: {
			type: "string",
		},
		buttonText: {
			type: "string",
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
