import VFChannelHTMLElmenet from "../vfChannelHTMLElement";

export default class Poster extends VFChannelHTMLElmenet {
    constructor(...args) {
        super(...args);
        this.poster = window.vfChannel.content.getPoster();
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
        if (!this.poster.shouldShowPoster()) {
            return '';
        }
        return (
            `<a href=${this.poster.getUrl()} target="_top" class="ch-poster" style="${this._buildThumb()}">
                <div class="ch-poster-overlay" ng-if="getName(posterItem) && settings.poster.titleVisibility">
                    ${this._buildTitle()}
                </div>
                <div class="ch-poster-play-button"></div>
            </a>`
        );
    }

    _buildThumb() {
        return `color:${this.poster.getTextColor()}; background-image:url(${this.poster.getThumbnail()})`;
    }

    _buildTitle() {
        if (!this.poster.shouldShowTitle()) {
            return '';
        } else {
            return (` 
            <div class="ch-poster-overlay">
                <h1 class="ch-poster-title">${this.poster.getName()}</h1>
                ${this._buildDesciption()}
            </div>`
            );
        }
    }

    _buildDesciption() {
        if (!this.poster.shouldShowDesciption()) {
            return '';
        } else {
            return `<h2 class="ch-poster-desc">${this.poster.getDesciption()}</h2>`;
        }
    }
}