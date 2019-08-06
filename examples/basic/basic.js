window.addEventListener('vfchannel-ready', function (e) { 
    console.log(window.vfChannel.content);
    window.vfChannel.getContent();
}, false);