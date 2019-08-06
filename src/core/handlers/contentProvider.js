import {get} from '../api/http';
import {env} from '../../utils/config';
import {READY,UPDATE} from '../../utils/events.js';
import VFChannelContent from '../models/vfChannelContent';

function loadContent(settings, cb){
    settings = settings || window.vfChannel.vfccnf;
    get(`${env[settings.env]}channel/${settings.channel_client}/json`,(res)=>{
        let isFirstInitialization = !window.vfChannel.content;
        window.vfChannel.content = new VFChannelContent(res);
        if(isFirstInitialization){
            window.dispatchEvent(new CustomEvent(READY));
        }else{
            window.dispatchEvent(new CustomEvent(UPDATE));
        }
        if(cb) cb(res);
    });
}

module.exports = {
    loadContent
};