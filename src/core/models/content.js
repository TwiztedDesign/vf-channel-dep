class Content{
    constructor(content, settings){
        this.content = content;
        this.settings = settings;
    }

    getName(){
        return this.content.name;
    }
}

export default Content;
