class Content {
    constructor(content, settings) {
        this.content = content;
        this.settings = settings;
    }

    getName() {
        return (this.content.settings && this.content.settings.display_name) ? this.content.settings.display_name : this.content.name;
    }
    getUrl() {
        return this.content.url;
    }
    getThumbnail() {
        return this.content.thumbnail;
    }
    getTextColor() {
        return this.settings.textColor;
    }
    shouldShowTitle() {
        this.content && this.getName() !== '' && this.settings.titleVisibility;
    }
}

export default Content;
