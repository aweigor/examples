<?php

/*

Performs authorization in googleapis;
If successfull - creates token.json file;
Depends on credentials.json file providing credentials - this file can be downloaded from google page, when OAuth ID created; link: https://console.cloud.google.com/apis/credentials; 

{
  "web":{
    "client_id":"xxx",
    "project_id":"xxx",
    "auth_uri":"xxx",
    "token_uri":"xxx",
    "auth_provider_x509_cert_url":"xxx",
    "client_secret":"xxx"
  }
}

*/

const SERVER_URI = 'http://localhost:8000';
const SCOPE_PATH = 'https://www.googleapis.com/auth/spreadsheets';

$credentials = json_decode( file_get_contents('credentials.json') )->web;
if (!isset($credentials)) {
  echo 'credentials not provided!';
  return;
}



$end_point = $credentials->auth_uri;
$client_id = $credentials->client_id;
$client_secret = $credentials->client_secret;
$redirect_uri = SERVER_URI;
$scope = SCOPE_PATH;

$authUrl = $end_point.'?'.http_build_query([
  'client_id'              => $client_id,
  'redirect_uri'           => $redirect_uri,              
  'scope'                  => $scope,
  'access_type'            => 'offline',
  'include_granted_scopes' => 'true',
  'state'                  => 'state_parameter_passthrough_value',
  'response_type'          => 'code',
]);

echo '<a href = "'.$authUrl.'">Authorize</a></br>';

if ( !file_exists('token.json') ) {

  if ( isset($_GET['code'])){
    $code = $_GET['code'];
  } else {
    return;
  }

  $url = 'https://accounts.google.com/o/oauth2/token';
  $data = array( 
    'code' => $code, 
    'redirect_uri' => $redirect_uri, 
    'client_id' => $client_id,
    'client_secret' => $client_secret,
    'scope' => $scope,
    'grant_type' => 'authorization_code'
  );

  $options = array(
    'http' => array(
      'header' => "Content-type: application/x-www-form-urlencoded\r\n",
      'method' => 'POST',
      'content' => http_build_query($data)
    )
  );

  $context = stream_context_create($options);
  $result = file_get_contents($url, false, $context);
  file_put_contents('token.json', $result);

} else {

  $response = file_get_contents('token.json');
  $rdata = json_decode($response);

  if ( isset($rdata->refresh_token) ) {
    $refresh_token = $rdata->refresh_token;
  } else {
    return;
  }

  $access_token = $rdata->access_token;

  $url = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token='.$access_token;
  $options = array( 'http' => array( 'method' => 'GET' ) );
  $context = stream_context_create($options);
  $response = file_get_contents($url, false, $context);
  $rdata = json_decode($response);

  if ( isset( $rdata->error ) ) {

    $url = 'https://accounts.google.com/o/oauth2/token';
    $params = array( 
      'client_id'     => $client_id,
      'client_secret' => $client_secret,
      'refresh_token'  => $refresh_token,
      'grant_type' => 'refresh_token'
    );

    $options = array(
      'http' => array(
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($params)
      )
    );

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    file_put_contents('token.json', $result);

  }
}
?>