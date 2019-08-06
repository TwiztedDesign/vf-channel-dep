import VFChannelHTMLElmenet from "../vfChannelHTMLElement";

export default class Content extends VFChannelHTMLElmenet {
    constructor(...args) {
        super(...args);
        this.content = window.vfchannel.content.getItems().items[0];
    }

    connectedCallback() {
        //this is the HTML element - 'vfchannel-poster'
        this.style.display = 'block';
        this.refresh();
    }

    refresh() {
        this.innerHTML = this._buildHTML();
    }

    _buildHTML() {
        return (
            `<a class="ch-gallery-item" ng-repeat="item in items track by item.url| filter:galleryGroupFilter" href="${this.content.getUrl()}" target="_top" style="color:${this.content.getTextColor()}">
                ${this._buildThumb()}
                ${this._buildName()}
            </a>`
        );
    }

    _buildThumb() {
        return `<div class="ch-item-thumbnail" color:${this.content.getTextColor()}; background-image:url(${this.content.getThumbnail()})"/>`;
    }

    _buildName() {
        if (!this.content.shouldShowTitle()) {
            return '';
        } else {
            return (` 
            <h3 class="ch-item-name">${this.content.getName()}</h3>`
            );
        }
    }
}