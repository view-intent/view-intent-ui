import * as React from "react";
import { ILoadableComponent } from "../interfaces/loadable";
export declare class Checkbox extends React.Component<Checkbox.IProps, Checkbox.IState> implements ILoadableComponent {
    state: Checkbox.IState;
    buttonElement: HTMLInputElement | null;
    constructor(props: Checkbox.IProps);
    loading(): void;
    loaded(): void;
    value: string | number | boolean | null | undefined;
    readonly selection: string | number | undefined;
    readonly selections: Array<string | number>;
    onChange(): Promise<void>;
    componentWillReceiveProps(props: Checkbox.IProps): void;
    isTrue(): boolean;
    isLabeled(): boolean;
    getTrueValue(): boolean | string | number;
    getFalseValue(): boolean | string | number;
    componentDidMount(): void;
    componentWillUnmount(): void;
    setSelection(): void;
    toggle(): void;
    getType(): string;
    onFocus(): Promise<void>;
    onBlur(): Promise<void>;
    render(): React.ReactNode;
}
export declare namespace Checkbox {
    interface IProps {
        className?: string;
        label?: string | null | undefined;
        type?: "checkbox" | "switch" | "radio";
        value?: string | number | boolean | null | undefined;
        selectionKey?: string | number;
        selections?: Array<string | number>;
        selection?: string | number;
        defaultValue?: string | number | boolean;
        trueValue?: string | number | boolean;
        falseValue?: string | number | boolean;
        onTrue?: (value: string | number | boolean) => void;
        onFalse?: (value: string | number | boolean) => void;
        position?: "left" | "right";
        srcLoader?: string;
        onClick?: (checkbox?: Checkbox) => void;
        onChange?: (checkbox?: Checkbox) => void;
    }
    interface IState {
        focus?: boolean;
        loading: boolean;
        value?: string | number | boolean | null | undefined;
        selection?: string | number;
        mounted: boolean;
        list?: Array<string | number>;
    }
}
export default Checkbox;
