CKEDITOR.plugins.add( 'exdocpickerbase', {

  icons: 'exdocpickerbase',

  init: function( editor ) {

    editor.addCommand( 'linkToExternalDocument', new CKEDITOR.dialogCommand( 'exdocBrowserDialog' ) );

    editor.ui.addButton( 'LinkToExternalDocument', {
      label: 'Link to External Document',
      command: 'linkToExternalDocument',
      toolbar: 'links'
    });

    CKEDITOR.dialog.add( 'exdocBrowserDialog', this.path + 'dialogs/exdocbrowserdialog.js' );
  }

});