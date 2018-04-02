import * as React from "react";
export class IconAbstract extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
}
export class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return React.createElement("span", { className: "viui-icon " + (this.props.className || ""), style: Icon.rootStyle(this.props.size || "32px") }, (this.props.src !== null) ? (React.createElement(this.props.src, null)) : null);
    }
}
(function (Icon) {
    function rootStyle(size) {
        return {
            width: size,
            height: size,
        };
    }
    Icon.rootStyle = rootStyle;
})(Icon || (Icon = {}));
export default {
    Icon,
    IconAbstract,
};
//# sourceMappingURL=icon.js.map