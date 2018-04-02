import * as React from "react";
import Pop from "../util/pop";
import Textbox from "./textbox";
export declare class Selectbox extends React.Component<Selectbox.IProps, Selectbox.IState> {
    state: Selectbox.IState;
    inputElement: HTMLInputElement | null;
    constructor(props: Selectbox.IProps);
    readonly pop: Pop;
    openPop(textbox?: Textbox): void;
    closePop(textbox?: Textbox): void;
    render(): JSX.Element;
}
export declare namespace Selectbox {
    interface ISelectboxItems {
        [key: number]: any;
        [key: string]: any;
    }
    interface IProps extends Textbox.IProps {
        items?: ISelectboxItems;
    }
    interface IState {
        focus?: boolean;
        value?: string;
    }
}
export default Selectbox;
