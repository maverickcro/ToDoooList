(this.webpackJsonptodooo=this.webpackJsonptodooo||[]).push([[0],[,,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(10),s=a.n(i),l=(a(17),a(7)),c=a(11),r=a(3),d=a(4),u=a(1),h=a(5),m=a(6),p=a(2),b=(a(9),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).state={isEditing:!1,task:o.props.task},o.handleRemove=o.handleRemove.bind(Object(u.a)(o)),o.toogleForm=o.toogleForm.bind(Object(u.a)(o)),o.handleUpdate=o.handleUpdate.bind(Object(u.a)(o)),o.handleChange=o.handleChange.bind(Object(u.a)(o)),o.handleToogle=o.handleToogle.bind(Object(u.a)(o)),o}return Object(d.a)(a,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"toogleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(e){e.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),this.setState({isEditing:!1})}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleToogle",value:function(e){this.props.toogleTodo(this.props.id)}},{key:"render",value:function(){return this.state.isEditing?n.a.createElement("div",{className:"Todo"},n.a.createElement("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate},n.a.createElement("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange}),n.a.createElement("button",null,"Save"))):n.a.createElement("div",{className:"Todo"},n.a.createElement("li",{onClick:this.handleToogle,className:this.props.completed?"Todo-task completed":"Todo-task"},this.props.task),n.a.createElement("div",{className:"Todo-buttons"},n.a.createElement("button",{onClick:this.toogleForm},n.a.createElement("i",{class:"fas fa-pen"})),n.a.createElement("button",{onClick:this.handleRemove},n.a.createElement("i",{class:"fas fa-trash"}))))}}]),a}(o.Component)),v=a(22),f=(a(18),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).state={task:""},o.handleChange=o.handleChange.bind(Object(u.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(u.a)(o)),o}return Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.createTodo(Object(l.a)({},this.state,{id:Object(v.a)(),completed:!1})),this.setState({task:""})}},{key:"render",value:function(){return n.a.createElement("form",{className:"NewTodoForm",onSubmit:this.handleSubmit},n.a.createElement("label",{htmlFor:"task"},"What's on your mind?"),n.a.createElement("input",{type:"text",placeholder:"New Todo",id:"task",name:"task",value:this.state.task,onChange:this.handleChange}),n.a.createElement("button",null,"Add Todooo"))}}]),a}(o.Component)),k=(a(19),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).state={todos:[]},o.create=o.create.bind(Object(u.a)(o)),o.remove=o.remove.bind(Object(u.a)(o)),o.update=o.update.bind(Object(u.a)(o)),o.toogleCompletion=o.toogleCompletion.bind(Object(u.a)(o)),o}return Object(d.a)(a,[{key:"create",value:function(e){this.setState({todos:[].concat(Object(c.a)(this.state.todos),[e])})}},{key:"remove",value:function(e){this.setState({todos:this.state.todos.filter((function(t){return t.id!==e}))})}},{key:"update",value:function(e,t){var a=this.state.todos.map((function(a){return a.id===e?Object(l.a)({},a,{task:t}):a}));this.setState({todos:a})}},{key:"toogleCompletion",value:function(e){var t=this.state.todos.map((function(t){return t.id===e?Object(l.a)({},t,{completed:!t.completed}):t}));this.setState({todos:t})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return n.a.createElement(b,{key:t.id,id:t.id,task:t.task,completed:t.completed,removeTodo:e.remove,updateTodo:e.update,toogleTodo:e.toogleCompletion})}));return n.a.createElement("div",{className:"TodoList"},n.a.createElement("h1",null,"ToDooo List ",n.a.createElement("span",null,"A React app")),n.a.createElement("ul",null,t),n.a.createElement(f,{createTodo:this.create}))}}]),a}(o.Component));var g=function(){return n.a.createElement("div",null,n.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.bfe336c0.chunk.js.map