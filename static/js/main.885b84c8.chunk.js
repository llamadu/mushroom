(this.webpackJsonpmushroom=this.webpackJsonpmushroom||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/images/amanitamuscaria.jpg","name":"Amanita Muscaria","clicked":false},{"id":2,"image":"/assets/images/boleteclover.jpg","name":"Bolet with Clover","clicked":false},{"id":3,"image":"/assets/images/brownamanita.jpg","name":"Brown Amanita","clicked":false},{"id":4,"image":"/assets/images/ladybug.jpg","name":"Ladybug","clicked":false},{"id":5,"image":"/assets/images/yard.jpg","name":"Yard","clicked":false},{"id":6,"image":"/assets/images/lbm.jpg","name":"Little Brown Mushroom","clicked":false},{"id":7,"image":"/assets/images/logfriend.jpg","name":"Log Friends","clicked":false},{"id":8,"image":"/assets/images/lwm.jpg","name":"Little White Mushroom","clicked":false},{"id":9,"image":"/assets/images/mushsalmoss.jpg.jpg","name":"Mushroom with Salal and Moss","clicked":false},{"id":10,"image":"/assets/images/porcini.jpg","name":"Porcini","clicked":false},{"id":11,"image":"/assets/images/shaggyegg.jpg","name":"Shaggy Egg","clicked":false},{"id":12,"image":"/assets/images/shaggyveil.jpg","name":"Shaggy Veil","clicked":false}]')},,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(2),o=t.n(i),c=(t(14),t(3)),r=t(4),m=t(7),l=t(5),u=t(8),g=t(6),d=(t(15),function(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("span",null,"Mushroom Clicky"))),n.a.createElement("span",{className:"score-card"},"Score: ",e.score," | Top Score: ",e.topScore))}),h=(t(16),function(e){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-4"},e.message),n.a.createElement("h3",{className:"lead"},"Click any mushroom to score, but don't click the same mushroom twice!")))}),f=(t(17),function(e){return n.a.createElement("div",{className:"container"},e.children)}),p=(t(18),function(e){return n.a.createElement("div",{className:"card",onClick:function(){return e.handleClickEvent(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:"/mushroom"+e.image})))}),k=function(e){function a(){var e,t;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(n)))).state={mushrooms:g,message:"Click a mushroom to begin!",score:0,topScore:0},t.handleClickEvent=function(e){var a=t.state.mushrooms.sort((function(){return Math.random()-.5}));t.state.mushrooms.filter((function(s){return e===s.id&&(!1===s.clicked?(s.clicked=!0,t.setState({score:t.state.score+1,message:"That was a great mushroom!"}),t.state.score>=t.state.topScore&&t.setState({topScore:t.state.topScore+1})):t.newRound()),a}))},t.newRound=function(){t.state.score>t.state.topScore&&t.setState({topScore:t.state.score}),t.state.mushrooms.forEach((function(e){return e.clicked=!1})),t.setState({message:"You already clicked that mushroom! Game restarted. Try Again!",score:0})},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(d,{score:this.state.score,topScore:this.state.topScore}),n.a.createElement(h,{message:this.state.message}),n.a.createElement(f,null,this.state.mushrooms.map((function(a){return n.a.createElement(p,{handleClickEvent:e.handleClickEvent,id:a.id,key:a.id,image:a.image})}))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.885b84c8.chunk.js.map