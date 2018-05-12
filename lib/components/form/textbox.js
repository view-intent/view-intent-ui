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
import { MotherMask } from "mother-mask";
// import { debounce } from "throttle-debounce";
const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
export class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            value: "",
            loading: false,
            mounted: false,
        };
        this.inputElement = null;
        this.debounce = -1;
        this.inputBlur = this.inputBlur.bind(this);
        this.inputFocus = this.inputFocus.bind(this);
        this.inputKeyUp = this.inputKeyUp.bind(this);
        this.inputKeyDown = this.inputKeyDown.bind(this);
        this.inputClick = this.inputClick.bind(this);
        // set value
        this.value = this.props.value;
    }
    get value() {
        return this.state.value;
    }
    set value(value) {
        // console.log(" set value", value);
        if (this.state.value !== value) {
            if (this.props.mask !== undefined) {
                this.state.value = MotherMask.process(value, this.props.mask);
            }
            else {
                this.state.value = value;
            }
            // this will be in the end
            this.inputChange();
        }
        this.setInputValue(this.state.value);
    }
    isValid() {
        return true;
    }
    get isFocus() {
        return this.state.focus;
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
    inputChange() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isFocus) {
                this.loading();
                if (this.props.onChange !== undefined && this.props.onChange !== null) {
                    yield this.props.onChange(this);
                }
                if (this.props.onChangeDebounce !== undefined && this.props.onChangeDebounce !== null) {
                    clearTimeout(this.debounce);
                    this.loading();
                    this.debounce = setTimeout(() => {
                        (() => __awaiter(this, void 0, void 0, function* () {
                            yield this.props.onChangeDebounce(this);
                            this.loaded();
                        }))();
                    }, this.props.onChangeDebounceDelay || 600);
                }
                this.loaded();
            }
        });
    }
    inputFocus(e) {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.focus = true;
            this.setState(this.state);
        });
    }
    inputBlur(e) {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.focus = false;
            this.setState(this.state);
        });
    }
    inputKeyUp(e) {
        return __awaiter(this, void 0, void 0, function* () {
            this.value = e.target.value;
        });
    }
    inputKeyDown(e) {
        return __awaiter(this, void 0, void 0, function* () {
            setImmediate(() => {
                this.value = e.target.value;
            });
        });
    }
    inputClick(e) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Is.nullOrUndefined(this.props.onClick)) {
                this.loading();
                yield this.props.onClick(this);
                this.loaded();
            }
        });
    }
    isFilled() {
        if (!Is.empty(this.state.value)) {
            return true;
        }
        else {
            return false;
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
    isDisabled() {
        return (this.props.disabled || this.state.loading);
    }
    setInputValue(value) {
        if (this.inputElement !== null) {
            if (this.inputElement.value !== value) {
                if (value !== undefined && value !== null) {
                    this.inputElement.value = value;
                }
                else {
                    this.inputElement.value = "";
                }
                this.inputElement.defaultValue = ""; // try ios fix
            }
        }
    }
    componentDidMount() {
        this.state.mounted = true;
        this.inputElement = this.refs["input"];
        if (!Is.nullOrUndefined(this.inputElement)) {
            this.inputElement.addEventListener("focus", this.inputFocus);
            this.inputElement.addEventListener("blur", this.inputBlur);
            this.inputElement.addEventListener("click", this.inputClick);
            if (!Is.empty(this.props.mask)) {
                MotherMask.bind(this.inputElement, this.props.mask, (value) => {
                    this.value = value;
                });
                this.value = !Is.nullOrUndefined(this.props.value) ? MotherMask.process(this.props.value, this.props.mask) : "";
            }
            else {
                this.inputElement.addEventListener("keydown", this.inputKeyDown);
                this.inputElement.addEventListener("paste", this.inputKeyDown);
                this.value = this.props.value;
            }
        }
    }
    componentWillUnmount() {
        this.state.mounted = false;
        this.inputElement.removeEventListener("focus", this.inputFocus);
        this.inputElement.removeEventListener("blur", this.inputBlur);
        this.inputElement.removeEventListener("keydown", this.inputKeyDown);
        this.inputElement.removeEventListener("click", this.inputClick);
    }
    componentWillReceiveProps(props) {
        this.value = props.value;
    }
    componentDidUpdate() {
        this.setInputValue(this.value);
    }
    render() {
        return React.createElement(Field, { type: "input", className: "viui-textbox " +
                (this.isDisabled() ? " -disabled " : " -enabled ") +
                (this.state.loading ? " -loading " : "") +
                (this.state.focus ? " -focus " : "") +
                (this.isFilled() ? " -filled " : "") +
                (this.isLabeled() ? " -labeled" : "") },
            !Is.empty(this.props.label) && React.createElement("label", { className: "-label" }, this.props.label),
            React.createElement("input", { ref: "input", className: "-input", formNoValidate: true, onFocus: (e) => __awaiter(this, void 0, void 0, function* () {
                    if (!Is.nullOrUndefined(this.props.onFocus)) {
                        this.props.onFocus(this);
                    }
                }), onChange: (e) => {
                    // ios ugly fix
                    // watch this bug: https://github.com/facebook/react/issues/8938
                    if (iOS) {
                        this.value = e.target.value;
                    }
                }, onBlur: (e) => __awaiter(this, void 0, void 0, function* () {
                    if (!Is.nullOrUndefined(this.props.onBlur)) {
                        this.props.onBlur(this);
                    }
                }), type: this.props.type }));
    }
}
// console.log("-> textbox ");
export default Textbox;
//# sourceMappingURL=textbox.js.map