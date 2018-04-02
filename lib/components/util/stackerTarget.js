import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./.scss";
export class StackerTarget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return React.createElement("div", null, "StackerTarget Component");
    }
}
(function (StackerTarget) {
    StackerTarget.StackerTargetList = [];
    function registerStacker(stackerTarget) {
        StackerTarget.StackerTargetList.push(stackerTarget);
    }
    StackerTarget.registerStacker = registerStacker;
    function unregisterStacker(stackerTarget) {
        const index = StackerTarget.StackerTargetList.findIndex((value) => {
            return stackerTarget === value;
        });
        if (index > -1) {
            delete StackerTarget.StackerTargetList[index];
        }
    }
    StackerTarget.unregisterStacker = unregisterStacker;
})(StackerTarget || (StackerTarget = {}));
const stackerElement = document.createElement("div");
stackerElement.setAttribute("class", "stacker");
ReactDOM.render(React.createElement(StackerTarget, { className: "viui-stacker", id: "main" }), stackerElement);
export default StackerTarget;
//# sourceMappingURL=stackerTarget.js.map