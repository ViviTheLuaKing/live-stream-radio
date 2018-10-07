(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/generate/config.mdx":function(e,a,t){"use strict";t.r(a);var n=t("./node_modules/react/index.js"),o=t.n(n),r=t("./node_modules/@mdx-js/tag/dist/index.js");function m(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}a.default=function(e){var a=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"config"}},"Config"),o.a.createElement(r.MDXTag,{name:"p",components:a},"This page will go in detail with every field of a projects ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"config.json"),". If you ever need to reset the default settings, or see an example ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"config.json"),", please check out the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/torch2424/live-stream-radio/blob/master/src/generate/template/config.json"}},"default config.json"),"."),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"settings-fields"}},"Settings Fields"),o.a.createElement(r.MDXTag,{name:"table",components:a},o.a.createElement(r.MDXTag,{name:"thead",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Field"),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Usage"))),o.a.createElement(r.MDXTag,{name:"tbody",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"stream_url"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The URL of the stream. You can use $stream_key as a variable, this will replace it with the value of stream_key. You can overwrite this field with the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"--output")," CLI flag.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"stream_key"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The stream key provided by your stream platform.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"ffmpeg_path"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The path to your ffmpeg binaries. If this field is left empty, the project will try to find ffmpeg binaries specified in your path.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"video_codec"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The codec used by ffmpeg to encode the stream video output.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"audio_codec"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The codec used by ffmpeg to encode the stream audio output.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"audio_bit_rate"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The bit rate of the stream audio output.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"audio_sample_rate"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The audio sample rate of the stream audio output.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"audio_bit_rate"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The audio bitrate of your stream.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"audio_sample_rate"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The audio sample rate of your steam.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"video_height"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The height of your stream.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"video_width"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The width of your stream.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"video_bit_rate"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The bitrate of your stream.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"video_fps"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The fps (frames per second) of your stream.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"bufsize"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Buffer size for the stream output, denoted by ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"-bufsize")," flag in FFmpeg")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"crf"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Standard constant rate used by FFmpeg used to improve streaming. Denoted by the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"-crf")," flag in FFmpeg.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"preset"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Preset used by FFmpeg to acheive a balance of quality and performance in FFmpeg, denoted by the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"-preset")," flag in FFmpeg.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"threads"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Number of threads to limit the FFmpeg process to. Denoted by the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"-threads")," flag in FFmpeg.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"max_gif_size"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The maximum width or height of a gif for your stream. This is used by the optimization used on gifs.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"api.host"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Host of the API. (usually localhost)")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"api.port"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Port on which the API runs on.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"api.key"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"API Key used for authentication. This is basically your admin password, so keep it secret!")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"api.number_of_history_items"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Number of items to store in the streams history to get the last played songs.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"radio.audio_directory"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Path to your music. Check out the FAQ for supported file types.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"radio.video_directory"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Path to your videos and gifs. Check out the FAQ for supported file types.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"radio.overlay.enabled"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Enables/Disables overlays.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"radio.overlay.font_path"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Path to the fonts used for the stream overlays. Check out the FAQ for supported file types.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"radio.overlay.title.enable_scroll"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Enables horizontal scrolling of the title.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"radio.overlay.title.font_scroll_speed"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"The speed at which the title scrolls.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"radio.overlay.artist"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Common Text Object for the artist.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"radio.overlay.album"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Common Text Object for the album.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"radio.overlay.song"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Common Text Object for the song.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"radio.overlay.image"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Common Image Object for an overlay over the text and video.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"interlude.enabled"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Enables interludes which are are transition videos/audios played in-between songs.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"interlude.frequency"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Percentage of how often an interlude should be played. Valid values are from 0.0 (never) to 1.0 (100% of the time).")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"interlude.audio_directory"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Path to your interlude music. Check out the FAQ for supported file types.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"interlude.video_directory"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Path to your interlude videos and gifs. Check out the FAQ for supported file types.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"interlude.overlay.enabled"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Enables overlays in interludes.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"interlude.overlay.font_path"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Path to the fonts used for the stream overlays. Check out the FAQ for supported file types.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"interlude.overlay.title"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Common Text Object for the a title.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"interlude.overlay.image"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Common Image Object for an overlay over the text and video.")))),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"video-heightwidth-ratio"}},"Video HeightWidth Ratio"),o.a.createElement(r.MDXTag,{name:"p",components:a},"These are common values for the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"video_height")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"video_width")," fields."),o.a.createElement(r.MDXTag,{name:"table",components:a},o.a.createElement(r.MDXTag,{name:"thead",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Quality"),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Width"),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Height"))),o.a.createElement(r.MDXTag,{name:"tbody",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"240p"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"426"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"240")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"360p"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"640"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"360")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"480p"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"854"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"480")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"720p"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"1280"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"720")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"1080p"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"1920"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"1080")))),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"common-text-object"}},"Common Text Object"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Common Text Objects contain all settings required to display text."),o.a.createElement(r.MDXTag,{name:"table",components:a},o.a.createElement(r.MDXTag,{name:"thead",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Field"),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Usage"))),o.a.createElement(r.MDXTag,{name:"tbody",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"enabled"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Enables/Disables this text object")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"text"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Text string for this object")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"font_color"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"HEX color with leading # of the fonts color")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"font_border"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"HEX color with leading # of the fonts border color")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"font_size"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Size of the font")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"position_x"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Percentage value (without the %) of the X position of the font.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"position_y"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Percentage value (without the %) of the Y position of the font.")))),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"example"}},"Example"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},'"some-text-object": {\n  "enabled": true\n  "text": "Live Stream Radio, 24/7 Open Source Radio",\n  "font_color": "#FFFFFF",\n  "font_border": "#000000",\n  "font_size": "10",\n  "position_x": "0",\n  "position_y": "5"\n}\n')),o.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"common-image-object"}},"Common Image Object"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Common Image Objects contain all settings required to display an image."),o.a.createElement(r.MDXTag,{name:"table",components:a},o.a.createElement(r.MDXTag,{name:"thead",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Field"),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Usage"))),o.a.createElement(r.MDXTag,{name:"tbody",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"enabled"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Enables/Disables this image object")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"image_path"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Path to the image. Check out the FAQ for supported file types.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"position_x"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Horizontal position of the image in pixels from left.")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"position_y"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Vertical position of the image in pixels from the top.")))),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"example-1"}},"Example"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},'"image": {\n  "enabled": true,\n  "image_path": "./live-stream-radio-overlay-image.png",\n  "position_x": 0,\n  "position_y": 0\n}\n')))}}}]);