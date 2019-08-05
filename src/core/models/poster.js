class Poster {
    constructor(poster, settings) {
        this.poster = poster;
        this.settings = settings;
    }
    getName() {
        return (this.poster.settings && this.poster.settings.display_name) ? this.poster.settings.display_name : this.poster.name;
    }
    getDescription() {
        return this.poster.settings && this.poster.settings.description;
    }
    getUrl() {
        return this.poster.url;
    }
    getThumbnail() {
        return this.poster.thumbnail;
    }
    getTextColor() {
        return this.settings.textColor;
    }
    shouldShowPoster() {
        return this.poster && this.settings.visibility;
    }
    shouldShowTitle() {
        return this.poster && this.getName() !== '' && this.settings.titleVisibility;
    }
    shouldShowDesciption() {
        return this.poster && this.getDescription() !== '';
    }
}

export default Poster;
