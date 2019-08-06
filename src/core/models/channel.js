class Channel {
    constructor(channel) {
        Object.assign(this, channel);
        //Set first selected group
    }

    getName() {
        return this.name;
    }

    getSettings() {
        return this.settings;
    }
}

export default Channel;
