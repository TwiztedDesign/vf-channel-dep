import GROUP_SELECTED from '../../utils/events';


class Channel {
    constructor(channel) {
        Object.assign(this, channel);
        //Set first selected group
    }

    getName() {
        return this.name;
    }

    getPosterSettings() {
        return this.settings.poster;
    }

    getContentSettings() {
        return this.settings.gallery;
    }


    //------------Groups-----------//
    shouldShowGroups() {
        return this.settings.gallery.visibility;
    }
    getTags() {
        return this.settings.gallery.group.tags;
    }
    getGroupBackgroundColor() {
        return this.settings.gallery.group.backgroundColor;
    }
    getGroupTextColor() {
        return this.settings.gallery.group.textColor;
    }
    setSelectedGroup(group) {
        if (group && this.selectedGroup !== group) {
            this.selectedGroup = group;
            window.dispatchEvent(new CustomEvent(GROUP_SELECTED));
        }
    }

}

export default Channel;
