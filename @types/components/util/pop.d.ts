/// <reference types="@types/react" />
import * as React from "react";
export declare class Pop extends React.Component<Pop.IProps, Pop.IState> {
    state: Pop.IState;
    constructor(props: Pop.IProps);
    open(): void;
    close(): void;
    toggle(): void;
    render(): JSX.Element;
}
export declare namespace Pop {
    let openedInstance: Pop;
    function closeAll(): void;
    interface IProps {
    }
    interface IState {
        isOpen: boolean;
    }
}
export default Pop;
