webpackJsonp([3],{213:function(e,t,n){"use strict";function o(e){if(e&&O.enableTypefiles?!L:L){if(e.match(/magnet:[^\\"]+/))return!0;var t=e.substr(e.lastIndexOf(".")+1);t=t.toLowerCase();for(var n=0;n<j.length;n++)if(t===j[n]||R)return!0}}function a(){var e={};O.rpcList.forEach(function(t,n){var o=t.url.match(/^(http|ws)(s)?(?:\:\/\/)(token\:[^@]*)?@?([^\:\/]*)\:?(\d*)(\/[^\/]*)/),a={host:o[4],port:o[5]||6800,secure:!(!o||!o[2]),secret:o[3]?o[3].split(":")[1]:"",path:o[6]||"/jsonrpc"};if(P[t.url])e[t.url]=P[t.url],delete P[t.url];else{var r=new D.Aria2(a);e[t.url]={aria2:r,rpc:t,push:t.push}}t.push&&i(e[t.url],t.name)});for(var t in P){var n=P[t].aria2;n&&n.socket&&1===n.socket.readyState&&P[t].aria2.close()}P=e}function i(e,t){var n=e.aria2;return!(!e.aria2||!e.aria2.socket||1!==n.socket.readyState)||(n.open().then(function(){s(e,t),e.reconnect&&(delete e.reconnect,_.success(["成功链接",t]))}).catch(function(n){I()(safari,"application.activeBrowserWindow.activeTab.url")&&(!e.reconnect&&_.error(["请确认aria2已经运行,每隔10秒将会自动重试"],[t,"连接失败"]),e.reconnect=!0),M=M||setInterval(function(){var e=0;C()(P,function(t){e+=i(t)?0:1}),e||clearInterval(M)},1e4)}),!1)}function r(){I()(safari,"extension.popovers[0].contentWindow.tlwin.refreshTaskList")&&safari.extension.popovers[0].contentWindow.tlwin.refreshTaskList()}function s(e,t){var n=e.aria2,o=function(e){r()},a=function(e){r()},i=function(e,t){r(),c(n,e.gid).then(function(e){_.show(t?"error":"success",[e,"下载",t?"失败":"成功"])})};n.onDownloadStart=o,n.onDownloadPause=a,n.onDownloadStop=a,n.onDownloadComplete=i,n.onBtDownloadComplete=i,n.onDownloadError=function(e){i(e,!0)}}function c(e,t){return e.tellStatus(t,["bittorrent"]).then(function(n){return e.getFiles(t).then(function(e){return{files:e,bt:n}})}).then(function(e){var t=e.files[0].path,n=t.split("/").pop();return e.bt&&e.bt.info?bt.bittorrent.info.name:n}).catch(function(e){_.error(["获取任务信息失败"])})}function l(e){var t=P[e[0].url],n=!!t&&t.aria2,o=O.enableCookie?"Cookie: "+e[3]:"";n&&e[1]?n.addUri([e[1]],{header:o,timeout:10,"content-disposition-default-utf8":!0,"user-agent":O.userAgent}).then(function(){_.success(["成功添加至",t.rpc.name,O.enableCookie?"":"(关闭cookie)"])}).catch(function(e){_.error(["添加至",t.rpc.name,"失败",O.enableCookie?"":"(关闭cookie)"]),console.log(e)}):_.error(["添加任务失败：没有url或者没有连接aria2"])}function f(e){"showOptions"===e.key&&u()}function u(){safari.application.activeBrowserWindow.openTab().url=safari.extension.baseURI+"options.html"}function p(){O=localStorage.getItem("safari2aria");try{O=JSON.parse(O||"{}")}catch(e){O={defaultRpcIndex:0}}j=O.filetypes?O.filetypes.split(" "):[];for(var e=0;e<j.length;e++)j[e]=j[e].toLowerCase();W=O.rpcList,d("sendToEndScript",O),a(),I()(safari,"extension.popovers[0].contentWindow.tlwin.refreshServerList")&&safari.extension.popovers[0].contentWindow.tlwin.refreshServerList()}function d(e,t,n){t instanceof Function&&(n=t,t={}),n&&(t=k()(t||{},{hasCb:!0}),B[e+"_cb"]=n),window.safari&&safari.application.activeBrowserWindow.activeTab.page&&safari.application.activeBrowserWindow.activeTab.page.dispatchMessage(e,t)}function h(e){var t=e.keyPressed||{};if(L=t[91],R=t[16],T=t[18],R&&T){for(var n=49;n<=57&&n-49<W.length;n++)if(t[n]){O.defaultRpcIndex=n-49,y({name:"updateSafari2Aria",message:O}),d("changeRpc",W[O.defaultRpcIndex].name);break}t[192]&&d("currentRpc",W[O.defaultRpcIndex].name),t[188]&&u(),t[76]&&safari&&safari.extension&&safari.extension.toolbarItems[0].showPopover()}}function v(e){if("showOptions"===e.command)u();else{var t=e.command.split(".")[1];l([t&&W[t]?W[t]:W[0]].concat(e.userInfo))}}function m(e){var t=e.command&&e.command.match(/^DownloadWithAria2/);if(t&&t.length>=0){var n=e.userInfo;n&&n.length&&n[0]||(e.target.disabled=!0)}}function g(e){o(e.url)&&(e.preventDefault(),d("getCookie",function(t){l([W[O.defaultRpcIndex],e.url,e.target.url,t.cookie])}))}function w(e){W.forEach(function(t,n){e.contextMenu.appendContextMenuItem(["DownloadWithAria2",n].join("."),["下载至",t.name].join(""))})}function y(e){B[e.name]&&B[e.name](e.message,e)}Object.defineProperty(t,"__esModule",{value:!0});var b=n(32),k=n.n(b),x=n(53),S=n.n(x),A=n(54),I=n.n(A),E=n(82),C=n.n(E),D=n(81),O={defaultRpcIndex:0},L=void 0,R=void 0,T=void 0,j=[],W=[],P={},M=void 0,B={updateSafari2Aria:function(e){localStorage.setItem("safari2aria",S()(e)),p()},keyPress:function(e){h(e)},getConfig:function(){d("sendToEndScript",O)},downloadFromIframe:function(e,t){if(o(e.url)){l([W[O.defaultRpcIndex],e.url,t.target.url,e.cookie])}}},_={success:function(e,t){_.show("success",e,t)},error:function(e,t){_.show("error",e,t)},show:function(e,t,n){t instanceof Array&&(t=t.join("")),n instanceof Array&&(n=n.join("")),d("showMassage",{action:e||"success",text:t,title:n})}};window.s2a={changeServer:function(e){var t=void 0;C()(W,function(n,o){n.url===e&&(t=o)}),O.defaultRpcIndex=t,y({name:"updateSafari2Aria",message:O})},openOptions:u,getConfig:function(){return{config:O,aria2Connects:P}}},document.addEventListener("DOMContentLoaded",p),safari.application.addEventListener("message",y,!1),safari.extension.settings.addEventListener("change",f,!1),safari.application.addEventListener("command",v,!1),safari.application.addEventListener("validate",m,!1),safari.application.addEventListener("beforeNavigate",g,!1),safari.application.addEventListener("contextmenu",w,!1)},81:function(e,t,n){"use strict";(function(e){var t=n(53),o=n.n(t),a=n(34),i=n.n(a),r=n(150),s=n.n(r),c=n(184),l=n.n(c);!function(t){var n=void 0!==e&&e.exports,a=function e(t){this.callbacks=s()(null),this.lastId=0;for(var n in e.options)this[n]="object"===(void 0===t?"undefined":i()(t))&&n in t?t[n]:e.options[n]};a.prototype.http=function(e,t){var n=this,a={method:e.method,id:e.id};Array.isArray(e.params)&&e.params.length>0&&(a.params=e.params);var i="http"+(this.secure?"s":"")+"://"+this.host+":"+this.port+this.path;fetch(i,{method:"POST",body:o()(a),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){n._onmessage(e)}).catch(t)},a.prototype.send=function(e){var t=Array.prototype.slice.call(arguments,1),n="function"==typeof t[t.length-1]?t.pop():null;return this.exec(e,t,n)},a.prototype.exec=function(e,t,n){if("string"!=typeof e)throw new TypeError(e+" is not a string");0!==e.indexOf("system.")&&0!==e.indexOf("aria2.")&&(e="aria2."+e);var a={method:e,"json-rpc":"2.0",id:this.lastId++},i=this.secret?["token:"+this.secret]:[];Array.isArray(t)&&("system.multicall"===e?(Array.isArray(t[0])&&t[0].forEach(function(e){e.params||(e.params=[]),e.params=i.concat(e.params)}),i=t):i=i.concat(t)),i.length>0&&(a.params=i),this.onsend(a);var r=this;return this.socket&&1===this.socket.readyState?this.socket.send(o()(a)):this.http(a,function(e){r.callbacks[a.id](e),delete r.callbacks[a.id]}),l()(function(e){r.callbacks[a.id]=e},n)},a.prototype._onmessage=function(e){if(this.onmessage(e),void 0!==e.id){var t=this.callbacks[e.id];t&&(e.error?t(e.error):t(null,e.result),delete this.callbacks[e.id])}else if(e.method){var n=e.method.split("aria2.")[1];0===n.indexOf("on")&&"function"==typeof this[n]&&a.notifications.indexOf(n)>-1&&this[n].apply(this,e.params)}},a.prototype.open=function(e){var t="ws"+(this.secure?"s":"")+"://"+this.host+":"+this.port+this.path,n=this.socket=new WebSocket(t),o=this,a=!1;return n.onmessage=function(e){o._onmessage(JSON.parse(e.data))},l()(function(e){n.onopen=function(){a||(e(),a=!0),o.onopen()},n.onclose=function(t){o.onclose(),1006==t.code&&(a||(e(t),a=!0))},n.onerror=function(t){a||(e(t),a=!0)}},e)},a.prototype.close=function(e){var t=this.socket;return l()(function(e){t?(t.addEventListener("close",function(){e()}),t.close()):e()},e)},a.methods=["addUri","addTorrent","addMetalink","remove","forceRemove","pause","pauseAll","forcePause","forcePauseAll","unpause","unpauseAll","tellStatus","getUris","getFiles","getPeers","getServers","tellActive","tellWaiting","tellStopped","changePosition","changeUri","getOption","changeOption","getGlobalOption","changeGlobalOption","getGlobalStat","purgeDownloadResult","removeDownloadResult","getVersion","getSessionInfo","shutdown","forceShutdown","saveSession","system.multicall","system.listMethods","system.listNotifications"],a.notifications=["onDownloadStart","onDownloadPause","onDownloadStop","onDownloadComplete","onDownloadError","onBtDownloadComplete"],a.events=["onopen","onclose","onsend","onmessage"],a.options={secure:!1,host:"localhost",port:6800,secret:"",path:"/jsonrpc"},a.methods.forEach(function(e){var t=e.indexOf(".")>-1?e.split(".")[1]:e;a.prototype[t]=function(){return this.send.apply(this,[e].concat(Array.prototype.slice.call(arguments)))}}),a.notifications.forEach(function(e){a.prototype[e]=function(){}}),a.events.forEach(function(e){a.prototype[e]=function(){}}),n?e.exports=a:t.Aria2=a}(this)}).call(t,n(189)(e))}},[213]);