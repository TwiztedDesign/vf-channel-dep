import { isMobile } from './utils/helpers';
import { loadContent } from './core/handlers/contentProvider';
import events from './utils/events';

let vfChannel = {};
vfChannel.isMobile              = isMobile;
vfChannel.events                = events;

vfChannel.loadContent           = (settings, cb) => { return loadContent(settings, cb); };
vfChannel.getContent            = () => { return window.vfChannel.content.getContent(); };
vfChannel.getPoster             = () => { return window.vfChannel.content.getPoster(); };
vfChannel.getChannel            = () => { return window.vfChannel.content.getChannel(); };
vfChannel.getSettings           = () => { return window.vfChannel.content.getChannel().getSettings(); };
vfChannel.on                    = (type, cb) => { return document.addEventListener(type, cb); };
vfChannel.removeEventListener   = (type, cb) => { return document.removeEventListener(type, cb); };

module.exports = vfChannel;