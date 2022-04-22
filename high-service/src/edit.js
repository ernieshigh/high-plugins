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
	PanelHeader,
	SelectControl,
	TextControl,
	ColorPalette,
	 __experimentalUnitControl as UnitControl, 
} from '@wordpress/components';


import { useState } from '@wordpress/compose';


// custom colors for color picker on block
const high_colors = [
	{
		color: '#ffffff',
		name: 'White',
	},
	{ color: '#000000', name: 'Black' },

	{
		color: '#58A445',
		name: 'Green',
	},
	{
		color: '#1d2a53',
		name: 'Blue',
	},
];

export default function Edit({ attributes, isSelected, setAttributes }) {
	const {borderStyle, borderWidth,borderColor,borderRadius} = attributes;
	 
	const onChangeBorderColor = (newBorderColor) => {
		setAttributes({ borderColor: newBorderColor });
	};
	
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
	const TEMPLATE = [
		[
			'core/heading',
			{ placeholder: 'Add Service Heading', className: 'service-title' },
		],
		['core/media-text',
		{ placeholder: 'Add Service Content', className: 'service-content' }], 
		['core/button', {}], 
	];

	return (
		<>
			<InspectorControls>
				<Panel>  
					<PanelBody
						title={__('Styling')}
						initialOpen={false}
					>
						<PanelRow>
							<PanelHeader>Borders</PanelHeader>
								
								<UnitControl
									label={__("Border Width")}
									value = {attributes.borderWidth}
									onChange={(newBorderWidth) => setAttributes({ borderWidth: newBorderWidth })}
								/> 
								<SelectControl
									label={__("Border Style")}
									value={attributes.borderStyle}
									options={ [
										{ label: 'Choose Style', value: '' },
										{ label: 'Solid', value: 'solid' },
										{ label: 'Dashed', value: 'dashed' },
										{ label: 'Dotted', value: 'dotted' },
										{ label: 'Double', value: 'double' },
										{ label: 'Grooved', value: 'grooved' },
										{ label: 'Outset', value: 'outset' },
										{ label: 'Ridge', value: 'ridge' },
									] }
									onChange={(newBorderStyle) => setAttributes({ borderStyle: newBorderStyle })}
								/>
								<h4> Border Color </h4>
								<ColorPalette   
									title="Border Color"
									value={borderColor}
									colors={[...high_colors]}
									onChange={onChangeBorderColor} // onChange event callback
								/>
								<UnitControl
									label={__('Border Radius') }
									value = {attributes.borderRadius} 
									onChange={onChangeBorderRadius}
								/>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
			, 
			<div
				{...useBlockProps()}
				style={{  
					borderWidth: borderWidth,
					borderColor: borderColor,
					borderStyle: borderStyle,
					borderRadius: borderRadius,
				}}
			>

				<InnerBlocks template={TEMPLATE} templateLock="all" />
			</div>
		</>
	);
}