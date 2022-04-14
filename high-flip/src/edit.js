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
import { useBlockProps} from '@wordpress/block-editor'
  

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

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
const { compose } = wp.compose;
	
const { Visualizer } = BoxControl;
 
	
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

const units = [
	{ value: 'px', label: 'px', default: 0 },
	{ value: '%', label: '%', default: 10 },
	{ value: 'em', label: 'em', default: 0 },
];
 
export default function Edit({ attributes, isSelected, setAttributes}) {
	const {
		backgroundColor,
		backgroundImage,
		backgroundPosition,
		backgroundAttachment,
		backgroundRepeat,
		backgroundSize,
		backBackgroundColor,
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
 
	const onChangeBackgroundColor = (newBackgroundColor) => {
		setAttributes({ backgroundColor: newBackgroundColor });
	};
	const onChangeBackBackgroundColor = (newBackBackgroundColor) => {
		setAttributes({ backBackgroundColor: newBackBackgroundColor });
	};
	
	const onUpdateImage = ( imageObject ) => {
            setAttributes( {
                backgroundImage: imageObject.sizes.full.url,
            } );
        };

        const onRemoveImage = () => {
            setAttributes( {
                backgroundImage: undefined,
            } );
        };
		
		
		
	const onUpdateBackImage = ( imageObject ) => {
            setAttributes( {
                backBackgroundImage: imageObject.sizes.full.url,
            } );
        };

        const onRemoveBackImage = () => {
            setAttributes( {
                backBackgroundImage: undefined,
            } );
        }; 


const ALLOWED_MEDIA_TYPES = [ 'image' ]; 
	return (
	
		<>
			<InspectorControls>
			
			<Panel 
				title={__('High Flip Box')}
				initialOpen={false}
					>
				<PanelBody
					title={__("Flip Direction ", "high-flip-block")}
					initialOpen={ true }
                >
					<SelectControl
						label={__("Rotation")}
						value={attributes.flipDirection}
						options={ [
							{ label: 'Vertical', value: 'vert' },
							{ label: 'Horizontal', value: 'hor' },
							{ label: 'Vertical Reverse', value: 'vert-r' },
							{ label: 'Horizontal Reverse', value: 'hor-r' },
						] }
						onChange={(newFlipDirection) => setAttributes({ flipDirection: newFlipDirection})}
					/>
					
					
						<UnitControl
							label={__("Height")}
							value = {attributes.height}
							onChange={(newHeight) => setAttributes({ height: newHeight })}
						/> 
						<UnitControl
							label={__("Width")}
							value = {attributes.width}
							onChange={(newWidth) => setAttributes({ width: newWidth })}
						/> 
				<BoxControl
					values={attributes.padding}
					onChange= { ( newPadding) => setAttributes({padding: newPadding})  }
					/>
					

				</PanelBody>
				
				
				</Panel>
			
				<Panel 
						title={__('Front/Back Settings')}
						initialOpen={false}
					>
					<PanelBody
						title={__("Switch ", "high-flip-block")}
						initialOpen={ true }
					>
					<ToggleControl
						label="Switch from front to back panel?"
						help={panelSwitch ? "Front" : "Back"}
						checked={panelSwitch}
						onChange={() => setAttributes({ panelSwitch: !panelSwitch })}
					/>
					</PanelBody>
             
              {panelSwitch &&(
					<PanelBody
						title={__("Front Background ", "high-flip-block")}
						initialOpen={ true }
                    >
					<div className="high-flip-front-background-edit">
						<h3> Front Background Image </h3>
						 <MediaUploadCheck >
                                <MediaUpload 
                                    onSelect={ onUpdateImage }
                                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                                    value={ backgroundImage }
                                    render={({ open }) => (
										<button  className={ ! backgroundImage ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
                                            onClick={ open }>
										
											{ ! backgroundImage && ( __( 'Add Front Background Image', 'high-flip' ) ) }
											{ !! backgroundImage &&
												
												<ResponsiveWrapper naturalWidth={ 220 } naturalHeight={ 220 }>
                                                    <img src={ backgroundImage} alt={ __( 'Front Background Image', 'high-flip' ) } />
												</ResponsiveWrapper>
											} 
											
										</button>
									)}
                                />
                            </MediaUploadCheck>
							
							 {   backgroundImage && //change front background image -->
                                <MediaUploadCheck>
                                    <MediaUpload
                                        title={ __( 'Background image', 'high-flip' ) }
                                        onSelect={ onUpdateImage }
                                        allowedTypes={ ALLOWED_MEDIA_TYPES }
                                        value={ backgroundImage }
                                        render={ ( { open } ) => (
                                            <Button onClick={ open } isDefault isLarge>
                                                { __( 'Replace background image', 'high-flip' ) }
                                            </Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                            }
							
							{ backgroundImage && // remove front background image
                                <MediaUploadCheck>
                                    <Button onClick={ onRemoveImage } isLink isDestructive>
                                        { __( 'Remove background image', 'high-flip' ) }
                                    </Button>
                                </MediaUploadCheck>
                            }
							
                             	
						<SelectControl
							label={__("Background Position")}
							value={attributes.backgroundPosition}
							options={ [
								{ label: 'Center', value: 'center' },
								{ label: 'Center Top', value: 'center top' },
								{ label: 'Center Bottom', value: 'center bottom' },
								{ label: 'Left Top', value: 'left top' },
								{ label: 'Left Center', value: 'left center' },
								{ label: 'Left Bottom', value: 'left bottom' },
								{ label: 'Right Top', value: 'right top' },
								{ label: 'Right Center', value: 'right center' },
								{ label: 'Right Bottom', value: 'right bottom' }, 
							] }
							onChange={(newBackgroundPosition) => setAttributes({ backgroundPosition: newBackgroundPosition})}
						/>
						        	
						<SelectControl
							label={__("Background Size")}
							value={attributes.backgroundSize}
							options={ [
								{ label: 'Cover', value: 'cover' },
								{ label: 'Contain', value: 'contain' },
								{ label: 'auto', value: 'auto 100%' },
								{ label: '100%', value: '100% auto' },
							] }
							onChange={(newBackgroundSize) => setAttributes({ backgroundSize: newBackgroundSize})}
						/>
						
						<SelectControl
							label={__("Background Repeat")}
							value={attributes.backgroundRepeat}
							options={ [
								{ label: 'No Repeat', value: 'no-repeat' },
								{ label: 'Repeat', value: 'repeat' },
								{ label: 'Repeat Horizontally', value: 'repeat-x' },
								{ label: 'Repeat Vertically', value: 'repeat-y' },
							] }
							onChange={(newBackgroundRepeat) => setAttributes({ backgroundRepeat: newBackgroundRepeat})}
						/>
					</div>
					<div>
						<h3> Front Background Color </h3>
                         <ColorPalette
							colors={[...high_colors]}
							value={backgroundColor}
							onChange={onChangeBackgroundColor} // onChange event callback
						/>
					</div>
                    </PanelBody>
              )}
              { !panelSwitch &&(
			  <PanelBody
						title={__("Back Background", "high-flip-block")}
						initialOpen={ true }
                    >
                          
					<div className="high-flip-back-background-edit">
						<h3> Back Background Image </h3>
						 <MediaUploadCheck >
                                <MediaUpload 
                                    onSelect={ onUpdateBackImage }
                                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                                    value={ backBackgroundImage }
                                    render={({ open }) => (
										<button  className={ ! backBackgroundImage ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
                                            onClick={ open }>
										
											{ ! backBackgroundImage && ( __( 'Add Back Background Image', 'high-flip' ) ) }
											{ !! backBackgroundImage &&
												
												<ResponsiveWrapper naturalWidth={ 220 } naturalHeight={ 220 }>
                                                    <img src={ backBackgroundImage} alt={ __( 'Back Background Image', 'high-flip' ) } />
												</ResponsiveWrapper>
											} 
											
										</button>
									)}
                                />
                            </MediaUploadCheck>
							
							 {   backBackgroundImage && //change front background image -->
                                <MediaUploadCheck>
                                    <MediaUpload
                                        title={ __( 'Background image', 'high-flip' ) }
                                        onSelect={ onUpdateBackImage }
                                        allowedTypes={ ALLOWED_MEDIA_TYPES }
                                        value={ backBackgroundImage }
                                        render={ ( { open } ) => (
                                            <Button onClick={ open } isDefault isLarge>
                                                { __( 'Replace background image', 'high-flip' ) }
                                            </Button>
                                        ) }
                                    />
                                </MediaUploadCheck>
                            }
							
							{ backBackgroundImage && // remove front background image
                                <MediaUploadCheck>
                                    <Button onClick={ onRemoveBackImage } isLink isDestructive>
                                        { __( 'Remove background image', 'high-flip' ) }
                                    </Button>
                                </MediaUploadCheck>
                            }
							
                             	
						<SelectControl
							label={__("Background Position")}
							value={attributes.backBackgroundPosition}
							options={ [
								{ label: 'Center', value: 'center' },
								{ label: 'Center Top', value: 'center top' },
								{ label: 'Center Bottom', value: 'center bottom' },
								{ label: 'Left Top', value: 'left top' },
								{ label: 'Left Center', value: 'left center' },
								{ label: 'Left Bottom', value: 'left bottom' },
								{ label: 'Right Top', value: 'right top' },
								{ label: 'Right Center', value: 'right center' },
								{ label: 'Right Bottom', value: 'right bottom' }, 
							] }
							onChange={(newBackBackgroundPosition) => setAttributes({ backBackgroundPosition: newBackBackgroundPosition})}
						/>
						        	
						<SelectControl
							label={__("Background Size")}
							value={attributes.backBackgroundSize}
							options={ [
								{ label: 'Cover', value: 'cover' },
								{ label: 'Contain', value: 'contain' },
								{ label: 'auto', value: 'auto 100%' },
								{ label: '100%', value: '100% auto' },
							] }
							onChange={(newBackBackgroundSize) => setAttributes({ backBackgroundSize: newBackBackgroundSize})}
						/>
						
						<SelectControl
							label={__("Background Repeat")}
							value={attributes.backBackgroundRepeat}
							options={ [
								{ label: 'No Repeat', value: 'no-repeat' },
								{ label: 'Repeat', value: 'repeat' },
								{ label: 'Repeat Horizontally', value: 'repeat-x' },
								{ label: 'Repeat Vertically', value: 'repeat-y' },
							] }
							onChange={(newBackBackgroundRepeat) => setAttributes({ backBackgroundRepeat: newBackBackgroundRepeat})}
						/>
					</div>
					<div>
						<h3> Front Background Color </h3>
						 
					
                         <ColorPalette
							colors={[...high_colors]}
							value={backBackgroundColor}
							onChange={onChangeBackBackgroundColor} // onChange event callback
						/>
						
					</div>
                    </PanelBody> 
              )}
</Panel>			  
			</InspectorControls>
			
			,
			<div
				{...useBlockProps()}
				style={{
					height: height,
					width: width,
					padding: padding,
				}}
				>
				<div className={"high-inner-flip " + attributes.flipDirection}>
				
				
					<div className={'high-flip-front-background'}
						style={{ 
						backgroundColor: backgroundColor,
						backgroundImage: `url(${backgroundImage})`,
						backgroundPosition: backgroundPosition,
						backgroundSize: backgroundSize,
						backgroundRepeat: backgroundRepeat,
						}}
					>
					
					 
					</div>
				
					<div  className={'high-flip-back-background'}
						style={{ 
						backgroundColor: backBackgroundColor,
						backgroundImage: `url(${backBackgroundImage})`,
						backgroundPosition: backBackgroundPosition,
						backgroundSize: backBackgroundSize,
						backgroundRepeat: backBackgroundRepeat,
						}}
				
					>
					</div> 
				 
				</div>
			</div>
		</>
	);
}