import * as React from "react";
export declare class Stacker extends React.Component<Stacker.IProps, Stacker.IState> {
    state: Stacker.IState;
    constructor(props: Stacker.IProps);
    render(): React.ReactNode;
    componentDidMount(): void;
    componentWillUnmount(): void;
    renderRemote(): React.ReactNode;
}
export declare namespace Stacker {
    const stackerList: Stacker[];
    function registerStacker(stacker: Stacker): void;
    function unregisterStacker(stacker: Stacker): void;
    function getStacker(): React.ReactNode;
    interface IProps {
        target?: string;
    }
    interface IState {
    }
}
export default Stacker;
