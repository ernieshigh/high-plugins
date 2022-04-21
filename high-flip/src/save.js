/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';


import {
	BlockControls, 
	RichText,
	MediaPlaceholder, 
	InspectorControls,
	PanelColorSettings,
	AlignmentToolbar, 
	BlockAlignmentToolbar,
	MediaUpload, 
	MediaUploadCheck ,
	
} from '@wordpress/block-editor';



import {
	Panel,
	PanelBody,
	ResponsiveWrapper ,
	PanelRow,
	ToggleControl,
	SelectControl,
	RangeControl,
	TextControl,
	ColorPalette, 
	ColorPicker,
	ButtonGroup,
	Button,
	Dashicon, 
	Icon,
	BaseControl,
	 __experimentalUnitControl as UnitControl,
	 __experimentalBoxControl as BoxControl 
} from '@wordpress/components';




import{
	useState,
	Component, 
	Fragment ,
} from '@wordpress/element';

const { withSelect } = wp.data; 

	
	
import { useBlockProps } from '@wordpress/block-editor';
 

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes, isSelected, setAttributes ,className}) {
	
 
	const {
		alignment,
		backgroundColor,
		backgroundImage,
		backgroundPosition,
		backgroundAttachment,
		backgroundRepeat,
		backgroundSize,
		borderWidth,
		borderStyle,
		borderColor,
		borderRadius,
		backBackgroundColor,
		backBackgroundImage,
		backBackgroundPosition,
		backBackgroundAttachment,
		backBackgroundRepeat,
		backBackgroundSize, 
		backBorderStyle,
		backBorderColor,
		backBorderWidth,
		backBorderRadius,  
		height,
		width, 
		subheading,
		heading,
		content,
		subheadingColor,
		headingColor,
		contentColor,
		subheadingAlign,
		headingAlign,
		contentAlign,
		backSubheading,
		backHeading,
		backContent,
		backSubheadingColor,
		backHeadingColor,
		backContentColor,
		backSubheadingAlign,
		backHeadingAlign,
		backContentAlign,
		panelSwitch, 
	} = attributes;
	
	 
	return (
	
		<div
			{...useBlockProps.save()}  
			style={{
				height: height,
				width: width,
			}}
		> 
			<div className={"high-inner-flip " + attributes.flipDirection}>
				<div className={'high-flip-front-background'} style={{ 
								backgroundColor: backgroundColor,
								backgroundImage: `url(${backgroundImage})`,
								backgroundPosition: backgroundPosition,
								backgroundSize: backgroundSize,
								backgroundRepeat: backgroundRepeat,
								borderWidth: borderWidth,
								borderColor: borderColor,
								borderStyle: borderStyle,
								borderRadius: borderRadius,
							}}>
					 
					<RichText.Content tagName="h3" className='flip-subhead front-subheading' value={ attributes.subheading } style ={{color:subheadingColor, textAlign: subheadingAlign}}/>
					<RichText.Content tagName="h2" className='flip-head front-heading' value={ attributes.heading } style ={{color:headingColor, textAlign: headingAlign}} />
					<RichText.Content tagName="p" className='flip-content front-content' value={ attributes.content } style ={{color:contentColor, textAlign: contentAlign}}/>

				</div>
		
				<div className={'high-flip-back-background'}style={{ 
								backgroundColor: backBackgroundColor,
								backgroundImage: `url(${backBackgroundImage})`,
								backgroundPosition: backBackgroundPosition,
								backgroundSize: backBackgroundSize,
								backgroundRepeat: backBackgroundRepeat,
								borderWidth: backBorderWidth,
								borderColor: backBorderColor,
								borderStyle: backBorderStyle,
								borderRadius: backBorderRadius,
							}}>
							
					
					<RichText.Content tagName="h3" className='flip-subhead back-subheading' value={ attributes.backSubheading } style ={{color:backSubheadingColor, textAlign: backSubheadingAlign}}/>
					<RichText.Content tagName="h2" className='flip head back-heading' value={ attributes.backHeading } style ={{color:backHeadingColor, textAlign: backHeadingAlign}} />
					<RichText.Content tagName="p" className='flip-content back-content' value={ attributes.backContent } style ={{color:backContentColor, textAlign: backContentAlign}}/>
				</div>
			</div>
		</div>
	);
}