class Content {
    constructor(content) {
        Object.assign(this, content);
    }

    getName() {
        return (this.settings && this.settings.display_name) ? this.settings.display_name : this.name;
    }
    getUrl() {
        return this.url;
    }
    getThumbnail() {
        return this.thumbnail;
    }
    getTextColor() {
        return this.settings.textColor;
    }
    shouldShowTitle() {
        this.content && this.getName() !== '' && this.settings.titleVisibility;
    }
}

export default Content;
