(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),r=n.n(o),l=n(1),i=n(2),s=n(4),u=n(3),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={date:(new Date).toLocaleString()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var t=new Date;e.setState({date:t.toLocaleTimeString()}),console.log(e.state.date)}),1e3)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&console.log("The Clock was renamed from ".concat(e.name," to ").concat(this.props.name,"!!!!"))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.date;return c.a.createElement("div",{className:"has-background-primary-light"},e)}}]),n}(c.a.Component),p=(n(12),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,clockName:0},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isClockVisible,a=t.clockName;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"React clock"),c.a.createElement("div",{className:"App__button"},c.a.createElement("button",{type:"button",className:"button is-success is-rounded",onClick:function(){e.setState({isClockVisible:!0})}},"Show Clock"),c.a.createElement("button",{type:"button",className:"button is-danger is-rounded",onClick:function(){e.setState({isClockVisible:!1})}},"Hide CLock"),c.a.createElement("button",{type:"button",className:"button is-info is-rounded",onClick:function(){var t=Math.ceil(10*Math.random());e.setState({clockName:t})}},"Set random name")),c.a.createElement("p",null,"Current time:"),c.a.createElement(c.a.Fragment,null,n&&c.a.createElement(m,{name:a})))}}]),n}(c.a.Component));r.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e0102bb9.chunk.js.map