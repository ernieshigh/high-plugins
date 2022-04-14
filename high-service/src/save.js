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
	MediaUpload,
	InspectorControls,
	PanelColorSettings,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
	ColorPalette,
	 __experimentalUnitControl as UnitControl,
	DimensionControl
} from '@wordpress/components';



import { useState } from '@wordpress/compose';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
 
	const onChangeBorderWidth = (newBorderWidth) => {
		setAttributes({ borderWidth: newBorderWidth });
	};
	const onChangeBorderRadius = (newBorderRadius) => {
		setAttributes({ borderRadius: newBorderRadius });
	};
	const units = [
		{ value: 'px', label: 'px', default: 0 },
		{ value: '%', label: '%', default: 10 },
		{ value: 'em', label: 'em', default: 0 },
	];
	
export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	const { title, align, alignment, backgroundColor, textColor, width, borderStyle, borderWidth, borderColor, borderRadius, padding} = attributes;

	return (
		<div
			{...useBlockProps.save()}
			style={{  
				backgroundColor: backgroundColor,
				color: textColor,
				borderWidth: borderWidth,
				borderColor: borderColor,
				borderStyle: borderStyle,
				borderRadius: borderRadius,
				padding: padding,
			}}
		>
			<InnerBlocks.Content />
		</div>
	);
}
