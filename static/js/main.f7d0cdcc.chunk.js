(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{53:function(t,e,a){},63:function(t,e,a){},64:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(20),i=a.n(c),l=(a(53),a(28)),r=a(5),o=a(35),h=a(36),u=a(23),p=a(42),j=a(41),d=a(76),b=a(78),O=a(80),m=a(79),v=a(3),x=function(t){Object(p.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={weight:"",showCalc:!1,watermelon:"",apples:"",coconuts:""},n.updateInput=n.updateInput.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"updateInput",value:function(t){this.setState({weight:t.target.value})}},{key:"handleSubmit",value:function(){this.setState({showCalc:!0}),console.log("Your input value is: "+this.state.weight),console.log("Your input value is: "+this.state.showCalc);for(var t=this.state.weight,e=0,a=0,n=0;t-20>=0;)t-=20,e+=1;for(;t-3>=0;)t-=3,n+=2;for(;t-1>=0;)t-=1,a+=3;this.setState({watermelon:e}),this.setState({apples:a}),this.setState({coconuts:n})}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(d.a,{variant:"h1",children:"HOW MANY FRUITS?????"}),Object(v.jsx)(b.a,{m:10,children:Object(v.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(v.jsx)(O.a,{id:"weight",placeholder:"Your Weight Here!!!",onChange:this.updateInput,inputProps:{"aria-label":"description"}})})}),Object(v.jsx)(b.a,{children:Object(v.jsx)(m.a,{variant:"outlined",color:"primary",onClick:this.handleSubmit,children:Object(v.jsx)(d.a,{variant:"h3",children:"CALCULATE MY FRUITS"})})}),this.state.showCalc?Object(v.jsxs)(b.a,{m:10,children:[this.state.watermelon?Object(v.jsxs)(d.a,{variant:"h3",children:[this.state.watermelon," Watermelon"]}):null,this.state.apples||this.state.coconuts?Object(v.jsx)(d.a,{variant:"h4",children:"and"}):null,this.state.coconuts?Object(v.jsxs)(d.a,{variant:"h3",children:[this.state.coconuts," Coconuts"]}):null,this.state.apples?Object(v.jsx)(d.a,{variant:"h4",children:"and"}):null,this.state.apples?Object(v.jsxs)(d.a,{variant:"h3",children:[this.state.apples," Apples"]}):null]}):null]})}}]),a}(s.a.Component);var f=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(b.a,{m:10,children:Object(v.jsx)(d.a,{variant:"h1",children:"How Many Fruits Do I Weigh?"})}),Object(v.jsx)(m.a,{variant:"outlined",color:"primary",component:l.b,to:"/my-app/calculator",children:Object(v.jsx)(d.a,{variant:"h3",children:"Get Started"})})]})};a(63);var g=function(){return Object(v.jsxs)(l.a,{children:[Object(v.jsx)(r.a,{exact:!0,path:"/my-app/",component:f}),Object(v.jsx)(r.a,{exact:!0,path:"/my-app/calculator",component:x})]})},w=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(g,{})}),document.getElementById("root")),w()}},[[64,1,2]]]);
//# sourceMappingURL=main.f7d0cdcc.chunk.js.map