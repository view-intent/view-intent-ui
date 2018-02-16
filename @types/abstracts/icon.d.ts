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
export default IconAbstract;
