import * as React from "react";
// import "./.scss";
import { Manager, Target, Popper } from "react-popper";
import { Event, Is } from "utility-collection";
import { CssEntry } from "./css-entry";
export class PopperChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        CssEntry.componentWillMount(this);
    }
    componentDidMount() {
        CssEntry.componentDidMount(this);
    }
    componentWillUnmount() {
        CssEntry.componentWillUnmount(this);
    }
    render() {
        return React.createElement("div", { className: "popper-child padding-0 margin-0 " + CssEntry.className(this) }, this.props.children);
    }
}
export class Pop extends React.Component {
    constructor(props) {
        super(props);
        this.popper = null;
        this.state = {
            isOpen: false,
        };
    }
    open() {
        if (Pop.openedInstance !== null) {
            Pop.openedInstance.close();
        }
        Pop.openedInstance = this;
        this.setState({ isOpen: true });
    }
    componentDidUpdate() {
        if (this.props.clickOutsideCloses === undefined || this.props.clickOutsideCloses === true) {
            const popper = this.refs.modal;
            if (!Is.nullOrUndefined(popper)) {
                const node = popper._popperNode;
                if (!Is.nullOrUndefined(node) && this.state.isOpen) {
                    Event.onceOutside(node, "click", (e) => {
                        if (this === Pop.openedInstance) {
                            this.close();
                        }
                    });
                }
            }
        }
    }
    componentWillUnmount() {
        if (Pop.openedInstance === this) {
            Pop.openedInstance = null;
        }
    }
    close() {
        Pop.openedInstance = null;
        this.setState({ isOpen: false });
    }
    toggle() {
        if (!this.state.isOpen) {
            this.open();
        }
    }
    render() {
        const childrens = this.props.children;
        if (childrens.length < 2) {
            throw new Error("The component Pop must have at least 2 children");
        }
        return React.createElement(Manager, { className: (this.props.className || "") + (this.state.isOpen ? " -is-open" : "") },
            React.createElement(Target, null, childrens[0]),
            this.state.isOpen && React.createElement(Popper, { ref: "modal", placement: this.props.placement || "bottom-start", style: { minWidth: "100%", zIndex: 10 } },
                React.createElement(PopperChild, null, childrens[1])));
    }
}
(function (Pop) {
    Pop.openedInstance = null;
    // export function registerOpenedPop(pop: Pop) {
    // }
    function closeAll() {
        if (Pop.openedInstance !== null && Pop.openedInstance !== undefined) {
            Pop.openedInstance.close();
        }
    }
    Pop.closeAll = closeAll;
})(Pop || (Pop = {}));
export default Pop;
//# sourceMappingURL=pop.js.map