<?php
require( 'constants.php' );
require( 'auth.php' );

function createSpreadsheet ( $content ) {

  $url = API_PATH.'/v4/spreadsheets';

  $params = array(
    'http' => array(
      'header' => array(
        'Authorization: Bearer '.getAuthToken(),
        'Content-type: application/json'
      ),
      'method' => 'POST',
      'content' => $content
    )
  );
  
  $context = stream_context_create($params);
  $result = @file_get_contents($url, false, $context);
  
  return $result;
}

function getSpreadsheet ( $spreadsheetId ) {
  $url = API_PATH.'/v4/spreadsheets/'.$spreadsheetId;

  $params = array(
    'http' => array(
      'header' => array(
        'Authorization: Bearer '.getAuthToken()
      ),
      'method' => 'GET'
    )
  );
  
  $context = stream_context_create($params);
  $result = @file_get_contents($url, false, $context);
  
  return $result;
}

function updateSingleValue ( $spreadsheetId, $sheetId, $cellId, $cellValue ) {
  $url = API_PATH.'/v4/spreadsheets/'.$spreadsheetId.'/values/'.$sheetId.'!'.$cellId.':append?valueInputOption=RAW';

  $valueRange = array( 
    "range" => $sheetId.'!'.$cellId,
    "majorDimension" => "ROWS",
    "values" => [ [$cellValue] ]
  );

  $params = array(
    'http' => array(
      'header' => array(
        'Authorization: Bearer '.getAuthToken(),
        'Content-type: application/json'
      ),
      'method' => 'POST',
      'content' => json_encode( $valueRange )
    )
  );
  
  $context = stream_context_create($params);
  $result = @file_get_contents($url, false, $context);
  
  return $result;
}

?>