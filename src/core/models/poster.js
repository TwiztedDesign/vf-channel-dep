class Poster {
    constructor(poster) {
         Object.assign(this,poster);
    }
    getName() {
        return (this.settings && this.settings.display_name) ? this.settings.display_name : this.name;
    }
    getDescription() {
        return this.settings && this.settings.description;
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
    shouldShowPoster() {
        return this.settings.visibility;
    }
    shouldShowTitle() {
        return this.getName() !== '' && this.settings.titleVisibility;
    }
    shouldShowDesciption() {
        return this.getDescription() !== '';
    }
}

export default Poster;
