import * as React from "react";
export declare class Group extends React.Component<Group.IProps, Group.IState> {
    state: Group.IState;
    constructor(props: Group.IProps);
    private readonly direction;
    private readonly className;
    render(): JSX.Element;
}
export declare namespace Group {
    interface IProps {
        className?: string;
        direction?: "horizontal" | "vertical";
    }
    interface IState {
    }
}
export default Group;
