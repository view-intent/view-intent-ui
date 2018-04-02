import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./.scss";

export class Stacker extends React.Component<Stacker.IProps, Stacker.IState> {
	public state: Stacker.IState = {
	};
	constructor(props: Stacker.IProps) {
		super(props);
	}
	public render(): React.ReactNode {
		return <div>-Stacker</div>;
	}
	public componentDidMount() {
		Stacker.registerStacker(this);
	}
	public componentWillUnmount() {
		Stacker.unregisterStacker(this);
	}
	public renderRemote(): React.ReactNode {
		return this.props.children;
	}
}
export namespace Stacker {
	export const stackerList: Stacker[] = [];
	export function registerStacker(stacker: Stacker) {
		stackerList.push(stacker);
	}
	export function unregisterStacker(stacker: Stacker) {
		const index: number = stackerList.findIndex((value) => {
			return stacker === value;
		});
		if (index > -1) {
			delete stackerList[index];
		}
	}
	export function getStacker(): React.ReactNode {
		return stackerList.map((value) => {
			return value.props.children;
		});
	}
	export interface IProps {
		target?: string;
	}
	export interface IState {
	}
}

export default Stacker;
