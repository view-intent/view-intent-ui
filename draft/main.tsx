import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./.scss";

export class App extends React.Component<App.IProps, App.IState> {
  public state: App.IState = {
  };
  constructor(props: App.IProps) {
    super(props);
  }
  public render(): JSX.Element {
    return <div className="viui-panel">
      <div className="viui-panel-menu">-</div>
      <div className="viui-panel-main">
        <div className="viui-panel-header">
          <a href="#"></a>
          <a href="#">-</a>
        </div>
        <div className="viui-panel-content" id="">
          <div className="sy">
            <div style={{ height: "500px" }}>-</div>
            <div>component</div>
          </div>
        </div>
      </div>
    </div>;
  }
}
export namespace App {
  export interface IProps { }
  export interface IState { }
}

ReactDOM.render(<App />, document.getElementById("root"));
console.log("component");
