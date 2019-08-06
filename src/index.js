import { isMobile } from './utils/helpers';
import { loadContent } from './core/handlers/contentProvider';

let vfChannel = {};
vfChannel.isMobile = isMobile;
vfChannel.loadContent      = (settings, cb) => { return loadContent(settings, cb); };
vfChannel.getContent       = () => { return window.vfChannel.content.getItems(); };
vfChannel.getPoster        = () => { return window.vfChannel.content.getPoster(); };
vfChannel.getChannel       = () => { return window.vfChannel.content.getChannel(); };
vfChannel.getSettings      = () => { return window.vfChannel.content.getChannel().getSettings(); };

module.exports = vfChannel;