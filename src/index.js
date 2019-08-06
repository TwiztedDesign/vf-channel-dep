import "../scripts/custom-elements.min";
import "../scripts/custom-elements-es5-adapter.exec";
import {isMobile} from './utils/helpers';
import {getContent} from './core/handlers/contentProvider';
import {initVFChannelElements} from './core/vfChannelInitializer';
import {READY} from './utils/events.js';


window.addEventListener(READY,()=>{
    initVFChannelElements();
});

let vfChannel = {};
vfChannel.isMobile            = isMobile;
vfChannel.getContent          = (settings, cb) => {return getContent(settings, cb);};


module.exports = vfChannel;