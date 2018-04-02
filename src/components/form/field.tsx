import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./fields.scss";

export class Field extends React.Component<Field.IProps, Field.IState> {
	public state: Field.IState = {
	};
	constructor(props: Field.IProps) {
		super(props);
	}
	public render(): JSX.Element {
		return <div className={"viui-field " + this.props.className || ""}>
			{(this.props.topChildren !== undefined) && <div className="-top-children">{this.props.topChildren}</div>}
			<div className={"viui-field__" + this.props.type}>
				{(this.props.leftChildren !== undefined) && <div className="-left-children">{this.props.leftChildren}</div>}
				<div className={"-children"}>{this.props.children}</div>
				{(this.props.rightChildren !== undefined) && <div className="-right-children">{this.props.rightChildren}</div>}
			</div>
			{(this.props.bottomChildren !== undefined) && <div className="-bottom-children">{this.props.bottomChildren}</div>}
		</div>;
	}
}
export namespace Field {
	export interface IProps {
		className?: string;
		type: "input" | "checkbox" | "selectbox";
		leftChildren?: React.ReactNode;
		rightChildren?: React.ReactNode;
		bottomChildren?: React.ReactNode;
		topChildren?: React.ReactNode;
	}
	export interface IState {
	}
}
export default Field;
