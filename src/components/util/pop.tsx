import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./.scss";
import { Manager, Target, Popper, Arrow } from "react-popper";
import * as Portal from "react-portal";
import { Event, Is } from "utility-collection";
import { CssEntry } from "./css-entry";

export class PopperChild extends React.Component<PopperChild.IProps, PopperChild.IState> {
	public state: PopperChild.IState = {
	};
	constructor(props: PopperChild.IProps) {
		super(props);
	}
	public componentWillMount() {
		CssEntry.componentWillMount(this);
	}
	public componentDidMount() {
		CssEntry.componentDidMount(this);
	}
	public componentWillUnmount() {
		CssEntry.componentWillUnmount(this);
	}
	public render(): React.ReactNode {
		return <div className={"popper-child padding-0 margin-0 " + CssEntry.className(this)}>{this.props.children}</div>;
	}
}
export namespace PopperChild {
	export interface IProps {
	}
	export interface IState {
		children?: any;
	}
}

export class Pop extends React.Component<Pop.IProps, Pop.IState> {
	public popper: any = null;
	public state: Pop.IState = {
		isOpen: false,
	};
	constructor(props: Pop.IProps) {
		super(props);
	}
	public open(): void {
		if (Pop.openedInstance !== null) {
			Pop.openedInstance.close();
		}
		Pop.openedInstance = this;
		this.setState({ isOpen: true });
	}
	public componentDidUpdate() {
		if (this.props.clickOutsideCloses === undefined || this.props.clickOutsideCloses === true) {
			const popper = this.refs.modal as any;
			if (!Is.nullOrUndefined(popper)) {
				const node: Node = popper._popperNode;
				if (!Is.nullOrUndefined(node) && this.state.isOpen) {
					Event.onceOutside(node, "click", (e) => {
						if (this === Pop.openedInstance) {
							this.close();
						}
					});
				}
			}
		}
	}
	public componentWillUnmount() {
		if (Pop.openedInstance === this) {
			Pop.openedInstance = null;
		}
	}
	public close(): void {
		Pop.openedInstance = null;
		this.setState({ isOpen: false });
	}
	public toggle(): void {
		if (!this.state.isOpen) {
			this.open();
		}
	}
	public render(): JSX.Element {
		const childrens: any[] = this.props.children as any[];
		if (childrens.length < 2) {
			throw new Error("The component Pop must have at least 2 children");
		}
		return <Manager className={(this.props.className || "") + (this.state.isOpen ? " -is-open" : "")}>
			<Target>{childrens[0]}</Target>
			{this.state.isOpen && <Popper ref="modal" placement={this.props.placement || "bottom-start"} style={{ minWidth: "100%", zIndex: 10 }}><PopperChild>{childrens[1]}</PopperChild></Popper>}
		</Manager>;
	}
}
export namespace Pop {
	export let openedInstance: Pop | null = null;
	// export function registerOpenedPop(pop: Pop) {

	// }
	export function closeAll() {
		if (openedInstance !== null && openedInstance !== undefined) {
			openedInstance.close();
		}
	}
	export interface IProps {
		className?: string;
		placement?: "auto-start" | "auto" | "auto-end" | "top-start" | "top" | "top-end" | "right-start" | "right" | "right-end" | "bottom-end"	| "bottom" | "bottom-start" | "left-end" | "left" | "left-start";
		clickOutsideCloses?: boolean;
	}
	export interface IState {
		isOpen: boolean;
	}
}
export default Pop;
