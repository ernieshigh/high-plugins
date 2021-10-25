/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
 
 
import {BlockControls, RichText, InnerBlocks, MediaPlaceholder, MediaUpload, InspectorControls, PanelColorSettings, AlignmentToolbar, } from '@wordpress/block-editor';
import { Panel, PanelBody,  PanelRow,  SelectControl, TextControl, ColorPalette } from '@wordpress/components';


// custom colors for color picker on block
const high_colors = [
    {
        color: '#ffffff',
        name: 'White',
    },
	{	color: '#000000',
		name: 'Black',
	},
 
    {
        color: '#58A445',
        name: 'Green',
    },
	{
		 color: '#1d2a53',
		 name: 'Blue'
	}
];

export default function Edit( { attributes, isSelected, setAttributes } ) {
		const { title, alignment, backgroundColor, textColor} = attributes; 
		const onChangeBackgroundColor = ( newBackgroundColor ) => {
			setAttributes( { backgroundColor: newBackgroundColor } )
		}
		const onChangeTextColor = ( newTextColor ) => {
			setAttributes( { textColor: newTextColor } )
		}
		const TEMPLATE = [
    [ 'core/heading', {content: 'High Service Title',  className: 'service-heading'} ],
    [ 'core/image', {} ],
    [ 'core/paragraph', { content: 'Summary' } ],
    ];
	
	return ( 	
			<>
			<InspectorControls>	
				<Panel>
					<PanelRow>
						<label>Background</label>
						<ColorPalette 
							colors={ [ ...high_colors,] }
							value={ backgroundColor }
							onChange={onChangeBackgroundColor} // onChange event callback
						/> 
					</PanelRow>
			
					<PanelRow>
						<label>Text Color</label>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							value={ textColor }
							colors={ [ ...high_colors,] }
							onChange={onChangeTextColor} // onChange event callback
						/> 
					</PanelRow>
				</Panel>
			</InspectorControls>,
			
			<div { ...useBlockProps() }   style={{ textAlign: alignment, backgroundColor: backgroundColor, color: textColor}} >
				<BlockControls>
					<AlignmentToolbar value={alignment} onChange={(newVal) => setAttributes({alignment: newVal})} />
				</BlockControls>
				
					<InnerBlocks
					template={ TEMPLATE }
					templateLock="all"
				/>
				
				
			</div>
			</>
		);
	}
