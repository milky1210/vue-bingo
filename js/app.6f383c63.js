(function(e){function t(t){for(var r,a,u=t[0],o=t[1],c=t[2],m=0,d=[];m<u.length;m++)a=u[m],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var o=n[u];0!==i[o]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-bingo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"0962":function(e,t,n){"use strict";var r=n("2a1f"),i=n.n(r);i.a},"09df":function(e,t,n){},"2a1f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"container is-fluid",attrs:{id:"mainstage"}},[n("BingoGame")],1),e._m(1)])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("div",{staticClass:"columns is-centered"},[r("img",{staticClass:"logo",attrs:{src:n("e079")}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"columns is-centered"},[e._v(" ©︎milky開発 powered by larsbaunwall ")])])}],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tile is-ancestor",attrs:{id:"main-game"}},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"tile is-12",attrs:{id:"numbers-column"}},[n("ul",{staticClass:"numbers-container"},e._l(e.numbers,(function(t){return n("li",{key:t.number,attrs:{id:[t.number]}},[n("transition",{attrs:{name:"fade"}},[t.isPicked?n("button",{class:["bingo-number",{picked:t.isPicked}],on:{click:function(n){t.isPicked=e.editable!==t.isPicked}}},[e._v(" "+e._s(t.number)+" ")]):n("button",{staticClass:"bingo-number",on:{click:function(n){t.isPicked=e.editable!==t.isPicked}}},[e._v(" "+e._s(t.number)+" ")])])],1)})),0)]),n("div",{staticClass:"tile is-12",attrs:{id:"numbers-column"}},[n("ul",{staticClass:"numbers-container"},e._l(e.presents,(function(t){return n("li",{key:t.number,attrs:{id:[t.number]}},[n("transition",{attrs:{name:"fade"}},[t.isPicked?n("button",{class:["bingo-present",{picked:t.isPicked}],on:{click:function(n){t.isPicked=e.editable!==t.isPicked}}},[e._v(" "+e._s(t.number)+"等 ")]):n("button",{staticClass:"bingo-present",on:{click:function(n){t.isPicked=e.editable!==t.isPicked}}},[e._v(" "+e._s(t.number)+"等 ")])])],1)})),0)])]),n("div",{staticClass:"tile is-4 is-vertical is-parent",attrs:{id:"draw-column"}},[n("div",{staticClass:"tile is-child"},[n("last-three-numbers",{attrs:{numbers:e.lastThree}}),n("div",{staticClass:"bingo-roulette"},[n("p",{class:["number-draw",e.animateTagetNum?"reveal-number reveal-number-animation":""]},[e._v(" "+e._s(0==e.targetNum?"Q":-1==e.targetNum?"💀":e.targetNum)+" ")])])],1),e.showSetting?n("div",[n("label",{attrs:{for:"quiz-rate"}},[e._v("クイズ発生率: "+e._s(e.quizRate))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.quizRate,expression:"quizRate"}],attrs:{id:"quiz-rate",type:"range",min:"0",max:"1",step:"0.01"},domProps:{value:e.quizRate},on:{__r:function(t){e.quizRate=t.target.value}}}),n("br"),n("label",{attrs:{for:"hazure-rate"}},[e._v("ハズレ率: "+e._s(e.hazureRate))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.hazureRate,expression:"hazureRate"}],attrs:{id:"hazure-rate",type:"range",min:"0",max:"1",step:"0.01"},domProps:{value:e.hazureRate},on:{__r:function(t){e.hazureRate=t.target.value}}}),n("label",{attrs:{for:"autoHazure"}},[e._v("自動更新")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.autoHazure,expression:"autoHazure"}],attrs:{id:"autoHazure",type:"checkbox"},domProps:{checked:Array.isArray(e.autoHazure)?e._i(e.autoHazure,null)>-1:e.autoHazure},on:{change:function(t){var n=e.autoHazure,r=t.target,i=!!r.checked;if(Array.isArray(n)){var s=null,a=e._i(n,s);r.checked?a<0&&(e.autoHazure=n.concat([s])):a>-1&&(e.autoHazure=n.slice(0,a).concat(n.slice(a+1)))}else e.autoHazure=i}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.maxNumber,expression:"maxNumber",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.maxNumber},on:{input:function(t){t.target.composing||(e.maxNumber=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.maxPresent,expression:"maxPresent",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.maxPresent},on:{input:function(t){t.target.composing||(e.maxPresent=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]):e._e(),n("div",{staticClass:"tile is-child",attrs:{id:"controls"}},[n("div",[n("b-tooltip",{attrs:{label:"ビンゴを実行",position:"is-bottom",type:"is-light",size:"is-small",delay:"1000"}},[n("b-button",{attrs:{type:"is-primary",size:"is-medium",disabled:e.drawingInProcess,rounded:"",outlined:"","icon-left":"play"},on:{click:e.spin,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.spin(t)}}},[e._v(" ビンゴ ")])],1),n("b-tooltip",{attrs:{label:"ギフトを実行",position:"is-bottom",type:"is-light",size:"is-small",delay:"1000"}},[n("b-button",{attrs:{type:"red",size:"is-small",disabled:e.drawingInProcess,rounded:"",outlined:"","icon-left":"gift"},on:{click:e.spinGift,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.spin(t)}}},[e._v(" ギフト ")])],1),n("b-button",{attrs:{type:"is-text",rounded:""},on:{click:e.reset}},[e._v(" 初期化 ")]),n("b-tooltip",{attrs:{label:"編集",position:"is-bottom",type:"is-light",size:"is-small",delay:"1000"}},[n("b-button",{attrs:{rounded:""},on:{click:function(t){e.editable=!e.editable}}},[n("b-icon",{attrs:{icon:e.editable?"pencil":"lock"}})],1)],1),[n("b-tooltip",{attrs:{label:"フルスクリーンにする",position:"is-bottom",type:"is-light",size:"is-small",delay:"1000"}},[n("b-button",{attrs:{rounded:""},on:{click:e.goFullScreen}},[n("b-icon",{attrs:{icon:"arrow-expand"}})],1)],1)],n("div",[n("b-tooltip",{attrs:{label:"詳細設定",position:"is-bottom",type:"is-light",size:"is-small",delay:"1000"}},[n("b-button",{attrs:{rounded:""},on:{click:function(t){e.showSetting=!e.showSetting}}},[n("b-icon",{attrs:{icon:"settings"}})],1)],1)],1)],2)])])])},u=[],o=(n("99af"),n("4de4"),n("d81d"),n("26e9"),n("fb6a"),n("d3b7"),n("ddb0"),n("4795"),n("2909")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"component"}},[e._m(0),n("div",{staticClass:"container"},[n("transition-group",{staticClass:"numbers-container",attrs:{name:"list",tag:"ul"}},e._l(e.numbers,(function(t){return n("li",{key:t,staticClass:"bingo-number"},[e._v(" "+e._s(t)+" ")])})),0)],1)])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container has-text-centered"},[n("h1",{staticClass:"title is-2 has-text-dark"},[e._v(" 直近の数字↓ ")]),n("hr")])}],m={props:{numbers:{type:Array,default:function(){return[]}}}},d=m,b=(n("0962"),n("2877")),p=Object(b["a"])(d,c,l,!1,null,"6ced705e",null),f=p.exports,h={components:{LastThreeNumbers:f},data:function(){return{drawingInProcess:!1,target:null,targetNum:null,animateTagetNum:!1,maxNumber:75,maxPresent:7,quizRate:.3,editable:!1,numbers:[],presents:[],pickedNumbers:[],pickedPresents:[],showSetting:!1,hazureRate:1/7,autoHazure:!0}},computed:{lastThree:function(){return this.pickedNumbers.slice().reverse().slice(0,3)}},watch:{numbers:{handler:function(e,t){localStorage.numbers=JSON.stringify(e)},deep:!0},pickedNumbers:{handler:function(e,t){localStorage.pickedNumbers=JSON.stringify(e)},deep:!0}},mounted:function(){localStorage.numbers&&(this.numbers=JSON.parse(localStorage.numbers)),localStorage.pickedNumbers&&(this.pickedNumbers=JSON.parse(localStorage.pickedNumbers))},created:function(){this.init();var e=this;window.addEventListener("keyup",(function(t){13==t.keyCode&&e.spin()}))},methods:{init:function(){0===this.numbers.length&&(this.numbers=Object(o["a"])(Array(this.maxNumber).keys()).map((function(e){return{number:++e,isPicked:!1}}))),0===this.presents.length&&(this.presents=Object(o["a"])(Array(this.maxPresent).keys()).map((function(e){return{number:++e,isPicked:!1}}))),0===this.pickedNumbers.length&&(this.pickedNumbers=[]),this.target=null,this.targetNum=null;var e=this.presents.filter((function(e){return!e.isPicked}));this.hazureRate=3/(e.length+3)},spin:function(){var e=this;this.drawingInProcess=!0,this.startDrawing(),setTimeout((function(){e.stopDrawing(),e.drawingInProcess=!1}),3e3)},spinGift:function(){var e=this;this.drawingInProcess=!0,this.startDrawingGift(),setTimeout((function(){e.stopDrawingGift(),e.drawingInProcess=!1}),3e3)},reset:function(){confirm("初めからにする?")&&(this.target=null,this.targetNum=null,localStorage.removeItem("numbers"),localStorage.removeItem("pickedNumbers"),this.target=null,this.pickedNumbers=[],this.numbers=Object(o["a"])(Array(this.maxNumber).keys()).map((function(e){return{number:++e,isPicked:!1}})),this.pickedPresents=[],this.presents=Object(o["a"])(Array(this.maxPresent).keys()).map((function(e){return{number:++e,isPicked:!1}})))},startDrawing:function(){var e=this;this.target=setInterval((function(){var t=e.numbers.filter((function(e){return!e.isPicked})),n=Math.floor(Math.random()*t.length),r=t[n];e.targetNum=r.number,Math.random()<e.quizRate&&(e.targetNum=0)}),100)},stopDrawing:function(){var e=this;clearInterval(this.target),this.animateTagetNum=!0,setTimeout((function(){e.animateTagetNum=!1}),1e3),this.targetNum>0&&(this.numbers[this.targetNum-1].isPicked=!0,this.pickedNumbers=[].concat(Object(o["a"])(this.pickedNumbers),[this.targetNum]))},startDrawingGift:function(){var e=this;this.target=setInterval((function(){var t=e.presents.filter((function(e){return!e.isPicked})),n=Math.floor(Math.random()*t.length),r=t[n];e.targetNum=r.number,Math.random()<e.hazureRate&&(e.targetNum=-1)}),100)},stopDrawingGift:function(){var e=this;if(clearInterval(this.target),this.animateTagetNum=!0,setTimeout((function(){e.animateTagetNum=!1}),1e3),this.targetNum>0&&(this.presents[this.targetNum-1].isPicked=!0,this.pickedPresents=[].concat(Object(o["a"])(this.pickedNumbers),[this.targetNum])),this.autoHazure){var t=this.presents.filter((function(e){return!e.isPicked}));this.hazureRate=3/(t.length+3)}},goFullScreen:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}}},g=h,v=(n("ba83"),Object(b["a"])(g,a,u,!1,null,"432c3016",null)),k=v.exports,y={name:"App",components:{BingoGame:k}},_=y,N=(n("034f"),Object(b["a"])(_,i,s,!1,null,null,null)),P=N.exports,w=n("2f62");r["a"].use(w["a"]);var z=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}}),x=n("289d");n("f843");r["a"].config.productionTip=!1,r["a"].use(x["a"]),new r["a"]({store:z,render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,t,n){},ba83:function(e,t,n){"use strict";var r=n("09df"),i=n.n(r);i.a},e079:function(e,t,n){e.exports=n.p+"img/yamana_marrige.bff60709.png"},f843:function(e,t,n){}});
//# sourceMappingURL=app.6f383c63.js.map