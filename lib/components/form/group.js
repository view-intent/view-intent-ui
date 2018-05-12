import * as React from "react";
// import "./group.scss";
export class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    get direction() {
        return " -" + (this.props.direction || "horizontal");
    }
    get className() {
        return ` ${this.props.className} ` || "";
    }
    render() {
        return React.createElement("div", { className: "viui-group " + this.direction + this.className }, this.props.children);
    }
}
export default Group;
//# sourceMappingURL=group.js.map