window.vfChannel.on(window.vfChannel.events.READY, e => {
    let data = e.detail;

    console.log(data.getContent());
    console.log(data.getChannel());
    console.log(data.getPoster());
    console.log(data.getSettings());

    console.log('==============================');

    console.log(window.vfChannel.getContent());
    console.log(window.vfChannel.getChannel());
    console.log(window.vfChannel.getPoster());
    console.log(window.vfChannel.getSettings());

    //Get content again
    window.vfChannel.loadContent();
});


