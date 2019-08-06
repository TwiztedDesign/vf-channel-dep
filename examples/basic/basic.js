window.addEventListener('vfchannel-ready', function (e) { 
    console.log(window.vfChannel.getContent());

    //Get content again
    window.vfChannel.loadContent();
}, false);