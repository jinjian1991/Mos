!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},r.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=10)}([function(n,e,r){var t,o,i={},a=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=t.apply(this,arguments)),o}),s=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),l=null,c=0,d=[],u=r(7);function f(n,e){for(var r=0;r<n.length;r++){var t=n[r],o=i[t.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](t.parts[a]);for(;a<t.parts.length;a++)o.parts.push(b(t.parts[a],e))}else{var s=[];for(a=0;a<t.parts.length;a++)s.push(b(t.parts[a],e));i[t.id]={id:t.id,refs:1,parts:s}}}}function p(n,e){for(var r=[],t={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(s):r.push(t[a]={id:a,parts:[s]})}return r}function g(n,e){var r=s(n.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=d[d.length-1];if("top"===n.insertAt)t?t.nextSibling?r.insertBefore(e,t.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),d.push(e);else if("bottom"===n.insertAt)r.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertInto+" "+n.insertAt.before);r.insertBefore(e,o)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=d.indexOf(n);e>=0&&d.splice(e,1)}function h(n){var e=document.createElement("style");return n.attrs.type="text/css",x(e,n.attrs),g(n,e),e}function x(n,e){Object.keys(e).forEach(function(r){n.setAttribute(r,e[r])})}function b(n,e){var r,t,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var a=c++;r=l||(l=h(e)),t=w.bind(null,r,a,!1),o=w.bind(null,r,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",x(e,n.attrs),g(n,e),e}(e),t=function(n,e,r){var t=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(t=u(t));o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([t],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,e),o=function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=h(e),t=function(n,e){var r=e.css,t=e.media;t&&n.setAttribute("media",t);if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){m(r)});return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=p(n,e);return f(r,e),function(n){for(var t=[],o=0;o<r.length;o++){var a=r[o];(s=i[a.id]).refs--,t.push(s)}n&&f(p(n,e),e);for(o=0;o<t.length;o++){var s;if(0===(s=t[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var v,y=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function w(n,e,r,t){var o=r?"":t.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(a=t,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=t.sources.map(function(n){return"/*# sourceURL="+t.sourceRoot+n+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(t[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&t[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(n,e,r){(n.exports=r(1)(!1)).push([n.i,".parallaxButton {\n  position: relative;\n  display: inline-block;\n  padding: 1.2em 4em;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  color: white;\n}\n.parallaxButton::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(-15deg, #2368ff, #a777e3);\n  /*background: linear-gradient(-15deg, #060606, #353535);*/\n  border-radius: 4px;\n  -webkit-transition: -webkit-box-shadow .5s ease, -webkit-transform .2s ease;\n  transition: -webkit-box-shadow .5s ease, -webkit-transform .2s ease;\n  transition: box-shadow .5s ease, transform .2s ease;\n  transition: box-shadow .5s ease, transform .2s ease, -webkit-box-shadow .5s ease, -webkit-transform .2s ease;\n  will-change: transform;\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));\n}\n.parallaxButton:hover::before {\n  -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n/*.parallaxButton::after {*/\n  /*position: relative;*/\n  /*display: inline-block;*/\n  /*content: attr(data-title);*/\n  /*-webkit-transition: -webkit-transform .2s ease;*/\n  /*transition: -webkit-transform .2s ease;*/\n  /*transition: transform .2s ease;*/\n  /*transition: transform .2s ease, -webkit-transform .2s ease;*/\n  /*font-weight: bold;*/\n  /*font-size: 18px;*/\n  /*letter-spacing: .01em;*/\n  /*will-change: transform;*/\n  /*-webkit-transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));*/\n  /*transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));*/\n/*}*/\n\n\n/*Custom*/\n.parallaxButtonContainer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: flex-start;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-transform: perspective(800px);\n    transform: perspective(800px);\n    margin-top: 20px;\n    opacity: 0.8;\n}\n.parallaxButtonContainer .parallaxButton {\n    margin-right: 20px;\n}\n.parallaxButton>span {\n  position: relative;\n  display: inline-block;\n  -webkit-transition: -webkit-transform .2s ease;\n  transition: -webkit-transform .2s ease;\n  transition: transform .2s ease;\n  transition: transform .2s ease, -webkit-transform .2s ease;\n  font-weight: bold;\n  font-size: 18px;\n  letter-spacing: .01em;\n  will-change: transform;\n  -webkit-transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));\n}",""])},function(n,e,r){var t=r(2);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(0)(t,o);t.locals&&(n.exports=t.locals)},function(n,e){var r=document.documentElement.style,t=document.querySelector(".parallaxButton"),o=t.getBoundingClientRect();window.onresize=function(n){o=t.getBoundingClientRect()},window.onscroll=function(n){o=t.getBoundingClientRect()},t.onmousemove=function(n){const e=n.clientX-o.left,t=n.clientY-o.top,i=e-o.width/2,a=t-o.height/2;r.setProperty("--rx",`${a/-1}deg`),r.setProperty("--ry",`${i/10}deg`)},t.onmouseleave=function(n){r.setProperty("--ty","0"),r.setProperty("--rx","0"),r.setProperty("--ry","0")},t.onmousedown=function(n){r.setProperty("--tz","-25px")},document.body.onmouseup=function(n){r.setProperty("--tz","-12px")}},function(n,e){!function(){var n,e,r=window.navigator.language.toLowerCase(),t=document.querySelector("html").lang,o={detailImageA:{zh:"./resources/image/cn/PreferencesGeneral.png",en:"./resources/image/en/PreferencesGeneral.png"},detailImageB:{zh:"./resources/image/cn/PreferencesAdvanced.png",en:"./resources/image/en/PreferencesAdvanced.png"},detailImageC:{zh:"./resources/image/cn/PreferencesExceptionFull.png",en:"./resources/image/en/PreferencesExceptionFull.png"}};(e=n||r)!==t&&Object.keys(o).forEach(function(n){var r=o[n];r[e]?document.querySelector("#"+n).src=r[e]:r[e.substring(0,2)]&&(document.querySelector("#"+n).src=r[e.substring(0,2)])})}()},function(n,e){!function(){var n,e,r=window.navigator.language.toLowerCase(),t=document.querySelector("html").lang,o={title:{zh:"MOS | 一个用于在 MacOS 上平滑你的鼠标滚动效果或单独设置滚动方向的小工具, 让你的滚轮爽如触控板",en:"MOS | A lightweight tool used to smooth scrolling and set scroll direction independently for your mouse on MacOS"},information:{zh:"一个用于在 MacOS 上平滑你的鼠标滚动效果或单独设置滚动方向的小工具, 让你的滚轮爽如触控板",en:"A lightweight tool used to smooth scrolling and set scroll direction independently for your mouse on MacOS"},detailTitleA:{zh:"现在, 完全掌控你的鼠标",en:"Take Full Control of Your Mouse"},detailTextA:{zh:"Mos 可以分离你的触控板与鼠标的滚动事件, 皆因与此, 鼠标的滚动方向再也不受触控板所限. 同时, Mos 还可以为你的鼠标提供平滑滚动, 不管你是 Windows 用户, 亦或是 MacOS 用户, 均可切换自如",en:"Mos separates touchpad and mouse scrolls independently, then, you can set the direction of the touchpad and mouse wheel separately. Also, Mos providing smooth scrolling for your mouse, whether you are a Windows user or a MacOS, you can move freely."},detailTitleB:{zh:"滚动, 从未如此顺手",en:"Scrolling, Never So Smooth"},detailTextB:{zh:"经过 Mos 独特的插值算法处理后, 您的鼠标滚动将会变得前所未有的顺滑",en:"The Mos's special interpolation algorithm can make every mouse roll as smooth and silky as possible."},detailTitleC:{zh:"所有应用, 尽在管理之下",en:"Each Program is Under Management"},detailTextC:{zh:"Mos 可以独立管理每个应用程序的滚动行为. 对付某些恼人的程序, 交给我们解决",en:"Mos can independently manage the scrolling behavior of each application. For some annoying programs, we help you."},suggestionTitle:{zh:"那么, 你还在等什么呢",en:"So, what are you waiting for?"},createBy:{zh:"设计与创作由 ",en:"Create & Design by "},createAnd:{zh:"完成, 以及所有的",en:", and all the"},contributors:{zh:"贡献者们",en:"contributors"},poweredBy:{zh:"自豪地采用 ",en:"Powered by "},unique:{zh:"献给每一位有追求的 MacOS 用户",en:"For every pursuing MacOS users"},downloadNow:{zh:"马上下载",en:"Download Now"},downloadNowButton:{zh:"马上下载",en:"Download Now"},version:{zh:"版本 2.0.0, 要求 macOS 10.11 或更新版本",en:"Version 2.0.0, requires macOS 10.11 or later"}};(e=n||r)!==t&&Object.keys(o).forEach(function(n){var r=o[n];r[e]?document.querySelector("#"+n).innerText=r[e]:r[e.substring(0,2)]&&(document.querySelector("#"+n).innerText=r[e.substring(0,2)])})}()},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=e.protocol+"//"+e.host,t=r+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:t+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,r){(n.exports=r(1)(!1)).push([n.i,"/*主体*/\r\nbody {\r\n    opacity: 0;\r\n    overflow-x: hidden;\r\n    animation: fadeIn;\r\n    animation-delay: 1s;\r\n    animation-duration: 1.5s;\r\n    animation-fill-mode: forwards;\r\n}\r\nmain>section {\r\n    box-sizing: border-box;\r\n    /*必须*/\r\n    position: relative;\r\n    padding-top: 90px;\r\n    width: 100%;\r\n}\r\nmain>section:first-of-type {\r\n    height: 100vh;\r\n}\r\n/*各单元导航*/\r\nmain>section>nav {\r\n    /*必须*/\r\n    position: absolute;\r\n    /*必须*/\r\n    top: 0; right: 0; bottom: 0; left: 0;\r\n    /*必须*/\r\n    clip: rect(auto, auto, auto, auto);\r\n}\r\nmain>section>nav>div {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\nmain>section>nav>div>div {\r\n    max-width: 1440px;\r\n    height: 90px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    padding: 0 calc(1440px * (1 / 24));\r\n}\r\n.logo {\r\n    pointer-events: all;\r\n    height: 90px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.logo img {\r\n    height: 45px;\r\n}\r\n.logo label {\r\n    cursor: pointer;\r\n    user-select: none;\r\n    margin-left: 15px;\r\n    line-height: 90px;\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    transition: all .1s ease-out;\r\n}\r\n.logo label:hover {\r\n    transform: scale(1.1);\r\n}\r\n.logo label:active {\r\n    transform: scale(1.0);\r\n}\r\n/*Github按钮*/\r\n.github {\r\n    transition: all .1s;\r\n}\r\n.github svg {\r\n    width: 24px;\r\n    height: 24px;\r\n    fill: #999;\r\n}\r\n.github:hover svg {\r\n    fill: #666;\r\n}\r\n.github:active svg {\r\n    fill: #333;\r\n}\r\n\r\n\r\n\r\n/*各区块*/\r\n.lendingSection {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.lendingSection>div {\r\n    margin: -90px auto 0;\r\n    max-width: 1400px;\r\n    padding: 0 100px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.lendingSection .detail {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.lendingSection .detail h1 {\r\n    font-size: 72px;\r\n}\r\n.lendingSection .slogan {\r\n    position: relative;\r\n}\r\n.lendingSection .slogan span {\r\n    position: absolute;\r\n    left: 130px;\r\n    top: 66px;\r\n}\r\n.lendingSection .detail h2 {\r\n\r\n}\r\n.lendingSection .detail .information {\r\n    color: #666;\r\n    margin-bottom: 15px;\r\n}\r\n.lendingSection .introImage {\r\n    flex-shrink: 0;\r\n    width: 40%;\r\n    min-width: 300px;\r\n    filter: drop-shadow(0 12px 7px rgba(0, 0, 0, 0.3));\r\n}\r\n.lendingSection .introImage img {\r\n    width: 100%;\r\n}\r\n.lendingSection #version {\r\n    margin-left: 20px;\r\n    font-size: 12px;\r\n    color: #666;\r\n}\r\n\r\n\r\n\r\n\r\n.detailSection {\r\n\r\n}\r\n.detailSection article {\r\n    margin: auto;\r\n    max-width: 1400px;\r\n    padding: 0 100px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.detailSection article>div {\r\n    width: 50%;\r\n    flex-shrink: 0;\r\n}\r\n.detailSection article>div h2{\r\n    font-size: 38px;\r\n    margin-bottom: 20px;\r\n}\r\n.detailSection article>div h3{\r\n    font-size: 16px;\r\n    color: #333;\r\n}\r\n.detailSection article>div.image:nth-child(even) {\r\n\r\n}\r\n.detailSection article>div.image:nth-child(odd) {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n\r\n\r\n.commentSection {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n\r\n.suggestionSection {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: linear-gradient(170deg, #c5b7f0 0%, #40BAF5 97%);\r\n    padding-bottom: 90px;\r\n    color: white;\r\n    pointer-events: initial;\r\n}\r\n.suggestionSection>div {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index: 100;\r\n}\r\n.suggestionSection>div>img {\r\n    width: 50px;\r\n}\r\n.suggestionSection>div>h1 {\r\n    margin-left: 20px;\r\n    font-size: 48px;\r\n    pointer-events: none;\r\n}\r\n.suggestionSection .download {\r\n    transition: all .3s;\r\n}\r\n.suggestionSection .download:hover {\r\n    transform: scale3d(1.1, 1.1, 1);\r\n}\r\n.suggestionSection .download:active {\r\n    transform: scale3d(1, 1, 1);\r\n}\r\n.suggestionSection .download a {\r\n    background-color: white;\r\n    color: #77b9f0;\r\n    border-radius: 4px;\r\n    padding: .8em 2em;\r\n    cursor: pointer;\r\n    margin: 20px;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    letter-spacing: .01em;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n.footer {\r\n    padding: 80px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #333;\r\n}\r\n.footer>div {\r\n    margin: 2px auto;\r\n}\r\n.footer a {\r\n    text-decoration: underline;\r\n    margin: 0 2px;\r\n    color: #333;\r\n    font-weight: bold;\r\n}\r\n.footer .github {\r\n    margin-top: 5px;\r\n}\r\n\r\n\r\n.navHide {\r\n    color: transparent;\r\n    background-color: transparent;\r\n}\r\n.navShow {\r\n    color: #333333;\r\n    background-color: #f2f3f5;\r\n    box-shadow: 0 0 10px #ccc;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(50px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}",""])},function(n,e,r){var t=r(8);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(0)(t,o);t.locals&&(n.exports=t.locals)},function(n,e,r){"use strict";r.r(e);r(9),r(6),r(5),r(4),r(3)}]);