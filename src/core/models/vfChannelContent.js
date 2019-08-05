import Poster from './poster';
import Contents from './contents';
import Channel from './channel';
import {isObject} from '../../utils/helpers';

class VFChannelContent{
    constructor(data){
        data = isObject(data)? data : JSON.parse(data);
        this.channel = new Channel(data.channel);
        this.contents = new Contents(data.content, this.channel.getContentSettings());
        this.poster = new Poster(data.poster, this.channel.getPosterSettings());
    }

    getPoster(){
        return this.poster;
    }

    getContents(){
        return this.contents;
    }

    getChannel(){
        return this.channel;
    }

}
export default VFChannelContent;