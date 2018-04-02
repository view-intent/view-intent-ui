import * as React from "react";
import { CssEntry } from "./css-entry";
// import "./entry.scss";
export class Entry extends React.Component {
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
        return React.createElement("div", { style: this.props.style, className: this.props.className + " " + CssEntry.className(this) }, this.props.children);
    }
}
export default Entry;
//# sourceMappingURL=entry.js.map