import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./group.scss";

export class Group extends React.Component<Group.IProps, Group.IState> {
  public state: Group.IState = {
  };
  constructor(props: Group.IProps) {
    super(props);
  }
  private get direction(): string {
    return " -" + (this.props.direction || "horizontal");
  }
  private get className(): string {
    return ` ${this.props.className} ` || "";
  }
  public render(): JSX.Element {
    return <div className={"viui-group " + this.direction + this.className}>{this.props.children}</div>;
  }
}
export namespace Group {
  export interface IProps {
    className?: string;
    direction?: "horizontal" | "vertical";
  }
  export interface IState {
  }
}
export default Group;
