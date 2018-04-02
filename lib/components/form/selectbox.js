import * as React from "react";
// import "./.scss";
import { Field } from "./field";
import { Is } from "utility-collection";
import Pop from "../util/pop";
import Textbox from "./textbox";
import Stacker from "../util/stacker";
// console.log(Stacker);
export class Selectbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            value: "",
        };
        this.inputElement = null;
        this.openPop = this.openPop.bind(this);
        this.closePop = this.closePop.bind(this);
        // this.inputBlur = this.inputBlur.bind(this);
        // this.inputFocus = this.inputFocus.bind(this);
        // this.inputKeyUp = this.inputKeyUp.bind(this);
        // this.injectValue = this.injectValue.bind(this);
    }
    get pop() {
        console.log(this.refs["pop"]);
        return this.refs["pop"];
    }
    openPop(textbox) {
        console.log("open pop", this.pop);
        this.pop.open();
    }
    closePop(textbox) {
        console.log("pop-", this.pop);
        if (!Is.nullOrUndefined(this.pop)) {
            this.pop.close();
        }
    }
    render() {
        const pop = this.refs["pop"];
        return React.createElement(Field, { type: "selectbox", className: "viui-selectbox " +
                (this.state.focus ? " -focus " : "") },
            !Is.empty(this.props.label) && React.createElement("label", { className: "-label" }, this.props.label),
            React.createElement(Stacker, { ref: "remote1" },
                React.createElement("div", null, "item")),
            React.createElement("select", { multiple: true }, (() => {
                const items = [];
                for (let i = 0; i < 100; i++) {
                    items.push(React.createElement("option", { key: i },
                        "item ",
                        i));
                }
                return items;
            })()),
            React.createElement(Pop, { clickOutsideCloses: false, className: "viui-selectbox-pop", ref: "pop" },
                React.createElement(Textbox, { onFocus: this.openPop, onBlur: this.closePop, type: "textbox" }),
                React.createElement("ul", null,
                    (() => {
                        const items = [];
                        for (let i = 0; i < 5; i++) {
                            items.push(React.createElement("li", { key: i }, "item"));
                        }
                        return items;
                    })(),
                    React.createElement("li", null, "item"),
                    React.createElement("li", null, "itemitemitemitemit"),
                    React.createElement("li", null, "item"))));
    }
}
export default Selectbox;
//# sourceMappingURL=selectbox.js.map