import GROUP_SELECTED from '../../utils/events';


class Channel {
    constructor(channel) {
        this.channel = channel;
        //Set first selected group
    }

    getName() {
        return this.channel.name;
    }

    getPosterSettings() {
        return this.channel.settings.poster;
    }

    getContentSettings() {
        return this.channel.settings.gallery;
    }


    //------------Groups-----------//
    shouldShowGroups() {
        return this.channel.settings.gallery.visibility;
    }
    getTags() {
        return this.channel.settings.gallery.group.tags;
    }
    getGroupBackgroundColor() {
        return this.channel.settings.gallery.group.backgroundColor;
    }
    getGroupTextColor() {
        return this.channel.settings.gallery.group.textColor;
    }
    setSelectedGroup(group) {
        if (group && this.selectedGroup !== group) {
            this.selectedGroup = group;
            window.dispatchEvent(new CustomEvent(GROUP_SELECTED));
        }
    }

}

export default Channel;
