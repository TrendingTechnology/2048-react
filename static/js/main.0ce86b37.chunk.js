(window["webpackJsonp2048-react"]=window["webpackJsonp2048-react"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),n=a(8),c=a.n(n),i=(a(14),a(1)),r=a(2),o=a(4),h=a(3),u=a(6),d=a(5),v=(a(15),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"cell cell-".concat(this.props.value)},this.props.value)}}]),t}(l.a.Component)),f=(a(16),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"cells"},this.cellGroups().map((function(e,t){return l.a.createElement("div",{key:t,className:"cells-row"},e.map((function(e,a){return l.a.createElement(v,{key:4*t+a,value:e})})))})))}},{key:"cellGroups",value:function(){var e=[];return this.props.cells.forEach((function(t,a){var s=Math.floor(a/4);e[s]=e[s]||[],e[s].push(t)})),e}}]),t}(l.a.Component)),m=function(){function e(){Object(i.a)(this,e),this.cells=void 0,this.score=void 0,this.over=void 0,this.won=void 0,this.callbacks=void 0,this.cells=[],this.score=0,this.over=!1,this.won=!1,this.callbacks={}}return Object(r.a)(e,[{key:"start",value:function(){this.init()}},{key:"restart",value:function(){this.init()}},{key:"up",value:function(){for(var e=0,t=12;t<16;t++)for(var a=t,s=t-4;s>=t-12;s-=4){var l=this.cells[a],n=this.cells[s];if(0===n)this.cells[a]=0,this.cells[s]=l;else if(l===n&&(this.cells[a]=0,this.cells[s]=l+n,e+=l,2048===this.cells[s]&&(this.won=!0,this.callbacks.won&&this.callbacks.won()),s>t-12&&this.cells[s-4]===this.cells[s]))break;a=s}0!==e&&this.addScore(e)}},{key:"down",value:function(){for(var e=0,t=0;t<4;t++)for(var a=t,s=t+4;s<=t+12;s+=4){var l=this.cells[a],n=this.cells[s];if(0===n)this.cells[a]=0,this.cells[s]=l;else if(l===n&&(this.cells[a]=0,this.cells[s]=l+n,e+=l,2048===this.cells[s]&&(this.won=!0,this.callbacks.won&&this.callbacks.won()),s<t+12&&this.cells[s+4]===this.cells[s]))break;a=s}0!==e&&this.addScore(e)}},{key:"left",value:function(){for(var e=0,t=3;t<=15;t+=4)for(var a=t,s=t-1;s>=t-3;s--){var l=this.cells[a],n=this.cells[s];if(0===n)this.cells[a]=0,this.cells[s]=l;else if(l===n&&(this.cells[a]=0,this.cells[s]=l+n,e+=l,2048===this.cells[s]&&(this.won=!0,this.callbacks.won&&this.callbacks.won()),s<t-3&&this.cells[s-1]===this.cells[s]))break;a=s}0!==e&&this.addScore(e)}},{key:"right",value:function(){for(var e=0,t=0;t<=12;t+=4)for(var a=t,s=t+1;s<=t+3;s++){var l=this.cells[a],n=this.cells[s];if(0===n)this.cells[a]=0,this.cells[s]=l;else if(l===n&&(this.cells[a]=0,this.cells[s]=l+n,e+=l,2048===this.cells[s]&&(this.won=!0,this.callbacks.won&&this.callbacks.won()),s<t+3&&this.cells[s+1]===this.cells[s]))break;a=s}0!==e&&this.addScore(e)}},{key:"dispatch",value:function(e){switch(e){case"up":return this.up(),!0;case"down":return this.down(),!0;case"left":return this.left(),!0;case"right":return this.right(),!0;default:return!1}}},{key:"respond",value:function(e){return!(this.over||this.won||!this.dispatch(e))&&(this.generateBlock(),this.checkOver(),!0)}},{key:"addCallback",value:function(e,t){this.callbacks[e]=t}},{key:"removeCallback",value:function(e){delete this.callbacks[e]}},{key:"init",value:function(){this.cells=Array(16).fill(0),Array(2).fill(null).forEach(this.generateBlock.bind(this)),this.score=0,this.won=!1,this.over=!1}},{key:"checkOver",value:function(){if(this.hasEmptyCell())return!1;for(var t=0;t<e.Steps.length;t++){var a=this.cells.slice();if(this.dispatch(e.Steps[t]),this.hasEmptyCell())return this.cells=a,!1;this.cells=a}return this.over=!0,this.callbacks.over&&this.callbacks.over(),!0}},{key:"addScore",value:function(e){this.score=this.score+e,this.callbacks.addScore&&this.callbacks.addScore(e)}},{key:"hasEmptyCell",value:function(){return 0!==this.cells.filter((function(e){return 0===e})).length}},{key:"generateBlock",value:function(){for(;this.hasEmptyCell();){var e=Math.floor(16*Math.random());if(0===this.cells[e]){Math.random()<.5?this.cells[e]=2:this.cells[e]=4;break}}}}]),e}();m.Steps=["up","down","left","right"];var k=new m,b=(a(17),function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(o.a)(this,Object(h.a)(t).call(this,e)),k.start(),a.state={score:0,cells:k.cells,over:!1,won:!1,addition:0},a.handleKeydown=a.handleKeydown.bind(Object(u.a)(a)),a.restart=a.restart.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",this.handleKeydown),k.addCallback("over",(function(){e.setState({over:!0})})),k.addCallback("won",(function(){e.setState({won:!0})})),k.addCallback("addScore",(function(t){e.setState({addition:t})}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeydown),k.removeCallback("over"),k.removeCallback("won"),k.removeCallback("addScore")}},{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"game-header"},l.a.createElement("h1",{className:"title"},"2048"),l.a.createElement("div",{className:"score-container"},this.state.score,0!==this.state.addition&&l.a.createElement("div",{className:"score-addition"},"+",this.state.addition))),l.a.createElement("div",{className:"game-intro"},l.a.createElement("button",{className:"restart-button",onClick:this.restart},"New Game"),l.a.createElement("h2",{className:"subtitle"},"Play 2048 Game"),"Join the numbers and get to the ",l.a.createElement("b",null,"2048 tile!")),l.a.createElement("div",{className:"game-container"},(this.state.won||this.state.over)&&l.a.createElement("div",{className:"game-message game-".concat(this.state.won?"won":this.state.over&&"over")},l.a.createElement("p",null,this.state.won?"You win!":"Game over!"),l.a.createElement("div",{className:"actions"},l.a.createElement("button",{className:"retry-button",onClick:this.restart},"Try again"))),l.a.createElement(f,{cells:this.state.cells})),l.a.createElement("p",{className:"game-explanation"},l.a.createElement("b",{className:"important"},"How to play: "),"Use your ",l.a.createElement("b",null,"arrow keys")," to move the tiles. When two tiles with the same number touch, they ",l.a.createElement("b",null,"merge into one!")))}},{key:"restart",value:function(e){e.preventDefault(),k.restart(),this.setState({cells:k.cells,addition:0,score:0,over:!1,won:!1})}},{key:"handleKeydown",value:function(e){k.respond({ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"}[e.code])&&this.refreshGameState()}},{key:"refreshGameState",value:function(){this.setState({cells:k.cells,score:k.score,over:k.over,won:k.won})}}]),t}(l.a.Component));c.a.render(l.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0ce86b37.chunk.js.map