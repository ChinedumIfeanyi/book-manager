(function(t){function e(e){for(var o,u,i=e[0],s=e[1],l=e[2],f=0,d=[];f<i.length;f++)u=i[f],r[u]&&d.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},a=[],u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("h3",{},[t._v(" summary of all books you read kept in one place")])]),n("nav",[n("ul",[n("li")])])])}],s={name:"Header"},l=s,c=(n("8902"),n("2877")),f=Object(c["a"])(l,u,i,!1,null,"4c50fb03",null);f.options.__file="Header.vue";var d=f.exports,p={name:"app",components:{Header:d}},v=p,m=(n("034f"),Object(c["a"])(v,r,a,!1,null,"e73a6c2e",null));m.options.__file="App.vue";var h=m.exports,_=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all-books"},[n("router-link",{attrs:{to:{name:"AddBook"}}},[t._v("Add Book")]),n("p",[t._v("All Books")]),n("table",[t._m(0),t._l(t.books,function(e,o){return n("tr",{key:o},[n("td",[t._v(t._s(e.title))]),n("td",[t._v(t._s(e.summary.substring(0,150))+" "),n("router-link",{attrs:{to:{name:"ShowBook",params:{id:e.id}}}},[t._v("More")])],1)])})],2)],1)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Title")]),n("th",[t._v("Summary")])])}],y={name:"AllBooks",data:function(){return{books:[]}},created:function(){this.AllBooks()},methods:{AllBooks:function(){var t=this;fetch("books.json").then(function(t){return t.json()}).then(function(e){return t.books=e})}}},B=y,A=(n("6650"),Object(c["a"])(B,k,b,!1,null,"6ce1822e",null));A.options.__file="AllBooks.vue";var j=A.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("nav",[n("router-link",{attrs:{to:{name:"AllBooks"}}},[t._v("All Books ")])],1),n("p",[t._v(" Add A Book Summary ")]),n("div",{staticClass:"form-add"},[n("form",[t._m(0),t._m(1),n("div",[n("input",{staticClass:"add",attrs:{type:"submit",value:"ADD"},on:{click:t.addBook}})])])])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"f-input"},[n("label",{attrs:{for:""}},[t._v("Title")]),n("div",[n("input",{attrs:{type:"text",name:"title",placeholder:"Title"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"f-input"},[n("label",{attrs:{for:""}},[t._v("Summary")]),n("div",[n("textarea",{attrs:{name:"summary",id:"summary",cols:"30",rows:"10",placeholder:"In Your Own Words, Give A Detailed Summary Of The Book"}})])])}],O={name:"AddBook",data:function(){return{title:"",summary:""}},methods:{addBook:function(){var t=this;fetch("books.json").then(function(t){return t.json()}).then(function(e){e.push({id:e.length+1,title:t.title,summary:t.summary})}),this.$router.push({name:"AllBooks"})}}},x=O,S=(n("7a81"),Object(c["a"])(x,w,g,!1,null,"1d309da0",null));S.options.__file="AddBook.vue";var $=S.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v(" Woo You")]),n("p",[t._v(" You cant see it, bye bye")]),n("router-link",{attrs:{to:{name:"AllBooks"}}},[t._v("All Books")])],1)},T=[],P={name:"ShowBook",data:function(){return{books:""}},created:function(){this.getBooks()},methods:{getBooks:function(){fetch("books.json").then(function(t){return t.json()}).then(function(t){return console.log(t)})}}},C=P,M=(n("eb25"),Object(c["a"])(C,E,T,!1,null,null,null));M.options.__file="ShowBook.vue";var H=M.exports;o["a"].use(_["a"]);var D=new _["a"]({mode:"history",routes:[{path:"/",name:"AllBooks",component:j},{path:"/add",name:"AddBook",component:$},{path:"/show/:id",name:"ShowBook",component:H}]}),Y=D;o["a"].config.productionTip=!1,new o["a"]({router:Y,render:function(t){return t(h)}}).$mount("#app")},"64a9":function(t,e,n){},6650:function(t,e,n){"use strict";var o=n("d66d"),r=n.n(o);r.a},"7a81":function(t,e,n){"use strict";var o=n("891e"),r=n.n(o);r.a},"806e":function(t,e,n){},8902:function(t,e,n){"use strict";var o=n("806e"),r=n.n(o);r.a},"891e":function(t,e,n){},d66d:function(t,e,n){},d67e:function(t,e,n){},eb25:function(t,e,n){"use strict";var o=n("d67e"),r=n.n(o);r.a}});
//# sourceMappingURL=app.81366088.js.map