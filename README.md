# Introduction

VF Channel is lightweight JavaScript library in order to help you to build beatiful Videflow channel.

# Getting Started

## Create your channel app
A channel in videoflow is a static web application, that will be load your content from videolow and will give you the option to build your desired channel.

## Include the VF Channel lib
Add the following code in your HTML header

```html
    <head>
        ...
        <!------------------------------>
        <script src="https://raw.githack.com/TwiztedDesign/vf-channel/master/dist/vfchannel.min.js"></script>
        <script>
            (window.vfChannel.vfccnf = window.vfChannel.vfccnf || {
                env:'d',
                channel_client: "<channel_token>",
            });
            window.vfChannel.loadContent();
        </script>
        <!------------------------------>
        ...
    </head>
```

## Get into your content
The snippet is taking care to load the content. Once the data is ready a "Ready" event will be fired.
```html
  <script>
            window.vfChannel.on(window.vfChannel.events.READY, e => {
            let data = e.detail;

            console.log(data.getContent());
            console.log(data.getChannel());
            console.log(data.getPoster());
            console.log(data.getSettings());

            console.log('==============================');

            console.log(window.vfChannel.getContent());
            console.log(window.vfChannel.getChannel());
            console.log(window.vfChannel.getPoster());
            console.log(window.vfChannel.getSettings());

            //Get content again
            window.vfChannel.loadContent();
        });
    </script>
```
You can get the content in two ways:
* On the event call back - e.detail
* Using vfChannel methods
    * getContent
    * getChannel
    * getPoster


## Publish your content
In order to use your newly created channel, you need to host it in a publicly available accessible location, for example Netlify. Once you project has been published.

# VF Channel Global

After including the vff script in your html file, a "vfChannel" object is set on the window object.

## Methods
|       Method     | Details                                                                                             |
|------------------|-----------------------------------------------------------------------------------------------------|
| loadContent(**settings**, **cb**)| Fire  **Ready\Update** event when data loaded.<br>**settings** - Object - Contains the channel token.<br>**cb** - Function - optional value.|
| getContent()               | Returns array with all the content items.|
| getPoster()               | Returns object with the selected poster.|
| getChannel()                      | Returns object with the channel including the channel settings.|
| getSettings()                      | Returns object with the settings.|
| on(**type**, **cb**)                      | Event listenr on selected events.<br>**type** - String should be one of the events.<br>**cb** - Funtion - Will be called once the event happened.|
| removeEventListener(**type**, **cb**)                      | Event listenr on selected events.|



## VF Channel Events
When the content is ready or updated an event will be fired.
On initialization - **READY** event 
On update - **UPDATE** event
The new data is transfer on the event, but avilable on window.vfChannel too.
```javascript
// Register to ready event
 window.vfChannel.on(window.vfChannel.events.READY, e => {
    let data = e.detail;
    //Or another option
    let items = window.vfChannel.getContent();
    let channel = window.vfChannel.getChannel();
    let poster = window.vfChannel.getPoster();
    let settings = window.vfChannel.getSettings();
 });
```
Register to update event. This will be triggered only in case calling to loadContent()
<code>window.vfChannel.loadContent();</code>

```javascript
//In order to reload the content
window.vfChannel.loadContent();
// Register to ready event
 window.vfChannel.on(window.vfChannel.events.UPDATE, e => {
    let data = e.detail;
    //Or another option
    let items = window.vfChannel.getContent();
    let channel = window.vfChannel.getChannel();
    let poster = window.vfChannel.getPoster();
    let settings = window.vfChannel.getSettings();
 });
```

# Globals

## isMobile

**boolean**


## events

**String:** _READY_ | _UPDATE_ 


<!-- [![travis build](https://img.shields.io/travis/TwiztedDesign/vff.svg)](https://travis-ci.org/TwiztedDesign/vff) -->
<!-- ![version](https://img.shields.io/npm/v/vff.svg) -->
<!-- ![downloads](https://img.shields.io/npm/dt/vff.svg) -->
![MIT License](https://img.shields.io/github/license/TwiztedDesign/vff.svg)