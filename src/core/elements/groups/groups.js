import VFChannelHTMLElmenet from "../vfChannelHTMLElement";

export default class Groups extends VFChannelHTMLElmenet {
    constructor(...args) {
        super(...args);
        this.channel = window.vfchannel.content.getChannel();
        this.groups = this.channel.getTags();
    }

    connectedCallback() {
        this.style.display = 'block';
        this.refresh();
    }

    refresh() {
        this.innerHTML = this._buildHTML();
    }

    _buildHTML() {
        if (!this.poster.shouldShowGroups()) {
            return '';
        }
        return (
            `<div class="ch-gallery-groups" ng-style="background-color:${this.channel.getGroupBackgroundColor()}">
                ${this.groups.map(group=>this._buildGroup(group))}
            </div>`
        );
    }

    _buildGroup(group) {
        return `<a class="ch-gallery-group" onclick="console.log('ziv')" style="color:${this.channel.getGroupTextColor()}">${group}</a>`
    }
}