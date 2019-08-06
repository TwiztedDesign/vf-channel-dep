import { isMobile } from './utils/helpers';
import { loadContent } from './core/handlers/contentProvider';

let vfChannel = {};
vfChannel.isMobile = isMobile;
vfChannel.loadContent       = (settings, cb) => { return loadContent(settings, cb); };
vfChannel.getContent        = () => { return window.vfChannel.content; };

module.exports = vfChannel;