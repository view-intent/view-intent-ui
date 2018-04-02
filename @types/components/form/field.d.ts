import * as React from "react";
export declare class Field extends React.Component<Field.IProps, Field.IState> {
    state: Field.IState;
    constructor(props: Field.IProps);
    render(): JSX.Element;
}
export declare namespace Field {
    interface IProps {
        className?: string;
        type: "input" | "checkbox" | "selectbox";
        leftChildren?: React.ReactNode;
        rightChildren?: React.ReactNode;
        bottomChildren?: React.ReactNode;
        topChildren?: React.ReactNode;
    }
    interface IState {
    }
}
export default Field;
