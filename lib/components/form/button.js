var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import { Field } from "./field";
import { Is } from "utility-collection";
import { Options } from "../config/options";
// import "./.scss";
export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            loading: false,
        };
    }
    get value() {
        return this.props.value;
    }
    isLabeled() {
        if (!Is.empty(this.props.label)) {
            return true;
        }
        else {
            return false;
        }
    }
    isDisabled() {
        return (this.props.disabled || this.state.loading);
    }
    loading() {
        if (!this.state.loading) {
            this.state.loading = true;
            this.setState(this.state);
        }
    }
    loaded() {
        if (this.state.loading) {
            this.state.loading = false;
            this.setState(this.state);
        }
    }
    componentWillUnmount() {
        this.state.loading = false;
        this.state.focus = false;
    }
    render() {
        return React.createElement(Field, { type: "input", className: "viui-button" +
                (this.isDisabled() ? " -disabled " : " -enabled ") +
                (this.state.focus ? " -focus " : "") +
                (this.state.loading ? " -loading " : "") +
                (this.isLabeled() ? " -labeled" : "") },
            React.createElement("button", { ref: "button", className: "-button", onFocus: (e) => __awaiter(this, void 0, void 0, function* () {
                    if (!Is.nullOrUndefined(this.props.onFocus)) {
                        this.loading();
                        yield this.props.onFocus(this);
                        this.loaded();
                    }
                }), onClick: (e) => __awaiter(this, void 0, void 0, function* () {
                    if (!Is.nullOrUndefined(this.props.onClick)) {
                        this.loading();
                        yield this.props.onClick(this);
                        this.loaded();
                    }
                }), onBlur: (e) => __awaiter(this, void 0, void 0, function* () {
                    if (!Is.nullOrUndefined(this.props.onBlur)) {
                        this.loading();
                        yield this.props.onBlur(this);
                        this.loaded();
                    }
                }), 
                // disabled={this.isDisabled() && false}
                disabled: this.isDisabled() },
                React.createElement("span", { className: "-label" }, this.props.label),
                !Is.nullOrUndefined(this.props.children) && React.createElement("span", { className: "-children" }, this.props.children),
                !Is.empty(this.props.srcLoader) && this.state.loading && React.createElement("img", { className: "-loader", src: this.props.srcLoader }),
                Is.empty(this.props.srcLoader) && this.state.loading && !Is.empty(Options.get().srcLoaderDefault) && React.createElement("img", { className: "-loader", src: Options.get().srcLoaderDefault })));
    }
}
export default Button;
//# sourceMappingURL=button.js.map