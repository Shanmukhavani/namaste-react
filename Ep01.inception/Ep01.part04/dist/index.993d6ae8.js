// import React from "react";
// import ReactDOM from"react-dom";
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I'm h1 tag without cdn")));
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.993d6ae8.js.map
