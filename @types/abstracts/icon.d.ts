/// <reference types="@types/react" />
import * as React from "react";
export declare abstract class IconAbstract extends React.Component<IconAbstract.IProps, IconAbstract.IState> {
    state: IconAbstract.IState;
    constructor(props: IconAbstract.IProps);
    shouldComponentUpdate(nextProps: IconAbstract.IProps, nextState: IconAbstract.IState): boolean;
    abstract render(): JSX.Element;
}
export declare namespace IconAbstract {
    interface IProps {
        className?: string;
        width?: string;
        height?: string;
    }
    interface IState {
    }
}
export declare class Icon extends React.Component<Icon.IProps, Icon.IState> {
    state: Icon.IState;
    constructor(props: Icon.IProps);
    render(): JSX.Element;
}
export declare namespace Icon {
    function rootStyle(width: string, height?: string): any;
    interface IProps {
        src: typeof IconAbstract;
        width?: string;
        height?: string;
    }
    interface IState {
    }
}
declare const _default: {
    Icon: typeof Icon;
    IconAbstract: typeof IconAbstract;
};
export default _default;
