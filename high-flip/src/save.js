/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';


import {
	BlockControls, 
	RichText,
	InnerBlocks,
	MediaPlaceholder, 
	InspectorControls,
	PanelColorSettings,
	AlignmentToolbar, 
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
			backgroundColor,
			backBackgroundColor,
			backgroundImage,
			backgroundPosition,
			backgroundAttachment,
			backgroundRepeat,
			backgroundSize,
			backBackgroundImage,
			backBackgroundPosition,
			backBackgroundAttachment,
			backBackgroundRepeat,
			backBackgroundSize, 
			height,
			width,
			padding,
			flipDirection,
			frontText,
			frontBackground,
			backtext,
			backBackground,
			buttonBg,
			buttonText,
			panelSwitch,
		} = attributes;
	  
	 
	 
	return (
	
		<div
			{...useBlockProps.save()}  
			style={{
				height: height,
				width: width,
				padding: padding
			}}
		> 
			<div className={"high-inner-flip " + attributes.flipDirection}>
				<div className={'high-flip-front-background'} style={{ 
								backgroundColor: backgroundColor,
								backgroundImage: `url(${backgroundImage})`,
								backgroundPosition: backgroundPosition,
								backgroundSize: backgroundSize,
								backgroundRepeat: backgroundRepeat,
							}}>
				</div>
		
				<div className={'high-flip-back-background'}style={{ 
								backgroundColor: backBackgroundColor,
								backgroundImage: `url(${backBackgroundImage})`,
								backgroundPosition: backBackgroundPosition,
								backgroundSize: backBackgroundSize,
								backgroundRepeat: backBackgroundRepeat,
							}}>
				</div>
			</div>
		</div>
	);
}