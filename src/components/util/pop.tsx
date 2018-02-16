import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./.scss";
import { Manager, Target, Popper, Arrow } from "react-popper";
import * as Portal from "react-portal";

export class Pop extends React.Component<Pop.IProps, Pop.IState> {
	public state: Pop.IState = {
		isOpen: false,
	};
	constructor(props: Pop.IProps) {
		super(props);
	}
	public open(): void {
		this.setState({ isOpen: true });
	}
	public close(): void {
		this.setState({ isOpen: false });
	}
	public toggle(): void {
		this.setState({ isOpen: !this.state.isOpen });
	}
	public render(): JSX.Element {
		const childrens: any[] = this.props.children as any[];
		if (childrens.length < 2) {
			throw new Error("The component Pop must have at least 2 children");
		}
		return <Manager>
			<Target>{childrens[0]}</Target>
			{this.state.isOpen && <Popper placement="bottom-start" style={{ minWidth: "100%", zIndex: 10 }}>{childrens[1]}</Popper>}
		</Manager>;
	}
}
export namespace Pop {
	export let openedInstance: Pop = null;
	export function closeAll() {
		if (openedInstance !== null && openedInstance !== undefined) {
			openedInstance.close();
		}
	}
	export interface IProps {
	}
	export interface IState {
		isOpen: boolean;
	}
}
export default Pop;
