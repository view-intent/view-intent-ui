import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./.scss";

export class StackerTarget extends React.Component<StackerTarget.IProps, StackerTarget.IState> {
	public state: StackerTarget.IState = {
	};
	constructor(props: StackerTarget.IProps) {
		super(props);
	}
	public render(): JSX.Element {
		return <div>StackerTarget Component</div>;
	}
}
export namespace StackerTarget {
	export const StackerTargetList: StackerTarget[] = [];
	export function registerStacker(stackerTarget: StackerTarget) {
		StackerTargetList.push(stackerTarget);
	}
	export function unregisterStacker(stackerTarget: StackerTarget) {
		const index: number = StackerTargetList.findIndex((value) => {
			return stackerTarget === value;
		});
		if (index > -1) {
			delete StackerTargetList[index];
		}
	}
	export interface IProps {
		id: string;
		className?: string;
	}
	export interface IState {
	}
}
const stackerElement: HTMLDivElement = document.createElement("div");
stackerElement.setAttribute("class", "stacker");
ReactDOM.render(<StackerTarget className="viui-stacker" id="main" />, stackerElement);

export default StackerTarget;
