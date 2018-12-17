/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.language = 'zh-cn';
	config.contentsCss = "../phone/view.css";
	config.extraPlugins = 'tableresize';
	config.removePlugins = 'elementspath';
	config.filebrowserImageUploadUrl = "../view/ckeUpload.aspx?type=image";
	config.removeButtons = 'Underline,Subscript,Superscript';
	config.toolbarCanCollapse = false;
	config.resize_enabled = false; 
	config.pasteFromWordRemoveStyles = true;
	config.allowedContent=true;
	config.image_previewText = " ";
	config.toolbar = [['Bold', 'Italic', 'Underline', 'NumberedList', 'BulletedList', 'JustifyLeft', 'JustifyCenter', 'JustifyRight']];
};
