import * as React from "react";
export declare class PopperChild extends React.Component<PopperChild.IProps, PopperChild.IState> {
    state: PopperChild.IState;
    constructor(props: PopperChild.IProps);
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export declare namespace PopperChild {
    interface IProps {
    }
    interface IState {
        children?: any;
    }
}
export declare class Pop extends React.Component<Pop.IProps, Pop.IState> {
    popper: any;
    state: Pop.IState;
    constructor(props: Pop.IProps);
    open(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    close(): void;
    toggle(): void;
    render(): JSX.Element;
}
export declare namespace Pop {
    let openedInstance: Pop | null;
    function closeAll(): void;
    interface IProps {
        className?: string;
        placement?: "auto-start" | "auto" | "auto-end" | "top-start" | "top" | "top-end" | "right-start" | "right" | "right-end" | "bottom-end" | "bottom" | "bottom-start" | "left-end" | "left" | "left-start";
        clickOutsideCloses?: boolean;
    }
    interface IState {
        isOpen: boolean;
    }
}
export default Pop;
