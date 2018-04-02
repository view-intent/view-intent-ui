import * as React from "react";
export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return React.createElement("div", { className: "viui-modal" }, this.props.children);
    }
}
export default Modal;
//# sourceMappingURL=modal.js.map