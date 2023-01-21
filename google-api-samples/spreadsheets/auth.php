<?

function getAuthToken ()
{
  $data = json_decode( file_get_contents('token.json') );
  if (!isset($data->access_token)) {
    echo 'token not provided!';
    return false;
  } else {
    return $data->access_token;
  }
}


?>