(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({"export~map~upload":"export~map~upload","export~map":"export~map",export:"export","map~upload":"map~upload",map:"map",upload:"upload"}[e]||e)+"."+{"export~map~upload":"467553f5","export~map":"559be34c",export:"df3c74af","map~upload":"e2335cd2",map:"93f3a1fa",upload:"2f350880"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"export~map~upload":1,"export~map":1,export:1,"map~upload":1,map:1,upload:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"export~map~upload":"export~map~upload","export~map":"export~map",export:"export","map~upload":"map~upload",map:"map",upload:"upload"}[e]||e)+"."+{"export~map~upload":"5073cd1f","export~map":"a6b5699a",export:"c7c0eaa6","map~upload":"53be96da",map:"36082a06",upload:"791f0d33"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],l.parentNode.removeChild(l),n(c)},l.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"025e":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return d}));var r=n("2909"),a=(n("e9c4"),n("99af"),n("d3b7"),n("25f0"),n("159b"),n("c1df")),o=n.n(a);function c(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function u(e){return JSON.parse(JSON.stringify(e))}function i(e){return e.gpx.trk.trkseg.trkpt}function s(e,t){return[].concat(Object(r["a"])(i(e)),Object(r["a"])(i(t)))}function f(e){return e?[parseFloat(e["@_lon"],10),parseFloat(e["@_lat"],10)]:null}function d(e,t){var n=u(e);function r(e){return o()(e).add(t,"seconds").utc().format()}return n.gpx.metadata.time=r(n.gpx.metadata.time),i(n).forEach((function(e){e.time=r(e.time)})),n}},"0439":function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return f})),n.d(t,"a",(function(){return d}));var r,a=n("ade3"),o="SET_ORIGINAL_FILE",c="SET_EDITABLE_FILE",u="SET_SELECTED_POINT",i="SET_HOVER_POINT",s="SET_SHOW_BOTTOM_SHEET",f="SET_USER_SETTINGS",d=[o,u,i,s,f],l=(r={emptyState:function(e){e.editableFile=e.originalFile}},Object(a["a"])(r,o,(function(e,t){e.originalFile=t})),Object(a["a"])(r,c,(function(e,t){e.editableFile=t})),Object(a["a"])(r,u,(function(e,t){e.selectedPoint=parseInt(t,10)})),Object(a["a"])(r,i,(function(e,t){e.hoverPoint=parseInt(t,10)})),Object(a["a"])(r,s,(function(e,t){e.showBottomSheet=t})),Object(a["a"])(r,f,(function(e,t){e.userSettings=t})),r);t["h"]=l},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("dc21"),o=n("4c6c"),c=n("9062"),u=n.n(c),i=(n("e40d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("router-view")],1)],1)}),s=[],f=n("5530"),d=n("2f62"),l=n("63e0"),b={name:"App",mounted:function(){this.parseSettings()},methods:Object(f["a"])({},Object(d["b"])({parseSettings:l["g"]}))},p=b,j=(n("5c0b"),n("2877")),m=n("6544"),g=n.n(m),E=n("7496"),h=n("a75b"),O=Object(j["a"])(p,i,s,!1,null,null,null),v=O.exports;g()(O,{VApp:E["a"],VContent:h["a"]});n("d3b7"),n("3ca3"),n("ddb0");var T=n("8c4f"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("Welcome to the Strave Fixer Tool")]),r("p",[e._v("Before you get started, you will need to export your strave gdx file.")]),r("v-btn",{staticClass:"button",attrs:{to:"/upload",color:"primary"}},[e._v(" Get Started ")]),r("br"),r("img",{attrs:{src:n("e283")}})],1)},S=[],x={name:"HomePage"},y=x,I=(n("c6e7"),n("8336")),w=Object(j["a"])(y,_,S,!1,null,"088984b4",null),F=w.exports;g()(w,{VBtn:I["a"]});var k=n("e21a"),P=n.n(k),N=n("0e44"),L=n("94d5"),G=n("0439");r["default"].use(d["a"]),r["default"].use(P.a,{ignoreMutations:G["a"]});var A=new d["a"].Store({state:{selectedPoint:-1,hoverPoint:0,originalFile:null,editableFile:null,showBottomSheet:!1,userSettings:{}},mutations:G["h"],actions:l["p"],getters:L["u"],plugins:[Object(N["a"])()]});r["default"].use(T["a"]);var M=[{path:"/",name:"home",component:F},{path:"/upload",name:"upload",component:function(){return Promise.all([n.e("export~map~upload"),n.e("map~upload"),n.e("upload")]).then(n.bind(null,"4012"))}},{path:"/map",name:"map",component:function(){return Promise.all([n.e("export~map~upload"),n.e("export~map"),n.e("map~upload"),n.e("map")]).then(n.bind(null,"a727"))},beforeEnter:function(e,t,n){A.getters[L["e"]]?n():n("/upload")}},{path:"/export",name:"export",component:function(){return Promise.all([n.e("export~map~upload"),n.e("export~map"),n.e("export")]).then(n.bind(null,"abd6"))}}],C=new T["a"]({routes:M}),R=C,z=n("f309");r["default"].use(z["a"]);var D=new z["a"]({});r["default"].use(u.a),a["a"]({dsn:"https://200ff2abff6743159bdc1cc9a5d70686@sentry.io/3900152",integrations:[new o["Vue"]({Vue:r["default"],attachProps:!0,logErrors:!0})]}),r["default"].config.productionTip=!1,new r["default"]({router:R,store:A,vuetify:D,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"63e0":function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"o",(function(){return b})),n.d(t,"k",(function(){return p})),n.d(t,"j",(function(){return j})),n.d(t,"b",(function(){return m})),n.d(t,"m",(function(){return g})),n.d(t,"c",(function(){return E})),n.d(t,"g",(function(){return h})),n.d(t,"i",(function(){return O})),n.d(t,"h",(function(){return v})),n.d(t,"a",(function(){return T})),n.d(t,"n",(function(){return _})),n.d(t,"l",(function(){return S}));var r,a=n("ade3"),o=(n("d3b7"),n("a434"),n("e9c4"),n("b0c0"),n("840d")),c=n.n(o),u=n("025e"),i=n("0439"),s=n("94d5"),f="IMPORT_FILE",d="PARSE_FILE",l="MERGE_FILE",b="UPDATE_POINT",p="SET_SELECTED_POINT_INDEX",j="SET_HOVER_POINT_INDEX",m="DELETE_SELECTED_POINT",g="SHOW_BOTTOM_SHEET",E="HIDE_BOTTOM_SHEET",h="PARSE_USER_SETTINGS",O="SAVE_USER_SETTINGS",v="RESET_FILE",T="CLOSE_FILE",_="UPDATE_ACTIVITY_NAME",S="SHIFT_TIME",x={ignoreAttributes:!1},y=(r={},Object(a["a"])(r,f,(function(e,t){if(!t)return{success:!1,error:{title:"Error reading file",message:"No File Selected"}};if(!window.FileReader)return{success:!1,error:{title:"Error reading file",message:"Browser is not compatible"}};var n=!1;return new Promise((function(e){var r=new FileReader;r.onload=function(t){2===t.target.readyState&&(n||(n=!0,t.target.error?e({success:!1,error:{title:"Error reading file",message:t.target.error}}):e({success:!0,data:t.target.result})))},r.readAsText(t),setTimeout((function(){n||(n=!0,e({success:!1,error:{title:"File took too long to parse"}}))}),1e4)}))})),Object(a["a"])(r,d,(function(e,t){var n=e.commit,r=c.a.getTraversalObj(t,x);if("!xml"!==r.tagname)throw new Error("Invalid File Format: File is not an XML file");if(!r.child.gpx)throw new Error("Invalid File Format: File is not a valid GPX file");var a=c.a.convertToJson(r,x),o=c.a.convertToJson(r,x);n(i["d"],a),n(i["b"],o)})),Object(a["a"])(r,l,(function(e,t){var n=e.commit,r=e.getters,a=c.a.getTraversalObj(t,x);if("!xml"!==a.tagname)throw new Error("Invalid File Format: File is not an XML file");if(!a.child.gpx)throw new Error("Invalid File Format: File is not a valid GPX file");var o=c.a.convertToJson(a,x),f=Object(u["b"])(r[s["e"]]);f.gpx.trk.trkseg.trkpt=Object(u["a"])(f,o),n(i["b"],f)})),Object(a["a"])(r,b,(function(e,t){var n=e.commit,r=e.getters,a=t.index,o=t.point,c=t.key,f=t.value,d=Object(u["b"])(r[s["e"]]),l=Object(u["d"])(d)[a];l&&(o?(l["@_lon"]="".concat(o[0]),l["@_lat"]="".concat(o[1])):l[c]=f,n(i["b"],d))})),Object(a["a"])(r,p,(function(e,t){var n=e.commit;n(i["e"],t)})),Object(a["a"])(r,j,(function(e,t){var n=e.commit;n(i["c"],t)})),Object(a["a"])(r,m,(function(e){var t=e.commit,n=e.getters,r=Object(u["b"])(n[s["e"]]),a=Object(u["d"])(r),o=n[s["o"]];a.splice(o,1),t(i["e"],Math.min(o,a.length-1)),t(i["b"],r)})),Object(a["a"])(r,g,(function(e){var t=e.commit;t(i["f"],!0)})),Object(a["a"])(r,E,(function(e){var t=e.commit;t(i["f"],!1)})),Object(a["a"])(r,h,(function(e){var t=e.commit,n=window.localStorage.getItem("user-settings");t(i["g"],n?JSON.parse(n):{})})),Object(a["a"])(r,O,(function(e,t){var n=e.commit;window.localStorage.setItem("user-settings",JSON.stringify(t)),n(i["g"],t)})),Object(a["a"])(r,v,(function(e){var t=e.commit,n=e.getters;t(i["b"],n[s["k"]])})),Object(a["a"])(r,T,(function(e){var t=e.commit;t(i["b"],null),t(i["d"],null)})),Object(a["a"])(r,_,(function(e,t){var n=e.commit,r=e.getters,a=Object(u["b"])(r[s["e"]]);a.gpx.trk.name=t,n(i["b"],a)})),Object(a["a"])(r,S,(function(e,t){var n=e.commit,r=e.getters;n(i["b"],Object(u["f"])(r[s["e"]],t))})),r);t["p"]=y},7634:function(e,t,n){},"94d5":function(e,t,n){"use strict";n.d(t,"k",(function(){return O})),n.d(t,"r",(function(){return v})),n.d(t,"e",(function(){return T})),n.d(t,"q",(function(){return _})),n.d(t,"a",(function(){return S})),n.d(t,"f",(function(){return x})),n.d(t,"b",(function(){return y})),n.d(t,"m",(function(){return I})),n.d(t,"o",(function(){return w})),n.d(t,"i",(function(){return F})),n.d(t,"j",(function(){return k})),n.d(t,"l",(function(){return P})),n.d(t,"d",(function(){return N})),n.d(t,"c",(function(){return L})),n.d(t,"g",(function(){return G})),n.d(t,"h",(function(){return A})),n.d(t,"t",(function(){return C})),n.d(t,"s",(function(){return R})),n.d(t,"p",(function(){return z})),n.d(t,"n",(function(){return D}));var r,a=n("ade3"),o=n("5530"),c=n("3835"),u=(n("d3b7"),n("07ac"),n("159b"),n("4fad"),n("ac1f"),n("5319"),n("b0c0"),n("d81d"),n("840d")),i=n.n(u),s=n("8327"),f=n.n(s),d=n("c1df"),l=n.n(d),b=n("85c7"),p=n.n(b),j=n("025e"),m={showTime:!0,showElevation:!0,showLatitude:!0,showLongitude:!0},g={hr:"Heart Rate"},E={hr:"mdi-heart-pulse"};function h(e){return e&&e.extensions?Object.values(e.extensions).reduce((function(e,t){return Object.entries(t).forEach((function(t){var n=Object(c["a"])(t,2),r=n[0],a=n[1],o=r.replace("gpxtpx:",""),u="show ".concat(g[o]||o).replace(/\s(.)/g,(function(e){return e.toUpperCase()})).replace(/\s/g,"").replace(/^(.)/,(function(e){return e.toLowerCase()}));e.push({showKey:u,name:g[o]||o,icon:E[o],value:a})})),e}),[]):[]}var O="GET_ORIGINAL_FILE",v="GET_TIME_SHIFTED_ORIGINAL_FILE",T="GET_EDITABLE_FILE",_="GET_SHOW_BOTTOM_SHEET",S="GET_ACTIVITY_NAME",x="GET_FILE_NAME",y="GET_ACTIVITY_TIMESTAMP",I="GET_SELECTED_POINT",w="GET_SELECTED_POINT_INDEX",F="GET_HOVER_POINT",k="GET_HOVER_POINT_INDEX",P="GET_POINTS",N="GET_COORDINATES",L="GET_CENTER_POINT",G="GET_GEO_JSON",A="GET_GEO_JSON_LAYER",M="GET_COLOR_FEATURES",C="GET_XML_STRING",R="GET_USER_SETTINGS",z="GET_SETTINGS",D="GET_SELECTED_POINT_EXTRAS",H=(r={},Object(a["a"])(r,O,(function(e){return e.originalFile})),Object(a["a"])(r,T,(function(e){return e.editableFile})),Object(a["a"])(r,_,(function(e){return e.showBottomSheet})),Object(a["a"])(r,w,(function(e){return e.selectedPoint})),Object(a["a"])(r,I,(function(e){return H[P](e)[e.selectedPoint]})),Object(a["a"])(r,k,(function(e){return e.hoverPoint})),Object(a["a"])(r,F,(function(e){return H[P](e)[e.hoverPoint]})),Object(a["a"])(r,S,(function(e){return e.editableFile?e.editableFile.gpx.trk.name:""})),Object(a["a"])(r,x,(function(e){if(!e.editableFile)return"";var t=e.editableFile.gpx.trk.name.replace(/\s/g,"_");return"".concat(t,".gpx")})),Object(a["a"])(r,y,(function(e){return e.editableFile?e.editableFile.gpx.metadata.time:""})),Object(a["a"])(r,N,(function(e){return!!e.editableFile&&Object(j["d"])(e.editableFile).map((function(e){return Object(j["e"])(e)}))})),Object(a["a"])(r,P,(function(e){return!!e.editableFile&&Object(j["d"])(e.editableFile)})),Object(a["a"])(r,L,(function(e){var t=H[N](e),n=t.length;return t.reduce((function(e,t,r){return e[0]+=t[0],e[1]+=t[1],r===n-1&&(e[0]/=n,e[1]/=n),e}),[0,0])})),Object(a["a"])(r,G,(function(e){return{type:"geojson",lineMetrics:!0,data:{type:"FeatureCollection",features:H[M](e)}}})),Object(a["a"])(r,A,(function(){return{id:"route",type:"line",source:"route",paint:{"line-width":4,"line-color":["get","color"]},layout:{"line-cap":"round"}}})),Object(a["a"])(r,M,(function(e){var t=H[P](e);if(!t||0===t.length)return[];for(var n=0,r=0,a=999,o=0,c=[],u=0;u<t.length-1;u+=1){var i=t[u],s=t[u+1],f=Object(j["c"])(Object(j["e"])(i),Object(j["e"])(s)),d=l()(s.time).diff(l()(i.time)),b=f/d*1e7;n+=f,r+=d,a=Math.min(a,b),o=Math.max(o,b),c.push(b)}var m=n/r*1e7,g=new p.a;g.setNumberRange(-1,1),g.setSpectrum("red","yellow","green");var E,h=[];c.forEach((function(e,n){var r;r=e<m?(e-m)/(a-m)*-1:(e-m)/(o-m);var c="#".concat(g.colourAt(r));if(!E||E.properties.color!==c){if(E){var u=Object(j["e"])(t[n]);E.geometry.coordinates.push(u)}E={type:"Feature",properties:{color:c},geometry:{type:"LineString",coordinates:[]}},h.push(E)}var i=Object(j["e"])(t[n]);E.geometry.coordinates.push(i)}));var O=t[t.length-1],v=Object(j["e"])(O);return E.geometry.coordinates.push(v),h})),Object(a["a"])(r,C,(function(e){var t=new i.a.j2xParser({ignoreAttributes:!1}),n=t.parse(e.editableFile);return f()('<?xml version="1.0" encoding="UTF-8"?>'.concat(n),{collapseContent:!0,indentation:" "})})),Object(a["a"])(r,R,(function(e){return Object(j["b"])(e.userSettings)})),Object(a["a"])(r,z,(function(e){return Object(o["a"])(Object(o["a"])(Object(o["a"])({},m),h(H[P](e)[0]).reduce((function(e,t){return e[t.showKey]=!0,e}),{})),Object(j["b"])(e.userSettings))})),Object(a["a"])(r,D,(function(e){var t=H[P](e)[e.selectedPoint];return h(t)})),Object(a["a"])(r,v,(function(e){var t=H[O](e),n=H[T](e),r=l()(n.gpx.metadata.time).diff(t.gpx.metadata.time,"seconds");return Object(j["f"])(t,r)})),r);t["u"]=H},"9c0c":function(e,t,n){},c6e7:function(e,t,n){"use strict";var r=n("7634"),a=n.n(r);a.a},e283:function(e,t,n){e.exports=n.p+"img/Exporting your Data and Bulk Export – Eng.bf4332c9.png"}});
//# sourceMappingURL=app.ed9574ae.js.map