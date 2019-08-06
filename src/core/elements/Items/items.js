import VFChannelHTMLElmenet from "../vfChannelHTMLElement";

export default class Items extends VFChannelHTMLElmenet {
    constructor(...args) {
        super(...args);
        this.items = window.vfChannel.content.getItems();
    }

    connectedCallback() {
        //this is the HTML element - 'vfchannel-items'
        this.style.display = 'block';
        this.refresh();
    }

    refresh() {
        this.innerHTML = this._buildHTML();
    }

    _buildHTML() {
        if (!this.items.shouldShowItems()) {
            return '';
        }
        return (
            `<div class="ch-galley" style:"${this.items.getBackgoundColor()}">
                <div class="ch-gallery-items">
                    ${this.items.getContent().map(() => {
                        return this._buildContent();
                    })}
                </div>
            </div>`
        );
    }

    _buildContent() {
        return `<vfchannel-content></vfchannel-content>`;
    }
}