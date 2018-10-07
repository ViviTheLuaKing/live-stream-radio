(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/generate/tips.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./node_modules/@mdx-js/tag/dist/index.js");function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"tips"}},"Tips"),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"file-management"}},"File Management"),o.a.createElement(r.MDXTag,{name:"p",components:t},"I'd suggest using a lightweight file server like ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/silverwind/droppy"}},"Droppy")," to allow easy access to your stream files. Also, Droppy will let you edit the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"config.json")," file on the server itself! Another file server I could suggest would be ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://www.filerun.com/"}},"Filerun"),", it is a lot heavier than Droppy, but offers a more robust interface, and file meta data editing!"),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"systemd--run-on-boot"}},"Systemd / Run on Boot"),o.a.createElement(r.MDXTag,{name:"p",components:t},"On Ubuntu and Raspbian machine, you can get the stream to run on boot using systemd. I have a ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/torch2424/dotFiles/blob/master/.files_templates/systemctl.service"}},"systemctl service")," in my personal dotfiles I fill out to do this. I'd suggest looking there, and the links I provided in the comments to see how to get up and running with this. Another alternative is to look into setting this up in a crontab using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"@reboot"),"."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"config-settings"}},"Config Settings"),o.a.createElement(r.MDXTag,{name:"p",components:t},"For more context on the config settings, see this ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://trac.ffmpeg.org/wiki/EncodingForStreamingSites"}},"FFmpeg wiki on encoding for streaming"),". If you are familiar with FFmpeg and it's usage, see the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/torch2424/live-stream-radio/blob/master/src/stream/stream.js"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"stream.js"))," source file for how FFmpeg flags are bing used."))}}}]);