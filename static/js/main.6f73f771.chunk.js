(this["webpackJsonpto-do-list-1"]=this["webpackJsonpto-do-list-1"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(0),i=n.n(s),c=n(7),r=n.n(c),u=(n(25),n(5)),d=n(13),o=n(6),l=n(3),h=n(18),j=n(17),m=(n(26),n(27),n(14)),b=n.n(m),p=n(16);var f=function(t){var e=t.items.map((function(e){return Object(a.jsx)("div",{className:"list",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){return t.setUpdate(n.target.value,e.key)}}),Object(a.jsx)("span",{children:Object(a.jsx)(b.a,{className:"trash",onClick:function(){return t.deleteItem(e.key)}})})]})},e.key)}));return Object(a.jsx)("div",{children:Object(a.jsx)(p.a,{duration:300,easing:"ease-in-out",children:e})})},x=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(l.a)(a)),a.addItem=a.addItem.bind(Object(l.a)(a)),a.deleteItem=a.deleteItem.bind(Object(l.a)(a)),a.setUpdate=a.setUpdate.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(""!==e.text){var n=[].concat(Object(u.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){var n=this.state.items;n.map((function(n){n.key===e&&(n.text=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("form",{id:"to_do_form",onSubmit:this.addItem,children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),Object(a.jsx)("button",{className:"button",type:"submit",children:"Add"})]})}),Object(a.jsx)(f,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})}}]),n}(i.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),i(t),c(t)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),O()}},[[35,1,2]]]);
//# sourceMappingURL=main.6f73f771.chunk.js.map