import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./.scss";
import { Field } from "./field";
import { Is } from "utility-collection";
import { DataFetch } from "view-intent";
import { MotherMask } from "mother-mask";
import { IconAbstract, Icon } from "../util/icon";
import { CloseIcon, CheckIcon } from "../util/icon-default";
import { ILoadableComponent } from "../interfaces/loadable";

export class Checkbox extends
	React.Component<Checkbox.IProps, Checkbox.IState>
	implements ILoadableComponent {
	public state: Checkbox.IState = {
		value: this.getFalseValue(),
		selection: undefined,
		focus: false,
		loading: false,
		mounted: false,
		list: [],
	};
	public buttonElement: HTMLInputElement | null = null;

	constructor(props: Checkbox.IProps) {
		super(props);
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
			} else {
				this.state.value = this.getFalseValue();
			}
		} else {
			// checkbox
			if (this.props.selections !== undefined && this.props.selectionKey !== undefined) {
				if (this.props.selections.indexOf(this.props.selectionKey) > -1) {
					this.state.value = this.getTrueValue();
				} else {
					this.state.value = this.getFalseValue();
				}
			}
		}
	}
	public loading(): void {
		if (!this.state.loading) {
			this.state.loading = true;
			if (this.state.mounted) {
				this.setState(this.state);
			}
		}
	}
	public loaded(): void {
		if (this.state.loading) {
			this.state.loading = false;
			if (!this.state.mounted) {
				this.setState(this.state);
			}
		}
	}
	public get value(): string | number | boolean | null | undefined {
		return this.state.value;
	}
	public set value(value: string | number | boolean | null | undefined) {
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
			} else {
				// checkbox
				if (this.props.selections !== undefined && this.props.selectionKey !== undefined) {
					const i: number = this.props.selections.indexOf(this.props.selectionKey);
					if (this.isTrue()) {
						if (i === -1) {
							this.props.selections.push(this.props.selectionKey);
						}
					} else {
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
	public get selection(): string | number | undefined {
		return this.state.selection;
	}
	public get selections(): Array<string | number> {
		if (this.props.type === "radio") {
			if (this.state.selection !== undefined) {
				return [ this.state.selection ];
			} else {
				return [];
			}
		} else {
			if (this.props.selections !== undefined) {
				return this.props.selections;
			} else {
				return [];
			}
		}
	}
	public async onChange(): Promise<void> {
		if (this.props.onChange !== undefined && this.props.onChange !== null) {
			this.loading();
			await this.props.onChange!(this);
			this.loaded();
		}
	}
	public componentWillReceiveProps(props: Checkbox.IProps) {
		this.state.selection = props.selection;
	}
	public isTrue(): boolean {
		if (this.props.type === "radio") {
			if (this.props.selectionKey === this.state.selection) {
				return true;
			} else {
				return false;
			}
		} else {
			// checkbox
			if (!Is.nullOrUndefined(this.props.trueValue)) {
				if (this.state.value === this.props.trueValue) {
					return true;
				} else {
					return false;
				}
			} else {
				if (this.state.value === true) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
	public isLabeled(): boolean {
		if (!Is.empty(this.props.label)) {
			return true;
		} else {
			return false;
		}
	}
	public getTrueValue(): boolean | string | number {
		if (!Is.nullOrUndefined(this.props.trueValue)) {
			return this.props.trueValue!;
		} else {
			return true;
		}
	}
	public getFalseValue(): boolean | string | number {
		if (!Is.nullOrUndefined(this.props.falseValue)) {
			return this.props.falseValue!;
		} else {
			return false;
		}
	}
	public componentDidMount() {
		this.state.mounted = true;
	}
	public componentWillUnmount() {
		this.state.mounted = false;
	}
	public setSelection(): void {
		if (this.state.selection !== this.props.selectionKey) {
			this.state.selection = this.props.selectionKey;
			this.setState(this.state);
			this.onChange();
		}
	}
	public toggle(): void {
		if (this.isTrue()) {
			this.value = this.getFalseValue();
		} else {
			this.value = this.getTrueValue();
		}
	}
	public getType(): string {
		return this.props.type || "checkbox";
	}
	public async onFocus() {
		this.state.focus = true;
		this.setState(this.state);
	}
	public async onBlur() {
		this.state.focus = false;
		this.setState(this.state);
	}
	public render(): React.ReactNode {
		const checkbox: React.ReactNode = <button
			className={"-button"}
			onFocus={() => { this.onFocus(); }}
			onBlur={() => { this.onBlur(); }}
			onClick={() => { this.toggle(); }}>
			{(this.isTrue() &&
				<Icon src={this.isTrue() ? CheckIcon : null} size="14px" />)}
		</button>;
		const radio: React.ReactNode = <button
			className={"-button"}
			onFocus={() => { this.onFocus(); }}
			onBlur={() => { this.onBlur(); }}
			onClick={() => { this.setSelection(); }}>
			{(this.isTrue() &&
				<span className="-dot"></span>)}
		</button>;
		const checkboxSwitch: React.ReactNode = <button
			onFocus={() => { this.onFocus(); }}
			onBlur={() => { this.onBlur(); }}
			className={"-button"}
			onClick={() => { this.toggle(); }}>
			<span className="-slider"></span>
		</button>;
		let component: React.ReactNode;
		let left: React.ReactNode;
		let right: React.ReactNode;
		if (this.props.type === "switch") {
			component = checkboxSwitch;
		} else if (this.props.type === "radio") {
			component = radio;
		} else {
			component = checkbox;
		}
		if (this.props.position === "left" || this.props.position === undefined) {
			left = component;
		} else {
			right = component;
		}
		return <Field
			type="checkbox"
			className={"viui-checkbox " +
				(" -" + this.getType()) +
				(this.state.focus ? " -focus " : "") +
				(this.isTrue() ? " -checked " : " -unchecked ") +
				(this.isLabeled() ? " -labeled" : "")}
			leftChildren={left}
			rightChildren={right}>
			{!Is.empty(this.props.label) && <label className={"-label"}>{this.props.label}</label>}
			{this.props.children}
		</Field>;
	}
}
export namespace Checkbox {
	export interface IProps {
		className?: string;
		label?: string | null | undefined;
		type?: "checkbox" | "switch" | "radio";
		// validation?: (value: string, isItValid: (answer: boolean) => void) => void;
		value?: string | number | boolean | null | undefined; // always true or false
		selectionKey?: string | number;
		selections?: Array<string | number>;
		selection?: string | number;
		// selectedKey?: string | number;
		// check
		defaultValue?: string | number | boolean;
		trueValue?: string | number | boolean;
		falseValue?: string | number | boolean;
		onTrue?: (value: string | number | boolean) => void;
		onFalse?: (value: string | number | boolean) => void;
		// -----------
		position?: "left" | "right";
		// loader
		srcLoader?: string;
		// actions
		onClick?: (checkbox?: Checkbox) => void;
		onChange?: (checkbox?: Checkbox) => void;
	}
	export interface IState {
		focus?: boolean;
		loading: boolean;
		value?: string | number | boolean | null | undefined;
		selection?: string | number ;
		mounted: boolean;
		list?: Array<string | number>;
		// selectedKey?: string | number;
		// list
	}
}
export default Checkbox;
