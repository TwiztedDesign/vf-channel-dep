import Poster from './elements/poster/poster';

function initVFChannelElements(){
    customElements.define('vfchannel-poster', Poster);
}

module.exports = {
    initVFChannelElements
};