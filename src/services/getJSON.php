<?php

$ch = curl_init();

$opts = array(
    CURLOPT_URL=>'https://api.steampowered.com/IDOTA2Match_570/GetLeagueListing/v0001?key='.$apiKey,
    CURLOPT_RETURNTRANSFER => 1
);

curl_setopt_array($ch, $opts);

$response = curl_exec($ch);
curl_close($ch);

echo $response;

?>
