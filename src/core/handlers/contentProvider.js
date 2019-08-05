import {get} from '../api/http';
import {env} from '../../utils/config';
import {READY,UPDATE} from '../../utils/events.js';
import VFChannelContent from '../models/vfChannelContent';

function getContent(settings, cb){
    settings = settings || window.vfccnf;
    get(`${env[settings.env]}channel/${settings.channel_client}/json`,(res)=>{
        let isFirstInitialization = !window.vfchannel.content;
        window.vfchannel.content = new VFChannelContent(res);
        if(isFirstInitialization){
            window.dispatchEvent(new CustomEvent(READY));
        }else{
            window.dispatchEvent(new CustomEvent(UPDATE));
        }
        if(cb) cb(res);
    });
}

module.exports = {
    getContent
};