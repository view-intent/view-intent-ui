import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./.scss";
import { Field } from "./field";
import { Is } from "utility-collection";
import { DataFetch } from "view-intent";
import { MotherMask } from "mother-mask";
import { IconAbstract } from "../util/icon";
import Pop from "../util/pop";
import Textbox from "./textbox";
import Stacker from "../util/stacker";
// console.log(Stacker);

export class Selectbox extends React.Component<Selectbox.IProps, Selectbox.IState> {
	public state: Selectbox.IState = {
		focus: false,
		value: "",
	};
	public inputElement: HTMLInputElement | null = null;
	constructor(props: Selectbox.IProps) {
		super(props);
		this.openPop = this.openPop.bind(this);
		this.closePop = this.closePop.bind(this);
		// this.inputBlur = this.inputBlur.bind(this);
		// this.inputFocus = this.inputFocus.bind(this);
		// this.inputKeyUp = this.inputKeyUp.bind(this);
		// this.injectValue = this.injectValue.bind(this);
	}
	public get pop(): Pop {
		console.log(this.refs["pop"]);
		return (this.refs["pop"] as Pop);
	}
	public openPop(textbox?: Textbox) {
		console.log("open pop", this.pop);
		this.pop.open();
	}
	public closePop(textbox?: Textbox) {
		console.log("pop-", this.pop);
		if (!Is.nullOrUndefined(this.pop)) {
			this.pop.close();
		}
	}
	public render(): JSX.Element {
		const pop = (this.refs["pop"] as Pop);
		return <Field type="selectbox" className={"viui-selectbox " +
			(this.state.focus ? " -focus " : "")
			}>
			{!Is.empty(this.props.label) && <label className={"-label"}>{this.props.label}</label>}
			<Stacker ref="remote1">
				<div>item</div>
			</Stacker>
			<select multiple={true} >
				{(() => {
					const items = [];
					for (let i = 0; i < 100; i++) {
						items.push( <option key={i}>item {i}</option>);
					}
					return items;
				})()}
			</select>
			<Pop clickOutsideCloses={false} className="viui-selectbox-pop" ref="pop">
				<Textbox onFocus={this.openPop} onBlur={this.closePop}
				type="textbox" />
				<ul>
					{(() => {
						const items = [];
						for (let i = 0; i < 5; i++) {
							items.push( <li key={i}>item</li>);
						}
						return items;
					})()}
					<li>item</li>
					<li>itemitemitemitemit</li>
					<li>item</li>
				</ul>
				{/* <input
					ref="input"
					className={"-input"}
					formNoValidate={true}
					onClick={() => { pop.toggle(); }}
					type={this.props.type}
				/> */}

			</Pop>
		</Field>;
	}
}
export namespace Selectbox {
	export interface ISelectboxItems {
		[key: number]: any;
		[key: string]: any;
	}
	export interface IProps extends Textbox.IProps {
		items?: ISelectboxItems;
	}
	export interface IState {
		// value?: string | number;
		focus?: boolean;
		value?: string;
	}
}
export default Selectbox;
