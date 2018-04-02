var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
// import "./.scss";
import { Field } from "./field";
import { Is } from "utility-collection";
import { Icon } from "../util/icon";
import { CheckIcon } from "../util/icon-default";
export class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.getFalseValue(),
            selection: undefined,
            focus: false,
            loading: false,
            mounted: false,
            list: [],
        };
        this.buttonElement = null;
        this.getFalseValue = this.getFalseValue.bind(this);
        this.getTrueValue = this.getTrueValue.bind(this);
        this.toggle = this.toggle.bind(this);
        this.isTrue = this.isTrue.bind(this);
        this.isLabeled = this.isLabeled.bind(this);
        // ------------------
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        // ------------------
        if (this.props.type === "radio") {
            // radio
            this.state.selection = this.props.selection;
            if (this.state.selection === this.props.selectionKey) {
                this.state.value = this.getTrueValue();
            }
            else {
                this.state.value = this.getFalseValue();
            }
        }
        else {
            // checkbox
            if (this.props.selections !== undefined && this.props.selectionKey !== undefined) {
                if (this.props.selections.indexOf(this.props.selectionKey) > -1) {
                    this.state.value = this.getTrueValue();
                }
                else {
                    this.state.value = this.getFalseValue();
                }
            }
        }
    }
    loading() {
        if (!this.state.loading) {
            this.state.loading = true;
            if (this.state.mounted) {
                this.setState(this.state);
            }
        }
    }
    loaded() {
        if (this.state.loading) {
            this.state.loading = false;
            if (!this.state.mounted) {
                this.setState(this.state);
            }
        }
    }
    get value() {
        return this.state.value;
    }
    set value(value) {
        if (value !== this.state.value) {
            this.state.value = value;
            // remove or add item from list
            if (this.props.type === "radio") {
                // radio -
                if (this.state.selection !== this.props.selection) {
                    this.state.selection = this.props.selection;
                    this.setState(this.state);
                    this.onChange();
                }
            }
            else {
                // checkbox
                if (this.props.selections !== undefined && this.props.selectionKey !== undefined) {
                    const i = this.props.selections.indexOf(this.props.selectionKey);
                    if (this.isTrue()) {
                        if (i === -1) {
                            this.props.selections.push(this.props.selectionKey);
                        }
                    }
                    else {
                        if (i > -1) {
                            this.props.selections.splice(i, 1);
                        }
                    }
                }
                this.setState(this.state);
                // callback
                this.onChange();
            }
        }
    }
    get selection() {
        return this.state.selection;
    }
    get selections() {
        if (this.props.type === "radio") {
            if (this.state.selection !== undefined) {
                return [this.state.selection];
            }
            else {
                return [];
            }
        }
        else {
            if (this.props.selections !== undefined) {
                return this.props.selections;
            }
            else {
                return [];
            }
        }
    }
    onChange() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.props.onChange !== undefined && this.props.onChange !== null) {
                this.loading();
                yield this.props.onChange(this);
                this.loaded();
            }
        });
    }
    componentWillReceiveProps(props) {
        this.state.selection = props.selection;
    }
    isTrue() {
        if (this.props.type === "radio") {
            if (this.props.selectionKey === this.state.selection) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            // checkbox
            if (!Is.nullOrUndefined(this.props.trueValue)) {
                if (this.state.value === this.props.trueValue) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                if (this.state.value === true) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }
    isLabeled() {
        if (!Is.empty(this.props.label)) {
            return true;
        }
        else {
            return false;
        }
    }
    getTrueValue() {
        if (!Is.nullOrUndefined(this.props.trueValue)) {
            return this.props.trueValue;
        }
        else {
            return true;
        }
    }
    getFalseValue() {
        if (!Is.nullOrUndefined(this.props.falseValue)) {
            return this.props.falseValue;
        }
        else {
            return false;
        }
    }
    componentDidMount() {
        this.state.mounted = true;
    }
    componentWillUnmount() {
        this.state.mounted = false;
    }
    setSelection() {
        if (this.state.selection !== this.props.selectionKey) {
            this.state.selection = this.props.selectionKey;
            this.setState(this.state);
            this.onChange();
        }
    }
    toggle() {
        if (this.isTrue()) {
            this.value = this.getFalseValue();
        }
        else {
            this.value = this.getTrueValue();
        }
    }
    getType() {
        return this.props.type || "checkbox";
    }
    onFocus() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.focus = true;
            this.setState(this.state);
        });
    }
    onBlur() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.focus = false;
            this.setState(this.state);
        });
    }
    render() {
        const checkbox = React.createElement("button", { className: "-button", onFocus: () => { this.onFocus(); }, onBlur: () => { this.onBlur(); }, onClick: () => { this.toggle(); } }, (this.isTrue() &&
            React.createElement(Icon, { src: this.isTrue() ? CheckIcon : null, size: "14px" })));
        const radio = React.createElement("button", { className: "-button", onFocus: () => { this.onFocus(); }, onBlur: () => { this.onBlur(); }, onClick: () => { this.setSelection(); } }, (this.isTrue() &&
            React.createElement("span", { className: "-dot" })));
        const checkboxSwitch = React.createElement("button", { onFocus: () => { this.onFocus(); }, onBlur: () => { this.onBlur(); }, className: "-button", onClick: () => { this.toggle(); } },
            React.createElement("span", { className: "-slider" }));
        let component;
        let left;
        let right;
        if (this.props.type === "switch") {
            component = checkboxSwitch;
        }
        else if (this.props.type === "radio") {
            component = radio;
        }
        else {
            component = checkbox;
        }
        if (this.props.position === "left" || this.props.position === undefined) {
            left = component;
        }
        else {
            right = component;
        }
        return React.createElement(Field, { type: "checkbox", className: "viui-checkbox " +
                (" -" + this.getType()) +
                (this.state.focus ? " -focus " : "") +
                (this.isTrue() ? " -checked " : " -unchecked ") +
                (this.isLabeled() ? " -labeled" : ""), leftChildren: left, rightChildren: right },
            !Is.empty(this.props.label) && React.createElement("label", { className: "-label" }, this.props.label),
            this.props.children);
    }
}
export default Checkbox;
//# sourceMappingURL=checkbox.js.map