require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        share: '../scripts/share.min'
    },
    shim: {

    }
});

require(['app', 'jquery','share'], function (app, $, share) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
    $('.share-button').share({
      title: 'Share Button',
      image: 'http://slowbirds.org/images/logo.png',
      app_id: '229912690368662',
      background: 'rgba(255,255,255,.5)',
      color: '#3B2B45'
    });
});
