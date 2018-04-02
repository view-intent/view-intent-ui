import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./simple-loader.scss";

export class SimpleLoader extends React.Component<SimpleLoader.IProps, SimpleLoader.IState> {
	public state: SimpleLoader.IState = {
	};
	constructor(props: SimpleLoader.IProps) {
		super(props);
	}
//    public shouldComponentUpdate(nextProps: SimpleLoader.IProps, nextState: SimpleLoader.IState): boolean {
//        return true;
//    }
	public render(): JSX.Element {
		return <div>SimpleLoader Component</div>;
	}
}
export namespace SimpleLoader {
	export interface IProps {
	}
	export interface IState {
	}
}
export default SimpleLoader;
