import * as React from "react";
export declare class StackerTarget extends React.Component<StackerTarget.IProps, StackerTarget.IState> {
    state: StackerTarget.IState;
    constructor(props: StackerTarget.IProps);
    render(): JSX.Element;
}
export declare namespace StackerTarget {
    const StackerTargetList: StackerTarget[];
    function registerStacker(stackerTarget: StackerTarget): void;
    function unregisterStacker(stackerTarget: StackerTarget): void;
    interface IProps {
        id: string;
        className?: string;
    }
    interface IState {
    }
}
export default StackerTarget;
