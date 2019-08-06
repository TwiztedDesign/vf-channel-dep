import Content from './content';

class Items {
    constructor(items, settings) {
        this.items = items.map(content => {
            return new Content(content, settings);
        });
        this.settings = settings;
    }

    getLength() {
        return this.items.length;
    }
    getContent() {
        return this.items;
    }
    getBackgoundColor() {
        return this.settings.backgroundColor;
    }
    getTextColor() {
        return this.settings.textColor;
    }
    shouldShowItems() {
        return this.settings.visibility;
    }
}

export default Items;
