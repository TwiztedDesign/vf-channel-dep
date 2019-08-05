import Content from './content';

class Items{
    constructor(items, settings){
        this.items = items.map(content => {
            return new Content(content, settings);
        });
        this.settings = settings;
    }

    getLength(){
        return this.items.length;
    }
    
    getBackgoundColor(){
        return this.settings.gallery.backgroundColor;
    }
    
    shouldShowItems(){
        return this.settings.gallery.visibility;
    }
}

export default Items;
