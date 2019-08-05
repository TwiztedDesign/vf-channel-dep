class Channel{
    constructor(channel){
        this.channel = channel;
        //Set first selected group
    }

    getName(){
        return this.channel.name;
    }

    getPosterSettings(){
        return this.channel.settings.poster;
    }

    getContentSettings(){
        return this.channel.settings.gallery;
    }


    //------------Groups-----------//
    getTags(){
        return this.channel.settings.gallery.group.tags;
    }
    getGroupBackgroundColor(){
        return this.settings.gallery.group.backgroundColor;
    }
    getGroupTextColor(){
        return this.settings.gallery.group.textColor;
    }
    setSelectedGroup(group){
        this.selectedGroup = group;
    }

}

export default Channel;
