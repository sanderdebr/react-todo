(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{161:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(2),r=a.n(o),c=(a(26),a(11)),d=a(12),i=a(20),m=a(13),s=a(21),u=(a(27),function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"React ToDo List"))}),h=a(8),p=function(e){return l.a.createElement("form",{onSubmit:e.addToDo},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",Object(h.a)({onChange:e.handleChange,type:"text",value:e.input,placeholder:"Add a new ToDo",className:"form-control"},"placeholder","Add a ToDo..")),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",Object(h.a)({onClick:e.addToDo,type:"submit",className:"btn btn-primary"},"type","button"),"Add"))))},E=function(e){return console.log(e.date),l.a.createElement("tr",null,l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.date),l.a.createElement("td",null,l.a.createElement("svg",{className:"bi bi-pencil",width:"2em",height:"2em",viewBox:"0 0 20 20",fill:"gold",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M13.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM14 4l2 2-9 9-3 1 1-3 9-9z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M14.146 8.354l-2.5-2.5.708-.708 2.5 2.5-.708.708zM5 12v.5a.5.5 0 00.5.5H6v.5a.5.5 0 00.5.5H7v.5a.5.5 0 00.5.5H8v-1.5a.5.5 0 00-.5-.5H7v-.5a.5.5 0 00-.5-.5H5z"}))),l.a.createElement("td",null,l.a.createElement("svg",{className:"bi bi-x-circle",width:"2em",height:"2em",viewBox:"0 0 20 20",fill:"darkred",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M12.646 13.354l-6-6 .708-.708 6 6-.708.708z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M7.354 13.354l6-6-.708-.708-6 6 .708.708z"}))))},v=function(e){return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"ToDo"),l.a.createElement("th",null,"Edit"),l.a.createElement("th",null,"Delete"))),l.a.createElement("tbody",null,e.todos.map((function(e,t){return l.a.createElement(E,{key:t,date:e.date,title:e.title})}))))},b=(a(161),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({input:t.target.value}),console.log(e.state.todos)},e.addToDo=function(t){t.preventDefault(),e.state.input&&e.setState((function(e){var t={date:(new Date).toLocaleDateString(),title:e.input};return{todos:e.todos.concat(t),input:"Add a new ToDo"}}))},e.state={input:"",todos:[]},e}return Object(s.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.input;return l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement("main",{role:"main",className:"container"},l.a.createElement("div",{className:"starter-template"},l.a.createElement("h1",null,e),l.a.createElement(p,{value:e,placeholder:e,handleChange:this.handleChange,addToDo:this.addToDo}),l.a.createElement("button",{className:"btn btn-secondary"},"Add 5 random ToDos"),l.a.createElement("hr",null),l.a.createElement("h2",null,"ToDo list"),l.a.createElement(v,{todos:this.state.todos}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(162);r.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},22:function(e,t,a){e.exports=a(163)},26:function(e,t,a){}},[[22,1,2]]]);
//# sourceMappingURL=main.c6fb7cf7.chunk.js.map