(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{44:function(e,t,a){e.exports=a(54)},49:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(7),r=a.n(o),c=(a(49),a(23)),i=a(16),d=a(31),s=a(32),m=a(34),u=a(10),h=a(98),p=a(97),E=a(85),v=function(e){return l.a.createElement("form",{onSubmit:e.addToDo},l.a.createElement(E.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},l.a.createElement(p.a,{label:"Standard",variant:"outlined",onChange:e.handleChange,type:"text",value:e.input,placeholder:"Add a ToDo.."}),l.a.createElement(h.a,Object(u.a)({variant:"contained",color:"primary",onClick:e.addToDo,type:"submit"},"type","button"),"Add")))},f=a(90),w=a(91),g=function(e){return console.log(e.date),l.a.createElement(f.a,null,l.a.createElement(w.a,null,e.title),l.a.createElement(w.a,null,e.date),l.a.createElement(w.a,null,l.a.createElement("svg",{className:"bi bi-pencil",width:"2em",height:"2em",viewBox:"0 0 20 20",fill:"gold",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M13.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM14 4l2 2-9 9-3 1 1-3 9-9z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M14.146 8.354l-2.5-2.5.708-.708 2.5 2.5-.708.708zM5 12v.5a.5.5 0 00.5.5H6v.5a.5.5 0 00.5.5H7v.5a.5.5 0 00.5.5H8v-1.5a.5.5 0 00-.5-.5H7v-.5a.5.5 0 00-.5-.5H5z"}))),l.a.createElement(w.a,null,l.a.createElement("svg",{className:"bi bi-x-circle",width:"2em",height:"2em",viewBox:"0 0 20 20",fill:"darkred",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M12.646 13.354l-6-6 .708-.708 6 6-.708.708z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M7.354 13.354l6-6-.708-.708-6 6 .708.708z"}))))},b=a(92),D=a(93),y=a(94),T=function(e){return l.a.createElement(b.a,{className:"table"},l.a.createElement(D.a,null,l.a.createElement(f.a,null,l.a.createElement(w.a,null,"Date"),l.a.createElement(w.a,null,"ToDo"),l.a.createElement(w.a,null,"Edit"),l.a.createElement(w.a,null,"Delete"))),l.a.createElement(y.a,null,e.todos.map((function(e,t){return l.a.createElement(g,{key:t,date:e.date,title:e.title})}))))},N=a(89),j=a(95),k=a(96),x=(a(53),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(s.a)(t).call(this))).handleChange=function(t){e.setState({input:t.target.value}),console.log(e.state.todos)},e.addToDo=function(t){t.preventDefault(),e.state.input&&(e.setState((function(e){var t={date:(new Date).toLocaleDateString(),title:e.input};return{todos:e.todos.concat(t),input:""}})),document.querySelector("input").value="")},e.state={input:"",todos:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.input;return l.a.createElement(j.a,{className:"container",maxWidth:"sm"},l.a.createElement(N.a,{className:"paper"},l.a.createElement(k.a,{variant:"h4"},"React ToDo List"),l.a.createElement(k.a,{className:"subtitle",variant:"h5"},e)),l.a.createElement(N.a,{className:"paper"},l.a.createElement(E.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},l.a.createElement(v,{value:e,placeholder:e,handleChange:this.handleChange,addToDo:this.addToDo}),l.a.createElement(h.a,{variant:"contained",color:"primary",className:"btn btn-secondary"},"Add 5 random ToDos"))),l.a.createElement(N.a,{className:"paper"},l.a.createElement("h2",null,"ToDo list"),l.a.createElement(T,{todos:this.state.todos})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.9b10180a.chunk.js.map