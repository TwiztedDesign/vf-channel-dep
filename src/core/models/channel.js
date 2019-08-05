class Channel{
    constructor(channel){
        this.channel = channel;
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
}

export default Channel;
