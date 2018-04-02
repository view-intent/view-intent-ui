import * as React from "react";
export declare class Entry extends React.Component<Entry.IProps, Entry.IState> {
    state: Entry.IState;
    constructor(props: Entry.IProps);
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export declare namespace Entry {
    interface IProps {
        className?: string;
        style?: any;
    }
    interface IState {
    }
}
export default Entry;
