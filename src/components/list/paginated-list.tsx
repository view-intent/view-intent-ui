import * as React from "react";
import * as ReactDOM from "react-dom";

export class PaginatedList extends React.Component<PaginatedList.IProps, PaginatedList.IState> {
	public state: PaginatedList.IState = {
	};
	constructor(props: PaginatedList.IProps) {
		super(props);
	}
	public render(): JSX.Element {
		return <div className="">
			<div className="">{this.props.children}</div>
		</div>;
	}
}
export namespace PaginatedList {
	export interface IProps {
	}
	export interface IState {
	}
}
export default PaginatedList;
