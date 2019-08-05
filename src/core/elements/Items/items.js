import VFChannelHTMLElmenet from "../vfChannelHTMLElement";

export default class Items extends VFChannelHTMLElmenet {
    constructor(...args) {
        super(...args);
        this.items = window.vfchannel.content.getItems();
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
        if (!this.poster.shouldShowItems()) {
            return '';
        }
        return (
            `<div class="ch-galley" style:"${this.items.getBackgoundColor()}">
                <div class="ch-gallery-items">
                    <a class="ch-gallery-item" ng-repeat="item in items track by item.url| filter:galleryGroupFilter" href="{{item.url}}" target="_top" ng-style="{color:settings.gallery.textColor}">
                        <div class="ch-item-thumbnail" player-thumb="item"/>
                        <h3 class="ch-item-name" ng-if="settings.gallery.titleVisibility">{{getName(item)}}</h3>
                    </a>
                </div>
            </div>`
        );
    }

    _buildThumb() {
        return `color:${this.poster.getTextColor()}; background-image:url(${this.poster.getThumbnail()})`;
    }
}