import Poster from './poster';
import Items from './items';
import Channel from './channel';
import {isObject} from '../../utils/helpers';

class VFChannelContent{
    constructor(data){
        data = isObject(data)? data : JSON.parse(data);
        this.channel = new Channel(data.channel);
        this.items = new Items(data.content, this.channel.getContentSettings());
        this.poster = new Poster(data.poster, this.channel.getPosterSettings());
    }

    getPoster(){
        return this.poster;
    }

    getItems(){
        return this.items;
    }

    getChannel(){
        return this.channel;
    }

}
export default VFChannelContent;