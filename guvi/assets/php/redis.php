<?php
// Connect to Redis server
$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

// Set a value
$redis->set('mykey', 'Hello Redis');

// Get the value
$value = $redis->get('mykey');
echo $value; // Output: Hello Redis

// Close connection
$redis->close();
?>