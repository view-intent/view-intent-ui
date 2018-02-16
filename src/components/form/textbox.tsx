import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./.scss";
import { Field } from "./field";

export class Textbox extends React.Component<Textbox.IProps, Textbox.IState> {
	public state: Textbox.IState = {
	};
	constructor(props: Textbox.IProps) {
		super(props);
	}
	public render(): JSX.Element {
		return <Field className="ui-textbox">
			<label>
				<input
				ref="input"
				className={"-input"}
				formNoValidate={true}
				required={true}
				type={this.props.type}
				value={this.props.value} />
				<span className={"-label"}>{this.props.label}</span>
			</label>
		</Field>;
	}
}
export namespace Textbox {
	export interface IProps {
		className?: string;
		label?: string;
		type?: string;
		onEnter?: () => void;
		validation?: (value: string, ...args: any[]) => boolean | string;
		value?: string | number;
		mask?: string;
	}
	export interface IState {
	}
}
export default Textbox;
