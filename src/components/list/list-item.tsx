import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./.scss";

export class ListItem extends React.Component<ListItem.IProps, ListItem.IState> {
	public state: ListItem.IState = {
	};
	constructor(props: ListItem.IProps) {
		super(props);
	}
	public render(): JSX.Element {
		return <div className="viui-list">{this.props.children}</div>;
	}
}
export namespace ListItem {
	export interface IProps {
	}
	export interface IState {
	}
}
export default ListItem;
