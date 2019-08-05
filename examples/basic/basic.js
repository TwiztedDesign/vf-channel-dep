window.addEventListener('vfchannel-ready', function (e) { 
    console.log(window.vfchannel.content);
    window.vfchannel.getContent();
}, false);