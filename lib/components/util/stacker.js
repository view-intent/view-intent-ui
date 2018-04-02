import * as React from "react";
// import "./.scss";
export class Stacker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return React.createElement("div", null, "-Stacker");
    }
    componentDidMount() {
        Stacker.registerStacker(this);
    }
    componentWillUnmount() {
        Stacker.unregisterStacker(this);
    }
    renderRemote() {
        return this.props.children;
    }
}
(function (Stacker) {
    Stacker.stackerList = [];
    function registerStacker(stacker) {
        Stacker.stackerList.push(stacker);
    }
    Stacker.registerStacker = registerStacker;
    function unregisterStacker(stacker) {
        const index = Stacker.stackerList.findIndex((value) => {
            return stacker === value;
        });
        if (index > -1) {
            delete Stacker.stackerList[index];
        }
    }
    Stacker.unregisterStacker = unregisterStacker;
    function getStacker() {
        return Stacker.stackerList.map((value) => {
            return value.props.children;
        });
    }
    Stacker.getStacker = getStacker;
})(Stacker || (Stacker = {}));
export default Stacker;
//# sourceMappingURL=stacker.js.map