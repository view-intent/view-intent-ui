import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./.scss";

export class Field extends React.Component<Field.IProps, Field.IState> {
	public state: Field.IState = {
	};
	constructor(props: Field.IProps) {
		super(props);
	}
	public render(): JSX.Element {
		return <div className={"ui-form__field " + this.props.className || ""}>{this.props.children}</div>;
	}
}
export namespace Field {
	export interface IProps {
		className?: string;
		type?: string;
		onEnter?: () => void;
		validation?: (value: string, ...args: any[]) => boolean | string;
		value?: string | number;
		mask?: string;
	}
	export interface IState {
	}
}
export default Field;
