import Content from './content';

class Contents{
    constructor(contents, settings){
        this.contents = contents.map(content => {
            return new Content(content, settings);
        });
        this.settings = settings;
    }

    getLength(){
        return this.contents.length;
    }
}

export default Contents;
