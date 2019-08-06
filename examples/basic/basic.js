window.addEventListener('vfchannel-ready', function (e) { 
    console.log(window.vfChannel.getContent());
    console.log(window.vfChannel.getChannel());
    console.log(window.vfChannel.getPoster());

    //Get content again
    window.vfChannel.loadContent();
}, false);