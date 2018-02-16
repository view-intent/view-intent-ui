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
export default IconAbstract;
//# sourceMappingURL=icon.js.map