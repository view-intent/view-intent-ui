import * as React from "react";
// import "./.scss";
import { Manager, Target, Popper } from "react-popper";
export class Pop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    open() {
        this.setState({ isOpen: true });
    }
    close() {
        this.setState({ isOpen: false });
    }
    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        const childrens = this.props.children;
        if (childrens.length < 2) {
            throw new Error("The component Pop must have at least 2 children");
        }
        return React.createElement(Manager, null,
            React.createElement(Target, null, childrens[0]),
            this.state.isOpen && React.createElement(Popper, { placement: "bottom-start", style: { minWidth: "100%", zIndex: 10 } }, childrens[1]));
    }
}
(function (Pop) {
    Pop.openedInstance = null;
    function closeAll() {
        if (Pop.openedInstance !== null && Pop.openedInstance !== undefined) {
            Pop.openedInstance.close();
        }
    }
    Pop.closeAll = closeAll;
})(Pop || (Pop = {}));
export default Pop;
//# sourceMappingURL=pop.js.map