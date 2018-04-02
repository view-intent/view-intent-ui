import * as React from "react";
import * as ReactDOM from "react-dom";
import { Field } from "./field";
import { Is } from "utility-collection";
import { Options } from "../config/options";
import { ILoadableComponent } from "../interfaces/loadable";

// import "./.scss";

export class Button extends React.Component<Button.IProps, Button.IState> implements ILoadableComponent {
	public state: Button.IState = {
		focus: false,
		loading: false,
	};
	constructor(props: Button.IProps) {
		super(props);
	}
	public get value(): string | number | null | undefined {
		return this.props.value;
	}
	public isLabeled(): boolean {
		if (!Is.empty(this.props.label)) {
			return true;
		} else {
			return false;
		}
	}
	public isDisabled(): boolean {
		return (this.props.disabled || this.state.loading);
	}
	public loading(): void {
		if ( !this.state.loading) {
			this.state.loading = true;
			this.setState(this.state);
		}
	}
	public loaded(): void {
		if (this.state.loading) {
			this.state.loading = false;
			this.setState(this.state);
		}
	}
	public componentWillUnmount() {
		this.state.loading = false;
		this.state.focus = false;
	}
	public render(): React.ReactNode {
		return <Field type="input" className={
			"viui-button" +
			(this.isDisabled() ? " -disabled " : " -enabled ") +
			(this.state.focus ? " -focus " : "") +
			(this.state.loading ? " -loading " : "") +
			(this.isLabeled() ? " -labeled" : "")
		}>
			{/* {!Is.empty(this.props.label) && <label className={"-label"}>{this.props.label}</label>} */}
			<button
				ref="button"
				className={"-button"}
				onFocus={async (e) => { if (!Is.nullOrUndefined(this.props.onFocus)) {
					this.loading();
					await this.props.onFocus!(this);
					this.loaded();
				} }}
				onClick={async (e) => { if (!Is.nullOrUndefined(this.props.onClick)) {
					this.loading();
					await this.props.onClick!(this);
					this.loaded();
				} }}
				onBlur={async (e) => { if (!Is.nullOrUndefined(this.props.onBlur)) {
					this.loading();
					await this.props.onBlur!(this);
					this.loaded();
				} }}
				// disabled={this.isDisabled() && false}
				disabled={ this.isDisabled() }
				>
				<span className="-label">{this.props.label}</span>
				{!Is.nullOrUndefined(this.props.children) && <span className="-children">{this.props.children}</span>}
				{!Is.empty(this.props.srcLoader) && this.state.loading && <img className="-loader" src={this.props.srcLoader} />}
				{Is.empty(this.props.srcLoader) && this.state.loading && !Is.empty(Options.get().srcLoaderDefault) && <img className="-loader" src={Options.get().srcLoaderDefault} />}
			</button>
		</Field>;
	}
}
export namespace Button {
	export interface IProps {
		className?: string;
		value?: string | number | null | undefined;
		label?: string;
		disabled?: boolean;
		// loader
		srcLoader?: string;
		// actions
		onFocus?: (button: Button) => void;
		onBlur?: (textbox: Button) => void;
		onClick?: (Textbox?: Button) => void;
	}
	export interface IState {
		focus: boolean;
		loading: boolean;
	}
}
export default Button;
