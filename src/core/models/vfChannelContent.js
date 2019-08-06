import Poster from './poster';
import Content from './content';
import Channel from './channel';
import {isObject} from '../../utils/helpers';

class VFChannelContent{
    constructor(data){
        data = isObject(data)? data : JSON.parse(data);
        this.channel = new Channel(data.channel);
        this.items =  data.content.map(content => {
            return new Content(content);
        });
        this.poster = new Poster(data.poster);
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