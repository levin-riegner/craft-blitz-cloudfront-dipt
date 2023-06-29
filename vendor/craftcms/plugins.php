<?php

$vendorDir = dirname(__DIR__);
$rootDir = dirname(dirname(__DIR__));

return array (
  'putyourlightson/craft-blitz' => 
  array (
    'class' => 'putyourlightson\\blitz\\Blitz',
    'basePath' => $vendorDir . '/putyourlightson/craft-blitz/src',
    'handle' => 'blitz',
    'aliases' => 
    array (
      '@putyourlightson/blitz' => $vendorDir . '/putyourlightson/craft-blitz/src',
    ),
    'name' => 'Blitz',
    'version' => '4.4.6',
    'description' => 'Intelligent static page caching for creating lightning-fast sites.',
    'developer' => 'PutYourLightsOn',
    'developerUrl' => 'https://putyourlightson.com/',
    'documentationUrl' => 'https://putyourlightson.com/plugins/blitz',
    'changelogUrl' => 'https://raw.githubusercontent.com/putyourlightson/craft-blitz/v4/CHANGELOG.md',
  ),
);
