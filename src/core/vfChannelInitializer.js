import Poster from './elements/poster/poster';
import Items from './elements/items/items';
import Groups from './elements/groups/groups';
import Content from './elements/content/content';

function initVFChannelElements(){
    customElements.define('vfchannel-poster', Poster);
    customElements.define('vfchannel-items', Items);
    customElements.define('vfchannel-groups', Groups);
    customElements.define('vfchannel-content', Content);
}

module.exports = {
    initVFChannelElements
};