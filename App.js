/*const heading = React.createElement("h1",{id:"heading"},"Hello World from React!");*/

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tag"),
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tag"),
    ]),
 ]);

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(parent);