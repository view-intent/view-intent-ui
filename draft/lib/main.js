import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./.scss";
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return React.createElement("div", { className: "viui-panel" },
            React.createElement("div", { className: "viui-panel-menu" }, "-"),
            React.createElement("div", { className: "viui-panel-main" },
                React.createElement("div", { className: "viui-panel-header" },
                    React.createElement("a", { href: "#" }),
                    React.createElement("a", { href: "#" }, "-")),
                React.createElement("div", { className: "viui-panel-content", id: "" },
                    React.createElement("div", { className: "sy" },
                        React.createElement("div", { style: { height: "500px" } }, "-"),
                        React.createElement("div", null, "component")))));
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
console.log("component");
//# sourceMappingURL=main.js.map