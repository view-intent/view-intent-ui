import * as React from "react";
import { ILoadableComponent } from "../interfaces/loadable";
export declare class Button extends React.Component<Button.IProps, Button.IState> implements ILoadableComponent {
    state: Button.IState;
    constructor(props: Button.IProps);
    readonly value: string | number | null | undefined;
    isLabeled(): boolean;
    isDisabled(): boolean;
    loading(): void;
    loaded(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export declare namespace Button {
    interface IProps {
        className?: string;
        value?: string | number | null | undefined;
        label?: string;
        disabled?: boolean;
        srcLoader?: string;
        onFocus?: (button: Button) => void;
        onBlur?: (textbox: Button) => void;
        onClick?: (Textbox?: Button) => void;
    }
    interface IState {
        focus: boolean;
        loading: boolean;
    }
}
export default Button;
