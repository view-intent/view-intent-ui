import * as React from "react";
export declare abstract class IconAbstract extends React.Component<IconAbstract.IProps, IconAbstract.IState> {
    state: IconAbstract.IState;
    constructor(props: IconAbstract.IProps);
    shouldComponentUpdate(nextProps: IconAbstract.IProps, nextState: IconAbstract.IState): boolean;
    abstract render(): React.ReactElement<IconAbstract.IProps>;
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
    function rootStyle(size: string): any;
    interface IProps {
        className?: string;
        src: typeof IconAbstract | null;
        size?: string | undefined;
    }
    interface IState {
    }
}
declare const _default: {
    Icon: typeof Icon;
    IconAbstract: typeof IconAbstract;
};
export default _default;
