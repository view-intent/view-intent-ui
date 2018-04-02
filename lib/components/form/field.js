import * as React from "react";
// import "./fields.scss";
export class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return React.createElement("div", { className: "viui-field " + this.props.className || "" },
            (this.props.topChildren !== undefined) && React.createElement("div", { className: "-top-children" }, this.props.topChildren),
            React.createElement("div", { className: "viui-field__" + this.props.type },
                (this.props.leftChildren !== undefined) && React.createElement("div", { className: "-left-children" }, this.props.leftChildren),
                React.createElement("div", { className: "-children" }, this.props.children),
                (this.props.rightChildren !== undefined) && React.createElement("div", { className: "-right-children" }, this.props.rightChildren)),
            (this.props.bottomChildren !== undefined) && React.createElement("div", { className: "-bottom-children" }, this.props.bottomChildren));
    }
}
export default Field;
//# sourceMappingURL=field.js.map