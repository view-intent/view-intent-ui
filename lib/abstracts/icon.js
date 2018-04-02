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
        console.log(this.props.src);
        return React.createElement("span", { style: Icon.rootStyle(this.props.width || "32px", this.props.height || "32px") },
            React.createElement(this.props.src, null));
    }
}
(function (Icon) {
    function rootStyle(width, height = null) {
        return {
            boxSizing: "content-box",
            display: "block",
            width: width || height,
            height: height || width,
        };
    }
    Icon.rootStyle = rootStyle;
})(Icon || (Icon = {}));
export default {
    Icon,
    IconAbstract,
};
//# sourceMappingURL=icon.js.map