import * as React from "react";
import * as ReactDOM from "react-dom";

export class Modal extends React.Component<Modal.IProps, Modal.IState> {
	public state: Modal.IState = {
	};
	constructor(props: Modal.IProps) {
		super(props);
	}
	public render(): JSX.Element {
		return <div className="viui-modal">{this.props.children}</div>;
	}
}
export namespace Modal {
	export interface IProps {
	}
	export interface IState {
	}
}
export default Modal;
