 
import { __ } from '@wordpress/i18n'; 
import './editor.scss';

import {
	BlockControls, 
	useBlockProps, 
	RichText,
	MediaPlaceholder, 
	InspectorControls,
	PanelColorSettings,
	AlignmentToolbar, 
	BlockAlignmentToolbar,
	BlockVerticalAlignmentToolbar,
	MediaUpload, 
	MediaUploadCheck ,
	
} from '@wordpress/block-editor';


import {
	Panel,
	PanelBody,
	PanelHeader,
	PanelRow,
	ResponsiveWrapper ,
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
const { compose } = wp.compose;
	
const { Visualizer } = BoxControl;
 
 
	{/** global only allow images for upload ***/}
	const ALLOWED_MEDIA_TYPES = [ 'image' ]; 

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
	
 
export default function Edit({ attributes, isSelected, setAttributes}) {
	
 const blockProps = useBlockProps();
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
		backBorderWidth,
		backBorderStyle,
		backBorderColor,
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
	
	{/***callback functo for change front panel background color **/}
	const onChangeBackgroundColor = (newBackgroundColor) => {
		setAttributes({ backgroundColor: newBackgroundColor });
	};
	{/** Callback function for adding/updating front panel background image ***/}
	const onUpdateImage = ( imageObject ) => {
		setAttributes( {
			backgroundImage: imageObject.sizes.full.url,
		} );
	};
	{/*** callback function to remove frontpanel background image ****/}
	const onRemoveImage = () => {
		setAttributes( {
			backgroundImage: undefined,
		} );
	};
	function onChangeAlignment( updateAlign ) {
			setAttributes( { alignment: updateAlign } );
	}
	
	
	{/* change back panel background color */}
	const onChangeBackBackgroundColor = (newBackBackgroundColor) => {
		setAttributes({ backBackgroundColor: newBackBackgroundColor });
	};
	{/** Callback function for adding/updating back panel background image ***/}
	const onUpdateBackImage = ( imageObject ) => {
		setAttributes( {
			backBackgroundImage: imageObject.sizes.full.url,
		} );
	};
	{/*** callback function to remove back panel background image ****/}
	const onRemoveBackImage = () => {
		setAttributes( {
			backBackgroundImage: undefined,
		} );
	}; 
	
	{/** set units for borders and other box values ***/}
	const units = [
		{ value: 'px', label: 'px', default: 0 },
		{ value: '%', label: '%', default: 10 },
		{ value: 'em', label: 'em', default: 0 },
	];
	const [ values, setValues ] = useState( {
        top: '20px',
        left: '20px',
        right: '20px',
        bottom: '20px',
    } );

	return (
	<>
		<InspectorControls>
			<Panel 
				title={__('High Flip Box')}
			>
				<PanelBody
					title={__("Flip Options", "high-flip-block")}
					initialOpen={ true }
                >
					<PanelRow> 
						<PanelHeader> Flip Direction </PanelHeader>
						<SelectControl
							label={__("Select Direction")}
							value={attributes.flipDirection}
							options={ [
								{ label: 'Vertical', value: 'vert' },
								{ label: 'Horizontal', value: 'hor' },
								{ label: 'Vertical Reverse', value: 'vert-r' },
								{ label: 'Horizontal Reverse', value: 'hor-r' },
							] }
							onChange={(newFlipDirection) => setAttributes({ flipDirection: newFlipDirection})}
						/>
					</PanelRow>
					<PanelRow> 
						<PanelHeader> Flip Sizing </PanelHeader>
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
					</PanelRow>
					<PanelRow> 
						<PanelHeader> Flip Spacing </PanelHeader>
						<BoxControl
							label={__("Padding", "high-flip-block")}
							values={ values }
								//onChange={ ( nextValues ) => setValues( {values: nextValues} ) }
							onChange={ ( nextValues ) => console.log(nextValues) }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={__("Switch ", "high-flip-block")}
					initialOpen={ true }
				>
					<ToggleControl
						label={__("Switch from front to back panel?", "high-flip-block")}
						help={panelSwitch ? "Front" : "Back"}
						checked={panelSwitch}
						onChange={() => setAttributes({ panelSwitch: !panelSwitch })}
					/>
				</PanelBody>
             
			</Panel>
       
		{panelSwitch &&(
			  
			<Panel title={__('Front Settings')}>
				<PanelBody
				title={__("Front Styles ", "high-flip-block")}
				initialOpen={ false }
				>
					<PanelRow>
						<PanelHeader> Background Image</PanelHeader>
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

						{backgroundImage && //change front background image -->
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
						{backgroundImage && // remove front background image
							<MediaUploadCheck>
								<Button onClick={ onRemoveImage } isLink isDestructive>
								{ __( 'Remove background image', 'high-flip' ) }
								</Button>
							</MediaUploadCheck>
						}
						{/*background attributes*/}
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
					</PanelRow>
					
					<PanelRow>
						<PanelHeader>Background Color</PanelHeader>
							<ColorPalette
							colors={[...high_colors]}
							value={backgroundColor}
							onChange={onChangeBackgroundColor} // onChange event callback
							/> 
					</PanelRow>
					
					<PanelRow>
						<PanelHeader> Front Borders</PanelHeader>
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
						<h4> Border Color</h4>
						<ColorPalette   
							title="Border Color"
							value={borderColor}
							colors={[...high_colors]}
							
							onChange={(newBorderColor) => setAttributes({ borderColor: newBorderColor })}
						/>
						<UnitControl
							label={__('Border Radius') }
							value = {attributes.borderRadius} 
							
							onChange={(newBorderRadius) => setAttributes({ borderRadius: newBorderRadius })}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody
					title={__("Front Content", "high-flip-block")}
					initialOpen={ false }
				>
					<PanelRow>
						<PanelHeader>Front Sub-heading  </PanelHeader>
							<h4> Subheading Color</h4>
							<ColorPalette
								colors={[...high_colors]}
								value={ attributes.subheadingColor}
								onChange={(newSubheadingColor) => setAttributes({ subheadingColor: newSubheadingColor})}
							/>
							<h4>Subheading Align</h4>
							<AlignmentToolbar
								value={ attributes.headingAlign }
								onChange={ ( newSubheadingAlign ) => {setAttributes( { subheadingAlign: newSubheadingAlign } );} }
							/>
							
						<PanelHeader> Front Heading</PanelHeader>
						
							<h4>Heading Color</h4>
							<ColorPalette
								colors={[...high_colors]}
								value={ attributes.headingColor}
								onChange={(newHeadingColor) => setAttributes({ headingColor: newHeadingColor})}
							/>
							<h4>Heading Align</h4>
							<AlignmentToolbar
								value={ attributes.headingAlign }
								onChange={ ( newHeadingAlign ) => {setAttributes( { headingAlign: newHeadingAlign } );} }
							/>
						
						<h3>Panel Header</h3>
						
							<h4> Text Color </h4>
							<ColorPalette
								colors={[...high_colors]}
								value={ attributes.contentColor}
								onChange={(newContentColor) => setAttributes({ contentColor: newContentColor})}
							/>
							<h4>Text Align</h4>
							<AlignmentToolbar
								value={ attributes.contentAlign }
								onChange={ ( newContentAlign ) => {setAttributes( { contentAlign: newContentAlign } );} }
							/>
					</PanelRow>
				</PanelBody>
				 
			</Panel>
		)}
		{!panelSwitch &&(
			 <Panel 
				title={__('Back Settings')}
				initialOpen={false}
			>
				<PanelBody
					title={__("Back Styles", "high-flip-block")} 
				>
					<PanelRow>
						<PanelHeader>Background Image</PanelHeader>
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
						{backBackgroundImage && //change front background image -->
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
						{backBackgroundImage && // remove front background image
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
					</PanelRow>
					<PanelRow>
						<PanelHeader> Back Background Color </PanelHeader>
						<ColorPalette
							colors={[...high_colors]}
							value={backBackgroundColor}
							onChange={onChangeBackBackgroundColor} // onChange event callback
						/>
					</PanelRow>
					<PanelRow>
						<PanelHeader> Back Borders</PanelHeader>
						 <UnitControl
							label={__("Border Width")}
							value = {attributes.backBorderWidth}
							onChange={(newBackBorderWidth) => setAttributes({ backBorderWidth: newBackBorderWidth })}
						/> 
						
						<SelectControl
							label={__("Border Style")}
							value={attributes.backBorderStyle}
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
							onChange={(newBackBorderStyle) => setAttributes({ backBorderStyle: newBackBorderStyle })}
						/>
						<h4> Border Color</h4>
						<ColorPalette   
							title="Border Color"
							value={backBorderColor}
							colors={[...high_colors]}
							onChange={(newBackBorderColor) => setAttributes({ backBorderColor: newBackBorderColor })} // onChange event callback
						/>
						<UnitControl
							label={__('Border Radius') }
							value = {attributes.backBorderRadius} 
							onChange={(newBackBorderRadius) => setAttributes({ backBorderRadius: newBackBorderRadius })}
						/>
					</PanelRow>
				</PanelBody> 
				<PanelBody
					title={__("Back Content", "high-flip-block")}
					initialOpen={ false }
				>
					<PanelRow>
						<PanelHeader> Back Sub-heading  </PanelHeader>
							<h4> Subheading Color</h4>
							<ColorPalette
								colors={[...high_colors]}
								value={ attributes.backSubheadingColor}
								onChange={(newBackSubheadingColor) => setAttributes({ backSubheadingColor: newBackSubheadingColor})}
							/>	
							<h4>Subheading Align</h4>
							<AlignmentToolbar
								value={ attributes.backSubheadingAlign }
								onChange={ ( newBackSubheadingAlign ) => {setAttributes( { backSubheadingAlign: newBackSubheadingAlign } );} }
							/>
					
						<PanelHeader> Front Heading</PanelHeader>
							<h4>Heading Color</h4>
							<ColorPalette
								colors={[...high_colors]}
								value={ attributes.backHeadingColor}
								onChange={(newBackHeadingColor) => setAttributes({ backHeadingColor: newBackHeadingColor})}
							/>
							<h4>Heading Align</h4>
							<AlignmentToolbar
								value={ attributes.backHeadingAlign }
								onChange={ ( newBackHeadingAlign ) => {setAttributes( { backHeadingAlign: newBackHeadingAlign } );} }
							/>
							
						<PanelHeader>Back Text</PanelHeader>
							<h4> Text  Color </h4>
							<ColorPalette
								colors={[...high_colors]}
								value={ attributes.backContentColor}
								onChange={(newBackContentColor) => setAttributes({ backContentColor: newBackContentColor})}
							/>
							
							<h4>Text Align</h4>
							<AlignmentToolbar
								value={ attributes.backContentAlign }
								onChange={ ( newBackContentAlign ) => {setAttributes( { backContentAlign: newBackContentAlign } );} }
							/>
						
					</PanelRow>
				</PanelBody>
			</Panel>
		)}
			
		</InspectorControls>,
			
		<div
			{...useBlockProps()}
			style={{
				height: height,
				width: width, 
			}} 
		>
			<div >
				
				{panelSwitch &&(
					<div className={'high-flip-front-background'}
						style={{ 
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
					 
							<RichText{...blockProps}
								tagName='h3'
								className='front-subheading'
								value={subheading}
								onChange={(newVal) => setAttributes({subheading: newVal})}
								placeholder="Subheading Goes Here"
								style ={{color:subheadingColor,
									textAlign: subheadingAlign}}
							/>
							<RichText
								tagName='h2'
								className={'front-heading'}
								value={heading}
								onChange={(newHeading) => setAttributes({heading: newHeading})}
								placeholder="Heading Goes Here"
								style ={{
									color:headingColor,
									textAlign: headingAlign}}
							/>
							<RichText{...blockProps}
								tagName='p'
								className='card-content'
								multiline=''
								value={content}
								onChange={(newVal) => setAttributes({content: newVal})}
								placeholder="Fron Content"
								style ={{color:contentColor,
									textAlign: contentAlign}}
							/>


					</div>
				)}
				{!panelSwitch &&(
					<div  className={'high-flip-back-background'}
						style={{ 
						backgroundColor: backBackgroundColor,
						backgroundImage: `url(${backBackgroundImage})`,
						backgroundPosition: backBackgroundPosition,
						backgroundSize: backBackgroundSize,
						backgroundRepeat: backBackgroundRepeat,
						borderWidth: backBorderWidth,
						borderColor: backBorderColor,
						borderStyle: backBorderStyle,
						borderRadius: backBorderRadius,
						}}
				
					>
					
					<RichText{...blockProps}
								tagName='h3'
								className='back-subheading'
								value={backSubheading}
								onChange={(newBackSubheading) => setAttributes({backSubheading: newBackSubheading})}
								placeholder="Subheading Goes Here"
								style ={{color:backSubheadingColor,
									textAlign: backSubheadingAlign}}
							/>
							<RichText
								tagName='h2'
								className={'back-heading'}
								value={backHeading}
								onChange={(newBackHeading) => setAttributes({backHeading: newBackHeading})}
								placeholder="Heading Goes Here"
								style ={{
									color:backHeadingColor,
									textAlign: backHeadingAlign}}
							/>
							<RichText{...blockProps}
								tagName='p'
								className='card-content'
								multiline=''
								value={backContent}
								onChange={(newBackContent) => setAttributes({backContent: newBackContent})}
								placeholder="Back Content"
								style ={{color:backContentColor,
									textAlign: backContentAlign}}
							/>

					</div> 
				)}
				 
				</div>
			</div>
		</>
	);
}