(()=>{const{useState:e}=React,t=t=>{const[a,n]=e(t.username);return React.createElement("div",null,React.createElement("p",null,"Hello ",a,"!"),React.createElement("label",null,"Change Name:"),React.createElement("input",{type:"text",value:a,onChange:e=>n(e.target.value)}))};window.onload=()=>{ReactDOM.render(React.createElement(t,{username:"Gordon"}),document.getElementById("app"))}})();