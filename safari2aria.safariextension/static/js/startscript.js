webpackJsonp([5],{150:function(i,e,n){"use strict";e.a=function(i,e){var n=document.createElement("script");n.type="text/javascript",n.innerHTML=["(",i.toString(),")(",JSON.stringify(e),")"].join(""),document.documentElement.appendChild(n)}},158:function(i,e,n){"use strict";function t(){var i=window.mDisableBaiduLimit;window.mDisableBaiduLimit=!0;var e="浏览器window.navigator属性修改失败，自动尝试方案2。",n="无法修改浏览器window.navigator，这将影响屏蔽功能。",t=window.navigator.platform,a=window.navigator.userAgent;try{Object.defineProperty(window.navigator,"platform",{get:function(){return window.mDisableBaiduLimit?"Android":t}}),Object.defineProperty(window.navigator,"userAgent",{get:function(){return window.mDisableBaiduLimit?"Android":a}})}catch(i){}!function(){if("Android"!==window.navigator.platform){console.log(e);try{window.navigator.__defineGetter__("platform",function(){return window.mDisableBaiduLimit?"Android":t}),window.navigator.__defineGetter__("userAgent",function(){return window.mDisableBaiduLimit?"Android":a})}catch(i){}"Android"!==window.navigator.platform&&console.log(n)}window.mDisableBaiduLimit=i}()}function a(i){console.log("disableBaiduLimit:",i.disableBaiduLimit),window.mDisableBaiduLimit=i.disableBaiduLimit}Object.defineProperty(e,"__esModule",{value:!0});var o=n(37),s=n(150);window.top===window&&location.href.match(/baidu/)&&(n.i(s.a)(t),n.i(o.a)({send:[{name:"getConfig",params:""}],listeners:[{name:"sendToEndScript",cb:function(i){n.i(s.a)(a,{disableBaiduLimit:i.disableBaiduLimit})}}]}))},37:function(i,e,n){"use strict";e.a=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(e,n){setTimeout(function(){n("timeout to get config")},1e4),window.extensionMessageListener||safari.self.addEventListener("message",function(i){var t=0;window.extensionMessageListener.forEach(function(n){i.name===n.name&&(n.cb&&n.cb(i.message||{}),e(i.message||{}),t++)}),t||n("no listener"),i.message&&i.message.hasCb&&safari.self.tab.dispatchMessage([i.name,"cb"].join("_"),{cookie:document.cookie})},!1),window.extensionMessageListener=[].concat(window.extensionMessageListener||[]).concat(i.listeners||[]),i.send&&i.send.forEach(function(i){safari.self.tab.dispatchMessage(i.name,i.params)})})}}},[158]);