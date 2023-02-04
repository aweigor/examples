<?php
require( 'controller.php' );

/*

Example modifying spreadsheets with google-api controller;
Creates spreadsheet with options described in JSON file;
Updates spreadsheet with single values;
Depends on token.json authorization file. Authorization module implements its generation;

@function createSpreadsheet
@function getSpreadsheet
@function updateSingleValue

*/

function getSheet ( $spreadsheetInstance, $sheetNum ) {
  // todo: error handling
  return $spreadsheetInstance->sheets[$sheetNum]->properties->title;
}

$ss = file_get_contents('spreadsheet.example.json');

$create_result = createSpreadsheet( $ss );

$spreadsheet = json_decode( $create_result );

if ( $create_result != false ) {
  $spreadsheetId = $spreadsheet->spreadsheetId;
  $sheetId = getSheet( $spreadsheet, 0 )->title;

  for ($i = 1; $i <= 10; $i++) {
    updateSingleValue( $spreadsheetId, $sheetId, 'A'.$i, $i );
  }
}

echo getSpreadsheet( $spreadsheet->spreadsheetId );

?>